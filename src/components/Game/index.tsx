import { useState, useContext } from "react";
import { VillagerData } from "../../Context";
import { generateVillagers, parseVillagers } from "./functions";
import Card from './Card'
import GameCSS from './game.module.css'

interface Villagers {
	id: number,
	name: string,
	image: string
}

export default function Game() {
  const data = useContext(VillagerData);
	const [villagers, setVillagers] = useState<object[]>([]);
	let chosenVillagers = parseVillagers(generateVillagers(), data);

  return (
		<section className={GameCSS.cardsContainer}>
		{chosenVillagers.map(villager => (
			<Card id={villager?.id} name={villager?.name} image={villager?.image}/>
			))}
			</section>
);
}
