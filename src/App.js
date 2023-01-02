import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/home/home';
import Auth from './pages/auth/auth';
import Header from './components/header/header';
import AWGif from "./assets/A&Wgif.gif"
import Banner from './components/banners/banner';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className='margined'>
        <Banner />
          <div className='content'>
            <Switch>
                <Route path='/login' component={Auth} />
                <Route path='/'component={Home} />
            </Switch>
          </div>
          <Banner />
        </div>
          
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
