import './index.css'

const CardItem = props => {
  const {item} = props
  const {title, description, imgUrl, className} = item

  return (
    <li className={`card ${className}`}>
      <h1 className="title">{title}</h1>
      <p className="para1">{description}</p>
      <img className="img" src={imgUrl} alt={title} />
    </li>
  )
}

export default CardItem
