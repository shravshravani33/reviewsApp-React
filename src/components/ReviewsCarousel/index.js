import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviewIndex: 0}

  onLeftClick = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  onRightClick = () => {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props

    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  onProfileMethod = currentReviewDetails => {
    const {imgUrl, username, companyName, description} = currentReviewDetails

    return (
      <div className="inner-div">
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="company">{companyName}</p>
        <p className="desc">{description}</p>
      </div>
    )
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state

    const currentReviewDetails = reviewsList[activeReviewIndex]

    return (
      <div className="main-div">
        <h1>Reviews</h1>
        <div className="arrows-profile">
          <button
            type="button"
            onClick={this.onLeftClick}
            data-testid="leftArrow"
            className="arrows"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>

          {this.onProfileMethod(currentReviewDetails)}

          <button
            type="button"
            onClick={this.onRightClick}
            data-testid="rightArrow"
            className="arrows"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
