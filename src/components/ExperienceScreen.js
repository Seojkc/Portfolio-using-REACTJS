import './../App.css';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../CssFiles/ExperienceScreen.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Chrono } from "react-chrono";
import React from 'react';
import { faBriefcase,faSchool } from '@fortawesome/free-solid-svg-icons';

export default function ExperienceScreen(){
 


    const workIcon = {
        icon: <FontAwesomeIcon icon={faBriefcase} />,
        iconStyle: { WebkitBoxShadow: ' inset 0px 0px 20px 10px rgba(0, 0, 0, 0.2),inset 0px 0px 10px 5px rgba(255, 255, 255, 0.5)', boxShadow: ' inset 0px 0px 20px 10px rgba(0, 0, 0, 0.2),inset 0px 0px 10px 5px rgba(255, 255, 255, 0.5)', background: 'black', color: '#fff' }
      };
    const schoolIcon = {
    icon: <FontAwesomeIcon icon={faBriefcase} />,
    iconStyle: { WebkitBoxShadow: ' inset 0px 0px 20px 10px rgba(0, 0, 0, 0.2),inset 0px 0px 10px 5px rgba(255, 255, 255, 0.5)', boxShadow: ' inset 0px 0px 20px 10px rgba(0, 0, 0, 0.2),inset 0px 0px 10px 5px rgba(255, 255, 255, 0.5)', background: 'black', color: '#fff' }
    };
      
    const timelineEducation = [
    { icon: schoolIcon, date: '01/2023 - 09/2023', title: 'Computer Systems Technology, Software Development', subtitle: 'Mohawk College | Hamilton, ON',skills:['Python','HTML','CSS','Java','JavaScript','Jquery','AJAX','XML','PHP','C#','WEB API','ASP.NET','React','Wordpress','Node.js','Discord Bot','Agile','Scrum','Data Structure'], desc: ['Consistent  Dean\'s List recognition with an overall GPA of 3.5/4','Courses Successfully completed in WordPress, Data Structures, Object- Oriented Design, Database Management Systems, Agile Software Development, .NET, C#, XML, HTML and CSS, JavaScript, PHP, Python, and SQL.'] },
    
    ];
      
    const timelineFreelance = [
    { icon: workIcon, date: '01/2021 - PRESENT', title: 'Web Developer', subtitle: 'Seno Boutique | India',skills:['React', 'HTML', 'CSS','JavaScript', 'Python_Flask', 'Jira', 'MySQL'], desc: [
        "Created and updated website functionalities to enhance user experience and support business objectives.",
        "Implemented responsive designs and intuitive user interfaces to optimize accessibility across various devices.",
        "Utilized Python Flask for backend development, crafting efficient APIs and server-side components.",
        "Managed MySQL databases, ensuring data integrity, security, and performance optimization.",
        "Enhanced e-commerce functionalities, including pricing updates and payment options integration.",
        "Collaborated with cross-functional teams to align development efforts with business goals.",
        "Utilized Jira for Agile project management, facilitating streamlined communication and task tracking.",
        "Proactively identified technical challenges and implemented effective solutions.",
        "Prepared comprehensive reports, manuals, and documentation on software status and operation.",
        "Contributed to the development of logical and physical specifications, driving project success."
      ] },
   

    
    ];

    const lineColor = 'white';
    const timeline = [
        { icon: workIcon, date: '01/2023 - 09/2023', title: 'Full Stack Developer Co-op', subtitle: 'Rosa Flora | Dunnville, ON',skills:['Vue', 'HTML', 'SCSS', 'ASP.NET', 'C#', 'Jira', 'Bitbucket', 'T-SQL'], desc: ['Streamlined approval processes by designing and developing employee vacation request pages with email notifications.','Increased logistics department efficiency by 45% through the creation of an order receiving page with truck loading data submission capabilities.','Proactively maintained, enhanced, and optimized existing applications, ensuring ongoing performance.','Developed T-SQL procedures and views for seamless integration of various web page functionalities.','Regularly backed up application updates to the server and created department-specific reports.'] },
        { icon: workIcon, date: '01/2021 - 12/2021', title: 'Application Developer', subtitle: 'Infocom | India',skills:['Java', 'React', 'HTML', 'CSS', 'JavaScript', 'C#', 'SQL Server', 'Git'] , desc: [
            "Wrote, modified, integrated, and tested software code for various applications.",
            "Maintained and modified existing computer programs as required.",
            "Identified and communicated technical problems, processes, and solutions.",
            "Prepared reports, manuals, and documentation on the status, operation, and maintenance of software.",
            "Assisted in the development of logical and physical specifications.",
            "Researched and evaluated a variety of software products."
          ] },

        
      ];

      

    window.addEventListener('load',function(){
        function handleScroll() {
            var element = document.getElementById('experience-heading')
            
            if (isElementInViewport(element)) {
              element.classList.add('visible');
            }
            else{
                element.classList.remove('visible');
            }

            var elementeducation = document.getElementById('education-heading')
            
            if (isElementInViewport(elementeducation)) {
                elementeducation.classList.add('visible-education');
            }
            else{
                elementeducation.classList.remove('visible-education');
            }
            
          }

          
          window.addEventListener('scroll', handleScroll);
          function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (
              rect.top >= 0 &&
              rect.left >= 0 &&
              rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
              rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
          }
    })
    
    
    return(
        <>
        
        <div className='experience-section'>
                <div className='animated-experience'>
                    
                </div>
                <div>
                    <h1 id="experience-heading">experience</h1>
                    <h3 className='experience-sub-heading'>CORPORATE EXPERIENCE</h3>
                    <VerticalTimeline className='VerticalTimeline'  lineColor={ lineColor}>
                        {timeline.map((t, i) => {
                            const contentStyle = {WebkitBoxShadow: '0px 0px 5px 5px rgba(0, 0, 0, 0.1)',boxShadow: '0px 0px 5px 5px rgba(0, 0, 0, 0.1)', border:'0px solid black', left:'40%',width:'80%', background: 'linear-gradient(to left,rgba(0, 0, 0, 0.644),rgba(255, 255, 255, 0.192))', color: '#fff' };
                            const arrowStyle = { borderRight: 'rgba(255, 255, 255, 0.9)' } ;
                        
                            return <VerticalTimelineElement
                            key={i}
                            className="vertical-timeline-element--work"
                            contentStyle={contentStyle}
                            contentArrowStyle={arrowStyle}
                            date={t.date}
                            {...t.icon}
                            
                            position='right'
                            >
                            {t.title ? 
                            <React.Fragment>
                                <h3 className="vertical-timeline-element-title">{t.title}</h3>
                                {t.subtitle && <h4 className="vertical-timeline-element-subtitle">{t.subtitle}</h4>}
                                <div className='skills-experience'>
                                {Array.isArray(t.skills) ? (
                                    t.skills.map((item, index) => <h5 key={index} >{item}</h5>)
                                    ) : (
                                    <h4>{t.desc}</h4>
                                    )}
                                </div>
                                
                                <ul className='experience-desc-ul'>
                                    {Array.isArray(t.desc) ? (
                                    t.desc.map((item, index) => <li key={index} >{item}</li>)
                                    ) : (
                                    <li>{t.desc}</li>
                                    )}
                                </ul>
                                {/* {t.desc && 
                                <p>{t.desc}</p>} */}
                            </React.Fragment> : undefined}
                            </VerticalTimelineElement>
                        })}
                        </VerticalTimeline>


                        <h3 className='experience-sub-heading mt-5'>FREELANCE EXPERIENCE</h3>
                    <VerticalTimeline className='VerticalTimeline' lineColor={ 'white'}>
                        {timelineFreelance.map((t, i) => {
                            const contentStyle = {WebkitBoxShadow: '0px 0px 5px 5px rgba(0, 0, 0, 0.1)',boxShadow: '0px 0px 5px 5px rgba(0, 0, 0, 0.1)', border:'0px solid black', left:'40%',width:'80%', background: 'linear-gradient(to left,rgba(0, 0, 0, 0.644),rgba(255, 255, 255, 0.192))', color: '#fff' };
                            const arrowStyle = { borderRight: 'rgba(255, 255, 255, 0.9)' } ;
                        
                            return <VerticalTimelineElement
                            key={i}
                            className="vertical-timeline-element--work"
                            contentStyle={contentStyle}
                            contentArrowStyle={arrowStyle}
                            date={t.date}
                            {...t.icon}
                            
                            position='right'
                            >
                            {t.title ? 
                            <React.Fragment>
                                <h3 className="vertical-timeline-element-title">{t.title}</h3>
                                {t.subtitle && <h4 className="vertical-timeline-element-subtitle">{t.subtitle}</h4>}
                                <div className='skills-experience'>
                                {Array.isArray(t.skills) ? (
                                    t.skills.map((item, index) => <h5 key={index} >{item}</h5>)
                                    ) : (
                                    <h4>{t.desc}</h4>
                                    )}
                                </div>
                                
                                <ul className='experience-desc-ul'>
                                    {Array.isArray(t.desc) ? (
                                    t.desc.map((item, index) => <li key={index} >{item}</li>)
                                    ) : (
                                    <li>{t.desc}</li>
                                    )}
                                </ul>
                                {/* {t.desc && 
                                <p>{t.desc}</p>} */}
                            </React.Fragment> : undefined}
                            </VerticalTimelineElement>
                        })}
                        </VerticalTimeline>

                </div>

            </div>


            </>


    );

}