import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

const NavContainer = styled('nav')({
  backgroundColor: '#f5f5f5',
  padding: '10px',
});

const NavList = styled('ul')({
  listStyleType: 'none',
  padding: 0,
  margin: 0,
});

const NavItem = styled('li')({
  display: 'inline',
  marginRight: '10px',
});

const NavLink = styled(Link)({
  textDecoration: 'none',
  color: '#000',
  '&:hover': {
    color: 'blue',
  },
});

const Navigation = () => {
  return (
    <NavContainer>
      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/profile">Go to Profile</NavLink>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default Navigation;
