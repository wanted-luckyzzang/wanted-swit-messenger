const INITIAL_STATE = {
  userId: '',
  userName: '',
  profileImage: '',
  content: '',
  date: '',
};

export default function message(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
