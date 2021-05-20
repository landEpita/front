import {fetchPost} from "helpers/fetchers"
import {History} from "helpers/history"
import {historyActions} from "helpers/redux/history"
import {useAppDispatch} from "helpers/redux/store"
import React, {useCallback, useState} from "react"
import car from "../assets/car.png"

type ImgState = History

const Allocation = () => {
  const [img, setImg] = useState<ImgState>({
    file: null,
    img: null,
    label: "None",
    score: "inf",
  })

  const dispatch = useAppDispatch()

  const wrapSetImg = useCallback(
    (elt: ImgState) => {
      setImg(elt)
      if (elt.score !== "inf") {
        dispatch(historyActions.addHistory(elt))
      }
    },
    [dispatch],
  )

  const loadImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return
    }

    wrapSetImg({
      file: e.target.files[0],
      img: URL.createObjectURL(e.target.files[0]),
      label: "None",
      score: "inf",
    })
  }

  const submitChange = async () => {
    if (!img.file) {
      return
    }

    const data = new FormData()
    data.append("file", img.file)

    const responseData = await fetchPost("http://localhost:5000/predict", data)
    wrapSetImg({
      file: img.file,
      img: img.img,
      label: responseData.label === 1 ? "In Distribution" : "Out of Distribution",
      score: Number(responseData.loss),
    })
  }

  return (
    <div className="allocation">
      Validation de donnée
      <div className="allo_grid">
        <div className="img_loader">
          <img src={img.img ?? car} alt="img-aveugle" />
          <input className="input-file" type="file" onChange={e => loadImg(e)} />
          <button className="button" type="button" onClick={() => submitChange()}>
            <span>Submit </span>
          </button>
        </div>

        <div className="stats">
          <div className="content">
            <li>Nom: {img.file?.name ?? ""} </li>
          </div>
          <div className="content">
            <li>Label: {img.label} </li>
          </div>
          <div className="content">
            <li>Score: {img.score} </li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Allocation
