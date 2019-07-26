import React, { Component } from 'react'
import { render } from 'react-dom'


let skiData = {
    total: 50,
    powder: 20,
    backcountry: 10,
    goal: 100
}

// function component
const SkiDayCounter = (props) => {
    return (
        <section>
            <div>
                <p>Total Days: {props.total}</p>
            </div>
            <div>
                <p>Powder Days: {props.powder}</p>
            </div>
            <div>
                <p>Backcountry Days: {props.backcountry}</p>
            </div>
            <div>
                
            </div>
        </section>
    )
}

//class SkiDayCounter extends Component {
//    // custom methods:
//    getPercent = decimal => {
//        return decimal * 100 + '%'
//    }
//    calcGoalProgress = (total, goal) => {
//        return this.getPercent(total/goal)
//    }
//    render() {
//        // destructuring:
//        const { total, powder, backcountry, goal } = this.props
        
//    }
//}

render(
    <SkiDayCounter 
        total={skiData.total}
        powder={skiData.powder}
        backcountry={skiData.backcountry}
        goal={skiData.goal} />,
    document.getElementById('root')
)
