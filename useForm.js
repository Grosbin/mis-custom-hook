import { useState } from "react";

export const useForm = (initialState = {}) => {
	const [formState, setFormState] = useState(initialState);

	const handleInputChange = (e) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value
		});
	}

	const reset = () =>{
		setFormState(initialState);
	}

	return [
		formState,
		handleInputChange,
		reset
	]	
}
