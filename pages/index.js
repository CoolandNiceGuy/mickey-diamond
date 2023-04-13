/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header/Header'
import { Stack } from '@mui/system'
import { useState } from 'react'
import SocialsTray from '@/components/SocialsTray/SocialsTray'
import YoutubeEmbed from '@/components/YoutubeEmbed/YoutubeEmbed'
import SubstackComponent from '@/components/SubstackComponent/SubstackComponent'
import SpotifyEmbed from '@/components/SpotifyEmbed/SpotifyEmbed'
import Section from '@/components/Section/Section'
import {AlbumCards} from '@/components/AlbumCard/AlbumCard'
import { Button, Paper, Typography } from '@mui/material'
import EmailInput from '@/components/EmailInput/EmailInput'

export default function Home() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <Head>
        <title>MICKEY DIAMOND</title>
        <meta name='viewport' content="height=device-height, 
          width=device-width, initial-scale=1.0, 
          minimum-scale=1.0, maximum-scale=1.0, 
          user-scalable=no"
        />
      </Head>
      <Header selectedTab={selectedTab} handleChange={handleChange}/>
      <Stack>
        <Section id="home">
          <h1 style={{fontFamily: 'Planet Kosmos'}} className={styles.nameHeader}>Mickey Diamond</h1>
          {/* add this to end of playlist link to enable autoplay: &autoplay=1 */}
          {/* can toggle mute as well */}
          {/* &autoplay=1 <- append this to end lof link allow autoplay*/}
          <div className={styles.embedWrapper}>
            <YoutubeEmbed playlistLink="https://www.youtube.com/embed/videoseries?list=PLOGfinRhhM27EgfXE6xvBzVc-b3-h96K9&mute=1&autoplay=1"/>
          </div>
        </Section>
        <Section id="music">
          <div className={styles.musicContainer}>
            <SpotifyEmbed/>
            <AlbumCards/>
          </div>
        </Section>
        <div className={styles.divider}/>
        <Section id="interviews">
          <h2 style={{fontStyle: 'italic', textAlign: 'center'}}>INTERVIEWS</h2>
          <div className={styles.interviewContainer}>
            <SubstackComponent
              title="Mickey Diamond X 1000WORD$ Part 1."
              imgSrc="https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc770f81e-9251-49b4-88be-292c22af9d57_2819x3404.jpeg"
              body="Mickey Diamond is a seasoned rapper hailing from Detroit that has been feeding the underground Hip-Hop scene with his gritty storytelling and versatile flow. 
              His lyrics paint vivid pictures of life growing up in his hometown."
              articleLink="https://thousandwords.substack.com/p/mickey-diamond-speaks-on-upcoming"
            />
            <SubstackComponent
              title="Mickey Diamond X 1000WORD$ Part 2."
              imgSrc="https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F292ddf83-d50f-4720-a1ec-ed234db326c5_2806x3417.jpeg"
              body="Before I got off the line with Mickey Diamond, I wanted to ask him about the difference between Flair and Diamond Dallas, and how Mickey Diamond separates the two."
              articleLink="https://thousandwords.substack.com/p/mickey-diamond-speaks-on-upcoming-0f0"
            />
          </div>
        </Section>
        <Section id="contact">
        <div className={styles.contactWrapper}>
          <EmailInput/>
          <Paper sx={{}} className={styles.linksPaper}>
            <div>
              <Typography variant="h2" gutterBottom className={styles.header}>
                Contact
              </Typography>
              <a 
                href="mailto:mickey@diamond.com?subject=Mickey Diamond | Booking"
                target="_blank" rel="noopener noreferrer"
                style={{height: 'fit-content'}}
              >
                <Button variant='contained' color='error' sx={{ width: '50%'}}>Bookings</Button>
              </a>
            </div>
            <div>
            <Typography variant="h2" gutterBottom className={styles.header}>
                Shop
              </Typography>
              <ul className={styles.linksList}>
                <li><a href="https://cphcrates.com/search?q=mickey+diamond" target="_blank" rel="noopener noreferrer">Copenhagen Crates</a></li>
                <li><a href="https://mickeydiamond.bandcamp.com/music" target="_blank" rel="noopener noreferrer">Bandcamp</a></li>
              </ul>
            </div>
          </Paper>
        </div>
        </Section>
      </Stack>
      <SocialsTray/>
    </>
  )
}