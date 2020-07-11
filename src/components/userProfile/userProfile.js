import React from 'react'
import classes from './userProfile.module.css'
import {NavLink} from 'react-router-dom'
import UserProfileBasic from '../userProfileBasic/userProfileBasic'
import UserProfileProgramming from '../userProfileProgramming/userProfileProgramming'
import UserProfileEducation from '../userProfileEducation/userProfileEducation'
import UserProfileProfessional from '../userProfileProfessional/userProfileProfessional'

class UserProfile extends React.Component{

    state = {
        active : 1
    }

    setActive = (curr) => {
        this.setState({
            active : curr
        })
    }

    

    render() {

        const skills = ["HTML", "CSS", "JavaScript", "React", "Linux", "Ansible", "Docker", "Kubernetes", "NodeJS"]

        let mainRender = <UserProfileBasic />

        if(this.state.active===1){
            mainRender = <UserProfileBasic />
        }
        if(this.state.active===2){
            mainRender = <UserProfileProfessional skills={skills} />
        }
        if(this.state.active===3){
            mainRender = <UserProfileProgramming/>
        }
        if(this.state.active===4){
            mainRender = <UserProfileEducation />
        }
        return(
            <div className={classes.UserProfile}>
                <div className={classes.Tabs}>
                    <div className={this.state.active===1 ? `${classes.TabItem} ${classes.TabItemActive}` : classes.TabItem} onClick={() => this.setActive(1)}>
                        <ion-icon  name="Person"></ion-icon>
                        <span className={classes.TabItemName}>Basic</span>
                    </div>

                    <div className={this.state.active===2 ? `${classes.TabItem} ${classes.TabItemActive}` : classes.TabItem} onClick={() => this.setActive(2)}>
                        <ion-icon  name="key"></ion-icon>
                        <span className={classes.TabItemName}>Professional</span>
                    </div>

                    <div className={this.state.active===3 ? `${classes.TabItem} ${classes.TabItemActive}` : classes.TabItem} onClick={() => this.setActive(3)}>
                        <ion-icon  name="code"></ion-icon>
                        <span className={classes.TabItemName}>Programming</span>
                    </div>

                    <div className={this.state.active===4 ? `${classes.TabItem} ${classes.TabItemActive}` : classes.TabItem} onClick={() => this.setActive(4)}>
                        <ion-icon  name="paper-plane"></ion-icon>
                        <span className={classes.TabItemName}>Education</span>
                    </div>
                </div>

                <div className={classes.Panel}>
                    {mainRender}
                </div>
            </div>
        )
    }
}

export default UserProfile