import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './messageInput.scss';
import { sendMessage } from 'store/actions';
import { formatDate } from 'utils/formatDate';

const MessageInput = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState<string>('');
  // const userState = useSelector((state: StoreState) => state.auth);

  const handleOnSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    const formatedDate = formatDate();

    dispatch(sendMessage({ content: input, date: formatedDate }));
    setInput('');
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
  };

  return (
    <div className='input-container'>
      <div className='input-box'>
        <div className='input-wrap'>
          <input name='message' type='text' value={input} placeholder='메시지를 입력하세요..' onChange={handleOnChange} />
          <button className='send-btn' onClick={handleOnSubmit}>
            전송
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
