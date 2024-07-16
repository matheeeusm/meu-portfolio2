import styles from './Presentation.module.css'
import Button from '../elements/Button'
import {useEffect, useState} from 'react'

function Presentation(){
  const [text, setText] = useState('');
  const toRotate = ['eu sou o Matheus!'];
  const [loop, setLoop] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const period = 100;
  const [delta, setDelta] = useState(100)

  useEffect(()=>{
    let ticker = setInterval(()=>{
      toType()
    }, delta)
    return()=> {clearInterval(ticker)}

  }, [text])  

  const toType = () =>{
    let i = loop % toRotate.length;
    let fullText = toRotate[i] 
    let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1)

    setText(updatedText);

    if(!isDeleting && updatedText === fullText){
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === ''){
      setIsDeleting(false);
      setDelta(period);
      setLoop(loop+1);
    }
  }

  return(
    <div className={styles.presentation}>
      <h1>Olá, {text}<br/>
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