import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
	name: 'notification',
	initialState: null,
	reducers: {
		setNotification(state, action) {
			const msg = action.payload
			return msg
		},
		removeNotification(state, action) {
			return null
		},
	},
})

let timeoutId

export const notification = (content, time) => {
	return async (dispatch) => {
		dispatch(setNotification(content))
		clearTimeout(timeoutId)
		timeoutId = setTimeout(() => {
			dispatch(removeNotification())
		}, time * 1000)
	}
}

export const { setNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer
