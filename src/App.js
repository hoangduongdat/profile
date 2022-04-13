
import './App.scss';
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import NavBar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Services from './components/myservices/Services';
import Projects from './components/myprojects/Projects';
import AboutMe from './components/about/AboutMe';
import Contact from './components/contact/Contact';
import { useEffect } from 'react';
import Footer from './components/footer/Footer';
import {useContext} from 'react'
import {ThemeContext} from './context/ThemeContext'

function App() {
  const themeContext=useContext(ThemeContext);
 

  useEffect(() => {
      let el_to_show = document.querySelectorAll('.show-on-scroll')
       const isElInview = (el) => {
        let rect = el.getBoundingClientRect()
        let distance = 150
      
        return rect.top <= (window.innerHeight - distance || document.documentElement.clientHeight - distance)
      }
      const loop = () =>{
        el_to_show.forEach(el => {
            if(isElInview(el)) {
              el.classList.add('show')
            }
        })
      }
      if(window.scrollY===0){
        loop()
      } 
      window.addEventListener('scroll',loop)
      return ()=>window.removeEventListener('scroll',loop)
  })

  return (
    <div className={`App ${themeContext.theme}`} >
      <NavBar/>
      <Intro/>
      <AboutMe/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
