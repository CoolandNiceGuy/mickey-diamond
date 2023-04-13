import styles from '@/styles/EmailInput.module.css'
import { Paper, TextField, Button, Typography } from '@mui/material';

const EmailInput = () => {
  return ( 
    <Paper className={styles.emailInput}>
      <Typography variant="h4" gutterBottom sx={{textAlign: 'center'}}>
        Subscribe to updates from Mickey Diamond:
      </Typography>
      <TextField id="filled-basic" label="email" variant="filled" color="error" sx={{width: '100%', marginBottom: '1.5rem'}}/>
      <Button variant="contained" sx={{width: '100%'}} color="error">Subscribe</Button>
    </Paper>
   );
}
 
export default EmailInput;