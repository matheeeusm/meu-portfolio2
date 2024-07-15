import styles from './Presentation.module.css'
import Button from '../elements/Button'

function Presentation(){
    return(
        <div className={styles.presentation}>
            <h1>Olá, eu sou Matheus<br/>
              Desenvolvedor Full-Stack!
            </h1>
            <p>Sou um amante da tecnologia/programação e idéias inovadoras! Como desenvolvedor Full Stack Jr,<br/>
              tenho como compromisso resolver problemas complexos e trazer resultados maravilhosos<br/> para os
              projetos e negócios, sempre em busca de novos desafios!
            </p>
            <Button link='https://github.com/matheeeusm?tab=repositories' text='Acesse meu Github'/>
        </div>
    )
}

export default Presentation