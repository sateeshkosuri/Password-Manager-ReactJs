import './index.css'

const SearchItems = props => {
  const {listDetails, isChecked, onDeleteList} = props
  const {id, userWebsite, userName, userPassword} = listDetails
  const singleLetter = userWebsite[0].toUpperCase()
  const colorList = [
    'yellow',
    'green',
    'orange',
    'brown',
    'blue',
    'lightGreen',
    'purple',
  ]
  const classValue = colorList[Math.floor(Math.random() * 7)]

  const onDeleteClick = () => {
    onDeleteList(id)
  }

  const password = isChecked ? (
    <p className="user-password">{userPassword}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars-image"
    />
  )
  return (
    <li className="list-container">
      <div className={`latter ${classValue}`}>{singleLetter}</div>
      <div className="user-details-container">
        <p className="website-name">{userWebsite}</p>
        <p className="user-name">{userName}</p>
        {password}
      </div>
      <div className="delete-container">
        <button
          type="button"
          className="delete-button"
          testid="delete"
          onClick={onDeleteClick}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}
export default SearchItems
