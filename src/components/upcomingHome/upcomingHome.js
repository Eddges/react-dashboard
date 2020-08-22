import React from 'react'
import classes from './upcomingHome.module.css'
import {Badge, Tabs} from 'antd'

const { TabPane } = Tabs;

const UpcomingHome = (props) => {
    return(
        <div className={classes.Upcoming}>
            <div className={classes.Top}>
                <span className={classes.Heading}>Upcoming Tasks <Badge count={2} /> </span>
            </div>
            <div className={classes.DivLine}></div>
            <div className={classes.Middle}>
                <Tabs defaultActiveKey="1" >
                    <TabPane tab="Quiz" key="1">
                    {/* <TabPane tab={`Quiz ` } key="1"> */}
                        <div className={classes.TabInfo}>
                            <div className={classes.Heading}>
                                <p>JavaScript Project Review</p>
                            </div>
                            <div className={classes.Details}>
                                <p>Jul 10, 16:00 hrs</p>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="Assignment" key="2">
                        <div className={classes.TabInfo}>
                            <div className={classes.Heading}>
                                <p>Assignment 4 Submission</p>
                            </div>
                            <div className={classes.Details}>
                                <p>Jul 15, 15:00 hrs</p>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="Hackathon" key="3">
                        <div className={classes.TabInfo}>
                            <div className={classes.Heading}>
                                <p>No pending Hackathons</p>
                            </div>
                            <div className={classes.Details}>
                                <p></p>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="Contest" key="4">
                        <div className={classes.TabInfo}>
                            <div className={classes.Heading}>
                                <p>Kaggle Coding Contest</p>
                            </div>
                            <div className={classes.Details}>
                                <p>Jul 13, 20:00 hrs</p>
                            </div>
                        </div>
                    </TabPane>
                </Tabs>
            </div>
            <div className={classes.Bottom}>
                <button className={classes.BottomButton}>Jump to Calendar</button>
            </div>
        </div>
    )
}

export default UpcomingHome