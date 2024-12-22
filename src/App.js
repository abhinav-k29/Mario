import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar  from './Components/Layout/Navbar';
import Dashboard from './Components/Dashboard/Dashboard'
import ProjectDetails from './Components/Projects/ProjectDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' Component={Dashboard} />
          <Route path='/project/:id' Component={ProjectDetails} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
