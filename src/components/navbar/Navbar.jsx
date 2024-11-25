import React,{useState} from 'react'
import './Navbar.css'
//import { Link } from 'react-router-dom'
const Navbar = () => {
    // const navbarLinks = [
    //     { to: "/", label: "Home" },
    //     { to: "/HowItWork", label: "How It Work" },
    //     { to: "/Explore", label: "Explore" },
    //     { to: "/Review", label: "Review" },
    //     { to: "/Blog", label: "Blog" },
    //     { to: "/Contact", label: "Contact" },
       

    // ]


    const [activeLink, setActiveLink] = useState('home');
    const handleLinkClick = (link) => {
        setActiveLink(link); // Update active link
      };
    return (
<div className='bg-black d-flex  position-fixed w-100 z-1'>
    <h1 className=' align-content-center logo m-0 mx-3'>List<span className='text-danger'>Race</span></h1>
        <div className='navMainDiv justify-content-end  px-3'>
            {/* <ul className='d-flex float-end list-unstyled py-4 m-0'>
                {navbarLinks.map((navLink, index) => (
                    <li key={index}>
                        <Link className='text-decoration-none px-3' to={navLink.to}>{navLink.label} 
                        </Link>
                    </li>
                ))}

            </ul> */}

<ul className='d-flex float-end list-unstyled py-4 m-0'>
        <li><a href="#home" className={`text-decoration-none px-3 ${activeLink === 'home' ? 'active-link' : 'text-white'}`}
              onClick={() => handleLinkClick('home')}>Home</a></li>

        <li><a href="#how-it-works" className={`text-decoration-none px-3 ${activeLink === 'how-it-works' ? 'active-link' : 'text-white'}`}
              onClick={() => handleLinkClick('how-it-works')}>How It Works</a></li>

        <li><a href="#explore" className={`text-decoration-none px-3 ${activeLink === 'explore' ? 'active-link' : 'text-white'}`}
              onClick={() => handleLinkClick('explore')}>Explore</a></li>

        <li><a href="#review" className={`text-decoration-none px-3 ${activeLink === 'review' ? 'active-link' : 'text-white'}`}
              onClick={() => handleLinkClick('review')}>Review</a></li>

        <li><a href="#blog" className={`text-decoration-none px-3 ${activeLink === 'blog' ? 'active-link' : 'text-white'}`}
              onClick={() => handleLinkClick('blog')}>Blog</a></li>

        <li><a href="#contact"className={`text-decoration-none px-3 ${activeLink === 'contact' ? 'active-link' : 'text-white'}`}
              onClick={() => handleLinkClick('contact')}>Contact</a></li>
      </ul>
        </div>













         {/* <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#how-it-work">How It Works</a></li>
        <li><a href="#explore">Explore</a></li>
        <li><a href="#review">Review</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav> */}
        </div>

    )
}

export default Navbar