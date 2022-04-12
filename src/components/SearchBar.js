import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
	const [term, setTerm] = useState("");

	const onSubmit = (event) => {
		event.preventDefault();
		onFormSubmit(term);
	};

	return (
		<div className="search-bar ui segment">
			<label>Search For Videos</label>
			<form className="ui form" onSubmit={onSubmit}>
				<input
					type="text"
					className="field"
					value={term}
					onChange={(event) => {
						setTerm(event.target.value);
					}}
				/>
			</form>
		</div>
	);
};

export default SearchBar;
