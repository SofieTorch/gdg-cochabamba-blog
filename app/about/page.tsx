import React from 'react'
import styles from "./About.module.css"

const About = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>About</h1>
            <div className={styles.content}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, alias obcaecati debitis minima excepturi voluptatum deleniti voluptas expedita adipisci facere quasi aperiam exercitationem nemo unde quo, autem inventore voluptatibus suscipit.</p>
            </div>
        </div>
    )
}

export default About