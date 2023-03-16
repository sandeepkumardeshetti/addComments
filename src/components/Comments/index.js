import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

const initialCommentsList = []

class Comments extends Component {
  state = {commentsList: initialCommentsList, name: '', comment: ''}

  nameChange = event => {
    this.setState({name: event.target.value})
  }

  commentChange = event => {
    this.setState({comment: event.target.value})
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachComment => eachComment.id !== id,
      ),
    }))
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state

    const initialBackgroundColorClassName = `${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: uuidV4(),
      name,
      comment,
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  render() {
    const {commentsList, name, comment} = this.state

    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="main-heading">Comments</h1>
          <div className="comments-writing-con">
            <form onSubmit={this.onAddComment} className="inputs-container">
              <p className="comments-guide">
                Say something about 4.0 Technologies
              </p>
              <input
                value={name}
                required
                onChange={this.nameChange}
                placeholder="Your Name"
                type="text"
                className="name"
              />
              <textarea
                value={comment}
                required
                onChange={this.commentChange}
                placeholder="Your Comment"
                className="comment"
                cols="50"
                rows="8"
              />
              <button className="btn" type="submit">
                Add Comment
              </button>
            </form>
            <div className="image-container">
              <img
                className="comments-img"
                alt="comments"
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              />
            </div>
          </div>
          <hr className="line" />

          <div className="comments-count-con">
            <span>{commentsList.length}</span>
            <p>Comments</p>
          </div>
        </div>
        <div className="added-comments-main-con">
          <ul className="added-comments-list-con">
            {commentsList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                deleteComment={this.deleteComment}
                toggleIsLiked={this.toggleIsLiked}
                eachComment={eachComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
