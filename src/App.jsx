import './App.css';
import { Routes, Route } from 'react-router-dom';

// Pages
import Homepage from './pages/Homepage';
import People from './pages/People';
import Starships from './pages/Starships';
import Planets from './pages/Planets';

//Components
import NavBar from './components/Nav/NavBar';



function App() {
  // Set up our routes and route components
  // create 3 page components to use with the routes
  // // people, starships and planets
  // Create a nav bar to navigate between pages

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/people' element={<People />} />
        <Route path='/planets' element={<Planets />} />
        <Route path='/starships' element={<Starships />} />
      </Routes>
    </>
  )
}

export default App
