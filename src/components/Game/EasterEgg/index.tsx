import Poob from './poob.module.css';
import { MouseEvent } from 'react';

interface BrewsterProps {
	onBrewsterPress(event:MouseEvent):void,
}

export default function EasterEgg(props:BrewsterProps) {
	return <section className={Poob.BrewsterInDaBox} onClick={props.onBrewsterPress}></section>
}