import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PostList from './components/posts/PostList';
import { getPosts } from './redux/actions/postActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <div className="container">
      <h1 className="text-primary text-center">Workshop API with Redux</h1>
      <PostList />
    </div>
  );
}

export default App;
