import React from 'react'
import styles from './Footer.module.scss'
import {AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai'
import {BsPinterest} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h4>sunnyside</h4>
      <div className={styles.links}>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Projects</a>
      </div>
      <div className={styles.socials}>
        <AiFillFacebook />
        <AiOutlineInstagram />
        <AiOutlineTwitter />
        <BsPinterest />
      </div>
    </div>
  )
}

export default Footer