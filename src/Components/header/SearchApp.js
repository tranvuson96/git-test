import React from "react";
import { Link } from "react-router-dom";

function SearchApp(props) {
	const people = props.staffs;
	const [searchTerm, setTerm] = React.useState("");
	const handleFilter = (event) => {
		const searchInput = event.target.value.toLowerCase();
		const filter = people.filter((person) => {
			return (
				person.name.toLowerCase().includes(searchInput) ||
				person.department.name.toLowerCase().includes(searchInput)
			);
		});
		if (searchInput === "") {
			setTerm([]);
		} else {
			setTerm(filter);
		}
	};
	return (
		<div>
			<input type='text' placeholder='Search' onChange={handleFilter} />
			{searchTerm.length !== 0 && (
				<ul className='results list-unstyled'>
					{searchTerm.map((person) => {
						return (
							<Link to={`/staffs/${person.id}`}>
								<li>{person.name}</li>
							</Link>
						);
					})}
				</ul>
			)}
		</div>
	);
}

export default SearchApp;
