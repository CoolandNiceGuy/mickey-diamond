import { useState } from "react";
import Header from "@/components/Header/Header";
import Section from "@/components/Section/Section";
import YoutubeEmbed from "@/components/YoutubeEmbed/YoutubeEmbed";
import SubstackComponent from "@/components/SubstackComponent/SubstackComponent";
import AlbumCard from "@/components/AlbumCard/AlbumCard";
import SpotifyEmbed from "@/components/SpotifyEmbed/SpotifyEmbed";

const AlbumCards = () => {
  return(
    <div>
    <AlbumCard
      title="Oroku Saki"
      imgSrc="https://i.scdn.co/image/ab67616d00001e02a597f90811d772d20bdec78e"
      appleMusicLink="https://music.apple.com/us/album/oroku-saki/1659129053"
      spotifyLink="https://open.spotify.com/album/5UtbRnABCfC3SBMkwd5zom?si=-oVe0u0rQPy_aJdmw9WlKw"
    />
    <AlbumCard
      title="Gucci Ghost"
      imgSrc="https://i.scdn.co/image/ab67616d00001e021147d3ab3a36a953c69a02b8"
      appleMusicLink="https://music.apple.com/us/album/gucci-ghost/1670980910"
      spotifyLink="https://open.spotify.com/album/64FRKxHgXiLDJGUgYeQP8r?si=eY2evV1kRyOawGYKXrzAXQ"
    />
    <AlbumCard
    title="Bulletproof Bathrobes"
    imgSrc="https://i.scdn.co/image/ab67616d00001e02bcc6522ce7c59fc15794ff6f"
    appleMusicLink="https://music.apple.com/au/album/bulletproof-bathrobes/1623556894"
    spotifyLink="https://open.spotify.com/album/5SvIrSqYmywv0RTrR2qnSo?si=0O56LAATQeCf6vM5nz2CIA"
    />
    </div>
  )
}

const Test = () => {
  const [value, setValue] = useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
    console.log(newValue)
  };

  return (
    <div>
      <Header selectedTab={value} handleChange={handleChange}/>
      <Section id="home">
        <h1>HOME</h1>
        <YoutubeEmbed playlistLink="https://www.youtube.com/embed/videoseries?list=PLOGfinRhhM27EgfXE6xvBzVc-b3-h96K9&mute=1"/>
      </Section>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '50%'}}>
          <Section id="interviews">
            <h1>INTERVIEWS</h1>
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
          </Section>
        </div>
        <div style={{width: '50%'}}>
          <Section id="music">
            <h1>MUSIC</h1>
            <SpotifyEmbed/>
            <AlbumCards/>
          </Section>
        </div>
      </div>
      <Section id="contact">
        <h1>CONTACT</h1>
      </Section>
    </div>
  );
}
 
export default Test;