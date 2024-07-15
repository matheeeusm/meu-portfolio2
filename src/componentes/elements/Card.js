import styles from './Card.module.css'


function Card({img, title, tech}){
    return(
        <div className={styles.card}>
            <img src={img}/>
            <div>
                <h3>{title}</h3>
                <p>{tech}</p>
            </div>
        </div>
    )
}

export default Card