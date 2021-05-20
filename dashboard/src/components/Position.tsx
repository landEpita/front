import {useContext} from "react"
import History from "./Context"

const Position: React.FC = () => {
  const contextHist = useContext(History)

  return (
    <div className="position">
      Historique
      <div className="list-img">
        {contextHist.hist.map((e, i) => {
          if (contextHist.hist.length - i < 5) {
            return (
              <img
                src={e.img ?? undefined}
                alt="aveugle"
                className={e.label === "In Distribution" ? "img-ok" : ""}
              />
            )
          }
          return null
        })}
      </div>
    </div>
  )
}

export default Position
