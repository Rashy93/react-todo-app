import React, { Component } from 'react';

import { ReactComponent as EditIcon } from '../../assets/card/edit.svg'
import { ReactComponent as DeleteIcon } from '../../assets/card/trash.svg'
import { ReactComponent as ArchiveIcon } from '../../assets/card/files-and-folders.svg'


import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './todos.styles.scss'


class Todos extends Component {
    constructor() {
        super();
    
        this.state = {
          currentUser: {},
          list: []
        };
      }
      componentDidMount(list) {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
          if (userAuth) {
            const userRef = await createUserProfileDocument(userAuth);
    
            userRef.onSnapshot(snapShot => {
              this.setState({
                currentUser: {
                  id: snapShot.id,
                  list: ['hello'],
                  ...snapShot.data()
                }
              }
              // , () => {
              //   console.log(this.state.currentUser)
              // }
              );
            });
    
          } else this.setState({currentUser: userAuth})
    
        });
     
      }
    
    render() {
        return (
            <div className="card">
                <div className="additional">
                <div className="user-card">
            </div>
                <div className="more-info">
                <h1>{this.props.title}</h1>
                <div className="coords">
                <span>Date Added:</span>
                <span>{this.props.date}</span>
                </div>
                <div className="coords">
                <span>Completed?</span>
                <span>
                <input type="checkbox" id="cbx" />
                <label htmlFor="cbx" className="toggle"><span ></span></label>
                </span>
                
                </div>
                
                <div className="icon">
                <div>
                    <div className="title">Edit</div>
                    <EditIcon />
                </div>
                <div>
                    <div className="title">Delete</div>
                    <DeleteIcon />
                </div>
                <div>
                    <div className="title">Archive</div>
                    <ArchiveIcon />
                </div>
                 </div>
            </div>
            </div>
            <div className="general">
            <h1>{this.props.title}</h1>
            <p>{this.props.text}</p>
            <span className="more">By {this.state.currentUser.displayName}</span>
            </div>
        </div>
        
        )
    }

}

export default Todos;