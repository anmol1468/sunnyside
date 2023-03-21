import React, { useState } from 'react';
import styles from "./Navbar.module.scss"
import {GiHamburgerMenu} from 'react-icons/gi';

const Navbar = () => {
  const [dropNav, setDropNav] = useState(false)

  function dropNavSwitch () {
    setDropNav(!dropNav)
  }

  const dropDownNav = <div className={styles.navbar + ' ' + styles.dropdown + ' ' + styles.slideBottom} style={{top: dropNav? "90%": "-100%"}}>
      <ul className={styles.navbar__links + ' ' + styles.dropdown}>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li> 
        <li><a href="#">Projects</a></li>
        <button className={styles.navbar__button + ' ' + styles.dropdown}>Contact</button>
      </ul>
      
    </div>


  return (
    <div className={styles.navbar}>
      <h3>sunnyside</h3>   
      <ul className={styles.navbar__links}>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Products</a></li>
        <button className={styles.navbar__button}>Contact</button>
      </ul>
      
      <div className={styles.navbar__ham}>
        <GiHamburgerMenu onClick={dropNavSwitch}/>
      </div>
      {dropNav? dropDownNav : null}
    </div>
  )
}

export default Navbar
