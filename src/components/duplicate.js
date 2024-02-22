import './../App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../CssFiles/WelcomeScreen.css';
import  backgroundSky from './../mediaFiles/backgroundVideo.mp4';
import  gitLogo from './../mediaFiles/git.jpg';
import  linkedinLogo from './../mediaFiles/linkedin.png';
import fblogo from './../mediaFiles/facebook-logo.png';
import instalogo from './../mediaFiles/insta-logo.png';
import skillsSmoke from './../mediaFiles/skillsSmoke.png';
import myImage from './../mediaFiles/myImg.jpg';
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import compass from './../mediaFiles/compass.png';
import introStars from './../mediaFiles/introStars.png'
import glowStar from './../mediaFiles/glowStar.gif'

import python from './../mediaFiles/skill/python.png';
import java from './../mediaFiles/skill/Java.png';
import javascript from './../mediaFiles/skill/javascript.png';
import html from './../mediaFiles/skill/html.png';
import css from './../mediaFiles/skill/css.png';
import jquery from './../mediaFiles/skill/Jquery.png';
import xml from './../mediaFiles/skill/xml.png';
import cSharp from './../mediaFiles/skill/csharp.png';
import php from './../mediaFiles/skill/php.png';
import dotNet from './../mediaFiles/skill/aspnet.png';
import bootstrap from './../mediaFiles/skill/bootstrap.png';
import vue from './../mediaFiles/skill/vuejs.png';
import react from './../mediaFiles/skill/react.png';
import wordpress from './../mediaFiles/skill/wordpress.png';
import sql from './../mediaFiles/skill/sql.png';
import mysql from './../mediaFiles/skill/mysql.png';
import tsql from './../mediaFiles/skill/tsql.png';
import jira from './../mediaFiles/skill/Jira.png';
import git from './../mediaFiles/skill/git.png';
import bitbucket from './../mediaFiles/skill/bitbucket.png';
import docker from './../mediaFiles/skill/docker.png';

