import {useContext} from "react"
// import {useEffect, useState} from 'react';
import History from "./Context"
import {Timeline} from "antd"

const Performance: React.FC = () => {
  const {hist} = useContext(History)

  return (
    <div className="performance">
      Images
      <div className="timeline">
        <Timeline>
          {hist
            .filter((_, i) => hist.length - i < 7)
            .map(e => {
              return (
                <Timeline.Item color={e.label === "In Distribution" ? "green" : "red"}>
                  {e.file?.name || ""}{" "}
                </Timeline.Item>
              )
            })}
        </Timeline>
      </div>
    </div>
  )
}

export default Performance
