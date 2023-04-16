import { useState, useEffect, FC } from "react";
import { VillagerData, VillagersContext, SetVillagersContext } from "./Context";
import { generateVillagers, parseVillagers } from "./components/Game/functions";
import type { Villager } from "./components/Game";
import Game from "./components/Game";
import Video from "./components/Video";
import bgVideo from "./assets/videos/PerfectLoop.mp4";
import "./App.css";

const App: FC = () => {
  const [villagerData, setVillagerData] = useState({});
  const [villagers, setVillagers] = useState<Villager[]>([]);

  useEffect(() => {
    const acnhApi = async () => {
      const response = await fetch("https://acnhapi.com/v1/villagers/");
      const data = await response.json();
      setVillagerData(data);
      setVillagers(parseVillagers(generateVillagers(), data));
    };

    acnhApi();
  }, []);

  return (
    <div className="App">
      <Video />
      <VillagerData.Provider value={villagerData}>
        <VillagersContext.Provider value={villagers}>
          <SetVillagersContext.Provider value={setVillagers}>
            <Game />
          </SetVillagersContext.Provider>
        </VillagersContext.Provider>
      </VillagerData.Provider>
    </div>
  );
};

export default App;
