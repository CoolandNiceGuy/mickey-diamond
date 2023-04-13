import styles from '@/styles/Header.module.css'
import { Tabs } from '@mui/material'
import LinkTab from '../LinkTab/LinkTab'

const Header = ({selectedTab, handleChange}) => {

  const selectedStyles = {
    backgroundColor: '#330000',
    color: 'white'
  }

  const destinations = [
    'home',
    'shows',
    'videos',
    'music',
    'contact'
  ]

  return ( 
    <div className={styles.header}>
      <Tabs value={selectedTab} onChange={handleChange} sx={{fontSize: '12px'}}>
        <LinkTab tabName="Home" to="home" handleChange={() => {handleChange(0)}}/>
        <LinkTab tabName="Music" to="music" handleChange={() => {handleChange(1)}}/>
        <LinkTab tabName="Interviews" to="interviews" handleChange={() => {handleChange(2)}}/>
        <LinkTab tabName="Contact" to="contact" handleChange={() => {handleChange(3)}}/>
        {/* <LinkTab tabName="Shows" to="shows" handleChange={() => {handleChange(4)}}/> */}
      </Tabs>
    </div>
   );
}
 
export default Header;