import React from 'react'
import classes from './userProfileProgramming.module.css'
import GeneralCard from '../generalCard/generalCard'
import hackerRank from '../../assets/hackerrank.jpg'
import spoj from '../../assets/spoj.jpeg'
import topCoder from '../../assets/topcoder.png'
import codeChef from '../../assets/codechef.png'
import codeForces from '../../assets/codeforces.png'
import {Card} from 'antd'
import {connect} from 'react-redux'

class UserProfileProgramming extends React.Component {

    state = {
        editMode : false,
        hackerRank : this.props.progProfile.hackerRank,
        spoj : this.props.progProfile.spoj,
        topCoder : this.props.progProfile.topCoder,
        codeChef : this.props.progProfile.codeChef,
        codeForces : this.props.progProfile.codeForces
    }

    handleEditButton = () => {
        this.setState({
            ...this.state,
            editMode : !this.state.editMode
        })
    }

    handleSubmit = () => {
        this.setState({
            ...this.state,
            editMode : !this.state.editMode
        })

        this.props.onChange(this.state)
    }

    hackerRankHandler = (e) => {
        this.setState({
            ...this.state,
            hackerRank : e.target.value
        })
    }
    spojHandler = (e) => {
        this.setState({
            ...this.state,
            spoj : e.target.value
        })
    }
    topCoderHandler = (e) => {
        this.setState({
            ...this.state,
            topCoder : e.target.value
        })
    }
    codeChefHandler = (e) => {
        this.setState({
            ...this.state,
            codeChef : e.target.value
        })
    }
    codeForcesHandler = (e) => {
        this.setState({
            ...this.state,
            codeForces : e.target.value
        })
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
                    <div className={classes.UserProfileProgramming}>
                        <div className={classes.Card}>
                            <GeneralCard icon={hackerRank} main={this.props.progProfile.hackerRank} title="HackerRank" footer="Profile Link" small />
                        </div>
                        <div className={classes.Card}>
                            <GeneralCard icon={spoj} main={this.props.progProfile.spoj} title="SPOJ" footer="Profile Link" small />
                        </div>
                        <div className={classes.Card}>
                            <GeneralCard icon={topCoder} main={this.props.progProfile.topCoder} title="TopCoder" footer="Profile Link" small />
                        </div>
                        <div className={classes.Card}>
                            <GeneralCard icon={codeChef} main={this.props.progProfile.codeChef} title="Codechef" footer="Profile Link" small />
                        </div>
                        <div className={classes.Card}>
                            <GeneralCard icon={codeForces} main={this.props.progProfile.codeForces} title="Codeforces" footer="Profile Link" small />
                        </div>
                        <button className={classes.EditButtonProgramming} onClick={this.handleEditButton}>Edit</button>
                    </div>
                ) : (
                    <div className={classes.UserProfileProgramming}>
                        <Card>
                            <Card.Grid style={gridStyleEdit}>
                                <div className={classes.EditCard}>
                                    <span className={classes.DetailsTitle}>HackerRank : </span>
                                    <input className={classes.InputAddress} onChange={(e) => this.hackerRankHandler(e)} value={this.state.hackerRank} type="text" />
                                </div>                     
                            </Card.Grid>
                            <Card.Grid style={gridStyleEdit}>
                                <div className={classes.EditCard}>
                                    <span className={classes.DetailsTitle}>SPOJ : </span>
                                    <input className={classes.InputAddress} onChange={(e) => this.spojHandler(e)} value={this.state.spoj} type="text" />
                                </div>
                                
                            </Card.Grid>
                            <Card.Grid style={gridStyleEdit}>
                            <div className={classes.EditCard}>
                                <span className={classes.DetailsTitle}>TopCoder : </span>
                                <input className={classes.InputAddress} onChange={(e) => this.topCoderHandler(e)} value={this.state.topCoder} type="text" />
                            </div>
                            </Card.Grid>
                            <Card.Grid style={gridStyleEdit}>
                            <div className={classes.EditCard}>
                                <span className={classes.DetailsTitle}>CodeChef : </span>
                                <input className={classes.InputAddress} onChange={(e) => this.codeChefHandler(e)} value={this.state.codeChef} type="text" />
                            </div>
                            </Card.Grid>
                            <Card.Grid style={gridStyleEdit}>
                            <div className={classes.EditCard}>
                                <span className={classes.DetailsTitle}>CodeForces : </span>
                                <input className={classes.InputAddress} onChange={(e) => this.codeForcesHandler(e)} value={this.state.codeForces} type="text" />
                            </div>
                            </Card.Grid>
                        </Card>
                        <button className={classes.SubmitButton} onClick={this.handleSubmit}>Submit</button>
                    </div>
                )
            }
                
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        progProfile : state.profile.programming
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChange : (state) => dispatch({
            type : 'PROGCHANGE',
            payload : state
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileProgramming)