import '../styles/App.css';
import PostList from '../components/PostList';
import { useState, useRef, useEffect } from 'react';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/modal/MyModal';
import MyyButton from '../components/UI/button/MyyButton';
import { usePosts } from '../hooks/UsePosts';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import useFetching from '../hooks/UseFetching';
import { getPageCount } from '../utils/pages';
import Pagination from '../components/UI/pagination/Pagination';
import { useObserver } from '../hooks/UseObserver';
import MySelect from '../components/UI/select/MySelect';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  useObserver(lastElement, page < totalPages, isPostsLoading, () => setPage(page + 1));

  function createPost(newPost) {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  function removePost(post) {
    setPosts(posts.filter((item) => item.id !== post.id));
  }

  function changePage(page) {
    setPage(page);
  }

  return (
    <div className="App">
      <MyyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        Создать пост
      </MyyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <MySelect
        onChange={(value) => setLimit(value)}
        value={limit}
        defaultValue="Кол-во элементов на странице"
        options={[
          { value: 5, name: '5' },
          { value: 10, name: '10' },
          { value: 25, name: '25' },
          { value: -1, name: 'Показать всё' },
        ]}
      />
      {postError && <h1>Произошла ошибка ${postError}</h1>}
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'посты про js'} />
      <div ref={lastElement} style={{ height: 20, background: 'red' }} />
      {isPostsLoading && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
          <Loader />
        </div>
      )}
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}

export default Posts;
