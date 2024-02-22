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
import nodejs from './../mediaFiles/skill/nodejs.png';
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

        
        
        handleHeadingLanguages();
        var video = document.getElementById("welcome-video");
        document.title = 'Seo James | Web Developer';

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
        this.window.addEventListener("load", function () {
            getVideoHeight();
        });
        document.addEventListener("DOMContentLoaded", function () {
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
            var skills = document.querySelector('.container-skills-heading');
            var skillsanima = document.querySelector('.animated-skills-heading');

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
            if (isElementInViewport(skillsanima)) {
                skillsanima.classList.add('visible-skills')
              }
            else{
                skillsanima.classList.remove('visible-skills')
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
            
            //intro section
            const introductionContainer = document.querySelector('.introduction-container');
            const elementRect = introductionContainer.getBoundingClientRect();

            const bottomBorderY = elementRect.top + window.scrollY + elementRect.height;

          

            const compass = document.getElementById("compass")
            const compasscenterY = compass.getBoundingClientRect().top+(compass.getBoundingClientRect().height/2)
            

            
            const screenWidth = window.innerWidth;
            const skillsHeadingList = document.querySelector('.skills-heading-list-ul')
            if(compass.getBoundingClientRect().top<600){
                
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
            if(screenWidth>1000){
                if(compass.getBoundingClientRect().top<600){
                
                    
                    skillsHeadingList.classList.add('popUpSkillsHeading');
                    skillsHeadingList.classList.remove('popDownSkillsHeading');
                }else{
                    
                    skillsHeadingList.classList.add('popDownSkillsHeading');
                    skillsHeadingList.classList.remove('popUpSkillsHeading');
                }
            }else{
                skillsHeadingList.classList.add('popUpSkillsHeading');
            }
            
            
            
            console.log("Screen Width: " + screenWidth);


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

      const [skillsHeading, setSkillsHeading] = useState('Languages');

      const handleHeadingChange = (newHeading) => {
        setSkillsHeading(newHeading);
    }

    const handleHeadingLanguages=()=>{
        removeHeadingActive()
        handleHeadingChange('Languages')
        document.getElementById("compass").style.transform='rotate(36deg)';
        document.querySelector('.skills-heading-Languages').classList.add('skills-heading-active')

        
    }


    const handleHeadingFrameworks=()=>{
        removeHeadingActive()
        handleHeadingChange('Frameworks') 
        document.getElementById("compass").style.transform='rotate(72deg)';
        document.querySelector('.skills-heading-Frameworks').classList.add('skills-heading-active')

    }
    const handleHeadingDatabases=()=>{
        removeHeadingActive()
        handleHeadingChange('Databases')
        
        document.getElementById("compass").style.transform='rotate(108deg)';
        document.getElementById("skills-heading-Databases").classList.add('skills-heading-active')

    }
    const handleHeadingVersion=()=>{
        removeHeadingActive()
        handleHeadingChange('Tools') 
        document.getElementById("compass").style.transform='rotate(144deg)';
        document.querySelector('.skills-heading-Version').classList.add('skills-heading-active')

    }
    // const handleMouseEnter = (className) => {
    //     document.querySelector(`.${className}`).style.transform = 'rotateY(180deg)';
    // }
    
    // const handleMouseLeave = (className) => {
    //     document.querySelector(`.${className}`).style.transform = 'rotateY(0deg)';
    // } 

    const skillItems = [
        { id: 'python', className: 'python language skill-item flip-card-inner-skill-item', imgSrc: python, title: 'Python', moreLink: 'https://github.com/Seojkc/Python_Projects', subSkills: ['Flask', 'Mysql-connector', 'openAI', 'Regex', 'Django', 'Pandas', 'Numpy'], hasFlipCard: true, languageType: 'Languages' },
        { id: 'java', className: 'java language skill-item flip-card-inner-skill-item', imgSrc: java, title: 'Java', moreLink: 'https://github.com/Seojkc/Java-JavaFX-Projects', subSkills: ['JavaFX', 'OOPS', 'Data Structure'], hasFlipCard: true, languageType: 'Languages' },
        { id: 'javascript', className: 'javascript language skill-item flip-card-inner-skill-item', imgSrc: javascript, title: 'JavaScript', moreLink: 'https://github.com/Seojkc/JavaScript_Projects', subSkills: ['TypeScript'], hasFlipCard: true, languageType: 'Languages' },
        { id: 'html', className: 'html language skill-item flip-card-inner-skill-item', imgSrc: html, title: 'HTML', languageType: 'Languages' , hasFlipCard: false},
        { id: 'css', className: 'css language skill-item flip-card-inner-skill-item', imgSrc: css, title: 'CSS', languageType: 'Languages' , hasFlipCard: false},
        { id: 'jquery', className: 'jquery language skill-item flip-card-inner-skill-item', imgSrc: jquery, title: 'Jquery', hasFlipCard: false, languageType: 'Languages' },
        { id: 'xml', className: 'xml language skill-item flip-card-inner-skill-item', imgSrc: xml, title: 'XML', languageType: 'Languages', hasFlipCard: false },
        { id: 'cSharp', className: 'cSharp language skill-item flip-card-inner-skill-item', imgSrc: cSharp, title: 'C#', languageType: 'Languages', hasFlipCard: false },
        { id: 'php', className: 'php language skill-item flip-card-inner-skill-item', imgSrc: php, title: 'PHP', languageType: 'Languages', moreLink: 'https://github.com/Seojkc/PHP', subSkills: [''], hasFlipCard: true },
        { id: 'react', className: 'react Frameworks skill-item flip-card-inner-skill-item', imgSrc: react, title: 'React.js', languageType: 'Frameworks', moreLink: 'https://github.com/Seojkc?tab=repositories', subSkills: ['This Website'], hasFlipCard: true, },
        { id: 'vue', className: 'vue Frameworks skill-item flip-card-inner-skill-item', imgSrc: vue, title: 'Vue.js', languageType: 'Frameworks', hasFlipCard: false },
        { id: 'node', className: 'node Frameworks skill-item flip-card-inner-skill-item', imgSrc: nodejs, title: 'Node.js', languageType: 'Frameworks', moreLink: 'https://github.com/Seojkc/React-Native-App-with-NodeJS-Backend', subSkills: [''], hasFlipCard: true,  },
        { id: 'dotNet', className: 'dotNet Frameworks skill-item flip-card-inner-skill-item', imgSrc: dotNet, title: 'ASP.NET', moreLink: 'https://github.com/Seojkc/ASP.NET', subSkills: ['ASP.NET', '.NET'], hasFlipCard: true, languageType: 'Frameworks' },
        { id: 'wordpress', className: 'wordpress Frameworks skill-item flip-card-inner-skill-item', imgSrc: wordpress, title: 'Wordpress', languageType: 'Frameworks', moreLink: 'https://github.com/Seojkc/Python_Projects', subSkills: [''], hasFlipCard: true, },
        { id: 'sql', className: 'sql Databases skill-item flip-card-inner-skill-item', imgSrc: sql, title: 'SQL', languageType: 'Databases', hasFlipCard: false },
        { id: 'mysql', className: 'mysql Databases skill-item flip-card-inner-skill-item', imgSrc: mysql, title: 'MySQL', languageType: 'Databases', hasFlipCard: false },
        { id: 'tsql', className: 'tsql Databases skill-item flip-card-inner-skill-item', imgSrc: tsql, title: 'T-SQL', languageType: 'Databases', hasFlipCard: false },
        { id: 'git', className: 'git Tools skill-item flip-card-inner-skill-item', imgSrc: git, title: 'Git', languageType: 'Tools', hasFlipCard: false },
        { id: 'jira', className: 'jira Tools skill-item flip-card-inner-skill-item', imgSrc: jira, title: 'JIRA', languageType: 'Tools' , hasFlipCard: false},
        { id: 'bitbucket', className: 'bitbucket Tools skill-item flip-card-inner-skill-item', imgSrc: bitbucket, title: 'Bitbucket', languageType: 'Tools', hasFlipCard: false },
        { id: 'docker', className: 'docker Tools skill-item flip-card-inner-skill-item', imgSrc: docker, title: 'Docker', languageType: 'Tools', hasFlipCard: false },
        { id: 'bootstrap', className: 'bootstrap Frameworks skill-item flip-card-inner-skill-item', imgSrc: bootstrap, title: 'Bootstrap', languageType: 'Frameworks', hasFlipCard: false },

    ];

    const SkillComponent = ({id, className, imgSrc, title, moreLink, subSkills, hasFlipCard, languageType }) => {
        let flippedcard=false;
    
        const handleMouseEnter = () => {
            if (hasFlipCard && !flippedcard) {
                flippedcard=!flippedcard
                document.getElementById(id).style.transform = 'rotateY(180deg)';
            }else{
                flippedcard=!flippedcard

                document.getElementById(id).style.transform = 'rotateY(0deg)';

            }
        }
        
        return (
            <>
            {languageType==skillsHeading && (
                <div id={id} className={className} onClick={handleMouseEnter}>
                    <div className='flip-card-front-skill-item'>
                        <div>
                            <img src={imgSrc} alt={title}/>
                            <h2>{title}</h2>
                            {hasFlipCard && <p>show more</p>}
                        </div>
                    </div>
                    {hasFlipCard && (
                        <div className='flip-card-back-skill-item'>
                            {moreLink && <a href={moreLink} target='_blank'><img src={gitLogo} alt="Your Image" className="gitLogoImgSKILL" /></a>}
                            <div>
                                {subSkills && subSkills.map((skill, index) => <h3 key={index}>{skill}</h3>)}
                            </div>
                            <p>show less</p>
                        </div>
                    )}
                </div>
            )}</>
        );
    }

    
    return(
        <div className="backgroundVideo">
            
            <video autoPlay muted id='welcome-video'>
                <source src={backgroundSky} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="gitLogoDiv">
                <a href='https://github.com/Seojkc?tab=repositories'  target='_blank'>
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
                <div className="introduction-heading-container">
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
                        <a href='https://github.com/Seojkc?tab=repositories'  target='_blank'><img src={gitLogo} alt="Your Image" className="gitLogoImg invert-100" /></a>
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
                    <h1 className='skills-heading animated-skills-heading'>SKILLS</h1>
                    <img className='compass' src={compass} id="compass"/>
                    <div  className='skills-heading-list-ul'>
                        <div className='skills-heading-lists skills-heading-Languages skills-heading-active'  onClick={ handleHeadingLanguages} ><a>Languages</a></div>
                        <div className='skills-heading-lists skills-heading-Frameworks' onClick={handleHeadingFrameworks}><a>Frameworks<br></br>& CMS</a></div>
                        <div id='skills-heading-Databases' className='skills-heading-lists skills-heading-Databases' onClick={handleHeadingDatabases}><a>Databases <br></br>& Query</a></div>
                        <div className='skills-heading-lists skills-heading-Version' onClick={handleHeadingVersion}><a>Version Control<br></br> & DevOps</a></div>

                    </div>
                    

                </div>
                <div>
                    <h1 className='skills-heading container-skills-heading'>SKILLS</h1>

                    <div className='skills-container flip-card-skill-item'>
                   
                        {skillItems.map((item, index) => (
                            <SkillComponent
                                id={item.id}
                                key={index}
                                className={item.className}
                                imgSrc={item.imgSrc}
                                title={item.title}
                                moreLink={item.moreLink}
                                subSkills={item.subSkills}
                                hasFlipCard={item.hasFlipCard}
                                languageType={item.languageType}
                            />
                        ))}
                   

                    </div>
                </div>

            </div>
        </div>
    );

}