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

  for (let i = 0; i < 10; i++) {
    generateNumber();
  }

  return villagerIds;
};

const parseVillagers = (array: number[], data: any) => {
  return array.map((item) => {
    for (let key in data) {
      if (data[key].id === item) {
        return {
          id: data[key].id,
          name: data[key].name["name-USen"],
          image: data[key].image_uri,
        };
      }
    }
  });
};

export { generateVillagers, parseVillagers };
