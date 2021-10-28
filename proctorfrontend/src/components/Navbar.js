import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Maketestform from './Maketestform';
import ShowTestInfo from './ShowTestInfo';
import ResultForm from './resultform';
import ShowResults from './ShowResults';
import ExamMain from './ExamMain';
import ExamForm from './ExamForm';  
import Home from './Home';
import Info from './Info';
function Navbar() {
  return (
    
    <div className="Navbar">
    <Router>
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo"><img src = "https://images.vexels.com/media/users/3/137692/isolated/preview/e425fa1fe274a2267405829771f13a13-simple-logo-geometric-polygonal.png" width="50px" /></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to ="/home">Home</Link></li>
            <li><Link to ="/maketestform">Make Test</Link></li>
            <li><Link to ="/resultform">Results</Link></li>
            <li><Link to ="/info">Help</Link></li>
            <li><Link to =  "/studentexamform">Take a test</Link></li>
          </ul>
        </div>
      </nav>
      <Switch>
          <Route path="/home">
            <Home />
          </Route>
          
          <Route path="/maketestform">
            <Maketestform />
          </Route>
          
          <Route path="/ShowTestInfo" render={(props) => <ShowTestInfo {...props}/>}/>
          
          <Route path="/showresults" render={(props) =><ShowResults {...props}/>}/>
          
          <Route path="/exammain" render = {(props) => <ExamMain {...props}/>} />
          <Route path="/studentexamform"> <ExamForm /> </Route>
          
          <Route path="/resultform">
            <ResultForm />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default Navbar;
