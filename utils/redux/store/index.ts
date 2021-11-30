import { createStore } from 'redux'
import { MakeStore, createWrapper } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from 'utils/redux/reducers'

// create a makeStore function
const makeStore: MakeStore = () =>
  createStore(rootReducer, composeWithDevTools())

// export an assembled wrapper

export default createWrapper(makeStore, { debug: true })
