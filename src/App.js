import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import StarshipList from './pages/StarshipList/StarshipList';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';

function App() {
  const [navItems, setNavItems] = useState([])
  return (
    <>
      <NavBar navItems={navItems} />
      <Routes>
        <Route path='/' element={<StarshipList />}/>
        <Route path='/starship' element={<StarshipDetails />}/>
      </Routes>
    </>
  );
}

export default App;
