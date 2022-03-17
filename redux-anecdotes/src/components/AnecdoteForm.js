import { connect } from 'react-redux'
import { create } from '../reducers/anecdoteReducer'
import { notification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
	const addAnecdote = async (e) => {
		e.preventDefault()
		const content = e.target.anecdote.value
		e.target.anecdote.value = ''
		props.create(content)
		props.notification(`new anecdote '${content}'`, 5)
	}

	return (
		<div>
			<h2>create new</h2>
			<form onSubmit={addAnecdote}>
				<div>
					<input name='anecdote' />
				</div>
				<button type='submit'>create</button>
			</form>
		</div>
	)
}

const mapDispatchToProps = {
	create,
	notification,
}

const ConnectedForm = connect(null, mapDispatchToProps)(AnecdoteForm)
export default ConnectedForm
