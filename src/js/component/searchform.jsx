import React from "react";
import PropTypes from "prop-types";
export const SearchForm = () => {
	return (
		<>
			<form className="search">
				<input
					className="form-control m-auto"
					type="text"
					name="search"
					placeholder="search in ToDo list"
				/>
			</form>
		</>
	);
};
