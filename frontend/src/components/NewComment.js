import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleCreateComment } from '../actions/currentComments'
import Button from './Button'
import Input from './Input'


const NewComment = ({ visible, setVisibility, parentId }) => {
    const [parentPost] = useSelector(state => state.posts.filter(p => p.id === parentId) || null)
    const [author, setAuthor] = React.useState("")
    const [body, setBody] = React.useState("")
    const dispatch = useDispatch()

    React.useEffect(() => {
        if (visible === true) {
            document.body.classList.add("blacked")
            document.querySelectorAll(".header select").forEach(s => s.classList.add("blacked"))
        }
        else {
            document.body.classList.remove("blacked")
            document.querySelectorAll(".header select").forEach(s => s.classList.remove("blacked"))
        }
    }, [visible])

    const closePopup = (e) => {
        e.preventDefault()
        setVisibility(false)
    }

    const isDisabled = () => author.length === 0 || body.length === 0

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(handleCreateComment({ author, body, parentId }))
        setAuthor("")
        setBody("")
        closePopup(e)
    }

    return (
        <div className={"new-popup " + (visible ? "visible" : "invisible")}>
            <form className="popup-form">
                <h1 className="close-icon clickable" onClick={closePopup}>X</h1>
                {parentPost && <h2>Reply to '{parentPost.author}'</h2>}
                <Input text={author} setText={setAuthor} type="text" label="Author: " placeholder="Author" />
                <Input text={body} setText={setBody} type="text" label="Body: " placeholder="Body" />
                <div>
                    <Button onClick={closePopup}>Cancel</Button>
                    <Button disabled={isDisabled()} onClick={handleSubmit}>Reply</Button>
                </div>
            </form>
        </div>
    )
}

export default NewComment
