import React from 'react';
import { ReactComponent as EditIcon } from '../../assets/card/edit.svg'
import { ReactComponent as DeleteIcon } from '../../assets/card/trash.svg'
import { ReactComponent as ArchiveIcon } from '../../assets/card/files-and-folders.svg'

import './cards.styles.scss';

const Cards = () => (
    <div className="center">
        <div className="card">
            <div className="additional">
            <div className="user-card">
               </div>
            <div className="more-info">
                <h1>Jane Doe</h1>
                <div className="coords">
                <span>Date Added:</span>
                <span>11/1/2020</span>
                </div>
                <div className="coords">
                <span>Completed?</span>
                <span>
                <input type="checkbox" id="cbx" />
                <label for="cbx" class="toggle"><span></span></label>
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
            <h1>Jane Doe</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>
            <span className="more">Mouse over the card for more info</span>
            </div>
        </div>
    </div>


    )

export default Cards;