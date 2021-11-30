import { AnyAction } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'

export interface State {
  user: []
}
// create your reducer
const userReducer = (state: State = { user: [] }, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      return { ...state, ...action.payload }
    case 'FETCH_USERS':
      return { ...state, user: action.payload }
    case 'ADD_USER':
      return { ...state, user: [...state.user, action.payload] }
    default:
      return state
  }
}

export default userReducer
