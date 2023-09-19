import style from "../imageCard/ImageCard.module.css"
import { imageCardData } from "./imageCardData";

function ImageCard() {
  return (
    <div className={style.mainContainer}>
      <img src={imageCardData.Image} className={style.image} alt="error"/>
      <h4>{imageCardData.name}</h4>
      <p>{imageCardData.email}</p>
    </div>
  )
}

export default ImageCard; 
