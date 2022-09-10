import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './HomePage';
import SkillSet from './SkillSet';
import MyProjects from './MyProjects';
import ContactInfo from './ContactInfo';


const App = () => {
  return(
    <div>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/skills" element={<SkillSet/>}/>
          <Route path="/projects" element={<MyProjects/>}/>
          <Route path="/contact" element={<ContactInfo/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

