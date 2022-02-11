import { MessageData } from 'types/store';
import './messageModal.scss';

const DeleteModalCard = (props: { data: MessageData }): JSX.Element => {
  return (
    <div className="delete-modal-card-wrapper">
      <div className="delete-modal-card-photo">
        {props.data.profileImage ? (
          <img
            className="delete-modal-card-photo-active"
            src={props.data.profileImage}
            alt="modalDeletePhoto"
          />
        ) : (
          <div className="delete-modal-card-photo-disabled" />
        )}
      </div>

      <div className="delete-modal-card-content">
        <span className="delete-modal-name-date">
          <span className="delete-modal-name">{props.data.userName}</span>
          <span className="delete-modal-date">{props.data.date}</span>
        </span>
        <div className="delete-modal-message">
          {props.data.content.length <= 10
            ? props.data.content
            : `${props.data.content.slice(0, 10)}...`}
        </div>
      </div>
    </div>
  );
};

export default DeleteModalCard;
