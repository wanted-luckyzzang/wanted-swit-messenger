import './messageCard.scss';
const ProfilePhoto = (props: { image: string | undefined }): JSX.Element => {
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

export default ProfilePhoto;
