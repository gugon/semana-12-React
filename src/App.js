import logo from './logo.svg';
import './App.css';
import Routes from './routes';
import { Route } from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" component={Home} />
      </Routes>
    </div>
  );
}

export default App;
