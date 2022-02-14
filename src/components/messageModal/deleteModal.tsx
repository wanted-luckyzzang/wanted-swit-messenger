import React from 'react';
import './messageModal.scss';
import { MessageData } from 'types/store';
import { useDispatch } from 'react-redux';
import { DELETE_MESSAGE } from 'store/actions/actionType';
import { useControlModal } from 'hooks';
import DeleteModalCard from './deleteModalCard';

const DeleteModal = (props: {
  data: MessageData;
  setModalActive: (modalActive: boolean) => void;
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch({ type: DELETE_MESSAGE, payload: { date: props.data.date } });
    props.setModalActive(false);
  };

  return (
    <>
      <div className="delete-modal-wrapper">
        <div className="delete-modal-top">
          <span>Delete</span>
          <div
            className="delete-modal-esc"
            onClick={useControlModal(props.setModalActive, false)}
          ></div>
        </div>

        <div className="delete-modal-mid">
          <label className="delete-modal-mid-label">
            Are you sure you want to delete this message?
          </label>
          <DeleteModalCard data={props.data} />
        </div>

        <div className="delete-modal-buttom">
          <button
            className="delete-modal-cancel"
            onClick={useControlModal(props.setModalActive, false)}
          >
            Cancel
          </button>
          <button className="delete-modal-delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
      <div
        className="outside"
        onClick={useControlModal(props.setModalActive, false)}
      ></div>
    </>
  );
};

export default React.memo(DeleteModal);
