import { MouseEvent } from 'react'

interface ButtonProps {
	buttonText: string,
	classedAs: string, 
	onButtonClick: (event:MouseEvent) => {}
}
export default function Button(props:ButtonProps) {
	return (
		<button className={props.classedAs} onClick={props.onButtonClick}>{props.buttonText}</button>
	)
}