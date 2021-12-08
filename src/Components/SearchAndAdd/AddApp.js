import React from "react";
import {
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormFeedback,
	Modal,
	ModalBody,
	ModalHeader,
} from "reactstrap";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import { Errors } from "react-redux-form";
import StaffList from "../stafflist/StaffList";

class AddApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isModalOpen: false,
			staff: {
				id: 16,
				name: "",
				doB: dateFormat("", "dd/mm/yyyy"),
				salaryScale: 1,
				startDate: dateFormat("", "dd/mm/yyyy"),
				department: "",
				annualLeave: 0,
				overTime: 0,
				salary: 0,
				image: "/assets/images/alberto.png",
			},
			touched: {
				name: false,
				doB: false,
				startDate: false,
			},
		};
		this.toggleModal = this.toggleModal.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleBlur = (field) => (evt) => {
		this.setState({
			touched: { ...this.state.touched, [field]: true },
		});
	};
	toggleModal() {
		this.setState({ isModalOpen: !this.state.isModalOpen });
	}
	validate(name, doB, startDate) {
		const errors = {
			name: "",
			doB: "",
			startDate: "",
		};
		if (this.state.touched.name && (name.length < 3 || name === null))
			errors.name = "tên phải có ít nhất 3 ký tự";
		else if (this.state.touched.name && name.length > 30)
			errors.name = "số lượng ký tự không được quá 30";

		if (this.state.touched.doB && (doB === null || doB === "dd/mm/yyyy"))
			errors.doB = "Yêu cầu nhập";

		if (
			this.state.touched.startDate &&
			(startDate === null || startDate === "dd/mm/yyyy")
		)
			errors.startDate = "Yêu cầu nhập";

		return errors;
	}
	handleInputChange(e) {
		const value = e.target.value;
		const name = e.target.name;
		this.setState({ staff: { ...this.state.staff, [name]: value } });
	}
	handleSubmit(e) {
		let id = this.state.staff.id;
		this.setState({ staff: { ...this.state.staff, id: id + 1 } });
		console.log(this.state.staff);
		e.preventDefault();
	}
	render() {
		const errors = this.validate(
			this.state.staff.name,
			this.state.staff.doB,
			this.state.staff.startDate,
		);
		return (
			<React.Fragment>
				<div>
					<Button onClick={this.toggleModal}>
						<span className='fa fa-solid fa-plus'></span>Thêm nhân sự
					</Button>
				</div>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>Điền thông tin</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.handleSubmit}>
							<FormGroup>
								<Label htmlFor='name'>Họ và tên</Label>
								<Input
									type='text'
									id='name'
									name='name'
									value={this.state.staff.name}
									onBlur={this.handleBlur("name")}
									onChange={this.handleInputChange}
								/>
								<FormFeedback>{errors.name}</FormFeedback>
							</FormGroup>
							<FormGroup>
								<Label htmlFor='doB'>Ngày sinh</Label>
								<Input
									type='date'
									id='doB'
									name='doB'
									placeholder='dd/mm/yyyy'
									onBlur={this.handleBlur("doB")}
									onChange={this.handleInputChange}
								/>
								<FormFeedback>{errors.doB}</FormFeedback>
							</FormGroup>
							<FormGroup>
								<Label htmlFor='startDate'>Ngày vào công ty</Label>
								<Input
									type='date'
									id='startDate'
									name='startDate'
									placeholder='dd/mm/yyyy'
									onBlur={this.handleBlur("startDate")}
									onChange={this.handleInputChange}
								/>
								<FormFeedback>{errors.startDate}</FormFeedback>
							</FormGroup>
							<FormGroup>
								<Label htmlFor='department'>Phòng Ban</Label>
								<Input
									type='select'
									id='department'
									name='department'
									value={this.state.staff.department}
									onChange={this.handleInputChange}>
									<option>Sale</option>
									<option>IT</option>
									<option>HR</option>
									<option>Marketing</option>
									<option>Finance</option>
								</Input>
							</FormGroup>
							<FormGroup>
								<Label htmlFor='salaryScale'>Hệ số lương</Label>
								<Input
									type='number'
									id='salaryScale'
									name='salaryScale'
									value={this.state.staff.salaryScale}
									onChange={this.handleInputChange}
								/>
							</FormGroup>
							<FormGroup>
								<Label htmlFor='annualLeave'>Số ngày nghỉ còn</Label>
								<Input
									type='number'
									id='annualLeave'
									name='annualLeave'
									value={this.state.staff.annualLeave}
									onChange={this.handleInputChange}
								/>
							</FormGroup>
							<FormGroup>
								<Label htmlFor='overTime'>Số ngày đã làm thêm</Label>
								<Input
									type='number'
									id='overTime'
									name='overTime'
									value={this.state.staff.overTime}
									onChange={this.handleInputChange}
								/>
							</FormGroup>
							<Button type='submit' value='submit' color='primary'>
								Xác Nhận
							</Button>
						</Form>
					</ModalBody>
				</Modal>
			</React.Fragment>
		);
	}
}

export default AddApp;
