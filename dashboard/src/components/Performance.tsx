// import {useEffect, useState} from 'react';
import {Timeline} from "antd"
import {useAppSelector} from "helpers/redux/store"

const Performance: React.FC = () => {
  const hist = useAppSelector(state => state.history)

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
