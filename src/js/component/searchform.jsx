import React from "react";
import PropTypes from "prop-types";
export const SearchForm = props => {
	return (
		<>
			<form className="search">
				<input
					className="form-control m-auto"
					type="text"
					name="search"
					placeholder="search in ToDo list"
					onChange={e => {
						props.setSearchToDo(e.target.value);
					}}
					onKeyPress={props.handleKeyPress}
				/>
			</form>
		</>
	);
};

SearchForm.propTypes = {
	setSearchToDo: PropTypes.func,
	handleKeyPress: PropTypes.func
};
