import React from 'react'
import styles from './Service.module.scss'

const Service = ({title, description, img, index,color}) => {
  return (
    <div className={styles.service} style={{
      flexDirection: index==="1"? 'row' : 'row-reverse',
    }}>
      <div className={styles.service__info}>
      <div>
        <h3>{title}</h3>
      <p>{description}</p>
      <button style={{
        borderColor: color
      }}>LEARN MORE</button>
      </div>
      
      </div>
      <div className={styles.service__illustration}>
        <img src={img} alt="illustration" />
      </div>
    </div>
  )
}

export default Service