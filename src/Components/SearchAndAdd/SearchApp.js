import React from "react";
import { Link } from "react-router-dom";
import {
	Button,
	Form,
	Label,
	Input,
	Card,
	CardImg,
	CardBody,
	CardTitle,
} from "reactstrap";
import Loading from "../Loading";

const SearchResult = ({ staffs, err, isLoading }) => {
	if (isLoading) {
		return (
			<div className='container'>
				<div className='row'>
					<Loading />
				</div>
			</div>
		);
	} else if (err) {
		return (
			<div className='container'>
				<div className='row'>
					<h4>{err}</h4>
				</div>
			</div>
		);
	} else if (staffs != null) {
		return staffs.map((staff) => {
			return (
				<Card className='col-12 col-md-6 col-lg-3' key={staff.id}>
					<Link to={`/staffs/${staff.id}`}>
						<CardImg src={staff.image} alt={staff.name} />
						<CardBody>
							<CardTitle>{staff.name}</CardTitle>
						</CardBody>
					</Link>
				</Card>
			);
		});
	} else {
		return <div></div>;
	}
};

class SearchApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			staffName: "",
			result: [],
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(e) {
		console.log(e.target.value);
		this.setState({ staffName: e.target.value });
	}

	handleSubmit(e) {
		const input = this.state.staffName.toLowerCase();
		const result = this.props.staffs.filter((staff) =>
			staff.name.toLowerCase().includes(input),
		);
		this.setState({ result: result });
		e.preventDefault();
	}

	render() {
		return (
			<React.Fragment>
				<div>
					<Form
						onSubmit={this.handleSubmit}
						className='col-12 col-md-6 col-lg-4 d-inline-flex justify-content-start'>
						<Label htmlFor='searchApp' md={2}></Label>
						<Input
							type='text'
							id='searchApp'
							name='searchApp'
							placeholder='Search'
							onChange={this.handleInputChange}
						/>
						<Button type='submit' color='primary'>
							Tìm kiếm
						</Button>
					</Form>
				</div>
				<div className='container'>
					<div className='row'>
						<SearchResult
							staffs={this.state.result}
							err={this.props.err}
							isLoading={this.props.isLoading}
						/>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default SearchApp;
