import React from "react";
import PropTypes from "prop-types";
export const Tasks = () => {
	return (
		<>
			<ul className="list-group todos mx-auto text-light">
				<li className="list-group-item d-flex justify-content-between align-items-center">
					<span>play mariokart</span>
					<span className="delete">×</span>
				</li>
				<li className="list-group-item d-flex justify-content-between align-items-center">
					<span>defeat ganon in zelda</span>
					<span className="delete">×</span>
				</li>
				<li className="list-group-item d-flex justify-content-between align-items-center">
					<span>make a veggie pie</span>
					<span className="delete">×</span>
				</li>
			</ul>
		</>
	);
};
