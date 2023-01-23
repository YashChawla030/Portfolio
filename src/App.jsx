import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/home';
import Navigation from './components/navigation';
import Footer from './components/footer';
import Project from './pages/projects';
import Contact from './pages/contact';

function App() {
  return (
    <Router >
        <Navigation />
        <Routes>
              <Route exact path='/' element={< Home />}></Route>
              <Route exact path='/projects' element={< Project />}></Route>
              <Route exact path='/contact' element={< Contact />}></Route>
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
