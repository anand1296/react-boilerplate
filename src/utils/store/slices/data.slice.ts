// This is a placeholder slice - to be renamed and modified as per actual reuqirements

import { PayloadAction, ThunkAction, createSlice } from '@reduxjs/toolkit'

const initialState: Array<any> = []

const testDataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<any>) => {
            state = action.payload
        },
    },
})

export const { setData } = testDataSlice.actions

export default testDataSlice.reducer

export const fetchData =
    (): ThunkAction<void, any, unknown, any> => async (dispatch) => {
        const data = await new Promise((resolve) =>
            setTimeout(() => resolve([]))
        )
        dispatch(setData(data))
    }
