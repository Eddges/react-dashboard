import React from 'react'
import classes from './userProfileBasic.module.css'
import Kit from '../../assets/kit.jpg'
import { Progress, Card } from 'antd'

class UserProfileBasic extends React.Component {
    render() {

        const gridStyle = {
            width: '100%',
            textAlign: 'left',
          };

        return(
            <div className={classes.UserProfileBasic}>
                <div className={classes.Left}>
                    <div className={classes.Avatar}>
                        <img src={Kit} alt="Avatar" />
                    </div>
                    <div className={classes.AvatarInfo}>
                        <div className={classes.Name}>
                            <ion-icon name="person-circle"></ion-icon>
                            <span className={classes.NameText}>Jon Snow</span>
                        </div>
                        <div className={classes.Mail}>
                            <ion-icon name="mail"></ion-icon>
                            <span className={classes.MailText}>jonsnow@gmail.com</span>
                        </div>
                        <div className={classes.Course}>
                            
                            <div className={classes.CourseInfo}>
                                <ion-icon name="school"></ion-icon>
                                <span className={classes.CourseText}>FullStack Web Development</span>
                            </div>
                            <span className={classes.ProgressText}>COURSE PROGRESS</span>
                            <Progress percent={60} status="active" />
                        </div>
                    </div>
                </div>

                <div className={classes.VerticalLineDiv}></div>
                <div className={classes.Right}>
                    {/* <div className={classes.RightHeader}>
                        <span>Details</span>
                    </div>
                    <div className={classes.RightForm}>

                    </div> */}
                    <Card title="Details">
                        <Card.Grid style={gridStyle}><span className={classes.DetailsTitle}>Gender</span> : Male</Card.Grid>
                        <Card.Grid style={gridStyle}><span className={classes.DetailsTitle}>DOJ</span> : 10 Jul, 2020</Card.Grid>
                        <Card.Grid style={gridStyle}><span className={classes.DetailsTitle}>Address Line 1 : </span>King's Room, Winterfell Palace</Card.Grid>
                        <Card.Grid style={gridStyle}><span className={classes.DetailsTitle}>Address Line 2 : </span>Winterfell, Kingdom of North, Westeros</Card.Grid>
                        {/* <Card.Grid style={gridStyle}>Content</Card.Grid>
                        <Card.Grid style={gridStyle}>Content</Card.Grid> */}
                    </Card>
                </div>
            </div>
        )
    }
}

export default UserProfileBasic