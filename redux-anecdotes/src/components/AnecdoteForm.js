import { createAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";
//import store from '../store'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {

  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    props.createAnecdote(content)
    props.setNotification(`new anecdote ${content}`, 5000)
    
    //store.dispatch(createAnecdote(content))
    //store.dispatch(setNotification(`new anecdote ${content}`, 5000))
  };


  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    createAnecdote: content => {
      dispatch(createAnecdote(content))
    },
    setNotification: content => {
      dispatch(setNotification(`new anecdote ${content}`, 5000))
    }
  }
}

export default connect(null, mapDispatchToProps)(AnecdoteForm);

//export default AnecdoteForm;
