import React from 'react'
import classes from './userProfileProfessional.module.css'
import GeneralCard from '../generalCard/generalCard'
import experienceIcon from '../../assets/experience.svg'
import companyIcon from '../../assets/office.svg'
import locationIcon from '../../assets/location.svg'
import positionIcon from '../../assets/position.svg'
import detailsIcon from '../../assets/details.svg'
import { Card, Alert, Carousel, DatePicker } from 'antd'
import {connect} from 'react-redux'

class UserProfileProfessional extends React.Component {

    state={
        editMode : false,
        company : this.props.proProfile.company,
        experience : this.props.proProfile.experience,
        position : this.props.proProfile.position,
        location : this.props.proProfile.location,
        job_details : this.props.proProfile.job_details,
        skills : this.props.proProfile.skills.toString()
    }

    handleEdit = () => {
        this.setState({
            ...this.state,
            editMode : !this.state.editMode
        })
    }

    companyChangeHandler = (e) => {
        this.setState({
            ...this.state,
            company : e.target.value
        })
    }
    experienceChangeHandler = (e) => {
        this.setState({
            ...this.state,
            experience : e.target.value
        })
    }
    positionChangeHandler = (e) => {
        this.setState({
            ...this.state,
            position : e.target.value
        })
    }
    locationChangeHandler = (e) => {
        this.setState({
            ...this.state,
            location : e.target.value
        })
    }
    job_detailsChangeHandler = (e) => {
        this.setState({
            ...this.state,
            job_details : e.target.value
        })
    }
    skillsChangeHandler = (e) => {
        this.setState({
            ...this.state,
            skills : e.target.value
        })
    }

    handleSubmit = () => {
        this.setState({
            ...this.state,
            editMode : !this.state.editMode
        })

        this.props.onChange(this.state)
    }


    render() {

        const gridStyle = {
            width: '33.33%',
            textAlign: 'center',
          };
          const gridStyleEdit = {
            width: '100%',
            textAlign: 'left',
          };

          const techSkills = this.props.proProfile.skills.map((iterator, index) => (
            <Card.Grid style={gridStyle}>{iterator}</Card.Grid>
          ))



        return(
            
            <div className={classes.UserProfileProfessional}>
                <div className={classes.Left}>
                    <div className={classes.ExperienceCard}>
                        <GeneralCard icon={experienceIcon} main={this.props.proProfile.experience} title="Experience" footer="Work experience" />
                    </div>
                    <div className={classes.CompanyCard}>
                        <GeneralCard icon={companyIcon} main={this.props.proProfile.company} title="Company" footer="Current Company" small />
                    </div>
                    <button className={classes.ProfessionalEditButton} onClick={this.handleEdit}>Edit Details</button>
                </div>
                {
                    !this.state.editMode ? (
                        <div className={classes.Right}>

                            <div className={classes.RightRow2}>
                                    <div className={classes.RowItem}>
                                        <GeneralCard icon={positionIcon} main={this.props.proProfile.position} title="Position" footer="Current Role" small />
                                    </div>
                                    <div className={classes.RowItem}>
                                        <GeneralCard icon={locationIcon} main={this.props.proProfile.location} title="City" footer="Current Location" small />
                                    </div>
                                    <div className={classes.RowItemJob}>
                                        <GeneralCard icon={detailsIcon} main={this.props.proProfile.job_details} title="Job Details" footer="Current Job Details" small />
                                    </div>
                                    
                                </div>
                                <div className={classes.SkillsCard}>
                                    <Card title="Skills">
                                        {techSkills}
                                    </Card>
                                </div>
                                
                                
                            </div>
                    ) : (
                        <div className={classes.Right}>
                            <Card>
                                <Card.Grid style={gridStyleEdit}>
                                    <div className={classes.EditCard}>
                                        <span className={classes.DetailsTitle}>Company : </span>
                                        <input className={classes.InputAddress} onChange={(e) => this.companyChangeHandler(e)} value={this.state.company} type="text" />
                                    </div>
                                </Card.Grid>
                                <Card.Grid style={gridStyleEdit}>
                                    <div className={classes.EditCard}>
                                        <span className={classes.DetailsTitle}>Position : </span>
                                        <input className={classes.InputAddress} onChange={(e) => this.positionChangeHandler(e)} value={this.state.position} type="text" />
                                    </div>
                                </Card.Grid>
                                <Card.Grid style={gridStyleEdit}>
                                    <div className={classes.EditCard}>
                                        <span className={classes.DetailsTitle}>Experience : </span>
                                        <input className={classes.InputAddress} onChange={(e) => this.experienceChangeHandler(e)} value={this.state.experience} type="text" />
                                    </div>
                                </Card.Grid>
                                <Card.Grid style={gridStyleEdit}>
                                    <div className={classes.EditCard}>
                                        <span className={classes.DetailsTitle}>City : </span>
                                        <input className={classes.InputAddress} onChange={(e) => this.locationChangeHandler(e)} value={this.state.location} type="text" />
                                    </div>
                                </Card.Grid>
                                <Card.Grid style={gridStyleEdit}>
                                    <div className={classes.EditCard}>
                                        <span className={classes.DetailsTitle}>Job Details (100 letters) : </span>
                                        <input className={classes.InputAddress} onChange={(e) => this.job_detailsChangeHandler(e)} value={this.state.job_details} type="text" />
                                    </div>
                                </Card.Grid>
                                <Card.Grid style={gridStyleEdit}>
                                    <div className={classes.EditCard}>
                                        <span className={classes.DetailsTitle}>Skills : </span>
                                        <input className={classes.InputAddress} onChange={(e) => this.skillsChangeHandler(e)} value={this.state.skills} type="text" />
                                    </div>
                                </Card.Grid>
                            </Card>
                            <button className={classes.SubmitButton} onClick={this.handleSubmit} >Submit Changes</button>
                        </div>
                    )
                }
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        proProfile : state.profile.professional
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onChange : (state) => dispatch({
            type : 'PROCHANGE',
            payload : state
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileProfessional)