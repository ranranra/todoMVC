import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/index';

const App=({todos,actions})=>(
	<div>
		<Header addTodo={actions.addTodo} />
		<MainSection todos={todos} actions={actions} />
	</div>
)

function mapStateToProps(state){
	return {
		todos:state.todos
	}
}

function mapDispatchToProps(dispatch){
	return {
		actions:bindActionCreators(TodoActions,dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App)