import React, {Component} from 'react';

import FormInput from '../form-input/form-input.component'
import TextArea from '../form-input/form-textarea.component'

import CustomButton from '../custom-button/custom-button.component'

import './todo-form.styles.scss'

class TodoForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            text: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()

        const { title, text } = this.state;

        // try {
        //     await auth.signInWithTitleAndText(title, text);
        //     this.setState({ title: '', text: '' });

        // } catch (error) {
        //     console.log(error)
        // }

        this.setState({ title: '', text: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return(
            <div className='todo'>
                <h2>ToDo Form</h2>
                <span>Create a ToDo</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='title'
                        type='title' 
                        handleChange={this.handleChange} 
                        value={this.state.title} 
                        label='Title'
                        required 
                    />
                    <TextArea 
                        name='text' 
                        type='text'
                        value={this.state.text} 
                        handleChange={this.handleChange} 
                        label='Text'
                        rows="4" 
                        cols="50"
                        required 
                    />
                    <div className='button'>
                        <CustomButton type="submit"> Add Todo</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default TodoForm;