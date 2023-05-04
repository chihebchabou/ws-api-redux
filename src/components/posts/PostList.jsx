import React from 'react';
import { useSelector } from 'react-redux';
import PostItem from './PostItem';

const PostList = () => {
  const { posts, isLoading, error } = useSelector(state => state.postReducer);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }

  return (
    posts && (
      <div className="py-5">
        <div className="row">
          {posts.map(post => (
            <PostItem post={post} key={post.id} />
          ))}
        </div>
      </div>
    )
  );
};

export default PostList;
