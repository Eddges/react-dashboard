import React from 'react'
import classes from './userProfileBasic.module.css'
import Kit from '../../assets/kit.jpg'
import { Progress, Card, DatePicker } from 'antd'
import {connect} from 'react-redux'

class UserProfileBasic extends React.Component {
    
    state = {
        editToggle : false,
        name : this.props.profile.name,
        email : this.props.profile.email,
        course : this.props.profile.course,
        progress : this.props.profile.progress,
        gender : this.props.profile.gender,
        DOJ : this.props.profile.DOJ,
        add1 : this.props.profile.add1,
        add2 : this.props.profile.add2
    }

    toggleEditMode = () => {
        this.setState({
            editToggle : !this.state.editToggle
        })
    }

    handleSubmit = () => {
        this.setState({
            editToggle : !this.state.editToggle
        })
        this.props.onChange(this.state)
    }

    componentWillMount(){
        console.log(this.state)
    }

    genderChangeHandler = (e) => {
        this.setState({
            ...this.state,
            gender : e.target.value
        })
    }

    add1ChangeHandler = (e) => {
        this.setState({
            ...this.state,
            add1 : e.target.value
        })
    }

    add2ChangeHandler = (e) => {
        this.setState({
            ...this.state,
            add2 : e.target.value
        })
    }

    onChange = (date, dateString) => {
        this.setState({
            ...this.state,
            DOJ : dateString
        })
      }

    render() {

        

        if(this.state.editToggle) {

        }

        const gridStyle = {
            width: '100%',
            textAlign: 'left',
          };

        return(
            <div className={classes.Container}>
                <div className={classes.UserProfileBasic}>
                    <div className={classes.Left}>
                        <div className={classes.Avatar}>
                            <img src={Kit} alt="Avatar" />
                        </div>
                        <div className={classes.AvatarInfo}>
                            <div className={classes.Name}>
                                <ion-icon name="person-circle"></ion-icon>
                                <span onClick={this.props.onChange} className={classes.NameText}>{this.props.profile.name}</span>
                            </div>
                            <div className={classes.Mail}>
                                <ion-icon name="mail"></ion-icon>
                                <span className={classes.MailText}>{this.props.profile.email}</span>
                            </div>
                            <div className={classes.Course}>
                                
                                <div className={classes.CourseInfo}>
                                    <ion-icon name="school"></ion-icon>
                                    <span className={classes.CourseText}>{this.props.profile.course}</span>
                                </div>
                                <span className={classes.ProgressText}>COURSE PROGRESS</span>
                                <Progress percent={this.props.profile.progress} status="active" />
                            </div>
                        </div>
                        <button onClick={this.toggleEditMode} className={classes.BasicEditButton}>Edit Profile</button>
                    </div>

                    <div className={classes.VerticalLineDiv}></div>
                    {
                        !this.state.editToggle ? (
                            <div className={classes.Right}>
                                <Card title="Details">
                                    <Card.Grid style={gridStyle}><span className={classes.DetailsTitle}>Gender</span> : {this.props.profile.gender}</Card.Grid>
                                    <Card.Grid style={gridStyle}><span className={classes.DetailsTitle}>DOJ</span> : {this.props.profile.DOJ}</Card.Grid>
                                    <Card.Grid style={gridStyle}><span className={classes.DetailsTitle}>Address Line 1 : </span>{this.props.profile.add1}</Card.Grid>
                                    <Card.Grid style={gridStyle}><span className={classes.DetailsTitle}>Address Line 2 : </span>{this.props.profile.add2}</Card.Grid>
                                </Card>
                            </div>
                        ) : (
                            <div className={classes.Right}>
                                <div className={classes.DivHeader}>
                                    <span>Edit Basic Information</span>
                                </div>
                                <Card>
                                    <Card.Grid style={gridStyle}>
                                        <div className={classes.EditCard}>
                                            <span className={classes.DetailsTitle}>Gender : </span>
                                            <select className={classes.GenderSelect} onChange={(e) => this.genderChangeHandler(e)} value={this.state.gender} >
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                    </Card.Grid>
                                    <Card.Grid style={gridStyle}>
                                        <div className={classes.EditCard}>
                                            <span className={classes.DetailsTitle}>DOB : </span>
                                            <span className={classes.DOBPicker}>
                                                <DatePicker onChange={this.onChange} />
                                            </span>
                                        </div>
                                    </Card.Grid>
                                    <Card.Grid style={gridStyle}>
                                        <div className={classes.EditCard}>
                                            <span className={classes.DetailsTitle}>Address Line 1 : </span>
                                            <input className={classes.InputAddress} onChange={(e) => this.add1ChangeHandler(e)} value={this.state.add1} type="text" />
                                        </div> 
                                    </Card.Grid>
                                    <Card.Grid style={gridStyle}>
                                        <div className={classes.EditCard}>
                                            <span className={classes.DetailsTitle}>Address Line 2 : </span>
                                            <input className={classes.InputAddress} onChange={(e) => this.add2ChangeHandler(e)} value={this.state.add2} type="text" />
                                        </div>
                                    </Card.Grid>
                                </Card>
                                <button className={classes.SubmitProfileButton} onClick={this.handleSubmit} >Submit Profile</button>
                            </div>
                        )
                    }
                    

                    
                    
                </div>
                {/* <div className={classes.Right}>
                        <div className={classes.DivHeader}>
                            <span>Edit Basic Information</span>
                        </div>
                        <Card>
                            <Card.Grid style={gridStyle}><span className={classes.DetailsTitle}>Gender : </span>
                                <select>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </Card.Grid>
                            <Card.Grid style={gridStyle}><span className={classes.DetailsTitle}>DOB : </span>
                                <span className={classes.DOBPicker}>
                                    <DatePicker onChange={onChange} />
                                </span>
                                
                            </Card.Grid>
                            <Card.Grid style={gridStyle}><span className={classes.DetailsTitle}>Address Line 1 : </span>
                                <input type="text" />
                            </Card.Grid>
                            <Card.Grid style={gridStyle}><span className={classes.DetailsTitle}>Address Line 2 : </span>
                                <input type="text" />
                            </Card.Grid>
                        </Card>
                        <button className={classes.SubmitProfileButton}>Submit Profile</button>
                    </div> */}
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return{
        profile : state.profile.basic
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChange : (state) => dispatch({
            type : 'CHANGE',
            dataLoad : state
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileBasic)