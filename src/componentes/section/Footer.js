import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer(){
    return(
        <div className={styles.footer} id='Footer'>
            <ul>
                <li><a href='https://www.facebook.com/matheus.martins.792303'><FaFacebookSquare size={30}/></a></li>
                <li><a href='https://www.instagram.com/matheeeusm_/'><FaInstagram size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/matheus-martins-013/'><FaLinkedin size={30}/></a></li>
            </ul> <br/>
            <p>Copyright ©2030 All rights reserved</p>
        </div>
    )
}

export default Footer