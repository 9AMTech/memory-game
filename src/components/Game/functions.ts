import type { Villager } from "./";

const randomIntFromInterval = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateVillagers = () => {
  let villagerIds: number[] = [];

  const generateNumber = () => {
    let newID = randomIntFromInterval(1, 391);
    if (villagerIds.find((id) => id === newID)) generateNumber();
    else villagerIds.push(newID);
  };

  for (let i = 0; i < 8; i++) {
    generateNumber();
  }

  return villagerIds;
};

const parseVillagers = (selectedVillagers: number[], data: any): Villager[] => {
  // return selectedVillagers.map((villagerID) => {
  let newArray = selectedVillagers.map((villagerID) => {
    for (let key in data) {
      if (data[key].id === villagerID) {
        return {
          id: data[key].id,
          name: data[key].name["name-USen"],
          image: data[key].image_uri,
        } as Villager;
      }
    }
  });
  return newArray as Villager[];
};

const isNewVillager = (villagerIDs: number[], clickedPortraitID: number) => {
  let isNewVillager = true;
  let matched = villagerIDs.filter((element) => element === clickedPortraitID)
  if (matched.length === 0) isNewVillager = false;
  return isNewVillager;
};

// Fisher-Yates Shuffle https://bost.ocks.org/mike/shuffle/
const shuffle = (array:Villager[]) => {
	let m = array.length;
	let t;
	let i;

	// While there are elements to shuffle
	while(m) {
		// Pick a remaining element.
		i = Math.floor(Math.random() * m--);
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}
	
	return array;
} 

export { generateVillagers, parseVillagers, isNewVillager, shuffle };
