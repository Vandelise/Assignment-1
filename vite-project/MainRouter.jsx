import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Aboutme from './src/aboutme'
import Contact from './src/contact'
import Services from './src/services'
import Projects from './src/projects'
import Layout from './components/Layout'

const MainRouter = () => {
 return (<div>
<Layout/>
 <Routes>

    <Route exact path="/" element={<Home />} />
    <Route exact path="/aboutme" element={<Aboutme />} />
    <Route exact path="/services" element={<Services />} />
    <Route exact path="/projects" element={<Projects />} />
    <Route exact path="/contact" element={<Contact />} />

</Routes>
</div>
)
}
export default MainRouter


