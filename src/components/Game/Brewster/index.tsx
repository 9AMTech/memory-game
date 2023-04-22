import BrewsterCSS from "./brewster.module.css";

interface BrewsterProps {
  message: string;
}

export default function Brewster(props: BrewsterProps) {
	
  return <p className={BrewsterCSS.message}>{props.message}</p>;
}
