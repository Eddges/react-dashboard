import React from 'react'
import classes from './userProfileEducation.module.css'
import GeneralCard from '../generalCard/generalCard'
import collegeIcon from '../../assets/college.svg'
import yearIcon from '../../assets/year.svg'
import bookIcon from '../../assets/book.svg'
import {connect} from 'react-redux'
import {Card} from 'antd'

class UserProfileEducation extends React.Component {

    state = {
        editMode : false,
        college : this.props.eduProfile.college,
        year : this.props.eduProfile.year,
        semester : this.props.eduProfile.semester,
        course : this.props.eduProfile.course
    }

    handleEdit = () => {
        this.setState({
            ...this.state,
            editMode : !this.state.editMode
        })
    }

    collegeHandler = (e) => {
        this.setState({
            ...this.state,
            college : e.target.value
        })
    }
    courseHandler = (e) => {
        this.setState({
            ...this.state,
            course : e.target.value
        })
    }
    yearHandler = (e) => {
        this.setState({
            ...this.state,
            year : e.target.value
        })
    }
    semesterHandler = (e) => {
        this.setState({
            ...this.state,
            semester : e.target.value
        })
    }

    submitHandler = () => {
        this.setState({
            ...this.state,
            editMode : !this.state.editMode
        })
        this.props.onChange(this.state)
    }


    render() {

        const gridStyleEdit = {
            width: '100%',
            textAlign: 'left',
          };

        return(
            <div className={classes.Container}>
            {
                !this.state.editMode ? (
                    <div className={classes.UserProfileEducation}>
                        <div className={classes.Card}>
                            <GeneralCard icon={collegeIcon} main={this.props.eduProfile.college} title="College" footer="Current College" small />
                        </div>
                        <div className={classes.Card}>
                            <GeneralCard icon={yearIcon} main={this.props.eduProfile.year} title="Year" footer="Current Year" small />
                        </div>
                        <div className={classes.Card}>
                            <GeneralCard icon={bookIcon} main={this.props.eduProfile.course} title="Course" footer="Current Course" small />
                        </div>
                        <div className={classes.Card}>
                            <GeneralCard icon={bookIcon} main={this.props.eduProfile.semester} title="Semester" footer="Current Semester" small />
                        </div>
                        <button className={classes.EditButton} onClick={this.handleEdit}>Edit</button>
                    </div>
                ) : (
                    <div className={classes.UserProfileEducation}>
                        <Card>
                            <Card.Grid style={gridStyleEdit}>
                                <div className={classes.EditCard}>
                                    <span className={classes.DetailsTitle}>College : </span>
                                    <input className={classes.InputAddress} onChange={(e) => this.collegeHandler(e)} value={this.state.college} type="text" />
                                </div>                     
                            </Card.Grid>
                            <Card.Grid style={gridStyleEdit}>
                                <div className={classes.EditCard}>
                                    <span className={classes.DetailsTitle}>Course : </span>
                                    <input className={classes.InputAddress} onChange={(e) => this.courseHandler(e)} value={this.state.course} type="text" />
                                </div>
                                
                            </Card.Grid>
                            <Card.Grid style={gridStyleEdit}>
                            <div className={classes.EditCard}>
                                <span className={classes.DetailsTitle}>Year : </span>
                                <input className={classes.InputAddress} onChange={(e) => this.yearHandler(e)} value={this.state.year} type="text" />
                            </div>
                            </Card.Grid>
                            <Card.Grid style={gridStyleEdit}>
                            <div className={classes.EditCard}>
                                <span className={classes.DetailsTitle}>Semester : </span>
                                <input className={classes.InputAddress} onChange={(e) => this.semesterHandler(e)} value={this.state.semester} type="text" />
                            </div>
                            </Card.Grid>
                        </Card>
                        <button className={classes.SubmitButton} onClick={this.submitHandler}>Submit</button>
                    </div>
                    
                )
            }
                
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        eduProfile : state.profile.education
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChange : (state) => dispatch({
            type : 'EDUCHANGE',
            payload : state
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileEducation)