import DeleteModalCard from './deleteModalCard';
import { MessageData } from 'types/store';
import './messageModal.scss';

const DeleteModal = (props: { data: MessageData }) => {
  return (
    <div className="delete-modal-wrapper">
      <div className="delete-modal-top">
        <span>Delete</span>
        <div className="delete-modal-esc"></div>
      </div>

      <div className="delete-modal-mid">
        <label className="delete-modal-mid-label">
          Are you sure you want to delete this message?
        </label>
        <DeleteModalCard data={props.data} />
      </div>

      <div className="delete-modal-buttom">
        <button className="delete-modal-cancel">Cancel</button>
        <button className="delete-modal-delete">Confirm</button>
      </div>
    </div>
  );
};

export default DeleteModal;
