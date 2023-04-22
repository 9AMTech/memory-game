import { MouseEvent } from "react";
import Button from "../../Button";
import GameOverCSS from "./gameOver.module.css";

interface LoseScreenProps {
	message: string,
  onResetPress(event: MouseEvent): any;
}

export default function GameOverScreen(props: LoseScreenProps) {
  return (
    <section className={GameOverCSS.gameOverSectionWrapper}>
			<p className={GameOverCSS.message}>{props.message}</p>
      <Button
        onButtonClick={props.onResetPress}
        classedAs={GameOverCSS.resetButton}
        buttonText={"Try Again!"}
      />
    </section>
  );
}
