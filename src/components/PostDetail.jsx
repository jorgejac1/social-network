import React, { useMemo } from 'react';
import { styled } from '@mui/system';

const RootContainer = styled('div')({
  margin: '16px',
  padding: '16px',
  backgroundColor: '#f5f5f5',
  borderRadius: '4px',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
});

const UserName = styled('h2')({
  marginBottom: '8px',
  color: 'blue',
});

const Title = styled('h3')({
  marginBottom: '6px',
});

const Body = styled('div')({
  fontSize: '16px',
  lineHeight: '1.6',
});

const PostDetail = ({ userName, post }) => {
  const RootContainerMemo = useMemo(() => RootContainer, []);

  return (
    <RootContainerMemo>
      <UserName>{userName}</UserName>
      <Title>{post.title}</Title>
      <Body dangerouslySetInnerHTML={{ __html: post.body }} />
    </RootContainerMemo>
  );
};

export default PostDetail;
