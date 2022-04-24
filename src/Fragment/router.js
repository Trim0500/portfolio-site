import React from 'react'
import AcademicsPage from '../Pages/academics-page';
import ContactPage from '../Pages/contact-page';
import HobbiesPage from '../Pages/hobbies-page';
import ProfessionalPage from '../Pages/professional-page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "../Pages/landing-page";

export default function UseRouter() {
    let [language, setLanguage] = React.useState('en');

    return(
        <>
            <div style={{overflow: 'hidden'}}>
                <select 
                    onChange={e => setLanguage(e.target.value)}
                    style={{float: 'right'}}
                >
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                </select>
            </div>

            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/hobbies" element={<HobbiesPage />} />
                    <Route path="/academics" element={<AcademicsPage />} />
                    <Route path="/professional" element={<ProfessionalPage language={language} />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </Router>
        </>
    )
}