import React from 'react'
import styles from "./button.module.css"

const Button = (props) => {
  return (
    <button onClick={props.onClick} style={{width: `${props.width}`, height: `${props.height}`}} className={styles.button} >{props.text}</button>
  )
}

export default Button
