const comments = (state = [], action) => {
  const id = action.postId;
  const newComments = {};
  switch(action.type) {
    case 'ADD_COMMENT':
      const newComment = {
        text: action.comment,
        user: action.author,
      };
      newComments[id] = [...state[id] || [], newComment];
      return Object.assign({}, state, newComments);
    case 'REMOVE_COMMENT':
      newComments[id] = [...state[id].slice(0, action.index), ...state[id].slice(action.index + 1)];
      return Object.assign({}, state, newComments);
    default:
      return state;
  };
};

export default comments;
