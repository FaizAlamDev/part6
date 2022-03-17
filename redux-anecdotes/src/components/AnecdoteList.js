import { useSelector, useDispatch } from 'react-redux'
import { incrementVote } from '../reducers/anecdoteReducer'
import { notification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
	const anecdotes = useSelector(({ anecdotes }) =>
		anecdotes.slice().sort((a, b) => b.votes - a.votes)
	)

	const dispatch = useDispatch()

	const addVote = (id) => {
		dispatch(incrementVote(id))
	}

	const notify = (id) => {
		const anecdote = anecdotes.find((anec) => id === anec.id)
		dispatch(notification(`you voted '${anecdote.content}'`, 5))
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
