import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import {
	removeNotification,
	setNotification,
} from '../reducers/notificationReducer'

const AnecdoteList = () => {
	const anecdotes = useSelector(({ anecdotes }) =>
		anecdotes.slice().sort((a, b) => b.votes - a.votes)
	)

	const dispatch = useDispatch()

	const addVote = (id) => {
		dispatch(vote(id))
	}

	const notify = (id) => {
		const anecdote = anecdotes.find((anec) => id === anec.id)
		dispatch(setNotification(`you voted '${anecdote.content}'`))
		setTimeout(() => {
			dispatch(removeNotification())
		}, 5000)
	}

	const onclick = (id) => {
		addVote(id)
		notify(id)
	}

	return (
		<div>
			{anecdotes.map((anecdote) => (
				<div key={anecdote.id}>
					<div>{anecdote.content}</div>
					<div>
						has {anecdote.votes}
						<button onClick={() => onclick(anecdote.id)}>
							vote
						</button>
					</div>
				</div>
			))}
		</div>
	)
}

export default AnecdoteList
