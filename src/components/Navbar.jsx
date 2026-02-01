import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './assets/Logo.png'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-custom p-2 fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img src={Logo} alt="Logo" className="logo-img" />
          <div className="logo-content">
            <span className="logo-name">عدسة</span>
            <p className="logo-text">عالم التصوير الفوتوغرافي</p>
          </div>
        </NavLink>

        <div className="nav-links-container rounded-5 p-2">
          <NavLink className="nav-link rounded-5 " to="/home">الرئيسية</NavLink>
          <NavLink className="nav-link rounded-5" to="/blog">المدونة</NavLink>
          <NavLink className="nav-link rounded-5" to="/about">من نحن</NavLink>
        </div>
        <div className="nav-icons d-flex align-items-center gap-2">
          <i className="fa-solid fa-search searchIcon d-flex justify-content-center align-items-center"></i>
          <NavLink className=" btn-start rounded-5 " to="/blog">ابدأ القراءة</NavLink>
        </div>
      </div>
    </nav>
  )
}
