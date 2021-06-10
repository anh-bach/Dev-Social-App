import React from 'react';
import { useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';

const ProfileBanner = () => {
  const { profileById } = useSelector((state) => state.profile);
  return (
    <Row className='mt-5 profile-banner'>
      <div
        className='profile-avatar'
        style={{
          backgroundImage: `url(${
            profileById.avatar
              ? `https://iamanhrecipeapp.s3.amazonaws.com/${profileById.avatar}`
              : `https://iamanhrecipeapp.s3.amazonaws.com/avatar.png`
          }
            )`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </Row>
  );
};

export default ProfileBanner;
