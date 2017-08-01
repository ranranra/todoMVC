import React, {Component} from 'react';
import classnames from 'classnames';

export default class TodoTextInput extends Component{
	constructor(){
		super()	
		this.state={
			text:""
		}
	}

	handleChange(ev){
		this.setState({
			text:ev.target.value
		})
	}

	handleBlur(ev){
		if(!this.props.newTodo){
			this.props.onSave(ev.target.value)
		}
	}

	handleSubmit(ev){
		const text=ev.target.value.trim()
		if(ev.which===13){
			this.props.onSave(text)
			if(this.props.newTodo){
				this.setState({
					text:""
				})
			}
		}
	}

	render(){
		return (
			<input className={
				classnames({
					edit:this.props.editing,
					'new-todo':this.props.newTodo
				})
			} 
			type="text" 
			placeholder={this.props.placeholder} 
			autoFocus="true" 
			value={this.state.text} 
			onBlur={this.handleBlur.bind(this)} 
			onChange={this.handleChange.bind(this)}
			onKeyDown={this.handleSubmit.bind(this)} />
		)
	}
}