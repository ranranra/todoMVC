import {ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED} from '../constants/ActionTypes';

const initialState=[
	{
		text:'Use Redux',
		completed:false,
		id:0
	}
]

export default function todos(state=initialState,action){
	switch (action.type){
		case ADD_TODO:
			return [
	        {
	          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
	          completed: false,
	          text: action.text
	        },
	        ...state
	      ];
		case DELETE_TODO:
			return state.filter(todo =>
		        todo.id !== action.id
		    )
		case EDIT_TODO:
			return state.map(todo =>
		        todo.id === action.id ?
		        	{text: action.text,completed:todo.completed,id:todo.id } :
		        	todo
		    )
		case COMPLETE_TODO:
			return state.map(todo =>
        		todo.id === action.id ?
          			{completed: !todo.completed,text:todo.text,id:todo.id } :
          		todo
      		)
		case COMPLETE_ALL:
			const areAllMarked = state.every(todo => todo.completed)
      		return state.map(todo => ({
        		completed: !areAllMarked,text:todo.text,id:todo.id 
      		}))
		case CLEAR_COMPLETED:
			return state.filter(todo => todo.completed === false)
		default:
			return state;
	}
}