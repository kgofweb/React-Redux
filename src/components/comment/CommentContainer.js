import { connect } from "react-redux"
import { useEffect } from "react"
import { callApi } from "../redux/comments/comments"

const CommentContainer = ({ apiData,  apiComment}) => {
  // console.log(apiData);

  useEffect(() => {
    apiComment()
  }, [apiComment])

  return (
    <div style={{ width: '50%', margin: 'auto' }}>
      <h2 style={{marginBottom: '.5rem' }}>Comments :</h2>
      {
        apiData.isLoading ?
        (<p>Loading...</p>)
        : apiData.error ?
        (<p>{apiData.error}</p>)
        : (apiData.comment.map(comment => {
          return (
            <p style={{marginBottom: '1.2rem', border: '1px solid lightGrey', padding: '.7rem' }} key={comment.id}>{comment.body}</p>
          )
        }))
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    //cmt se trouve au niveau du store
    apiData: state.cmt
  }
}

const mapDispatchToProps = dispatch => {
  return {
    apiComment: () => dispatch(callApi())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer)
