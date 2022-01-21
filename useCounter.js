import { useState } from 'react';


export const useCounter = (initialState = 1) => {
	
	const [counter, setCounter] = useState(initialState);
	
	const factor = 1;
	const incremento = () => {
		setCounter(counter + factor);
	}

	const decremento = () => {
		setCounter(counter - factor);
	}

	const reset = () => {
		setCounter(initialState);
	}

	return {
		counter,
		incremento,
		decremento,
		reset
	};

}
