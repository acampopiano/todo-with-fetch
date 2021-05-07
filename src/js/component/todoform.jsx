import React from "react";
import PropTypes from "prop-types";
export const TodoForm = props => {
	return (
		<>
			<form
				onSubmit={props.validateForm}
				className="add text-center my-4">
				<label className="text-dark">Add a new ToDo...</label>
				<input
					className="form-control m-auto"
					type="text"
					name="add"
					onKeyPress={props.handleKeyPress}
				/>
			</form>
		</>
	);
};

TodoForm.propTypes = {
	handleKeyPress: PropTypes.func,
	validateForm: PropTypes.func
};
