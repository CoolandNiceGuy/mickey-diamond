import styles from '@/styles/SocialsTray.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

const SocialsTray = () => {
  return ( 
    <div className={styles.socialsTray}>
        <a href="https://www.instagram.com/diamond__dallas"><FontAwesomeIcon icon={faInstagram}/></a>
        <a href="https://youtube.com/playlist?list=PLOGfinRhhM27EgfXE6xvBzVc-b3-h96K9"><FontAwesomeIcon icon={faYoutube}/></a>
        <a href="https://twitter.com/MickelasCage"><FontAwesomeIcon icon={faTwitter}/></a>
    </div>
   );
}
 
export default SocialsTray;