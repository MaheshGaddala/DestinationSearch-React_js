// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    console.log(searchInput)
    return (
      <div className="bg-container">
        <h1>Destination Search</h1>
        <div className="search-input-container">
          <input
            type="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
            placeholder="Search"
            className="search-input"
            alt="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="search-icon"
            alt="Search Icon"
          />
        </div>
        <ul>
          {searchResults.map(eachItem => (
            <DestinationItem key={eachItem.id} destinationDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
