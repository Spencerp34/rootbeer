import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/home/home';
import Auth from './pages/auth/auth';
import Header from './components/header/header';
import AWGif from "./assets/A&Wgif.gif"

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className='margined'>
        <img src={AWGif} width="200px" alt="Left Ad" />
          <div className='content'>
            <Switch>
                <Route path='/login' component={Auth} />
                <Route path='/'component={Home} />
            </Switch>
          </div>
          <img src={AWGif} width="200px" alt="Right Ad" />
        </div>
          
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
