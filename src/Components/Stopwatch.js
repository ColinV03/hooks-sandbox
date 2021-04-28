import React, { useState, useEffect } from 'react'



export default function Stopwatch() {
    
    const [minutes, setminutes] = useState('00')
    const [seconds, setseconds] = useState('00')
    const [isActive, setisActive] = useState(false);
    const [counter, setcounter] = useState(0);


        useEffect(() => {
            let intervalId;
            //boolean check for a start
            if (isActive) {
                //set variable to the setInterval method. 
                intervalId = setInterval(() => {
                    
                    
                    const secondCounter = counter % 60;
                    const minuteCounter = Math.floor(counter / 60)

                    //boolean check for double digit value, if length is longer than a digit, then the double digit appears

                    const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}` : secondCounter;
                    const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}` : minuteCounter;
                
                    //CALL THE HOOKS!, update the value with the string of the current time. 
                    setseconds(computedSecond);
                    setminutes(computedMinute);

                    //count that! 
                    setcounter(counter => counter + 1);
                }, 1000)

                return () => clearInterval(intervalId);
            }
            // only runs when one of two things happen: isActive changes, or the counter changes.

        }, [isActive, counter])
    
    s
            //reset variables in state
        const  stopTimer = () => {
                setisActive(false);
                setcounter(0);
                setseconds('00');
                setminutes('00')
            }

            return (
                <div className="Container">
                    <div className="timer">
                        <h1> Timer: </h1>
                        <span> {minutes}</span>
                        <span>:</span>
                        <span>{seconds}</span>
                    </div>
                    <div className="controls">
                        <button className="startButton" onClick={() => setisActive(!isActive)}> {isActive ? "pause" : "start"}</button>
                        <button className="stopButton" onClick={() => stopTimer()}> Stop</button>
                    </div>
                </div>
            );
        }

