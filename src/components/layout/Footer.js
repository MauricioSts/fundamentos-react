import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer (){
        return(
        <footer>
            <ul className={styles.sociallist} >
                <li>
                <FaFacebook/>
                </li>
                <li>
                <FaLinkedin/>
                </li>
                <li>
                <FaInstagram/>
                </li>
            </ul>
          <p>Redes sociais</p>
        </footer>
    )
}
export default Footer