import React,{useState,useEffect} from 'react'
import {Link} from 'react-scroll'
import "./Navbar.css"
const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
    useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)
  return (
    <div className={`navbar ${scrollPosition > 0 ? 'sticky' : ''}`}>
    <div className='Navbar_container'>
         <div className='Navbar_content'>
         <div className={click ? "nav-menu active" : "nav-menu"}>

                    <div className='nav-item'>
                        <Link to="/" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Home</Link>
                    </div>
                    <div className='nav-item'>
                        <Link to="about" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>About</Link>
                    </div>
                    <div className='nav-item'>
                        <Link to="mission" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Mission</Link>
                    </div>
                    
          </div>

         </div>
      
    </div>
    </div>
  )
}

export default Navbar

