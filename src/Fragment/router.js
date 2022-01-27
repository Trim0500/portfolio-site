import React from 'react'
import AcademicsPage from '../Pages/academics-page';
import ContactPage from '../Pages/contact-page';
import HobbiesPage from '../Pages/hobbies-page';
import ProfessionalPage from '../Pages/professional-page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "../Pages/landing-page";

export default function UseRouter() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/hobbies" element={<HobbiesPage />} />
                <Route path="/academics" element={<AcademicsPage />} />
                <Route path="/professional" element={<ProfessionalPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </Router>
    )
}