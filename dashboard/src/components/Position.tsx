import {useAppSelector} from "helpers/redux/store"

const Position: React.FC = () => {
  const hist = useAppSelector(state => state.history)

  return (
    <div className="position">
      Historique
      <div className="list-img">
        {hist.map((e, i) => {
          if (hist.length - i < 5) {
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
