import React from 'react'
import './Footer.css'
import { FaArrowUp } from "react-icons/fa";
const Footer = () => {
   const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  }
  return (
    <footer className="footerMainDiv text-center py-3 bg-dark text-white">
    <p>© 2024 Akanksha kamble Company. All rights reserved.</p>
    <button 
      className="btn btn-primary mt-2" 
      onClick={scrollToTop}
    >
     <FaArrowUp/>
    </button>
  </footer>
  )
}

export default Footer