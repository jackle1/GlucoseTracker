export default (state, action) => {
    switch(action.type) {
      case 'DELETE_FOOD':
        return {
          ...state,
          foods: state.foods.filter(food => food.id !== action.payload)
        }

      case 'ADD_FOOD':
        return {
          ...state,
          foods: [action.payload, ...state.foods]
        }

      case 'SET_INPUT':
        return {
          ...state,
          startlevel: [action.payload]
        }

      default:
        return state;
    }
  }