import React, { useState, useEffect } from 'react';
import { getUserProfileData } from '../services/api';
import { styled } from '@mui/system';
import CircularProgress from '@mui/material/CircularProgress';

const UserProfileContainer = styled('div')({
  maxWidth: '600px',
  margin: 'auto',
  padding: '20px',
  backgroundColor: '#f5f5f5',
  borderRadius: '8px',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
});

const Title = styled('h1')({
  textAlign: 'center',
  marginBottom: '20px',
});

const ProfileImage = styled('img')({
  display: 'block',
  margin: '0 auto',
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  marginBottom: '20px',
});

const Label = styled('span')({
  fontWeight: 'bold',
});

const Value = styled('span')({
  marginLeft: '8px',
});

const SpinnerContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '200px',
});

const UserProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserProfileData();
        setProfileData(response.data);
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
    <UserProfileContainer>
      <Title>{profileData.name}</Title>
      <ProfileImage src={profileData.profileImage} alt="Profile" />
      <div>
        <p>
          <Label>Email:</Label>
          <Value>{profileData.email}</Value>
        </p>
        <p>
          <Label>Age:</Label>
          <Value>{profileData.age}</Value>
        </p>
        <p>
          <Label>Bio:</Label>
          <Value>{profileData.bio}</Value>
        </p>
      </div>
    </UserProfileContainer>
  );
};

export default UserProfile;
