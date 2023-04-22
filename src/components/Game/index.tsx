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
import GameOverScreen from "./GameOverScreen";
import GameCSS from "./game.module.css";
import BrewsterDialogue from "../../assets/images/brewster-dialogue-box.png";
import EasterEgg from "./EasterEgg";

export interface Villager {
  id?: number;
  name?: string;
  image?: string;
}

export default function Game() {
  const messageList = {
    introduction:
      "Welcome to Brewsters Challenge! If you haven't seen a Villager, click them! Get all eight right, and you'll win a free cup of coffee!",
    streak1: "There we go! You are getting the hang of it!",
    streak2: "Five? Now that's a hoot!",
    streak3: "Lucky number seven. Can you spot the last villager?",
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
		clicked: 0
  });
  const [message, setMessage] = useState(messageList.introduction);

  const onResetPress = (event: MouseEvent) => {
    // Restart the Game
    let newStats = Object.assign({}, stats);

    // Resetting Game
    newStats.lives = 3;
    newStats.currentScore = 0;
    setStats(newStats);
    setMessage(messageList.introduction);

    // Gathering new Villagers
    setVillagerData(parseVillagers(generateVillagers(), data));

    // Resetting the old selected villager list
    const newArray: number[] = [];
    setSelected(newArray);
  };

	const onBrewsterPress = (event:MouseEvent) => {
		let newStats = Object.assign({}, stats);
		newStats.clicked++;
		if(newStats.clicked < 4) {
			if(newStats.clicked === 3){ 
				setMessage(messageList.poking3);
			}
			else if(newStats.clicked === 2){ 
				setMessage(messageList.poking2);
			}
			else {
				setMessage(messageList.poking1);
			}
			setStats(newStats);
		}
		else {
			setMessage(messageList.easteregg);
			setVillagerData(parseVillagers([187, 61, 6, 200, 112, 125, 371, 90,], data));
			newStats.clicked = 0;
			newStats.currentScore = 0;
			newStats.lives = 3;
			setStats(newStats);
		}
	}

  const onCardPress = (event: MouseEvent) => {
    let target = event.currentTarget as HTMLElement;
    let isNew = isNewVillager(
      selectedIDs,
      parseInt(target.dataset.id as string)
    );
		let newStats = Object.assign({}, stats);

    if (isNew) {
      // Logging the selected Villager
      let newArray = [...selectedIDs];
      newArray.push(parseInt(target.dataset.id as string));
      setSelected(newArray);

      // Updating Score
      newStats.currentScore++;

      // Setting Brewster Message
      if (selectedIDs.length + 1 === 7) {
        setMessage(messageList.streak3);
      } else if (selectedIDs.length + 1 >= 5 && selectedIDs.length + 1 < 7) {
        setMessage(messageList.streak2);
      } else if (selectedIDs.length + 1 >= 2 && selectedIDs.length + 1 < 5) {
        setMessage(messageList.streak1);
      }

      if (newStats.currentScore > newStats.highScore)
        newStats.highScore = newStats.currentScore;
      setVillagerData(shuffle([...villagerData]));
    } else {
      newStats.lives--;
      setVillagerData(shuffle([...villagerData]));
    }
		setStats(newStats);
  };

  return (
    <>
      {stats.lives === 0 ? <GameOverScreen onResetPress={onResetPress} message={'You lose! Unfortunate!'}/> : null }
      {stats.currentScore === 8 ? <GameOverScreen onResetPress={onResetPress} message={'You win! You get a free coffee from brewster!'}/> : null }
			<EasterEgg onBrewsterPress={onBrewsterPress}/>
      <section className={GameCSS.brewsterSpeechContainer}>
        <img
          src={BrewsterDialogue}
          alt="Animal Crossing Dialogue Box for Brewster"
        />
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
