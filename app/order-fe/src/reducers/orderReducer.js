
export default (state = {}, action) => {
    switch (action.type) {
      case 'SAVE':
        return action.payload;
      default:
        return state;
    }
};