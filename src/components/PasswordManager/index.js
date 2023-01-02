import {Component} from 'react'
import {v4} from 'uuid'
import SearchItems from '../SearchItems'
import './index.css'

class PasswordManager extends Component {
  state = {
    userWebsite: '',
    userName: '',
    userPassword: '',
    count: 0,
    itemList: [],
    searchInput: '',
    isChecked: false,
  }

  onFormAddButton = event => {
    event.preventDefault()
    const {userName, userPassword, userWebsite, count} = this.state

    const newList = {
      id: v4(),
      userWebsite,
      userName,
      userPassword,
    }
    this.setState(prevState => ({
      itemList: [...prevState.itemList, newList],
      userWebsite: '',
      userName: '',
      userPassword: '',
    }))
    this.setState({count: count + 1})
  }

  onDeleteListItem = id => {
    const {itemList} = this.state
    const remainingListItems = itemList.filter(eachList => eachList.id !== id)

    this.setState({itemList: remainingListItems})
    console.log(itemList)

    this.setState(prevState => ({count: prevState.count - 1}))
  }

  renderNoPasswordView = () => (
    <div className="no-passwords-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="no-passwords-image"
      />
      <p className="no-password-para">No passwords</p>
    </div>
  )

  onCheckBoxClick = () => {
    const {isChecked} = this.state
    this.setState({isChecked: !isChecked})
    console.log(isChecked)
  }

  onSearchList = event => {
    const {searchInput} = this.state
    this.setState({searchInput: event.target.value})
    console.log(searchInput)
  }

  onChangePassword = event => {
    const {userPassword} = this.state
    this.setState({userPassword: event.target.value})
    console.log(userPassword)
  }

  onChangeUsername = event => {
    const {userName} = this.state
    this.setState({userName: event.target.value})
    console.log(userName)
  }

  onChangeWebsite = event => {
    const {userWebsite} = this.state
    this.setState({userWebsite: event.target.value})
    console.log(userWebsite)
  }

  render() {
    const {
      userWebsite,
      userName,
      userPassword,
      itemList,
      count,
      searchInput,
      isChecked,
    } = this.state

    const updateList = itemList.filter(eachList =>
      eachList.userName.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo-image"
        />
        <div className="card-top-container">
          <form className="form-container" onSubmit={this.onFormAddButton}>
            <h1 className="main-heading">Add New Password</h1>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-logo"
              />
              <input
                type="text"
                placeholder="Enter Website"
                className="input-item"
                value={userWebsite}
                onChange={this.onChangeWebsite}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-logo"
              />
              <input
                type="text"
                placeholder="Enter Username"
                className="input-item"
                value={userName}
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="input-logo"
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="input-item"
                value={userPassword}
                onChange={this.onChangePassword}
              />
            </div>
            <div className="add-button-container">
              <button type="submit" className="button">
                Add
              </button>
            </div>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager-image"
          />
        </div>
        <div className="card-bottom-container">
          <div className="password-container">
            <div className="your-password-container">
              <h1 className="heading">Your Passwords</h1>
              <p className="count">{count}</p>
            </div>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="input-logo"
              />
              <input
                type="search"
                placeholder="Search"
                className="input-item"
                value={searchInput}
                onChange={this.onSearchList}
              />
            </div>
          </div>
          <hr className="line" />
          <div className="show-check-container">
            <input
              type="checkbox"
              id="showPassword"
              checked={isChecked}
              onClick={this.onCheckBoxClick}
            />
            <label htmlFor="showPassword" className="label">
              Show Passwords
            </label>
          </div>
          {count === 0 ? (
            this.renderNoPasswordView()
          ) : (
            <ul className="unordered-list-container">
              {updateList.map(eachList => (
                <SearchItems
                  listDetails={eachList}
                  key={eachList.id}
                  isChecked={isChecked}
                  onDeleteList={this.onDeleteListItem}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default PasswordManager
