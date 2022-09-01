import logo from './logo.svg';
import './App.css';
import BorderOutlet from './components/BorderOutlet';
import {Routes,Route, Navigate, Link} from 'react-router-dom'
import Organization from './components/Organization'
import Customer from './components/Customer'
import Product from './components/Product'
import Update from './components/Update'
import People from './components/People';
import Team from './components/Team';
import Project from './components/Project'
import  Redirect  from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BorderOutlet>
      <Routes>
      <Route path="/" element={<Navigate replace to="/organization" />} />
        <Route path="/organization" element={<Organization/>} >
          <Route path="people" element={<People/>}/>
          <Route path="team" element={<Team/>}/>
          <Route path="project" element={<Project/>}/>
        </Route>
        <Route path="/customer" element={<Customer/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/update" element={<Update/>}/>
      </Routes>
      </BorderOutlet>
    </div>
  );
}

export default App;
