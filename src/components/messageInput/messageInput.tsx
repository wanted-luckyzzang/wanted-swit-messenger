import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './messageInput.scss';
import { formatDate } from 'utils/formatDate';
import SendButton from 'components/sendButton/sendButton';
import { answerClean, sendMessage } from 'store/actions';
import { StoreState } from 'types/store';

const MessageInput = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const [active, setActive] = useState('nonactive');
  const userState = useSelector((state: StoreState) => state.auth);
  const answerState = useSelector((state: StoreState) => state.answer);

  useEffect(() => {
    if (answerState.content) {
      setInput(answerState.content);
      setActive('active');
    }
  }, [answerState]);

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    setActive('active');
    if (!e.target.value) setActive('nonactive');
  };

  const handleOnSubmit = () => {
    const textEl = document.getElementById('input-msg');
    if (textEl?.innerHTML) {
      dispatch(
        sendMessage({
          ...userState,
          content: textEl.innerHTML,
          date: formatDate(),
        })
      );
      dispatch(answerClean());
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
    if (e.key === 'Backspace') {
      dispatch(answerClean());
    }
  };

  return (
    <>
      {userState.userName && (
        <div className="input-container">
          <div className="input-wrap">
            <textarea
              className="message-input"
              id="input-msg"
              name="message-input"
              value={input}
              cols={180}
              onKeyDown={textAreaHandler}
              placeholder="메시지를 입력하세요.."
              onChange={handleOnChange}
              autoFocus={true}
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
