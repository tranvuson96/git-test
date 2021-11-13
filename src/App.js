import React, {Component} from 'react';
import { Navbar , NavbarBrand} from 'reactstrap';
import './App.css';
import {STAFFS,DEPARTMENTS,ROLE} from './datas/staffs'
import StaffList from './Components/StaffListComponent';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      departments: DEPARTMENTS,
      staffs: STAFFS,
      role:ROLE
    }
  }
  render(){
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>
        <StaffList 
          staffs={this.state.staffs}
          role={this.state.role}
        />
        <p>Bấm vào tên nhân viên để xem thông tin</p>
      </div>
    )
  }
}
export default App;
