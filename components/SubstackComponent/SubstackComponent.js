import styles from '@/styles/SubstackComponent.module.css'
import { Paper, Typography, Button } from '@mui/material'
/* eslint-disable @next/next/no-img-element */
const SubstackComponent = ({title, imgSrc, body, articleLink}) => {
  return (
    <Paper elevation={3} sx={{maxWidth: 'min(450px, 100%)', padding: '1.5rem', margin: '1rem'}} variant="outlined">
      <Typography variant="subtitle1" gutterBottom className={styles.title}>
        {title}
      </Typography>
      <a href={articleLink} target="_blank" rel="noopener noreferrer">
        <img
          src={imgSrc}
          alt={title}
          style={{maxWidth: '100%'}}
        />
      </a>
      <Typography variant="body1" gutterBottom sx={{height: '140px'}}>
       {body}
      </Typography>
      <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '1rem'}}>
        <a href={articleLink} target="_blank" rel="noopener noreferrer">
          <Button variant="outlined" color="error">Check out the interview</Button>
        </a>
      </div>
    </Paper>
  )
}
 
export default SubstackComponent;