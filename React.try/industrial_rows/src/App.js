
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DBOARD from './DashboardsConstructors/DBOARD.jsx';
import Demo from './Registration/Demo.jsx';
import Demo2 from './Registration/Signup.jsx';
import Templates from './DashboardsConstructors/Reports.jsx';
import Tabletry from './Tabletry.jsx';
import Categories from './DashboardsConstructors/Categories.jsx';
import Configuration from './DashboardsConstructors/Configuration.jsx';
import Notes from './Notes part/Notes.jsx';
import PrivateRoute from './PrivateRoute.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Demo></Demo>} ></Route>
        <Route path='/Signup' element={<Demo2></Demo2>}></Route>
        
        <Route  path='/DBOARD' element={<PrivateRoute>{<DBOARD></DBOARD>}</PrivateRoute>}></Route >
        <Route  path='/Templates' element={<PrivateRoute>{<Templates></Templates>}</PrivateRoute>}></Route >
        <Route  path='/Json' element={<PrivateRoute>{<Tabletry></Tabletry>}</PrivateRoute>}></Route >
        <Route  path='/Categories' element={<PrivateRoute>{<Categories></Categories>}</PrivateRoute>}></Route >
        <Route  path='/Configuration' element={<PrivateRoute>{<Configuration></Configuration>}</PrivateRoute>}></Route >
        <Route  path='/Notes' element={<PrivateRoute>{<Notes></Notes>}</PrivateRoute>}></Route >
      </Routes>
    </BrowserRouter>
  )
}

export default App;
