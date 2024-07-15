import styles from './Skills.module.css'
import computador from '../../Image/skills/computador.svg'
import html from '../../Image/skills/html.svg'
import css from '../../Image/skills/css.svg'
import java from '../../Image/skills/java.svg'
import sigla from '../../Image/skills/sigla.svg'

function Skills(){
    return(
        <div className={styles.skill} id='Skills'>
            <h1>Blog</h1>
            <img src={computador}/>
            <img src={html}/>
            <img src={css}/>
            <img src={java}/>
            <img src={sigla}/>
            
        </div>
    )
}

export default Skills