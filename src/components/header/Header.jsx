import React from 'react'
import styles from './Header.module.scss'
import Orange from '../../assets/images/desktop/image-header.jpg'


const Header = () => {
  return (
    <div className={styles.header}>
      <h2>WE ARE CREATIVES <br /><span>&darr;</span></h2>
      {/* <img src={Orange} alt="illustration of an orange" /> */}
    </div>
  )
}

export default Header