import bgVideo from "../../assets/videos/PerfectLoop.mp4";
import VideoCSS from './video.module.css';

export default function Video() {
  return (
    <section className={VideoCSS.videoWrapper}>
      <video className={VideoCSS.video} autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
        Sorry, your browser ain't workin
      </video>
    </section>
  );
}
