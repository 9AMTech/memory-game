import { createContext } from "react";
import {Villager} from './components/Game'

export const VillagerData = createContext({});
export const VillagersContext = createContext<Villager[]>([]);
export const SetVillagersContext = createContext<Villager[]>([]);