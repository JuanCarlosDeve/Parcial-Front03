import React from 'react'

const Card = ({ name, email, movie }) => {
	return (
		<div className='card'>
			<h2>Información</h2>
			<p><strong>Nombre:</strong> {name}</p>
			<p><strong>Email:</strong> {email}</p>
			<p><strong>Película Favorita:</strong> {movie}</p>
		</div>
	);
};

export default Card;