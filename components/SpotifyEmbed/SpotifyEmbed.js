import styles from '@/styles/SpotifyEmbed.module.css'
import useMediaQuery from '@mui/material/useMediaQuery';

const SpotifyEmbed = () => {
  const isNotMobile = useMediaQuery('(min-width:600px)');

  return ( 
    <div className={styles.spotifyWrapper}> 
      {(isNotMobile)?
        <iframe 
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evNZXSBlU?utm_source=generator&theme=0" 
        height="680"
        width="100%"
        frameBorder="0" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
        allowtransparency="true"
        style={{"border-radius": "12px"}}
      >
      </iframe>:
      <iframe 
       style={{"border-radius": "12px", "margin-top": "2rem", "margin-bottom": "4rem"}}
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evNZXSBlU?utm_source=generator&theme=0" 
        width="100%" height="152" frameBorder="0" allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy">
      </iframe>
      }
    </div>
   );
}
 
export default SpotifyEmbed;