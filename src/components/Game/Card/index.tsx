import CardCSS from './card.module.css'
import { MouseEvent } from 'react'

interface CardProps {
	id?: number,
	name?: string,
	image?: string,
	onClick(event:MouseEvent): any,
}

export default function Card (props:CardProps) {
	return (
		<section className={CardCSS.card}>
			<img className={CardCSS.image} src={props.image} alt={props.name + ' Portrait'}></img>
			<h3 className={CardCSS.text}>{props.name}</h3>
		</section>
	)
}
