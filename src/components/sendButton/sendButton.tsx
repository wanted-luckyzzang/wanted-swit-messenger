import './sendButton.scss';

interface Button {
  onSubmit: () => void;
  keyHandler: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
  active: string;
}

const SendButton = ({ onSubmit, keyHandler, active }: Button) => {
  return (
    <button className={['send-btn', active].join(' ')} onClick={onSubmit} onKeyPress={keyHandler}>
      전송
    </button>
  );
};

SendButton.defaultProps = {
  active: 'nonactive',
};

export default SendButton;
