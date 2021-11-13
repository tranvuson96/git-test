//importing 
import React, {Component} from 'react';
import { Container,Row,Col,ButtonToolbar,ButtonGroup,Button} from 'reactstrap';
import dateFormat from "dateformat";




class StaffList extends Component {

    constructor(props) {
        super(props);

        this.state={
            selectedStaff: null,
            numberOfColumn: null
                
        }
    }

    // khi ấn vào tên nhân viên
    onSelectedStaff(staff){
        this.setState({selectedStaff:staff});
    }
    renderPositionStaff(staff){
        if(staff!=null){
            var info=(
                <div>
                        <h3>Họ và tên:{staff.name}</h3>
                        <p>Ngày sinh:{dateFormat(staff.doB,"dd/mm/yyyy")}</p>
                        <p>Ngày vào công ty:{dateFormat(staff.startDate,"dd/mm/yyyy")}</p>
                        <p>Phòng ban:{staff.department.name}</p>
                        <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
                        <p>Số ngày đã làm thêm: {staff.overTime}</p>
                    </div>
            );
            if(staff.department.numberOfStaff<=3){
            return (
                <div>
                    {info}
                    <p>Chức danh: {this.props.role.MANAGER_STAFF}</p>
                </div>
            )};
            return (
                <div>
                    {info}
                    <p>Chức danh: {this.props.role.NORMAL_STAFF}</p>
                </div>
            );
        }
        else{
            return (
                <div></div>
            );
        }
    }
    // khi ấn gropbutton
    onButton1(){
        this.setState({numberOfColumn:1})
    }
    onButton2(){
        this.setState({numberOfColumn:2})
    }
    onButton3(){
        this.setState({numberOfColumn:3})
    }
    onButton4(){
        this.setState({numberOfColumn:4})
    }
    onButton6(){
        this.setState({numberOfColumn:6})
    }

    render(){
        const staff=this.props.staffs.map((staff)=>{
            return (
                    <Col 
                    key={staff.id} 
                    className="bg-light border"
                    onClick={()=>this.onSelectedStaff(staff)}
                    >{staff.name}</Col>
            )
        });
        const button=(
            <div>
                <ButtonToolbar>
                    <ButtonGroup>
                        <Button onClick={()=>this.onButton1()}>1 Column</Button>
                        <Button onClick={()=>this.onButton2()}>2 Columns</Button>
                        <Button onClick={()=>this.onButton3()}>3 Columns</Button>
                        <Button onClick={()=>this.onButton4()}>4 Columns</Button>
                        <Button onClick={()=>this.onButton6()}>6 Columns</Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
        );
        
        if(this.state.numberOfColumn!=null){
            if(this.state.numberOfColumn==1){
                return (
                    <Container>
                        <Row xs="1" sm="1" md="1" lg="1" xl="1">
                            {staff}
                        </Row>
                        <div>
                            {this.renderPositionStaff(this.state.selectedStaff)}
                        </div>
                        {button}
                    </Container>
                )
            };
            if(this.state.numberOfColumn==2){
                return (
                    <Container>
                        <Row xs="2" sm="2" md="2" lg="2" xl="2">
                            {staff}
                        </Row>
                        <div>
                            {this.renderPositionStaff(this.state.selectedStaff)}
                        </div>
                        {button}
                    </Container>
                )
            };
            if(this.state.numberOfColumn==3){
                return (
                    <Container>
                        <Row xs="3" sm="3" md="3" lg="3" xl="3">
                            {staff}
                        </Row>
                        <div>
                            {this.renderPositionStaff(this.state.selectedStaff)}
                        </div>
                        {button}
                    </Container>
                )
            };
            if(this.state.numberOfColumn==4){
                return (
                    <Container>
                        <Row xs="4" sm="4" md="4" lg="4" xl="4">
                            {staff}
                        </Row>
                        <div>
                            {this.renderPositionStaff(this.state.selectedStaff)}
                        </div>
                        {button}
                    </Container>
                )
            };
            if(this.state.numberOfColumn==6){
                return (
                    <Container>
                        <Row xs="6" sm="6" md="6" lg="6" xl="6">
                            {staff}
                        </Row>
                        <div>
                            {this.renderPositionStaff(this.state.selectedStaff)}
                        </div>
                        {button}
                    </Container>
                )
            }
        }
        else{
            return (
                <Container>
                    <Row xs="1" sm="2" md="2" lg="3" xl="3">
                        {staff}
                    </Row>
                    <div>
                        {this.renderPositionStaff(this.state.selectedStaff)}
                    </div>
                    {button}
                </Container>
            )
        }
    }
}

export default StaffList;