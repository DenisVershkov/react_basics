import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PostItem from './PostItem';

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>;
  }

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
      {posts.map((item, index) => 
        <CSSTransition
              key={item.id}
              timeout={500}
              classNames="post"
            >
         <PostItem remove={remove} post={item} key={item.id} />
         </CSSTransition>
      )}
      </TransitionGroup>
    </>
  );
};

export default PostList;
