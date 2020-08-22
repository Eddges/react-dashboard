import React from 'react';
import { Progress } from '../progressBar/progressBar.component';
import './course.styles.css';
import {Message} from '../course_message/message.component';
import {Achievement} from '../Achievement/achievement.component';
import {ResourceCard} from '../ResourceCard/resourceCard.component';
import { ProjectCard } from '../projectCard/projectCard.components';

export const Course = () => {
    return(
        <div className = "parent_course_wrapper">
            <div className = "course_details_wrapper">
                <h1>Full Stack development</h1>
                <Progress/>
                {/* <ResourceCard/> */}
                <div className="projectarea_header">
                    <p>All Projects</p>
                </div>
                <div className="projectarea">
                    <ProjectCard title = " Simple Chatty Bot" description = " You’ll get to know the basic syntax of Java and write a simple program using variables, conditions, loops, and functions." difficulty = "easy" time = "10 hours" rating = "4.2" />
                    <ProjectCard title = " Tic Tac Toe" description = " After finishing this project, you'll get to know a lot about planning and developing a complex program from scratch." difficulty = "easy" time = "10 hours" rating = "4.3" />
                    <ProjectCard title = " Maze Runner" description = " Mazes are amazing: keep running, find the exit if you can! If you are not too happy about getting stuck in the actual maze." difficulty = "easy" time = "18 hours" rating = "4.9" />
                    <ProjectCard title = " Simple Search Engine" description = " Gain confidence in working with files and console, and learn how to optimize the search process." difficulty = "easy" time = "10 hours" rating = "4.2" />
                    
                </div>
               
                
            </div>
            <div className = "course_current_information">
                <Achievement/>
                <Message/>
            </div>
            
        </div>
    )
}