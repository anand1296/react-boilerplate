import { combineReducers } from '@reduxjs/toolkit'
import testDataSlice from './slices/data.slice'

const reducers = combineReducers({
    testData: testDataSlice,
})

export default reducers
