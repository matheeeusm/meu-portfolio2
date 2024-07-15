import styles from './Projects.module.css'
import Card from '../elements/Card'
import lpdnc from '../../Image/projects/lpdnc.svg'
import tesla from '../../Image/projects/tesla.svg'
import previsao from '../../Image/projects/previsao.svg'

function Projects(){
    return(
        <div className={styles.projects} id='Projects'>
            <h1>Projetos</h1>
            <Card
            img={lpdnc}
            title='Primeira Landind Page - DNC'
            tech='Desenvolvimento de uma Landing Page para o lançamento da formação e tecnologia,
                onde foram usados os sistemas HTML, CSS e JAVASCRIPT.'          
            />
            <Card
            img={tesla}
            title='Site Tesla'
            tech='Site da Tesla desenvolvido usando HTML, CSS e JAVASCRIPT.'
            />
            <Card
            img={previsao}
            title='Previsão do tempo'
            tech='Site para conferir previsão em tempo real através do CEP e Latitude/Longitude.'
            />
        </div>
    )
}

export default Projects