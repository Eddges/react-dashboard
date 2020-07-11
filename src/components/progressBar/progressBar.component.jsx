import React from 'react';
import './progressBar.styles.css';

const Progressbar = ({done}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 50);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
				{done}%
			</div>
		</div>
	)
}

export const Progress = (props) => (
	<>
		<Progressbar done={props.done}/>
	</>
);
	
