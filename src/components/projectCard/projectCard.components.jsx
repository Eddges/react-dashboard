import React from 'react';
import './projectCard.styles.css';
import starlogo from '../../assets/star.png';
import clocklogo from '../../assets/clock.png';
import easylogo from '../../assets/easy.png';
import mediumlogo from '../../assets/medium.png';

export const ProjectCard = (props) => {
    return(
        <>
        <div className = "projectcard_wrapper">
            <div className = "projectcard_up">
                <p className="project_header">
                    {props.title}
                </p>
                <div className="project_description">
                    {props.description}
                </div>
            </div>
            <div className="projectcard_middle">
                <div className="rating">
                    <img src= {starlogo} alt=""/>
                    <p className="rating_lable">
                        {props.rating}
                    </p>
                </div>
                <div className="difficulty">
                    <img src= {easylogo} alt=""/>
                    <p className="difficulty_label">
                        {props.difficulty}
                    </p>
                </div>
                <div className="time">
                    <img src= {clocklogo} alt=""/>
                    <p className="time_label">
                        {props.time}
                    </p>
                </div>
            </div>
            <div className="projectcard_down">
                <div className="projectcard_footer">

                </div>
            </div>

        </div>
        </>
    )
}