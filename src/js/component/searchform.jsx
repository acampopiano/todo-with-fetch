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
					onKeyUp={e => props.handleKeyUp(e)}
				/>
			</form>
		</>
	);
};

SearchForm.propTypes = {
	handleKeyUp: PropTypes.func
};
