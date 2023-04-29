// Redux reducer
const postsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_POSTS':
        return action.payload;
      default:
        return state;
    }
  };
  
  // Redux action
  const setPosts = (posts) => ({
    type: 'SET_POSTS',
    payload: posts,
  });
  
  // Redux store
  const store = createStore(postsReducer);
  