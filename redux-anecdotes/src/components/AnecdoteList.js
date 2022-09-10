import { useSelector } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";
import store from '../store'

const AnecdoteList = () => {

  let anecdotes = useSelector((state) => state.anecdote)
  anecdotes = [...anecdotes].sort((a, b) => (a.votes > b.votes ? 0 : 1)); 
  let filter = useSelector((state) => state.filter)
  anecdotes = anecdotes.filter((a) => a.content.toLowerCase().includes(filter))

  const vote = (anecdote) => {
    store.dispatch(voteAnecdote(anecdote));
    store.dispatch(setNotification(`you voted ${anecdote.content}`, 5000))
  };

  return (
    <>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnecdoteList;
