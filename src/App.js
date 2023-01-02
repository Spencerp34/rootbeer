import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/home/home';
import Auth from './pages/auth/auth';
import Header from './components/header/header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className='margined'>
          <div className='content'>
            <Switch>
                <Route path='/login' component={Auth} />
                <Route path='/'component={Home} />
            </Switch>
          </div>
        </div>
        {/* <Footer /> */}
          
      </div>
    </Router>
  );
}

export default App;
