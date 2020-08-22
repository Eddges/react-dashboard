import React from 'react'
import classes from './donutChart.module.css'
import DonutChart from 'react-donut-chart';

const DonutChart1 = (props) => {
    return(
        <div className={classes.Donut}>
            
            <DonutChart
                colors = {['#00e396', '#4b7cf3', '#1f2f38', '#871d2f' ]}
                strokeColor='#00000000'
                innerRadius={0.65}
                outerRadius={0.9}
                // legend={false}
                // onClick={}
                onMouseEnter={(item) => null}
                className={classes.DonutChartMain}
                data={props.dataChart} />

                <div className={classes.LineDiv}></div>
                <div className={classes.Info}>
                    
                    <span className={classes.Total}>Total classes : <span className={classes.Number}>{props.classesNumber}</span></span>
                </div>
        </div>
    )
}

export default DonutChart1