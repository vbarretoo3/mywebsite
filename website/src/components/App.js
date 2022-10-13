import React from 'react';
import { Routes, Route, NavLink} from 'react-router-dom';
import  Home  from './Home/Home'
import  HomeContent1  from './Home/HomeContent1'
import  HomeContent2  from './Home/HomeContent2'
import  HomeContent3  from './Home/HomeContent3'
import  About  from './About/About'
import  AboutContent1  from './About/AboutContent1'
import  AboutContent2  from './About/AboutContent2'
import  AboutContent3  from './About/AboutContent3'
import  Projects  from './Projects/Projects'
import  ProjectsContent1  from './Projects/ProjectsContent1'
import  ProjectsContent2  from './Projects/ProjectsContent2'
import  ProjectsContent3  from './Projects/ProjectsContent3'
import  Contact  from './Contact/Contact'
import  ContactContent1  from './Contact/ContactContent1'
import  ContactContent2  from './Contact/ContactContent2'
import  ContactContent3  from './Contact/ContactContent3'
import  NotFound  from './NotFound'

function App() {
  return (
    <>
      <div className='content'>
        <div className='container'>
          <div className='head'>
            <h1>Victor Barreto de Oliveira</h1>
            <h2>WebDev</h2>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink end to="/" className={({ isActive }) => isActive ? 'activebar' : 'navbar'}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/projects" className={({ isActive }) => isActive ? 'activebar' : 'navbar'}>Projects</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'activebar' : 'navbar'}>Contact me</NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'activebar' : 'navbar'}>About Me</NavLink>
              </li>
            </ul>
          </nav>
          <main>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <div id='content1'>
            <Routes>
              <Route exact path="/" element={<HomeContent1 />} />
              <Route path="/about" element={<AboutContent1 />} />
              <Route path="/projects" element={<ProjectsContent1 />} />
              <Route path="/contact" element={<ContactContent1 />} />
            </Routes>
          </div>
          <div id='content2'>
            <Routes>
              <Route exact path="/" element={<HomeContent2 />} />
              <Route path="/about" element={<AboutContent2 />} />
              <Route path="/projects" element={<ProjectsContent2 />} />
              <Route path="/contact" element={<ContactContent2 />} />
            </Routes>
          </div>
          <div id='content3'>
            <Routes>
              <Route exact path="/" element={<HomeContent3 />} />
              <Route path="/about" element={<AboutContent3 />} />
              <Route path="/projects" element={<ProjectsContent3 />} />
              <Route path="/contact" element={<ContactContent3 />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
