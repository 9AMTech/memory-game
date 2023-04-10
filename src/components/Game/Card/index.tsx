import CardCSS from './card.module.css'

interface CardProps {
	id: number,
	name: string,
	image: string,
}

export default function Card (props:CardProps) {
	return (
		<section className={CardCSS.card}>
			<img className={CardCSS.image} src={props.image} alt={props.name + ' Portrait'}></img>
			<h3 className={CardCSS.text}>{props.name}</h3>
		</section>
	)
}
