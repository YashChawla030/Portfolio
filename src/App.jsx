import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Navigation from './components/navigation';
import Footer from './components/footer';
import Project from './pages/projects';

function App() {
  return (
    <Router >
        <Navigation />
        <Routes>
              <Route exact path='/' element={< Home />}></Route>
              <Route exact path='/projects' element={< Project />}></Route>
              <Route exact path='/about' element={< About />}></Route>
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
