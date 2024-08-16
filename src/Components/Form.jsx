import React, { useState } from 'react'

export const Form = ({ onSubmit }) => {

	const [name, setName] = useState(" ");
	const [email, setEmail] = useState(" ");
	const [movie, setMovie] = useState(" ");
	const [error, setError] = useState(false);



	const handleSubmit = (event) => {
		event.preventDefault();

		if (name.trim().length < 3 || name.startsWith(' ')) {
			setError(true);
			return;
		}

		if (email.length < 6) {
			setError(true);
			return;
		}

		setError(false);
		onSubmit({ name, email, movie });
	};

	const reset = () => {
		setName('');
		setEmail('');
		setMovie('');
		setError(false);
	};

	return (
		<>
			<h2>Reponda las preguntas para crear su Cart</h2>
			{error && <p style={{ color: 'red' }}>Por favor chequea que la información sea correcta</p>}

			<form
				onSubmit={handleSubmit} className='formulario'>
				<label>Nombre:</label>
				<input
					className='input-css'
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<label>Email: </label>
				<input
					className='input-css'
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label>Pelicula Favorita</label>
				<input
					className='input-css'
					type="text"
					value={movie}
					onChange={(e) => setMovie(e.target.value)}
				/>

				<button className='pulse' type="submit">Enviar</button>
				<button className='pulse' onClick={reset}>Reset form</button>
			</form>



		</>
	);
};
