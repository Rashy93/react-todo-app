import React, {Component} from 'react';

// import FormInput from '../form-input/form-input.component'
import TextArea from '../form-input/form-textarea.component'


import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import CustomButton from '../custom-button/custom-button.component'

import './todo-form.styles.scss'


class TodoForm extends Component {

    state = { 
        todo: { 
         title: '',
         text: '',
         date: new Date().toLocaleDateString(),
         todos: []
        }
 }

     handleSubmit = async event => {
        event.preventDefault();
        const {todo} = this.state;

        try {
            const { list } = await auth.createTodo(
                todo
            );

           await createUserProfileDocument(list, { todo });
           this.setState({
            todos: ''
           })

        } catch (error) {
            console.error(error);
        }
    };
//  componentDidMount() {
//     this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
//       if (userAuth) {
//         const userRef = await createUserProfileDocument(userAuth);

//         userRef.onSnapshot(snapShot => {
//           this.setState({
//             currentUser: {
//               id: snapShot.id,
//               ...snapShot.data()
//             }
//           }
//           , () => {
//             console.log(this.state)
//           }
//           );
//         });
        
//       } else this.setState({currentUser: userAuth})

//     }); 
//   }
    render() { 
        const {todo} = this.state;

        return (
            <div className="sticky">
                <div className='todo'>
                    <h2>ToDo Form</h2>
                    <span>Create a ToDo</span>
    
                    <form onSubmit={this.handleSubmit}>
                    <div className="group">
                    <input 
                    className='form-input'
                    name='title'
                    type='title' 
                    placeholder="Title"
                    onChange={(e)=>this.setState({todo: {...todo, title: e.target.value}})} 
                    label='Title'
                    required 
                />
                    </div>

                        <TextArea 
                            name='text' 
                            type='text'
                            placeholder="Text"
                            onChange={(e)=>this.setState({todo: {...todo, text: e.target.value}})} 
                            label='Text'
                            rows="4" 
                            cols="50"
                            required 
                        />
                        <div className='button'>
                            <CustomButton type="button" onClick={()=>this.props.handleOnClick(todo)}> Add Todo</CustomButton>
                            
                        </div>
                    </form>
    
                </div>
            </div>
    );
    }
}
 
export default TodoForm;