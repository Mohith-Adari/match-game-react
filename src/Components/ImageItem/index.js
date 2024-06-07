import './index.css'

const ImageItem = props => {
  const {details, imageMatch} = props
  const {thumbnailUrl, imageUrl} = details
  const matchOrNot = () => {
    imageMatch(imageUrl)
  }

  return (
    <li className="image-list">
      <button type="button" className="img-btn" onClick={matchOrNot}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default ImageItem
