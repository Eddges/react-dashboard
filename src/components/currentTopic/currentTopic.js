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

        //   const activeStatus = this.props.currentTopic.map(iterator => {
        //       if(iterator.isActive) {
        //           return(
        //             <Tag color="#108ee9">Active</Tag>
        //           )
        //       }
        //   })

          const divRender = this.props.currentTopic.map((iterator, index) => (
              <div className={classes.TopDiv}>
                  <div className={classes.Middle}>
                      <span className={classes.Topic}>{iterator.topic}</span>
                      {
                          iterator.isActive ? <Tag color="#108ee9">Active</Tag> : null
                      }
                  </div>
              </div>
          ))

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
                        {
                            divRender
                        }
                </Carousel>
            </div>
        )
    }
}

export default CurrentTopic