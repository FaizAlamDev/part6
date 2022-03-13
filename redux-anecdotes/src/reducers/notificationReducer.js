import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
	name: 'notification',
	initialState: 'hello',
	reducers: {
		notification(state, action) {
			const msg = action.payload
			state.notification = msg
		},
	},
})

export default notificationSlice.reducer
