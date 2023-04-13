import styles from '@/styles/YoutubeEmbed.module.css'

const YoutubeEmbed = ({embedId, playlistLink}) => {
  return ( 
    <div className={styles.videoContainer}>
      <iframe
         width="853"
         height="480"
         src={playlistLink || `https://www.youtube.com/embed/${embedId}`}
         frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowFullScreen
         loading='lazy'
        >
      </iframe>
    </div>
   );
}
 
export default YoutubeEmbed;