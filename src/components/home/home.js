import React from 'react'
import classes from './home.module.css'
import DonutChart1 from '../donutChart1/donutChart1'
import Badge from '../badge/badge'
import HackathonCard from '../hackathonCard/hackathonCard'
import CurrentTopic from '../currentTopic/currentTopic'
import UpcomingHome from '../upcomingHome/upcomingHome'

class Home extends React.Component {
    render() {

        const info=[{
                        label: 'Remaining',
                        value: 25
                    },
                    {
                        label: 'Attended',
                        value: 75
                }]

        return(
            <div className={classes.Home}>
                <div className={classes.HomeRow1}>
                    <div className={classes.Badge}>
                        <Badge grade="A+" />
                    </div>
                    <div className={classes.Badge}>
                        <HackathonCard grade="2" />
                    </div>
                    <div className={classes.CurrentTopic}>
                        <CurrentTopic active={3} />
                    </div>
                </div>
                
                <div className={classes.HomeRow2}>
                    <div className={classes.Donut}>
                        <DonutChart1 
                            dataChart={info}
                            classesNumber={15}
                        />
                    </div>
                    <div className={classes.UpcomingHome}>
                        <UpcomingHome />
                    </div>
                </div>
                
                
            </div>
        )
    }
}

export default Home