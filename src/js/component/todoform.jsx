import React from "react";
import PropTypes from "prop-types";
export const TodoForm = props => {
	return (
		<>
			<form className="add text-center my-4">
				<label className="text-dark">Add a new ToDo...</label>
				<input
					className="form-control m-auto"
					type="text"
					name="add"
					onChange={e => {
						props.setAddToDo(e.target.value);
					}}
				/>
			</form>
		</>
	);
};

TodoForm.propTypes = {
	setAddToDo: PropTypes.func
};
