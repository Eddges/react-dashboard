import React from 'react';
import {ResourceCard} from '../ResourceCard/resourceCard.component';
import './resource.styles.css';
import jslogo from '../../assets/js.png';
import reactlogo from '../../assets/reactlogo.png';
import linuxlogo from '../../assets/linuxlogo.png';
import dockerlogo from '../../assets/dockerlogo.png';
import reactnativelogo from '../../assets/reactnativelogo.png';
import flutterlogo from '../../assets/flutterlogo.png';


export const Resource = () => {
    return(
        <div className = "resource_wrapper">
             <ResourceCard heading  = "Node.js " logo = {jslogo}/>
             <ResourceCard heading  = "React" logo = {reactlogo}/>
             <ResourceCard heading  = "Linux Administration" logo = {linuxlogo} />
             <ResourceCard heading  = "Docker" logo = {dockerlogo} />
             <ResourceCard heading  = "React native" logo = {reactnativelogo} />
             <ResourceCard heading  = "Flutter" logo = {flutterlogo} />
            
        </div>
    )
}