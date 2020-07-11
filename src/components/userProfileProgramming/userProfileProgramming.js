import React from 'react'
import classes from './userProfileProgramming.module.css'
import GeneralCard from '../generalCard/generalCard'
import hackerRank from '../../assets/hackerrank.jpg'
import spoj from '../../assets/spoj.jpeg'
import topCoder from '../../assets/topcoder.png'
import codeChef from '../../assets/codechef.png'
import codeForces from '../../assets/codeforces.png'

class UserProfileProgramming extends React.Component {
    render() {
        return(
            <div className={classes.UserProfileProgramming}>
                <div className={classes.Card}>
                    <GeneralCard icon={hackerRank} main="www.hackerrank.com/jon-show" title="HackerRank" footer="Profile Link" small />
                </div>
                <div className={classes.Card}>
                    <GeneralCard icon={spoj} main="www.spoj.com/jon-show" title="SPOJ" footer="Profile Link" small />
                </div>
                <div className={classes.Card}>
                    <GeneralCard icon={topCoder} main="www.topcoder.com/jon-show" title="TopCoder" footer="Profile Link" small />
                </div>
                <div className={classes.Card}>
                    <GeneralCard icon={codeChef} main="www.codechef.com/jon-show" title="Codechef" footer="Profile Link" small />
                </div>
                <div className={classes.Card}>
                    <GeneralCard icon={codeForces} main="www.codeforces.com/jon-show" title="Codeforces" footer="Profile Link" small />
                </div>
            </div>
        )
    }
}

export default UserProfileProgramming