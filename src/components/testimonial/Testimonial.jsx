import React from 'react'
import styles from './Testimonial.module.scss'

const Testimonial = ({name, position, description, img}) => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.img}>
        <img src={img} alt="an individual" />
      </div>
      <div className={styles.description}>{description}</div>
      <div className={styles.info}>
        <h4>{name}</h4>
        <p>{position}</p>
      </div>
    </div>
  )
}

export default Testimonial