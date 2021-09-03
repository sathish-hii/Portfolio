import React from 'react'
import "./Skills.css"
import { Element } from 'react-scroll'
import LinearProgress from '@material-ui/core/LinearProgress';
const Skills = () => {
    return (
        <div>
            <Element className="skills" id="skills">
             <div className="skillscontent">
                 <h2>SKILLSET</h2>
                <div className="skillset">
                    <h5>C</h5>
                    <div className="skillset_slider slider1">
                        <LinearProgress variant="determinate" value={75}/>
                    </div>
                    
                </div>
                <div className="skillset">
                    <h5>JAVA</h5>
                    <div className="skillset_slider slider2">
                        <LinearProgress variant="determinate" value={70}/>
                    </div>
                    
                </div>
                <div className="skillset">
                    <h5>REACT</h5>
                    <div className="skillset_slider slider3">
                        <LinearProgress variant="determinate" value={70}/>
                    </div>
                    
                </div>
                <div className="skillset">
                    <h5>SPRING</h5>
                    <div className="skillset_slider slider4">
                        <LinearProgress variant="determinate" value={75}/>
                    </div>
                    
                </div>
                <div className="skillset">
                    <h5>MYSQL</h5>
                    <div className="skillset_slider slider5">
                        <LinearProgress variant="determinate" value={75}/>
                    </div>
                    
                </div>
             </div>
            </Element>
        </div>
    )
}

export default Skills
