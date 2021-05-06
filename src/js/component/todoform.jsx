import React from "react";
import PropTypes from "prop-types";
export const TodoForm = () => {
	return (
		<>
			<form className="add text-center my-4">
				<label className="text-dark">Add a new task...</label>
				<input
					className="form-control m-auto"
					type="text"
					name="add"
					onChange={e => {
						props.setAddTask(e.target.value);
					}}
				/>
			</form>
		</>
	);
};

TodoForm.propTypes = {
	setAddTask: PropTypes.func
};
