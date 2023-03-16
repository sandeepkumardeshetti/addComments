// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {eachComment, toggleIsLiked, deleteComment} = props
  const {name, comment, isLiked, id, initialClassName} = eachComment
  const firstLetter = name.slice(0, 1)

  const onLikeButton = () => {
    toggleIsLiked(id)
  }

  const onDeleteButton = () => {
    deleteComment(id)
  }

  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeText = isLiked ? 'Liked' : 'Like'

  return (
    <li className="list-item-con">
      <div className="name-comment-bg-container">
        <p className={`profile-first-letter ${initialClassName}`}>
          {firstLetter}
        </p>
        <div className="name-comment-con">
          <div className="name-time-con">
            <p className="written-name">{name}</p>
            <p className="time">{formatDistanceToNow(new Date())}</p>
          </div>
          <p className="written-comment">{comment}</p>
        </div>
      </div>
      <div className="like-delete-con">
        <div className="icon-con">
          <button onClick={onLikeButton} type="button" className="icon-btn">
            <img className="icon-image" alt={likeText} src={likeImageUrl} />
          </button>
          <span className="icon-text">{likeText}</span>
        </div>
        <div className="icon-con">
          <button data-testid="delete" type="button" className="icon-btn">
            <img
              onClick={onDeleteButton}
              className="icon-image"
              alt="delete"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            />
          </button>
        </div>
      </div>
      <hr className="line" />
    </li>
  )
}

export default CommentItem
