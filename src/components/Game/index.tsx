import { useState, useContext, MouseEvent } from "react";
import {
  VillagerData,
  VillagersContext,
  SetVillagersContext,
} from "../../Context";
import {
  generateVillagers,
  parseVillagers,
  isNewVillager,
  shuffle,
} from "./functions";
import Counter from "./Counter";
import Card from "./Card";
import Brewster from "./Brewster";
import GameCSS from "./game.module.css";
import BrewsterDialogue from '../../assets/images/brewster-dialogue-box.png'

export interface Villager {
  id?: number;
  name?: string;
  image?: string;
}

export default function Game() {
  const messageList = {
    introduction:
      "Welcome to Brewsters Challenge! If you haven't seen a Villager, click them! Get all eight right, and you'll win a free cup of coffee!",
    streak1: "Two in a row, you are getting the hang of it!",
    streak2: "Five in a row? Now that's a hoot!",
    streak3: "Lucky number seven. Can you spot the last villager?",
    lose1: "Oof, are you even trying?",
    lose2: "You did well! Better luck next time!",
    lose3: "So close! You almost had it!",
    poking1: "Did you just poke me?",
    poking2: "Please stop touching me.",
    poking3: "QUIT IT!",
    easteregg:
      "Hey Poob! I hope you are Poob, at least. You found me, these are your favorite villagers!",
  };

  const data = useContext(VillagerData);
  const villagerData = useContext(VillagersContext);
  const setVillagerData = useContext(SetVillagersContext);
  const [selectedIDs, setSelected] = useState<number[]>([]);
  const [stats, setStats] = useState({
    lives: 3,
    currentScore: 0,
    highScore: 0,
  });
  const [message, setMessage] = useState(messageList.introduction);

  const onCardPress = (event: MouseEvent) => {
    let target = event.currentTarget as HTMLElement;
    let isNew = isNewVillager(
      selectedIDs,
      parseInt(target.dataset.id as string)
    );
    if (isNew) {
      if (selectedIDs.length === 7) {
        // Win code, we don't have to continue the game because the player has already won.
        // Gathering new Villagers
        setVillagerData(parseVillagers(generateVillagers(), data));

        // Resetting the old selected villager list
        const newArray: number[] = [];
        setSelected(newArray);
      }
      // Logging the selected Villager
      let newArray = [...selectedIDs];
      newArray.push(parseInt(target.dataset.id as string));
      setSelected(newArray);

      // Updating Score
      let newStats = Object.assign({}, stats);
      newStats.currentScore++;

      if (newStats.currentScore > newStats.highScore)
        newStats.highScore = newStats.currentScore;
      setStats(newStats);
      setVillagerData(shuffle([...villagerData]));
    } else {
      if (stats.lives === 1) {
        // Restart the Game
        let newStats = Object.assign({}, stats);

        // Resetting Game
        newStats.lives = 3;
        newStats.currentScore = 0;
        setStats(newStats);

        // Gathering new Villagers
        setVillagerData(parseVillagers(generateVillagers(), data));

        // Resetting the old selected villager list
        const newArray: number[] = [];
        setSelected(newArray);
      } else {
        let newStats = Object.assign({}, stats);
        newStats.lives--;
        setStats(newStats);
        setVillagerData(shuffle([...villagerData]));
      }
    }
  };

  return (
    <>
      <section className={GameCSS.brewsterSpeechContainer}>
				<img src={BrewsterDialogue} alt='Animal Crossing Dialogue Box for Brewster' />
        <Brewster message={message} />
      </section>
      <section className={GameCSS.menuContainer}>
        <Counter
          lives={stats.lives}
          currentScore={stats.currentScore}
          highScore={stats.highScore}
        />
      </section>
      <section className={GameCSS.cardsContainer}>
        {villagerData?.map((villager) => (
          <Card
            id={villager?.id}
            name={villager?.name}
            image={villager?.image}
            onCardPress={onCardPress}
          />
        ))}
      </section>
    </>
  );
}
