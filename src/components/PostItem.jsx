import MyyButton from './UI/button/MyyButton';
import { useHistory } from 'react-router';

const PostItem = ({ post, remove }) => {
  const router = useHistory()
  
  return (
    <div className="post">
      <div className="post_content">
        <strong>
          {post.id}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <MyyButton onClick={() => router.push(`/posts/${post.id}`)}>Открыть</MyyButton>
        <MyyButton onClick={() => remove(post)}>Удалить</MyyButton>
      </div>
    </div>
  );
};

export default PostItem;
