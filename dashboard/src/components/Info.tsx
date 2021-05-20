import {fetchGet} from "helpers/fetchers"
import {useAppSelector} from "helpers/redux/store"
import React, {useEffect, useState} from "react"

const Info = () => {
  const hist = useAppSelector(state => state.history)
  const [scoreMean, setScoreMean] = useState<string>("0")
  const [limit, setLimit] = useState(0)
  const [nbIn, setNbIn] = useState(0)
  const [nbOut, setNbOut] = useState(0)
  const [mIn, setMIn] = useState("0")
  const [mOut, setMOut] = useState("0")

  useEffect(() => {
    fetchGet("http://localhost:5000/config").then(data => setLimit(data))
  }, [])

  useEffect(() => {
    let total = 0
    let in_dist = 0
    let out_dist = 0
    let avg_in = 0
    let avg_out = 0
    for (let i = 0; i < hist.length; i++) {
      total += Number(hist[i].score)
      if (hist[i].label === "In Distribution") {
        in_dist += 1
        avg_in += Number(hist[i].score)
      } else {
        out_dist += 1
        avg_out += Number(hist[i].score)
      }
    }

    const avg = total / hist.length
    setScoreMean(avg.toFixed(2))
    setNbIn(in_dist)
    setNbOut(out_dist)
    setMIn((avg_in / hist.length).toFixed(2))
    setMOut((avg_out / hist.length).toFixed(2))
  }, [hist])

  return (
    <div className="info">
      Info
      <div className="sub-div">
        General
        <li>Size: {hist.length}</li>
        <li>
          Moyenne: <span>{scoreMean}</span>
        </li>
        <li>Limite: {limit}</li>
      </div>
      <div className="sub-div">
        In Distribution
        <li>Size: {nbIn}</li>
        <li>
          Moyenne: <span>{mIn}</span>
        </li>
      </div>
      <div className="sub-div">
        Out of Distribution
        <li>Size: {nbOut}</li>
        <li>
          Moyenne: <span>{mOut}</span>
        </li>
      </div>
    </div>
  )
}

export default Info
