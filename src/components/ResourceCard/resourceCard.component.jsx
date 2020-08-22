import React from 'react';
import './resourceCard.styles.css';
import nodelogo from '../../assets/node.js.png';
import staricon from '../../assets/staricon.png';


export const ResourceCard = (props) => {
    return(
        <>
        <div className = "resourceCard_wrapper">
            <div className = "up">
                <img src={staricon} width = "20" height = "20" alt=""/>
            </div>
            <div className = "down">
                <img src={props.logo} width = "120" height = "120" alt=""/>
                <p className = "heading">
                    {props.heading}
                </p>
                <p className = "description">
                    Transfer source files, artifacts & static files to a DigitalOcean droplet artifacts & static files.
                </p>
            </div>

        </div>
        </>
    )
}