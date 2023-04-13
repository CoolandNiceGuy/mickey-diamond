import styles from '@/styles/AlbumCard.module.css'
import { Card, CardHeader, CardMedia, CardActions, Button, Grid} from '@mui/material';
import { faSpotify, faApple } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/system';

const AlbumCard = ({title, imgSrc, appleMusicLink, spotifyLink}) => {
  const { palette } = createTheme();
  const { augmentColor } = palette;
  const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

  const theme = createTheme({
    palette: {
      spotify: createColor('#1DB954'),
      appleMusic: createColor('#fc3c44'),
      black: createColor('#000000'),
    },
  });

  return ( 
    <Card className={styles.albumCard}>
      <CardHeader title={title} className={styles.cardTitle}/>
      <CardMedia
        component="img"
        height="194"
        image={imgSrc}
        alt={title}
        sx={{objectFit: 'contain'}}
        draggable={false}
      />
      <CardActions sx={{marginTop: '1rem', justifyContent: 'center'}}>
        <ThemeProvider theme={theme}>
        <a href={spotifyLink} target="_blank" rel="noopener noreferrer">
          <Button 
            variant="contained" 
            endIcon={<FontAwesomeIcon icon={faSpotify}/>}
            size="small"
            color="black"
            sx={{
              ':hover': {
                color: '#1DB954',
              },
            }}
          >
            Spotify
          </Button>
        </a>
        <a href={appleMusicLink} target="_blank" rel="noopener noreferrer">
          <Button 
            variant="contained" 
            endIcon={<FontAwesomeIcon icon={faApple}/>}
            size="small"
            color="black"
            sx={{
              ':hover': {
                color: '#fc3c44',
              },
            }}
          >
            Apple Music
          </Button>
        </a>
        </ThemeProvider>
      </CardActions>
    </Card>
   );
}

export const AlbumCards = () => {
  return(
    <div style={{display: 'flex', textAlign: 'center', flexDirection: 'column'}}>
      <h2 style={{fontStyle: 'italic'}}>Recently Released</h2>
      <Grid container spacing={0}>
        <Grid item xs={12} md={6}>
          <AlbumCard
            title="Oroku Saki"
            imgSrc="https://i.scdn.co/image/ab67616d00001e02a597f90811d772d20bdec78e"
            appleMusicLink="https://music.apple.com/us/album/oroku-saki/1659129053"
            spotifyLink="https://open.spotify.com/album/5UtbRnABCfC3SBMkwd5zom?si=-oVe0u0rQPy_aJdmw9WlKw"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AlbumCard
            title="Gucci Ghost"
            imgSrc="https://i.scdn.co/image/ab67616d00001e021147d3ab3a36a953c69a02b8"
            appleMusicLink="https://music.apple.com/us/album/gucci-ghost/1670980910"
            spotifyLink="https://open.spotify.com/album/64FRKxHgXiLDJGUgYeQP8r?si=eY2evV1kRyOawGYKXrzAXQ"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AlbumCard
          title="Bulletproof Bathrobes"
          imgSrc="https://i.scdn.co/image/ab67616d00001e02bcc6522ce7c59fc15794ff6f"
          appleMusicLink="https://music.apple.com/au/album/bulletproof-bathrobes/1623556894"
          spotifyLink="https://open.spotify.com/album/5SvIrSqYmywv0RTrR2qnSo?si=0O56LAATQeCf6vM5nz2CIA"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AlbumCard
          title="And His Name Was Death"
          imgSrc="https://i.scdn.co/image/ab67616d00001e02e5b31f82416711460abc8d3b"
          appleMusicLink="https://music.apple.com/br/album/and-his-name-was-death/1659119037?l=en"
          spotifyLink="https://open.spotify.com/album/03sw7fNZMvNSItAawZi9fA?si=58rct6ZMSoCxHpqr6pvKIg"
          />
        </Grid>
      </Grid>
    </div>
  )
}
 
export default AlbumCard;