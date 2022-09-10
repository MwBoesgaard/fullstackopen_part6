import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: "anecdote",
  initialState: [],
  reducers: {
    increaseLikeByOne(state, action) {
      const anecdoteToLike = state.find((a) => a.id === action.payload);
      const updatedAnecdote = {
        ...anecdoteToLike,
        votes: anecdoteToLike.votes + 1,
      };
      return state.map((a) => (a.id !== action.payload ? a : updatedAnecdote));
    },
    addNewAnecdote(state, action) {
      state.push(action.payload);
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { addNewAnecdote, increaseLikeByOne, setAnecdotes} =
  anecdoteSlice.actions;


export const initializeAnecdotes = () => {  
  return async dispatch => {    
    const anecdotes = await anecdoteService.getAll()    
    dispatch(setAnecdotes(anecdotes)) 
}}

export const createAnecdote = content => {  
  return async dispatch => {    
  const newAnecdote = await anecdoteService.createNew(content)    
  dispatch(addNewAnecdote(newAnecdote))  
}}

export const voteAnecdote = (anecdoteToUpdate) => {  

  const updatedAnecdote = {
    ...anecdoteToUpdate,
    votes: anecdoteToUpdate.votes + 1,
  };

  return async dispatch => {    
  await anecdoteService.updateExisting(anecdoteToUpdate.id, updatedAnecdote) 
  dispatch(increaseLikeByOne(anecdoteToUpdate.id)) 
}}

export default anecdoteSlice.reducer;
