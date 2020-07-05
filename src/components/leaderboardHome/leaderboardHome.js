import React from 'react'
import classes from './leaderboardHome.module.css'
import leaderIcon from '../../assets/leader.svg'

const LeaderboardHome = (props) => {

    const leaderRender = (
        props.leaderboard.map((iterator, index) => (
            <div className={classes.RankContainer}>
                <div className={classes.Rank}>
                    <div className={classes.Position}>
                        <span>{index+1}</span>
                    </div>
                    <div className={classes.Name}>
                        <span>{iterator.name}</span>
                    </div>
                    <div className={classes.Course}>
                        <span>{iterator.course}</span>
                    </div>
                    <div className={classes.Score}>
                        <span>{iterator.score}</span>
                    </div>
                </div>
            {/* <div className={classes.DivLine}></div> */}
            </div>
            
        ))
    )


    return(
        <div className={classes.LeaderboardHome}>
            <div className={classes.Top}>
                <div className={classes.TopIcon}>
                    <img src={leaderIcon} alt="Leader Icon" />
                </div>
                <span>Leaderboard</span>
            </div>
            {/* <div className={classes.DivLine}></div> */}
            <div className={classes.Title}>
                <div className={classes.Position}>
                    <span>POSITION</span>
                </div>
                <div className={classes.Name}>
                    <span>NAME</span>
                </div>
                <div className={classes.Course}>
                    <span>COURSE</span>
                </div>
                <div className={classes.Score}>
                    <span>SCORE</span>
                </div>
            </div>
            <div className={classes.DivLine}></div>
            <div className={classes.Ranking}>

                { leaderRender }

            </div>
        </div>
    )
}

export default LeaderboardHome