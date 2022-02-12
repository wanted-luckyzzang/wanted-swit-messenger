import React from 'react';
import './messageCard.scss';

const ProfilePhoto = (props: { image: string }): JSX.Element => {
  return (
    <>
      {props.image ? (
        <img
          className="message-card-image"
          src={props.image}
          alt="profileImage"
        />
      ) : (
        <div className="no-message-card-image" />
      )}
    </>
  );
};

export default React.memo(ProfilePhoto);
