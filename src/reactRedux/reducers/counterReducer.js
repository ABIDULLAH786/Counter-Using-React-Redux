const initialState = 0;
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
      case "RESET":
       return state = initialState;
    default:
      return state;
  }
};

export default counterReducer;