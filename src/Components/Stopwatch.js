import React, { useState, useEffect } from 'react'



export default function Stopwatch() {
    
    const [minutes, setminutes] = useState('00')
    const [seconds, setseconds] = useState('00')
    const [isActive, setisActive] = useState(false);
    const [counter, setcounter] = useState(0);


        useEffect(() => {
            let intervalId;
            if (isActive) {
                intervalId = setInterval(() => {
                    
                    const secondCounter = counter % 60;
                    const minuteCounter = Math.floor(counter / 60)


                    const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}` : secondCounter;
                    const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}` : minuteCounter;
                

                    setseconds(computedSecond);
                    setminutes(computedMinute);

                    setcounter(counter => counter + 1);
                }, 1000)

                return () => clearInterval(intervalId);
            }
        }, [isActive, counter])
            
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

