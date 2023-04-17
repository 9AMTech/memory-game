import CounterCSS from "./counter.module.css";
import bellBag from "../../../assets/images/bell-bag.png";

interface CounterProps {
  lives: number;
  currentScore: number;
  highScore: number;
}

export default function Counter(props: CounterProps) {
  return (
    <>
      <section className={CounterCSS.lives}>
        <h2>Remaining Lives</h2>
        <section className={CounterCSS.bellsContainer}>
          <img
            src={bellBag}
            alt={"Player's Life 1"}
            className={props.lives < 1 ? CounterCSS.inactive : ""}
          />
          <img
            src={bellBag}
            alt={"Player's Life 2"}
            className={props.lives < 2 ? CounterCSS.inactive : ""}
          />
          <img
            src={bellBag}
            alt={"Player's Life 3"}
            className={props.lives < 3 ? CounterCSS.inactive : ""}
          />
        </section>
      </section>

      <section className={CounterCSS.currentScore}>
        <h2> Current Score : {props.currentScore}</h2>
      </section>

      <section className={CounterCSS.highScore}>
        <h2> High Score : {props.highScore}</h2>
      </section>
    </>
  );
}
