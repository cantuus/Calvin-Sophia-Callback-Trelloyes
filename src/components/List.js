import React from 'react';
import Card from '../components/Card';
import store from '../components/store'

export default function List(props) {
    let cardComponents = props.list.cardIds.map(function (cardId) {
        return <Card
            cardId={cardId}
            key={cardId}
            handleDeleteItem={props.handleDeleteItem}
        >{cardId}
        </Card>
    });

    return (
        <section className="List">
            <header className="List-header">{props.list.header}</header>
            <div className="List-cards">
                {cardComponents}
            </div>
            <button className="List-add-button">+ Random Card</button>
        </section>
    );
}