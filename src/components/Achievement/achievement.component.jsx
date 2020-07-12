import React from 'react';
import './achievement.styles.css';
import badge1 from '../../assets/medal.png';

export const Achievement = () => {
    return(
        <div className = "achievement_wrapper">
            <div className="achievement_header">
                <p>Achievements</p>
            </div>
            <div className="achievement_badge">
                <p>Badges collected</p>
                <div className="badges_collection">
                    <img src={badge1} alt=""/>
                    <img src={badge1} alt=""/>
                    <img src={badge1} alt=""/>
                </div>
            </div>
            <div className="achivement_information">
                <div className="achievement_event">
                    <p className = "label">Quizzes Passed</p>
                    <p className = "point">04</p>
                </div>
                <div className="achievement_point">
                    <p className = "label">Total Points</p>
                    <p className = "point">600xp</p>
                </div>
            </div>
        </div>
    )
}