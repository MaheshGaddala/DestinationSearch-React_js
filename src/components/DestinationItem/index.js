// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {id, name, imgUrl} = destinationDetails
  return (
    <li>
      <img className="img" src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
