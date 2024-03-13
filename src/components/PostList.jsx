import React, { useState, useEffect } from 'react';
import { getPosts } from '../services/api';
import PostDetail from './PostDetail';
import { styled } from '@mui/system';
import CircularProgress from '@mui/material/CircularProgress';

const PostListContainer = styled('div')({
  maxWidth: '800px',
  margin: 'auto',
  padding: '20px',
});

const Title = styled('h1')({
  textAlign: 'center',
  marginBottom: '20px',
});

const SpinnerContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '200px',
});

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPosts();
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <SpinnerContainer>
        <CircularProgress />
      </SpinnerContainer>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <PostListContainer>
      <Title>Social Network Application</Title>
      {posts.map(post => (
        <PostDetail key={post.id} userName={post.userName} post={post} />
      ))}
    </PostListContainer>
  );
};

export default PostList;