export default function WelcomeScreen()
{

    

    window.addEventListener("load", function() {

        

        console.log("poda")
        // Get the video element
        var video = document.getElementById("welcome-video");
      

        // Function to get the current height of the video
        function getVideoHeight() {
          if (video) {
            var videoHeight = video.clientHeight;
            var emptyDiv = document.getElementById("video-empty-space")
            emptyDiv.style.height = (videoHeight+'px')
          }
        }
      
        // Call the function when the window is resized (for responsiveness)
        window.addEventListener("resize", function() {
          getVideoHeight();
        });
      
        // Call the function initially to get the height
        getVideoHeight();

        function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (
              rect.top >= 0 &&
              rect.left >= 0 &&
              rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
              rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
          }
          
          // Function to handle scroll event
          function handleScroll() {
            var element = document.getElementById('introduction-heading')
            var skills = document.getElementById('skills-heading');
            if (isElementInViewport(element)) {
              element.classList.add('visible');
            }
            else{
                element.classList.remove('visible');
            }
            if (isElementInViewport(skills)) {
                skills.classList.add('visible-skills')
              }
              else{
                  skills.classList.remove('visible-skills')
              }
          }

          window.addEventListener('scroll', handleScroll);

        

            const glowStar = document.getElementById("glowStar");

            function moveElement() {
            // Generate a random left value between 0 and 100
            
            const randomLeft = Math.floor(Math.random() * 201);
            
            // Get the current left position of the element
            const currentLeft = parseInt(getComputedStyle(glowStar).left);
            
            // Calculate the step size for animation

            // Animate the element to the random position
            animateToRandomPosition(currentLeft, randomLeft);
        }

        function animateToRandomPosition(currentLeft, targetLeft) {
            const duration = 1000; // Animation duration in milliseconds
            const fps = 60; // Frames per second
            const frameStep = (targetLeft - currentLeft) / (duration / 1000 * fps); // Calculate the step for smooth animation
            
            function frame() {
              // Update the element's position
              glowStar.style.left = currentLeft + "px";
              
              // Move to the next frame
              currentLeft += frameStep;
              
              // Check if the animation should continue
              if ((frameStep > 0 && currentLeft < targetLeft) || (frameStep < 0 && currentLeft > targetLeft)) {
                requestAnimationFrame(frame); // Continue animation
              } else {
                // If the element reaches the random position, start the next animation loop
                moveElement();
              }
            }
            
            // Start the animation
            requestAnimationFrame(frame);
          }

          function setposYglowStar()
          {
            const glowStarElement = document.getElementById("glowStar");
            glowStarElement.style.top=(window.scrollY+200)+'px';


            //intro section
            const introductionContainer = document.querySelector('.introduction-container');
            const elementRect = introductionContainer.getBoundingClientRect();

            const bottomBorderY = elementRect.top + window.scrollY + elementRect.height;

            if((bottomBorderY-(window.scrollY+260)<0))
            {
                glowStarElement.style.opacity=0;
            }
            else{
                moveElement();
                glowStarElement.style.opacity=1;
            }


          }

          function setposYglowStarSkills()
          {
            const glowStarElement = document.getElementById("glowStarSkills");
            glowStarElement.style.top=(window.scrollY+200)+'px';


            //intro section
            const introductionContainer = document.querySelector('.introduction-container');
            const elementRect = introductionContainer.getBoundingClientRect();

            const bottomBorderY = elementRect.top + window.scrollY + elementRect.height;

            if((bottomBorderY-(window.scrollY+100)<0))
            {
                glowStarElement.style.opacity=1;
            }
            else{
                glowStarElement.style.opacity=0;

            }

            const compass = document.getElementById("compass")
            const compasscenterY = compass.getBoundingClientRect().top+(compass.getBoundingClientRect().height/2)
            

            console.log(((glowStarElement.getBoundingClientRect().bottom)-compass.getBoundingClientRect().top),'  ? ',compass.getBoundingClientRect().top,' : ',glowStarElement.getBoundingClientRect().bottom+200)
            
            if(((glowStarElement.getBoundingClientRect().bottom+100)-compass.getBoundingClientRect().top)>200){
                glowStarElement.style.left=(compass.getBoundingClientRect().top-(glowStarElement.getBoundingClientRect().bottom)-20) +'px'
            }
            else{
               
                glowStarElement.style.left=((compass.getBoundingClientRect().top-(glowStarElement.getBoundingClientRect().bottom))-20)+'px'

            }
            const skillsHeadingList = document.querySelector('.skills-heading-list-ul')
            if(compass.getBoundingClientRect().top<600){
                handleHeadingLanguages()
                compass.classList.add('popUpCompass')
                compass.classList.remove('popDownCompass')
                skillsHeadingList.classList.add('popUpSkillsHeading');
                skillsHeadingList.classList.remove('popDownSkillsHeading');
            }else{
                compass.classList.add('popDownCompass')
                compass.classList.remove('popUpCompass')
                skillsHeadingList.classList.add('popDownSkillsHeading');
                skillsHeadingList.classList.remove('popUpSkillsHeading');
            }
            
            
            


          }



          window.addEventListener('scroll',setposYglowStar)
          window.addEventListener('scroll',setposYglowStarSkills)

          

        



            
                    
      });
      function removeHeadingActive(){
        try {
            const skillsHeadingList = document.querySelectorAll('.skills-heading-lists');
            skillsHeadingList.forEach((skillsHeading) => {
              skillsHeading.classList.remove('skills-heading-active');
            });
        } catch (error) {
            console.error(' ');
        }
      }

    const handleHeadingLanguages=()=>{
        removeHeadingActive()
        document.getElementById("compass").style.transform='rotate(36deg)';
        document.querySelector('.skills-heading-Languages').classList.add('skills-heading-active')

        
    }

    const handleHeadingFrameworks=()=>{
        removeHeadingActive()
        document.getElementById("compass").style.transform='rotate(72deg)';
        document.querySelector('.skills-heading-Frameworks').classList.add('skills-heading-active')

    }
    const handleHeadingDatabases=()=>{
        removeHeadingActive()
        document.getElementById("compass").style.transform='rotate(108deg)';
        document.querySelector('.skills-heading-Databases').classList.add('skills-heading-active')

    }
    const handleHeadingVersion=()=>{
        removeHeadingActive()
        document.getElementById("compass").style.transform='rotate(144deg)';
        document.querySelector('.skills-heading-Version').classList.add('skills-heading-active')

    }
    const handleMouseEnter = (className) => {
        document.querySelector(`.${className}`).style.transform = 'rotateY(180deg)';
    }
    
    const handleMouseLeave = (className) => {
        document.querySelector(`.${className}`).style.transform = 'rotateY(0deg)';
    }
    
    return(
        <div className="backgroundVideo">
            
            <video autoPlay muted id='welcome-video'>
                <source src={backgroundSky} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="gitLogoDiv">
                <a href='https://github.com/Seojkc/'  target='_blank'>
                <img src={gitLogo} alt="Your Image" className="gitLogoImg" />
                </a>
            </div>

            <div className="linkedinLogoDiv">
                <a href='https://www.linkedin.com/in/seo-james-2084461bb/' target='_blank'>
                    <img src={linkedinLogo} alt="Your linkedin" className="linkedinLogoImg" />
                </a>
            </div>
            
            <div id="video-empty-space"></div>

            <div className="introduction-container">
            
                <div className=" animationpart-introduction">
                    <img src={introStars} className='introStars'/>

                    <img src={glowStar} className='glowStar' id='glowStar'/>
                </div>
                <div className="">
                    <h1 id='introduction-heading'>Introduction</h1>
                    <h3 className='introduction-description'>As a detail-oriented Web Developer with over 4 years of experience, 
                        I specialize in crafting optimized websites that captivate audiences. 
                        With a strong foundation in consulting, architecture development, 
                        and content creation, I ensure seamless user experiences. 
                        My expertise lies in planning, designing, and testing website code to guarantee peak performance. 
                        From streamlining approval processes to enhancing efficiency, 
                        I am dedicated to delivering impactful solutions. 
                        Let's collaborate to bring your digital vision to life.</h3>
                    <div className='social-media-links'>
                        <a href='https://www.linkedin.com/in/seo-james-2084461bb/' target='_blank'><img src={linkedinLogo} alt="Your linkedin" className="linkedinLogoImg" /></a>                    
                        <a href='https://github.com/Seojkc/'  target='_blank'><img src={gitLogo} alt="Your Image" className="gitLogoImg invert-100" /></a>
                        <a href="https://www.instagram.com/seo_jmz_/" target='_blank'><img src={instalogo} /></a>
                        <a href="https://www.facebook.com/seojames.seojames/" target='_blank'><img src={fblogo} /></a>
                        
                    </div>
                
                </div>
                <div className="image-col">
                    <img src={myImage} className='my-img' />
                    
                </div>
            
            </div>


            <div className='skills-section'>

                <div className='animated-skills'>
                    <img className='compass' src={compass} id="compass"/>
                    <img src={glowStar} className='glowStarSkills' id='glowStarSkills'/>
                    <div  className='skills-heading-list-ul'>
                        <div className='skills-heading-lists skills-heading-Languages'  onClick={ handleHeadingLanguages} ><a>Languages</a></div>
                        <div className='skills-heading-lists skills-heading-Frameworks' onClick={handleHeadingFrameworks}><a>Frameworks<br></br>& CMS</a></div>
                        <div className='skills-heading-lists skills-heading-Databases' onClick={handleHeadingDatabases}><a>Databases <br></br>& Query</a></div>
                        <div className='skills-heading-lists skills-heading-Version' onClick={handleHeadingVersion}><a>Version Control<br></br> & DevOps</a></div>

                    </div>
                    

                </div>
                <div>
                    <h1 id="skills-heading">SKILLS</h1>

                    <div className='skills-container flip-card-skill-item'>
                        <div className='python language  skill-item flip-card-inner-skill-item '  onMouseEnter={() => handleMouseEnter('python')} onMouseLeave={() => handleMouseLeave('python')}>
                            <div className='flip-card-front-skill-item'>
                                <div>
                                <img src={python}/>
                                <h2>Python</h2>
                                <p>show more</p>
                                </div>
                            </div>
                            <div  className='flip-card-back-skill-item'>
                                <a href='https://github.com/Seojkc/Python_Projects'  target='_blank'><img src={gitLogo} alt="Your Image" className="gitLogoImgSKILL" /></a>
                                <div >
                                    <h3>Flask</h3>
                                    <h3>Mysql-connector</h3>
                                    <h3>openAI</h3>
                                    <h3>Regex</h3>
                                    <h3>Django</h3>
                                    <h3>Pandas</h3>
                                    <h3>Numpy</h3>
                                </div>
                            </div>
                        </div>

                        <div className='java  language skill-item flip-card-inner-skill-item ' onMouseEnter={() => handleMouseEnter('java')} onMouseLeave={() => handleMouseLeave('java')}>
                            <div className='flip-card-front-skill-item'>
                                <div>
                                <img src={java}/>
                                <h2>Java</h2>
                                <p>show more</p>
                                </div>
                            </div>
                            <div  className='flip-card-back-skill-item'>
                                <a href='https://github.com/Seojkc/Java-JavaFX-Projects'  target='_blank'><img src={gitLogo} alt="Your Image" className="gitLogoImgSKILL" /></a>
                                <div >
                                    <h3>JavaFX</h3>
                                    <h3>OOPS</h3>
                                    <h3>Data Structure</h3>
                                    
                                </div>
                            </div>
                        </div>

                        <div className='javascript language  skill-item flip-card-inner-skill-item ' onMouseEnter={() => handleMouseEnter('javascript')} onMouseLeave={() => handleMouseLeave('javascript')}>
                            <div className='flip-card-front-skill-item'>
                                <div>
                                <img src={javascript}/>
                                <h2>JavaScript</h2>
                                <p>show more</p>
                                </div>
                            </div>
                            <div  className='flip-card-back-skill-item'>
                                <a href='https://github.com/Seojkc/JavaScript_Projects'  target='_blank'><img src={gitLogo} alt="Your Image" className="gitLogoImgSKILL" /></a>
                                <div >                                    
                                    <h3>TypeScript</h3>

                                </div>
                            </div>
                        </div>

                        <div className='html language  skill-item flip-card-inner-skill-item ' onMouseEnter={() => handleMouseEnter('html')} onMouseLeave={() => handleMouseLeave('html')}>
                            <div className='flip-card-front-skill-item'>
                                <div>
                                <img src={html}/>
                                <h2>HTML</h2>
                                <p>show more</p>
                                </div>
                            </div>
                            <div  className='flip-card-back-skill-item'>
                                <div >                                    
                                    <h3>DHTML </h3>
                                    <h3>HTML 5 </h3>

                                </div>
                            </div>
                        </div>
                        <div className='css language  skill-item flip-card-inner-skill-item '  onMouseEnter={() => handleMouseEnter('css')} onMouseLeave={() => handleMouseLeave('css')}>
                            <div className='flip-card-front-skill-item'>
                                <div>
                                <img src={css}/>
                                <h2>CSS</h2>
                                <p>show more</p>
                                </div>
                            </div>
                            <div  className='flip-card-back-skill-item'>
                                <div >                                    
                                    <h3>SCSS </h3>
                                </div>
                            </div>
                        </div>
                        <div className='jquery language  skill-item flip-card-inner-skill-item '>
                            <div className='flip-card-front-skill-item'>
                                <div>
                                <img src={jquery}/>
                                <h2>Jquery</h2>
                                </div>
                            </div>
                            <div  className='flip-card-back-skill-item'>
                                
                            </div>
                        </div>
                        <div className='xml language  skill-item flip-card-inner-skill-item '>
                            <div className='flip-card-front-skill-item'>
                                <div>
                                <img src={xml}/>
                                <h2>XML</h2>
                                </div>
                            </div>
                            <div  className='flip-card-back-skill-item'>
                                
                            </div>
                        </div>
                        <div className='cSharp language  skill-item flip-card-inner-skill-item ' onMouseEnter={() => handleMouseEnter('cSharp')} onMouseLeave={() => handleMouseLeave('cSharp')}>
                            <div className='flip-card-front-skill-item'>
                                <div>
                                <img src={cSharp}/>
                                <h2>C#</h2>
                                <p>show more</p>
                                </div>
                            </div>
                            <div  className='flip-card-back-skill-item'>
                                <a href='https://github.com/Seojkc/ASP.NET-C-'  target='_blank'><img src={gitLogo} alt="Your Image" className="gitLogoImgSKILL" /></a>
                                <div >                                    
                                </div>
                            </div>
                        </div>
                        <div className='php  language  skill-item flip-card-inner-skill-item ' onMouseEnter={() => handleMouseEnter('php')} onMouseLeave={() => handleMouseLeave('php')}>
                            <div className='flip-card-front-skill-item'>
                                <div>
                                <img src={php}/>
                                <h2>PHP</h2>
                                <p>show more</p>
                                </div>
                            </div>
                            <div  className='flip-card-back-skill-item'>
                                <a href='https://github.com/Seojkc/PHP'  target='_blank'><img src={gitLogo} alt="Your Image" className="gitLogoImgSKILL" /></a>
                                <div >                                    
                                </div>
                            </div>
                        </div>

                        <div className='dotNet  Frameworks skill-item flip-card-inner-skill-item ' onMouseEnter={() => handleMouseEnter('dotNet')} onMouseLeave={() => handleMouseLeave('dotNet')}>
                            <div className='flip-card-front-skill-item'>
                                <div>
                                <img src={dotNet}/>
                                <h2>ASP.NET</h2>
                                <p>show more</p>
                                </div>
                            </div>
                            <div  className='flip-card-back-skill-item'>
                                <a href='https://github.com/Seojkc/ASP.NET'  target='_blank'><img src={gitLogo} alt="Your Image" className="gitLogoImgSKILL" /></a>
                                <div > 
                                    <h3>ASP.NET </h3>
                                    <h3>.NET </h3>                                   
                                </div>
                            </div>
                        </div>

                        <div className='Frameworks skill-item flip-card-inner-skill-item ' >
                            <div className='flip-card-front-skill-item'>
                                <div>
                                <img src={bootstrap}/>
                                <h2>Bootstrap</h2>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>



            
        
        </div>
        

    );

}