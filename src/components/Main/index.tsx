import React from 'react';

import ProfilePage from '../ProfilePage';

import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BootomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon></BackIcon>
        </button>

        <ProfileInfo>
          <strong>João Victor</strong>
          <span>900 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      <BootomMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BootomMenu>
    </Container>
  );
};

export default Main;
