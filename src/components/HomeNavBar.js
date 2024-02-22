import './../App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './../mediaFiles/logo.png';
import resumepdf from './../mediaFiles/Resume_Seo_James.pdf';
import './../CssFiles/NavBar.css';
import React, { useState, useEffect } from 'react';
import titlelogo from './../mediaFiles/title-logo.png';




export default function HomeNavBar(props){
    const [isScrolled, setIsScrolled] = useState(false);

    function changeFavicon() {
        const favicon = document.querySelector("link[rel='icon']");
        if (favicon !== null) {
            favicon.href = titlelogo;
        } else {
            const newFavicon = document.createElement('link');
            newFavicon.rel = 'icon';
            newFavicon.href = titlelogo;
            document.head.appendChild(newFavicon);
        }
    }
    changeFavicon();


    useEffect(()=>{
        const handleScroll = ()=>{
            
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > 80) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }

        
        window.addEventListener('scroll', handleScroll);

       

    },[]);

    
    const navbarHeading =  {
        GITHUB:'https://github.com/Seojkc',
        Resume:'#Resume',
        Contact:'#Contact'
    }
    return(
            <div className={isScrolled ? 'scrolled-container-div containerNavBar' : 'containerNavBar'}>
            <img src={logo} width="100" className='imageLogo'/>
            <ul className="nav">
                <li>
                    <a href='https://github.com/Seojkc' target='_blank' className='glowLink'>GITHUB</a>
                </li>
                <li >
                    <a href={resumepdf} download="RESUME_SEO_JAMES.pdf" className='glowLink'>RESUME</a>
                </li>
                <li >
                    <a href='#Contact' target='_blank' className='glowLink'>CONTACT</a>
                </li>
                
            </ul>

            </div>
      

    );

}