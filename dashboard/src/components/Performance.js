import React from 'react';
// import {useEffect, useState} from 'react';
import History from './Context';
import { Timeline } from 'antd';

const Performance = () => {
    const contextHist = React.useContext(History)



    return (
        <div className="performance">
            Images
            <div className="timeline">
            <Timeline>
                {contextHist.hist.map(
                        (e,i) => {
                            if (contextHist.hist.length - i < 7)
                            {
                                return (
                                    <Timeline.Item color={e.label === "In Distribution" ? "green": "red"}>{e.file.name} </Timeline.Item>
                                )
                            }
                        }
                    )}
            </Timeline>
            </div>
        </div>
    );
};

export default Performance;