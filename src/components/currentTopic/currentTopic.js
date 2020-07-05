import React from 'react'
import classes from './currentTopic.module.css'
import './currentTopic.css'
import {Carousel, Tag} from 'antd'
import flashIcon from '../../assets/flash.svg'

class CurrentTopic extends React.Component{
    render() {
        function onChange(a, b, c) {
            console.log(a, b, c);
          }
        return(
            <div className={classes.CurrentTopic}>
                <div className={classes.Top}>
                    <div className={classes.Icon}>
                        <img src={flashIcon} alt="Flash" />
                    </div>
                    <span>Topics</span>
                </div>
                <Carousel
                    // dotsClass={classes.Dots}
                    slickGoTo={(index) => 2}
                    autoplay={true}
                    afterChange={onChange}>
                        <div className={classes.TopDiv}>
                            
                            <div className={classes.Middle}>
                                <span className={classes.Topic}>HTML components</span>
                                <Tag color="#108ee9">Active</Tag>
                            </div>
                        </div>

                        <div className={classes.TopDiv}>
                            {/* <div className={classes.Top}>
                                <div className={classes.Icon}>
                                    <img src={flashIcon} alt="Flash" />
                                </div>
                                <span>Topics</span>
                            </div> */}
                            <div className={classes.Middle}>
                                <span className={classes.Topic}>Styling with CSS</span>
                                {/* <Tag color="#108ee9">Active</Tag> */}
                            </div>
                        </div>

                        <div className={classes.TopDiv}>
                            {/* <div className={classes.Top}>
                                <div className={classes.Icon}>
                                    <img src={flashIcon} alt="Flash" />
                                </div>
                                <span>Topics</span>
                            </div> */}
                            <div className={classes.Middle}>
                                <span className={classes.Topic}>JavaScript</span>
                                {/* <Tag color="#108ee9">Active</Tag> */}
                            </div>
                        </div>
                    
                    {/* <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div> */}
                </Carousel>
            </div>
        )
    }
}

export default CurrentTopic