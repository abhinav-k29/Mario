import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar  from './Components/Layout/Navbar';
import Dashboard from './Components/Dashboard/Dashboard'
import ProjectDetails from './Components/Projects/ProjectDetails';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
import CreateProject from './Components/Projects/CreateProject';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' Component={Dashboard} />
          <Route path='/project/:id' Component={ProjectDetails} />
          <Route path ='/signin' Component={SignIn}/>
          <Route path='/signup' Component={SignUp}/>
          <Route path='/create' Component={CreateProject}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
