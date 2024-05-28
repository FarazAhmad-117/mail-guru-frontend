import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage.jsx'
import UserDashBoard from './pages/UserDashboard';
import Login from './pages/Auth/Login.jsx'
import Signup from './pages/Auth/Signup.jsx'
import { Route } from'react-router-dom'
import CampaignsPage from './pages/CampaignsPage';
import EmailTemplates from './pages/EmailTemplates';
import AudiencesPage from './pages/AudiencesPage';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route index element={<LandingPage/>}/>
    <Route path='/dashboard' element={<UserDashBoard/>}/>
    <Route path="/campaigns" element={<CampaignsPage/>}/>
    <Route path="/templates" element={<EmailTemplates/>}/>
    <Route path="/audience" element={<AudiencesPage/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>'
  </Route>
))


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
