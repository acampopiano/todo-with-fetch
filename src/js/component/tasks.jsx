import React from "react";
import PropTypes from "prop-types";
export const Tasks = props => {
	return (
		<>
			<ul className="list-group list-group-item-action todos mx-auto text-light">
				{props.data
					? props.data.map((item, i) => (
							<li
								key={`${i}`}
								className="list-group-item d-flex justify-content-between align-items-center">
								<span>{item.label}</span>
								<span className="delete">×</span>
							</li>
					  ))
					: "Loading..."}
			</ul>
		</>
	);
};

Tasks.propTypes = {
	data: PropTypes.array
};
