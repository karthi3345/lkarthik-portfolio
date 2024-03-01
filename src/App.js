import './App.css';
import './assets/vendors/themify-icons/css/themify-icons.css';
import './assets/css/johndoe.css';
import react1 from './assets/imgs/react1.png'
import react2 from './assets/imgs/react2.png'
import react3 from './assets/imgs/react3.png'
import react4 from './assets/imgs/react4.png'
import laravel1 from './assets/imgs/laravel1.png'
import laravel2 from './assets/imgs/laravel2.png'
import laravel3 from './assets/imgs/laravel3.jpg'
import laravel4 from './assets/imgs/laravel4.jpg'
import vue1 from './assets/imgs/vue1.png'
import vue2 from './assets/imgs/vue2.png'
import vue3 from './assets/imgs/vue3.png'
import vue4 from './assets/imgs/vue4.png'
import blog1 from './assets/imgs/blog1.jpg'
import blog2 from './assets/imgs/blog2.jpg'
import blog3 from './assets/imgs/blog3.jpg'
import avatar from './assets/imgs/avatar.jpg';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';

function App() {
    const [portTitle, setPortTitle] = useState('1');    

    const handleChange = (event, newValue) => {
        setPortTitle(newValue);
      };
  return (
    <>
    <header className="header">
        <div className="container">
            <div className="header-content">
                <h4 className="header-subtitle" >Hello, I am</h4>
                <h1 className="header-title">Karthik Raja L</h1>
                <h6 className="header-mono" >Software Developer</h6>
            </div>
        </div>
    </header>
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white" data-spy="affix" data-offset-top="510">
        <div className="container">
            <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a href="#home" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#resume" className="nav-link">Resume</a>
                    </li>
                </ul>
                <ul className="navbar-nav brand">
                    <img src={avatar} alt="" className="brand-img" />
                    <li className="brand-txt">
                        <h5 className="brand-title">Karthik Raja L</h5>
                        <div className="brand-subtitle">Software Developer</div>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a href="#portfolio" className="nav-link">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a href="#blog" className="nav-link">Blog</a>
                    </li>
                    <li className="nav-item last-item">
                        <a href="#contact" className="nav-link">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div className="container-fluid">
        <div id="about" className="row about-section">
            <div className="col-lg-4 about-card">
                <h3 className="font-weight-light">Who am I ?</h3>
                <span className="line mb-5"></span>
                <h5 className="mb-3">Software Developer</h5>
                <p className="mt-20">
                Have 2+years of experience in IT industry. Working as Software Developer.<br/>
Handled more than 50+websites and delivered the data at a given time with 100% quality <br />
Having adequate knowledge & experience in using tools like Eclipse and SQL Server Management Studio.<br />
Experience in handling a team by keeping motivation level high of every team member and creating a positive work environment.<br />
Possesses excellent debugging, analytical, problem solving, leading and learning skills as well as a keen interest in the emerging technologies
                </p>
            </div>
            <div className="col-lg-4 about-card">
                <h3 className="font-weight-light">Personal Info</h3>
                <span className="line mb-5"></span>
                <ul className="mt40 info list-unstyled">
                    <li><span>Birthdate</span> : 12/04/1997</li>
                    <li><span>Email</span> : lkarthikaraja@gmail.com</li>
                    <li><span>Phone</span> : + (91) 8610177637</li>
                    <li><span>Skype</span> : Karthik Raja L </li>
                    <li><span>Address</span> :  717 karpaga nagar 6th street k. Pudur Madurai 625007 India</li>
                </ul> 
            </div>
            <div className="col-lg-4 about-card">
                <h3 className="font-weight-light">My Expertise</h3>
                <span className="line mb-5"></span>
                <div className="row">
                    <div className="col-1 text-danger pt-1"><i className="ti-widget icon-lg"></i></div>
                    <div className="col-10 ml-auto mr-3">
                        <h6>UX Design</h6>
                        <p className="subtitle"> Perfect Visually</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1 text-danger pt-1"><i className="ti-paint-bucket icon-lg"></i></div>
                    <div className="col-10 ml-auto mr-3">
                        <h6>Web Development</h6>
                        <p className="subtitle">Customer-oriented code with no errors</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1 text-danger pt-1"><i className="ti-stats-up icon-lg"></i></div>
                    <div className="col-10 ml-auto mr-3">
                        <h6>Project Management</h6>
                        <p className="subtitle">Clear Plan</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section className="section" id="resume">
        <div className="container">
            <h2 className="mb-5"><span className="text-danger">My</span> Resume</h2>
            <div className="row">
                <div className="col-md-6 col-lg-4">
                    <div className="card">
                       <div className="card-header">
                            <div className="mt-2">
                                <h4>Expertise</h4>
                                <span className="line"></span>  
                            </div>
                        </div>
                        <div className="card-body">
                            <h6 className="title text-danger">May 2021 - Sep 2023</h6>
                            <p>Front-end Engineer</p>
                            <p className="subtitle">Implemented new features, resolved bugs in the backend, and achieved a 15% performance boost through strategic workfl ow and structural optimizations and Successfully built 15+ server APIs for enhanced web and desktop application communication</p>
                            <h6 className="title text-danger">May 2020 - Jul 2021</h6>
                            <p>Front-end Developer</p>
                            <p className="subtitle">Created Admin application of web store and Replaced Redux with Apollo Client for GraphQL against a Ruby back-end</p>

                            <h6 className="title text-danger">Nov 2018 - Feb 2020</h6>
                            <p>Full-stack JavaScript Engineer</p>
                            <p className="subtitle">Added a Hot module replacement plugin to Webpack and Worked with legacy code on the server side, able to understand the principles behind it and make it work again.</p>

                            <h6 className="title text-danger">Apr 2015 - May 2016</h6>
                            <p>Front-end Engineer</p>
                            <p className="subtitle">Handled responsive design layouts for views and Implemented reusable components for UX using jQuery, Created an xQuery Selector generator from an HTML Element DOMNode.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="card">
                       <div className="card-header">
                            <div className="mt-2">
                                <h4>Education</h4>
                                <span className="line"></span>  
                            </div>
                        </div>
                        <div className="card-body">
                            <h6 className="title text-danger">Jun 2015 - Apr 2019</h6>
                            <p>Velammal college of eng and Tech</p>
                            <p className="subtitle">B. Technology Electrical and Electronics EnGineer</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                       <div className="card-header">
                            <div className="pull-left">
                                <h4 className="mt-2">Skills</h4>
                                <span className="line"></span>  
                            </div>
                        </div>
                        <div className="card-body pb-2">
                            <h6>Backend: (Python, Nodejs)</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: "85%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h6>Frontend: (Reactjs, Nextjs, Nuxtjs, Emberjs)</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: "93%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h6>Framework: (Django, Streamlit, FLASK, Selenium, Beautiful Soup)</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: "94%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h6>FIREBASE</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: "90%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h6>GIT</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: "95%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h6>Database: (Nosql, Mysql)</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: "92%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                       <div className="card-header">
                            <div className="pull-left">
                                <h4 className="mt-2">Languages</h4>
                                <span className="line"></span>  
                            </div>
                        </div>
                        <div className="card-body pb-2">
                           <h6>Tarmil</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: "100%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h6>English</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: "85%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="section bg-dark text-center">
        <div className="container">
            <div className="row text-center">
                <div className="col-md-6 col-lg-3">
                    <div className="row ">
                        <div className="col-5 text-right text-light border-right py-3">
                            <div className="m-auto"><i className="ti-alarm-clock icon-xl"></i></div>
                        </div>
                        <div className="col-7 text-left py-3">
                            <h1 className="text-danger font-weight-bold font40">600</h1>
                            <p className="text-light mb-1">Hours Worked</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="row">
                        <div className="col-5 text-right text-light border-right py-3">
                            <div className="m-auto"><i className="ti-layers-alt icon-xl"></i></div>
                        </div>
                        <div className="col-7 text-left py-3">
                            <h1 className="text-danger font-weight-bold font40">150</h1>
                            <p className="text-light mb-1">Project Finished</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="row">
                        <div className="col-5 text-right text-light border-right py-3">
                            <div className="m-auto"><i className="ti-face-smile icon-xl"></i></div>
                        </div>
                        <div className="col-7 text-left py-3">
                            <h1 className="text-danger font-weight-bold font40">120</h1>
                            <p className="text-light mb-1">Happy Clients</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="row">
                        <div className="col-5 text-right text-light border-right py-3">
                            <div className="m-auto"><i className="ti-heart-broken icon-xl"></i></div>
                        </div>
                        <div className="col-7 text-left py-3">
                            <h1 className="text-danger font-weight-bold font40">1k</h1>
                            <p className="text-light mb-1">Coffee Drinked</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="section" id="service">
        <div className="container">
            <h2 className="mb-5 pb-4"><span className="text-danger">My</span> Services</h2>
            <div className="row">
                <div className="col-md-4 col-sm-6">
                    <div className="card mb-5" style={{minHeight: "100%"}}>
                       <div className="card-header has-icon">
                            <i className="ti-vector text-danger" aria-hidden="true"></i>
                        </div>
                        <div className="card-body px-4 py-3">
                            <h5 className="mb-3 card-title text-dark">Full time work</h5>
                            <p className="subtitle">My full-time work service involves providing comprehensive full stack development solutions for web and mobile applications. This includes designing and implementing user-friendly front-end interfaces, as well as developing robust back-end systems for seamless functionality and data management. I specialize in creating dynamic and responsive websites and applications that meet the specific needs of my clients. My expertise covers a wide range of technologies and frameworks, allowing me to deliver high-quality, end-to-end development services.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="card mb-5" style={{minHeight: "100%"}}>
                       <div className="card-header has-icon">
                            <i className="ti-write text-danger" aria-hidden="true"></i>
                        </div>
                        <div className="card-body px-4 py-3">
                            <h5 className="mb-3 card-title text-dark">Satification</h5>
                            <p className="subtitle">I take great pride in ensuring client satisfaction with my full stack development service. By leveraging my expertise in both front-end and back-end development, I have consistently delivered high-quality, customized solutions that meet and exceed my clients' expectations. I prioritize clear communication, attention to detail, and a deep understanding of my clients' needs to ensure that the end product not only meets technical requirements but also achieves the desired business outcomes. The positive feedback and long-term partnerships with my clients are a testament to the quality and value of my full stack development services.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="card mb-5" style={{minHeight: "100%"}}>
                       <div className="card-header has-icon">
                            <i className="ti-package text-danger" aria-hidden="true"></i>
                        </div>
                        <div className="card-body px-4 py-3">
                            <h5 className="mb-3 card-title text-dark">Bug-Free, Client-Oriented</h5>
                            <p className="subtitle">My development approach is deeply client-oriented, with a strong focus on delivering bug-free, high-quality code. I prioritize understanding my clients' specific requirements and business objectives to ensure that the solutions I deliver are not only technically sound but also align with their strategic goals. By adhering to industry best practices, rigorous testing, and continuous quality assurance measures, I consistently produce reliable, bug-free code that meets the highest standards of performance and security. My commitment to delivering clean, efficient, and error-free solutions is aimed at providing my clients with a seamless and reliable user experience, ultimately contributing to their success.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="section bg-custom-gray" id="portfolio">
        <div className="container">
            <h1 className="mb-5"><span className="text-danger">My</span> Portfolio</h1>
            
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={portTitle}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} sx={{textAlign: 'center'}} aria-label="lab API tabs example">
                        <Tab label="New" value="1" />
                        <Tab label="JavaScript" value="2" />
                        <Tab label="PHP" value="3" />
                        <Tab label="Other" value="4" />
                    </TabList>
                    </Box>
                    <TabPanel value="1">
                    <div className="portfolio-container row"> 
                    <div className="col-md-6 col-lg-4 web new">
                        <div className="portfolio-item">
                            <a href="https://otpark.com/"><img src={react1} className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" /></a>
                        </div>             
                    </div>
                    <div className="col-md-6 col-lg-4 web new">
                        <div className="portfolio-item">
                            <a href="https://lookprior.com/home"><img src={react2} className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" /></a>
                        </div>                         
                    </div>
                    <div className="col-md-6 col-lg-4 advertising new">
                        <div className="portfolio-item">
                            <a href="https://towersandgardens.com/"><img src={laravel2} className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" /></a>
                        </div>              
                    </div> 
                    <div className="col-md-6 col-lg-4 web new">
                        <div className="portfolio-item">
                            <a href="https://interview.ueno.co "><img src={react3} className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />  </a>
                        </div>                                                     
                    </div>
                    <div className="col-md-6 col-lg-4 advertising new">
                        <div className="portfolio-item">
                            <a href="https://www.voki.com/"><img src={laravel3} className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" /></a>
                        </div>                                                       
                    </div> 
                    <div className="col-md-6 col-lg-4 advertising new"> 
                        <div className="portfolio-item">
                            <a href="http://www.cbdwholesale.ch/"><img src={laravel4} className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" /></a>
                        </div>
                                
                    </div> 
                    <div className="col-md-6 col-lg-4 branding new">
                        <div className="portfolio-item">
                            <a href="https://pbalerts.com"><img src={vue1} className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" /></a>
                        </div>
                    </div> 
                    <div className="col-md-6 col-lg-4 branding new">
                        <div className="portfolio-item">
                            <a href="https://www.scheduleengine.com/"><img src={vue3} className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" /></a>
                        </div>                                                    
                    </div>
                </div> 
                    </TabPanel>
                    <TabPanel value="2">
                    <div className="portfolio-container row"> 
                    <div className="col-md-6 col-lg-4 web new">
                        <div className="portfolio-item">
                            <a href="https://otpark.com/"><img src={react1} className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" /></a>
                        </div>             
                    </div>
                    <div className="col-md-6 col-lg-4 web new">
                        <div className="portfolio-item">
                            <a href="https://lookprior.com/home"><img src={react2} className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" /></a>
                        </div>                         
                    </div>
                    <div className="col-md-6 col-lg-4 web">
                        <div className="portfolio-item">
                            <a href="https://nova-smarthome.ueno.co"><img src={react4} className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" /></a>
                        </div>                                                     
                    </div> 
                    <div className="col-md-6 col-lg-4 web new">
                        <div className="portfolio-item">
                            <a href="https://interview.ueno.co "><img src={react3} className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />  </a>
                        </div>                                                     
                    </div>
                </div> 
                    </TabPanel>
                    <TabPanel value="3">
                    <div className="portfolio-container row"> 
                    <div className="col-md-6 col-lg-4 advertising new">
                        <div className="portfolio-item">
                            <a href="https://towersandgardens.com/"><img src={laravel2} className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" /></a>
                        </div>              
                    </div> 

                    <div className="col-md-6 col-lg-4 advertising"> 
                        <div className="portfolio-item">
                            <a href="https://livecoda.com/"><img src={laravel1} className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" /></a>
                        </div>                                                       
                    </div> 
                    <div className="col-md-6 col-lg-4 advertising new">
                        <div className="portfolio-item">
                            <a href="https://www.voki.com/"><img src={laravel3} className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" /></a>
                        </div>                                                       
                    </div> 
                    <div className="col-md-6 col-lg-4 advertising new"> 
                        <div className="portfolio-item">
                            <a href="http://www.cbdwholesale.ch/"><img src={laravel4} className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" /></a>
                        </div>
                                
                    </div> 
                </div> 
                    </TabPanel>
                    <TabPanel value="4">
                    <div className="portfolio-container row">
                    <div className="col-md-6 col-lg-4 branding new">
                        <div className="portfolio-item">
                            <a href="https://pbalerts.com"><img src={vue1} className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" /></a>
                        </div>
                    </div> 
                    <div className="col-md-6 col-lg-4 branding">
                        <div className="portfolio-item">
                            <a href="https://finelittleday.com/"><img src={vue2} className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" /></a>
                        </div>                                                     
                    </div> 
                    <div className="col-md-6 col-lg-4 branding new">
                        <div className="portfolio-item">
                            <a href="https://www.scheduleengine.com/"><img src={vue3} className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" /></a>
                        </div>                                                    
                    </div> 
                    <div className="col-md-6 col-lg-4 branding">
                        
                        <div className="portfolio-item">
                            <a href="https://joinclyde.com"><img src={vue4} className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" /></a>
                        </div>                                                      
                    </div>
                </div> 
                    </TabPanel>
                </TabContext>
            </Box>
        </div>            
    </section>

    <section className="section" id="blog">
        <div className="container">
            <h2 className="mb-5">Latest <span className="text-danger">News</span></h2>
            <div className="row">
                <div className="blog-card">
                    <div className="img-holder">
                        <img src={blog1} alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                    </div>
                    <div className="content-holder">
                        <h6 className="title">Front-end Engineer</h6>

                        <p className="post-details">
                        </p>
                        
                        <p>Created reusable D3.js charts using Raphael.js to draw SVG on browsers.</p>
                        <p>Handled responsive design layouts for views.</p>
                        <p>Implemented reusable components for UX using jQuery</p>
                        <p>Created an xQuery Selector generator from an HTML Element DOMNode.</p>
                        <p>Created a Pop CSS editor for elements.</p>
                    </div>
                </div>

                <div className="blog-card">
                    <div className="img-holder">
                        <img src={blog2} alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                    </div>
                    <div className="content-holder">
                        <h6 className="title">Front-end Engineer</h6>

                        <p className="post-details">
                        </p>

                        <p>Created the admin application of the web store in React.</p>
                        <p>Replaced Redux with Apollo Client for GraphQL against a Ruby back-end.</p>
                        <p>Created a HOC architecture to reuse common GraphQL functionality for listing and fi ltering.</p>
                        <p>Created our own custom UI library with styled components.</p>
                        <p>Used HOC for form manipulation.</p>
                    </div>
                </div>
                <div className="blog-card">
                    <div className="img-holder">
                        <img src={blog3} alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                    </div>
                    <div className="content-holder">
                        <h4 className="title">Full Stack Developer</h4>

                        <p className="post-details">
                        </p>

                        <p>Led the redesign of the entire React.js frontend to align with updated design standards</p>
                        <p>Implemented new features, resolved bugs in the backend, and achieved a 15% performance boost through strategic workfl ow and structural optimizations</p>
                        <p>Successfully built 15+ server APIs for enhanced web and desktop application communication</p>
                        <p>Improved application performance by 25% by implementing caching techniques and optimizing SQL queries</p>
                        <p>Contributed to the "Seafi le-Haiwen" open-source project</p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <div className="section contact" id="contact">
        <div id="map" className="map">
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="contact-form-card">
                        <h4 className="contact-title">Send a message</h4>
                        <form action="">
                            <div className="form-group">
                                <input  className="form-control" type="text" placeholder="Name *" required />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="email" placeholder="Email *" required />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" placeholder="Message *" rows="7" required></textarea>
                            </div>
                            <div className="form-group ">
                                <button type="submit" className="form-control btn btn-primary" >Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="contact-info-card">
                        <h4 className="contact-title">Get in touch</h4>
                        <div className="row mb-2">
                            <div className="col-1 pt-1 mr-1">
                                <i className="ti-mobile icon-md"></i>
                            </div>
                            <div className="col-10 ">
                                <h6 className="d-inline">Phone : <span className="text-muted">+ (91) 8610177637</span></h6>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-1 pt-1 mr-1">
                                <i className="ti-map-alt icon-md"></i>
                            </div>
                            <div className="col-10">
                                <h6 className="d-inline">Address : <span className="text-muted">717 karpaga nagar 6th street k. Pudur Madurai 625007 India</span></h6>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-1 pt-1 mr-1">
                                <i className="ti-envelope icon-md"></i>
                            </div>
                            <div className="col-10">
                                <h6 className="d-inline">Email : <span className="text-muted">lkarthikaraja@gmail.com</span></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <footer className="footer py-3">
        <div className="container">
            <p className="small mb-0 text-light">
                &copy; {(new Date().getFullYear())} Created With <i className="ti-heart text-danger"></i> By <a href="http://devcrud.com" target="_blank"><span className="text-danger" title="Bootstrap 4 Themes and Dashboards">Martin</span></a> 
            </p>
        </div>
    </footer>
    {/* <Helmet>
    </Helmet> */}
    
    </>
  );
}

export default App;
