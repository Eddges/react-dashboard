import React from 'react'
import classes from './home.module.css'
import DonutChart1 from '../donutChart1/donutChart1'
import Badge from '../badge/badge'
import HackathonCard from '../hackathonCard/hackathonCard'
import CurrentTopic from '../currentTopic/currentTopic'
import UpcomingHome from '../upcomingHome/upcomingHome'
import LeaderboardHome from '../leaderboardHome/leaderboardHome'

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

        const leaderboard = [{
            name : 'Peter Baelish',
            course : 'FullStack Web Development',
            score : '500xp'
        }, {
            name : 'Neddard Stark',
            course : 'FullStack Web Development',
            score : '440xp'
        }, {
            name : 'Jon Snow',
            course : 'FullStack Web Development',
            score : '410xp'
        }]

        const currentTopic = [{
            topic : 'HTML Components',
            isActive : false
        }, {
            topic : 'CSS Styling',
            isActive : false
        }, {
            topic : 'JS Programming',
            isActive : true
        }, {
            topic : 'DBMS with MongoDB',
            isActive : false
        }, {
            topic : 'Backend with NodeJS',
            isActive : false
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
                        <CurrentTopic active={5} currentTopic={currentTopic} />
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
                
                <div className={classes.HomeRow3}>
                    <div className={classes.LeaderboardHome}>
                        <LeaderboardHome leaderboard={leaderboard} />
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Home