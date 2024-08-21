import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DBOARD from './DashboardsConstructors/DBOARD.jsx';
import Login from './Registration/Login.jsx';
import Signup from './Registration/Signup.jsx';
import Templates from './DashboardsConstructors/Reports.jsx';
import Categories from './DashboardsConstructors/Categories.jsx';
import Configuration from './DashboardsConstructors/Configuration.jsx';
import Notes from './Notes part/Notes.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import { useEffect, useState } from 'react';

function App() {
	const [data1, setData1] = useState([]);
	const [data2, setData2] = useState([]);
	const [errors1, setErrors1] = useState(0);
	const [errors2, setErrors2] = useState(0);

	useEffect(() => {
		const controller = new AbortController();
		const { signal } = controller;
		const token = localStorage.getItem('token');

		const fetchData = async (id) => {
			try {
				const response = await fetch(`http://localhost:8081/stream-data?id=${id}`, {
					headers: {
						Authorization: token,
					},
					signal,
				});

				if (response.status !== 200) {
					return;
				}

				const reader = response.body.getReader();
				const decoder = new TextDecoder('utf-8');
				while (true) {
					const { done, value } = await reader.read();
					if (done) break;

					const chunk = decoder.decode(value).split('\n').filter(Boolean);
					const newItems = chunk.map((item) => {
						const newItem = JSON.parse(item);
						newItem.formatedDate = new Date(newItem.date).toLocaleString();
						if (+newItem.failure > 0) {
							const setErrorFunc = id === 1 ? setErrors1 : setErrors2;
							setErrorFunc((prevValue) => {
								prevValue++;
								return prevValue;
							});
						}
						return newItem;
					});

					var setDataFunc = id === 1 ? setData1 : setData2;
					setDataFunc((prevData) => {
						const d = [...prevData, ...newItems];
						return d.slice(-10);
					});
				}
			} catch (err) {
				if (err.name === 'AbortError') {
					console.log('Fetch aborted');
				} else {
					console.error('Fetch error:', err);
				}
			}
		};

		fetchData(1);
		fetchData(2);
		return () => {
			controller.abort(); // Abort the fetch request when the component unmounts
		};
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Login></Login>}></Route>
				<Route
					path='/Signup'
					element={<Signup></Signup>}></Route>

				<Route
					path='/DBOARD'
					element={
						<PrivateRoute>
							{
								<DBOARD
									errors1={errors1}
									errors2={errors2}></DBOARD>
							}
						</PrivateRoute>
					}></Route>
				<Route
					path='/Templates'
					element={
						<PrivateRoute>
							{
								<Templates
									data1={data1}
									data2={data2}></Templates>
							}
						</PrivateRoute>
					}></Route>
				<Route
					path='/Categories'
					element={<PrivateRoute>{<Categories></Categories>}</PrivateRoute>}></Route>
				<Route
					path='/Configuration'
					element={<PrivateRoute>{<Configuration></Configuration>}</PrivateRoute>}></Route>
				<Route
					path='/Notes'
					element={<PrivateRoute>{<Notes></Notes>}</PrivateRoute>}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
