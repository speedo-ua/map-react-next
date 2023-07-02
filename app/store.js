import { configureStore } from '@reduxjs/toolkit'
import changePageStates from './features/changeStatesSlice'

export default configureStore({
  reducer: {
    changePage: changePageStates,
  },
})