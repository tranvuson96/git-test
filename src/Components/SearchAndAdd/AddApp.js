import React from "react";
import { Button, Label, Modal, ModalBody, ModalHeader } from "reactstrap";
import { LocalForm, Errors, Control } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
class AddApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isModalOpen: false,
			tenState: { doB: "", startDate: "" },
		};
		this.toggleModal = this.toggleModal.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	toggleModal() {
		this.setState({ isModalOpen: !this.state.isModalOpen });
	}
	handleInputChange(e) {
		const value = e.target.value;
		const name = e.target.name;
		this.setState({ tenState: { ...this.state.tenState, [name]: value } });
	}
	handleSubmit(values) {
		this.toggleModal();
		const link = this.props.depts.filter(
			(dept) => dept.name === values.department,
		)[0];

		this.props.addStaff(
			values.name,
			values.doB,
			values.startDate,
			link,
			values.salaryScale,
			values.annualLeave,
			values.overTime,
		);
		console.log("Object:", values);
	}
	render() {
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
						<LocalForm onSubmit={(values) => this.handleSubmit(values)}>
							<div>
								<Label htmlFor='name'>Họ và tên</Label>
								<Control
									type='text'
									model='.name'
									id='name'
									name='name'
									validators={{
										required,
										min: minLength(2),
										max: maxLength(30),
									}}
								/>
								<Errors
									model='.name'
									className='text-danger'
									show='touched'
									messages={{
										required: "Bạn phải điền tên",
										min: "Phải có ít nhất 2 ký tự",
										max: "Không được quá 30 ký tự",
									}}
								/>
							</div>
							<div>
								<Label htmlFor='doB'>Ngày sinh</Label>
								<Control
									model='.doB'
									type='date'
									id='doB'
									name='doB'
									value={this.state.tenState.doB}
									onChange={this.handleInputChange}
									placeholder='dd/mm/yyyy'
									validators={{
										required,
									}}
								/>
								<Errors
									model='.doB'
									className='text-danger'
									show='touched'
									messages={{ required: "Không được bỏ trống" }}
								/>
							</div>
							<div>
								<Label htmlFor='startDate'>Ngày vào công ty</Label>
								<Control
									model='.startDate'
									type='date'
									id='startDate'
									name='startDate'
									value={this.state.tenState.startDate}
									placeholder='dd/mm/yyyy'
									onChange={this.handleInputChange}
									validators={{
										required,
									}}
								/>
								<Errors
									model='.startDate'
									className='text-danger'
									show='touched'
									messages={{ required: "Không được bỏ trống" }}
								/>
							</div>
							<div>
								<Label htmlFor='department'>Phòng Ban</Label>
								<Control.select
									model='.department'
									id='department'
									name='department'>
									<option>Chọn</option>
									<option>Sale</option>
									<option>IT</option>
									<option>HR</option>
									<option>Marketing</option>
									<option>Finance</option>
								</Control.select>
							</div>
							<div>
								<Label htmlFor='salaryScale'>Hệ số lương</Label>
								<Control.text
									model='.salaryScale'
									type='number'
									id='salaryScale'
									name='salaryScale'
									validators={{
										required,
										isNumber,
										min: minLength(0),
									}}
								/>
								<Errors
									model='.salaryScale'
									className='text-danger'
									show='touched'
									messages={{
										required: "Không được bỏ trống",
										isNumber: "phải là số",
										min: "phải lớn hơn 0",
									}}
								/>
							</div>
							<div>
								<Label htmlFor='annualLeave'>Số ngày nghỉ còn</Label>
								<Control.text
									model='.annualLeave'
									type='number'
									id='annualLeave'
									name='annualLeave'
									validators={{
										required,
										isNumber,
										min: minLength(0),
									}}
								/>
								<Errors
									model='.annualLeave'
									className='text-danger'
									show='touched'
									messages={{
										required: "Không được bỏ trống",
										isNumber: "phải là số",
										min: "Lớn hơn hoặc băng 0",
									}}
								/>
							</div>
							<div>
								<Label htmlFor='overTime'>Số ngày đã làm thêm</Label>
								<Control.text
									type='number'
									id='overTime'
									name='overTime'
									model='.overTime'
									validators={{ required, isNumber, min: minLength(0) }}
								/>
								<Errors
									model='.overTime'
									className='text-danger'
									show='touched'
									messages={{
										required: "Không được bỏ trống",
										isNumber: "phải là số",
										min: "Lớn hơn hoặc bằng 0",
									}}
								/>
							</div>
							<Button type='submit' value='submit' color='primary'>
								Xác Nhận
							</Button>
						</LocalForm>
					</ModalBody>
				</Modal>
			</React.Fragment>
		);
	}
}

export default AddApp;
