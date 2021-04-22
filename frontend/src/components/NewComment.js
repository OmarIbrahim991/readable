import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleCreateComment, handleEditComment } from '../actions/currentComments'
import Button from './Button'
import Input from './Input'


const NewComment = ({ visible, setVisibility, parentId, defaultId="", setDefaultId,
    defaultAuthor="", defaultBody="", setDefaultAuthor, setDefaultBody }) => {

    const [parentPost] = useSelector(state => state.posts.filter(p => p.id === parentId) || null)
    const [author, setAuthor] = React.useState("")
    const [body, setBody] = React.useState("")
    const dispatch = useDispatch()

    React.useEffect(() => {
        if (visible === true) {
            document.body.classList.add("blacked")
            document.querySelectorAll(".header select").forEach(s => s.classList.add("blacked"))
            if (defaultAuthor || defaultBody) {
                setAuthor(defaultAuthor)
                setBody(defaultBody)
            }
        }
        else {
            document.body.classList.remove("blacked")
            document.querySelectorAll(".header select").forEach(s => s.classList.remove("blacked"))
        }
    }, [visible, defaultAuthor, defaultBody])

    const closePopup = (e) => {
        e.preventDefault()
        setDefaultId && setDefaultId("")
        setDefaultAuthor && setDefaultAuthor("")
        setDefaultBody && setDefaultBody("")
        setAuthor("")
        setBody("")
        setVisibility(false)
    }

    const isDisabled = () => author.length === 0 || body.length === 0

    const handleSubmit = (e) => {
        e.preventDefault()
        if (defaultId !== "") { dispatch(handleEditComment({ id: defaultId, body, })) }
        else { dispatch(handleCreateComment({ author, body, parentId })) }
        setDefaultId && setDefaultId("")
        setDefaultAuthor && setDefaultAuthor("")
        setDefaultBody && setDefaultBody("")
        setAuthor("")
        setBody("")
        closePopup(e)
    }

    return (
        <div className={"new-popup " + (visible ? "visible" : "invisible")}>
            <form className="popup-form">
                <h1 className="close-icon clickable" onClick={closePopup}>X</h1>
                {parentPost && <h2>{defaultId === "" ? `Reply to '${parentPost.author}'` : `Edit comment`}</h2>}
                <Input text={author} setText={setAuthor} type="text" label="Author: " placeholder="Author" disabled={defaultAuthor !== ""} />
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
