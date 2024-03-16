import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure } from '../redux/slices/postSlice';
import { getPosts } from '../services/api';
import PostDetail from './PostDetail';
import CircularProgress from '@mui/material/CircularProgress';

const PostList = () => {
  const dispatch = useDispatch();
  const { loading, posts, error } = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPostsRequest());
    getPosts()
      .then(response => dispatch(fetchPostsSuccess(response.data)))
      .catch(error => dispatch(fetchPostsFailure(error.message)));
  }, [dispatch]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {posts.map(post => (
        <PostDetail key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
