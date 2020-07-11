import React from 'react'
import classes from './userProfileProfessional.module.css'
import GeneralCard from '../generalCard/generalCard'
import experienceIcon from '../../assets/experience.svg'
import companyIcon from '../../assets/office.svg'
import locationIcon from '../../assets/location.svg'
import positionIcon from '../../assets/position.svg'
import detailsIcon from '../../assets/details.svg'
import { Card, Alert, Carousel } from 'antd'

class UserProfileProfessional extends React.Component {
    render() {

        const gridStyle = {
            width: '33.33%',
            textAlign: 'center',
          };


          const techSkills = this.props.skills.map((iterator, index) => (
            <Card.Grid style={gridStyle}>{iterator}</Card.Grid>
          ))

        return(
            <div className={classes.UserProfileProfessional}>
                <div className={classes.Left}>
                    <div className={classes.ExperienceCard}>
                        <GeneralCard icon={experienceIcon} main="2 yr" title="Experience" footer="Work experience" />
                    </div>
                    <div className={classes.CompanyCard}>
                        <GeneralCard icon={companyIcon} main="Nights Watch" title="Company" footer="Current Company" small />
                    </div>
                </div>
                <div className={classes.Right}>

                <div className={classes.RightRow2}>
                        {/* <div className={classes.RowItem}>
                            <Alert
                                message="Current Position"
                                description="King in the North"
                                type="info"
                            />
                        </div>
                        <div className={classes.RowItem}>
                            <Alert
                                message="Location"
                                description="Winterfell"
                                type="info"
                            />
                        </div>
                        <div className={classes.RowItemJob}>
                            <Alert
                                message="Job Details"
                                description="Management of Winterfell"
                                type="info"
                            />
                        </div> */}
                        <div className={classes.RowItem}>
                            <GeneralCard icon={positionIcon} main="King" title="Position" footer="Current Role" small />
                        </div>
                        <div className={classes.RowItem}>
                            <GeneralCard icon={locationIcon} main="Winterfell" title="Location" footer="Current Location" small />
                        </div>
                        <div className={classes.RowItemJob}>
                            <GeneralCard icon={detailsIcon} main="Management of Winterfell" title="Job Details" footer="Current Job Details" small />
                        </div>
                        
                    </div>
                    <div className={classes.SkillsCard}>
                        <Card title="Skills">
                            {techSkills}
                        </Card>
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}

export default UserProfileProfessional