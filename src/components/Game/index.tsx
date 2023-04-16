import { useState, useContext, MouseEvent } from "react";
import { VillagerData, VillagersContext, SetVillagersContext } from "../../Context";
import {
  generateVillagers,
  parseVillagers,
  isNewVillager,
	shuffle,
} from "./functions";
import Card from "./Card";
import GameCSS from "./game.module.css";

export interface Villager {
	id?: number,
	name?: string,
	image?: string,
}

export default function Game() {
  const data = useContext(VillagerData);
	const villagerData = useContext(VillagersContext);
	const setVillagerData = useContext(SetVillagersContext);
	const [selectedIDs, setSelected] = useState<number[]>([]);
	const [stats, setStats] = useState({});


	const onCardPress = (event:MouseEvent) => {
		let target = event.target as HTMLElement;
		let isNew = isNewVillager(selectedIDs, parseInt(target.id));
		if(isNew) {
			// Logging the selected Villager
			let newArray = [...selectedIDs];
			newArray.push(parseInt(target.id));
			setSelected(newArray);

			// Rearranging villagers
			let newVillagerArray = shuffle([...villagerData]);
		}
		else {
			// Deduct One Life
			// Set lives counter
			// If lives goes under 3, restart the game

			// 
		}
	}

  return (
    <section className={GameCSS.cardsContainer}>
      {villagerData?.map((villager) => (
        <Card id={villager?.id} name={villager?.name} image={villager?.image} onClick={onCardPress}/>
      ))}
    </section>
  );
}
