import React from 'react';
import store from '../components/store';


export default function App(props) {
    let card = store.allCards[props.cardId];
    // let cardId = props.cardId;
    return (
        <div className="Card">
            <h3>{card.title}</h3>
            <p>{card.content}</p>
            <button onClick={() => props.handleDeleteItem(props.cardId)}>Delete</button>
        </div>
    );
}


