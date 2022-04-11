
import './App.scss';
import NavBar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Services from './components/myservices/Services';
import Projects from './components/myprojects/Projects';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Services/>
      <Projects/>
    </div>
  );
}

export default App;
