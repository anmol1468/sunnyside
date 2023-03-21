import React from 'react'
import styles from './Feature.module.scss'

const Feature = ({title, description, img}) => {
  return (
    <div className={styles.feature} style={{
      backgroundImage: `url(${img})`
    }} >
      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      
    </div>
  )
}

export default Feature