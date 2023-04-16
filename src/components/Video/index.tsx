import bgVideo from "../../assets/videos/PerfectLoop.mp4";
import './video.module.css';

export default function Video() {
  return (
    <section className="video-wrapper">
      <video autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
        Sorry, your browser ain't workin
      </video>
    </section>
  );
}
