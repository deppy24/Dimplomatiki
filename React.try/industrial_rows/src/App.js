
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import DBOARD from './DashboardsConstructors/DBOARD.jsx';
import Demo from './Registration/Demo.jsx';
import Demo2 from './Registration/Signup.jsx';
import Templates from './DashboardsConstructors/Reports.jsx';
import Tabletry from './Tabletry.jsx';
import Categories from './DashboardsConstructors/Categories.jsx';
import Configuration from './DashboardsConstructors/Configuration.jsx';
import Notes from "./Notes part/Notes.jsx"
import Map from './Map';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Demo></Demo>} ></Route>
        <Route path='/Map' element={<Map></Map>} ></Route>
        <Route path='/DBOARD' element={<DBOARD></DBOARD>}></Route>
        <Route path='/Templates' element={<Templates></Templates>}></Route>
        <Route path='/Signup' element={<Demo2></Demo2>}></Route>
        <Route path='/Json' element={<Tabletry></Tabletry>}></Route>
        <Route path='/Categories' element={<Categories></Categories>}></Route>
        <Route path='/Configuration' element={<Configuration></Configuration>}></Route>
        <Route path='/Notes' element={<Notes></Notes>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
