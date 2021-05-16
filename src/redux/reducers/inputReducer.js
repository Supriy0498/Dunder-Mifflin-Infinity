const initialState = {
  inputVal: ''
}

export default function changeInput(state = initialState, action) {
    switch (action.type) {
      case 'CHANGE_INPUT': return {
        ...state,
        inputVal:action.payload
      }
      default: return  state;
    }
}