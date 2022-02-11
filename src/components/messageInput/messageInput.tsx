import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './messageInput.scss';
import { formatDate } from 'utils/formatDate';
import SendButton from 'components/sendButton/sendButton';
import { sendMessage } from 'store/actions';
import { StoreState } from 'types/store';

const MessageInput = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const [active, setActive] = useState('nonactive');
  const userState = useSelector((state: StoreState) => state.auth);

  useEffect(() => {
    setInput('');
    setActive('nonactive');
  }, []);

  // (회신) 붙이기: '답장'인지 아닌지 여부로 판단
  useEffect(() => {}, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    setActive('active');

    if (!e.target.value) setActive('nonactive');
  };

  const handleOnSubmit = () => {
    if (input) {
      dispatch(
        sendMessage({ ...userState, content: input, date: formatDate() })
      );
      setInput('');
      setActive('nonactive');
    }
  };

  const onKeyHandler = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' && e.shiftKey === false) {
      e.preventDefault();
      handleOnSubmit();
    }
  };

  const textAreaHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && e.shiftKey === false) {
      e.preventDefault();
      handleOnSubmit();
    }
  };

  return (
    <>
      {userState.userName && (
        <div className="input-container">
          <div className="input-wrap">
            <textarea
              className="message-input"
              name="message-input"
              value={input}
              cols={180}
              onKeyDown={textAreaHandler}
              placeholder="메시지를 입력하세요.."
              onChange={handleOnChange}
            />
            <SendButton
              onSubmit={handleOnSubmit}
              keyHandler={onKeyHandler}
              active={active}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MessageInput;
