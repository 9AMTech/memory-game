import { useState, useEffect, FC } from "react";
import { VillagerData } from "./Context";
import Game from "./components/Game";
import "./App.css";

const App: FC = () => {
  const [villagerData, setVillagerData] = useState({});

  useEffect(() => {

		const acnhApi = async () => {
			// let defaultURL: string = URL ?? "https://acnhapi.com/v1/villagers/";
			const response = await fetch('https://acnhapi.com/v1/villagers/');
			const data = await response.json();
			setVillagerData(data);
		}

		acnhApi();
  }, []);
	

  return (
    <div className="App">
      <VillagerData.Provider value={villagerData}>
        <Game />
      </VillagerData.Provider>
    </div>
  );
};

export default App;
