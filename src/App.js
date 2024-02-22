import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeNavBar from './components/HomeNavBar';
import WelcomeScreen from './components/WelcomeScreen';
import IntroductionScreen from './components/IntroductionScreen';
import SmoothScroll from 'smooth-scroll';
import ExperienceScreen from './components/ExperienceScreen';
import EducationScreen from './components/EducationScreen';

function App() {

  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800, // Adjust the scrolling speed as needed
    speedAsDuration: true // Use the speed value as the duration of the scroll animation
  });

  return (
    <div className='outer-container'>
    <HomeNavBar></HomeNavBar>
    <WelcomeScreen></WelcomeScreen>
    <IntroductionScreen></IntroductionScreen>
    <ExperienceScreen></ExperienceScreen>
    <EducationScreen></EducationScreen>

    </div>
    

  );
}

export default App;
