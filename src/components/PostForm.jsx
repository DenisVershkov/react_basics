import { useState } from 'react'
import MyButton from './UI/button/MyyButton'
import MyInput from './UI/input/MyInput'

const PostForm = ({create}) => {
  const [post, setPost] = useState({title:'', body: ''})

  function addNewPost(e) {
    e.preventDefault()
    const newPost = {...post, id: Date.now()}
    create(newPost)
    setPost({title:'', body: ''})
  }

  return (
    <form >
      <MyInput onChange={e => setPost({...post, title: e.target.value})} type="text" placeholder='название поста' value={post.title}/>
      <MyInput type="text" placeholder='описание поста' onChange={e => setPost({...post, body: e.target.value})} value={post.body} />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  )
}

export default PostForm
