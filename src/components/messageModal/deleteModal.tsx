import DeleteModalCard from './deleteModalCard';
import { MessageData } from 'types/store';
import './messageModal.scss';
import { useDispatch } from 'react-redux';
import { DELETE_MESSAGE } from 'store/actions/actionType';

const DeleteModal = (props: {
  data: MessageData;
  setModalActive: (modalActive: boolean) => void;
}) => {
  const dispatch = useDispatch();
  const handleCancel = () => {
    props.setModalActive(false);
  };

  const handleDelete = () => {
    dispatch({ type: DELETE_MESSAGE, payload: { date: props.data.date } });
    props.setModalActive(false);
  };

  return (
    <>
      <div className="delete-modal-wrapper">
        <div className="delete-modal-top">
          <span>Delete</span>
          <div className="delete-modal-esc" onClick={handleCancel}></div>
        </div>

        <div className="delete-modal-mid">
          <label className="delete-modal-mid-label">
            Are you sure you want to delete this message?
          </label>
          <DeleteModalCard data={props.data} />
        </div>

        <div className="delete-modal-buttom">
          <button className="delete-modal-cancel" onClick={handleCancel}>
            Cancel
          </button>
          <button className="delete-modal-delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
      <div className="outside" onClick={handleCancel}></div>
    </>
  );
};

export default DeleteModal;
