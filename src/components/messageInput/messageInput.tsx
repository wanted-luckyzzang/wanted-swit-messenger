import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './messageInput.scss';
import { sendMessage } from 'store/actions';
import { formatDate } from 'utils/formatDate';

const MessageInput = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState<string>('');
  // const userState = useSelector((state: StoreState) => state.auth);

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleOnSubmit = () => {
    const formatedDate = formatDate();

    dispatch(sendMessage({ content: input, date: formatedDate }));
    setInput('');
  };

  const onKeyHandler = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (input && e.key === 'Enter') {
      e.preventDefault();
      handleOnSubmit();
    }
  };

  return (
    <div className='input-container'>
      <div className='input-wrap'>
        <textarea
          className='message-input'
          name='message-input'
          value={input}
          cols={180}
          placeholder='메시지를 입력하세요..'
          onChange={handleOnChange}
        />
        <button className='send-btn' onClick={handleOnSubmit} onKeyPress={onKeyHandler}>
          전송
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
