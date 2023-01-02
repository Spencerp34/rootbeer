import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/home/home';
import Auth from './pages/auth/auth';
import Header from './components/header/header';
import RightBanner from './components/banners/right-banner';
import LeftBanner from './components/banners/left-banner';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className='margined'>
        <LeftBanner />
          <div className='content'>
            <Switch>
                <Route path='/login' component={Auth} />
                <Route path='/'component={Home} />
            </Switch>
          </div>
          <RightBanner />
        </div>
          
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
