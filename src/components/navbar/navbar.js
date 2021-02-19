import React from 'react'
import classes from './navbar.module.css'
import Logo from '../../assets/CodeAsylums.png'
import Avatar from '../../assets/avatar.svg'

class Navbar extends React.Component {
    render() {
        return(
            <div className={classes.Navbar}>
                <div className={classes.Logo}>
                    <img className={classes.LogoImage} src={Logo} alt="Logo" />
                </div>
                <div className={classes.Portal}>
                    <div className={classes.PortalLine}></div>
                    <span>Student Portal</span>
                </div>
                <div className={classes.EmptyDiv}>
                    <div className={classes.DivLine} ></div>
                </div>
                <div className={classes.Avatar}>
                    <img className={classes.AvatarImage} src={Avatar} alt="Avatar" />
                    <div className={classes.DivLine} ></div>
                </div>
            </div>
        )
    }
}

export default Navbar