import React from 'react';

import styles from './Order.module.css';

const order = (props) => {
    const ingredietns = [];
    for (const ingredientName in props.ingredients) {
        ingredietns.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        });
    }
    console.log('ingredietns: ', ingredietns);
    return (
        <div className={styles.Order}>
            <p>Ingredients: {ingredietns.map(ig => (
                <span style={{
                    textTransform: 'capitalize',
                    display: 'inline-block',
                    margin: '0 8px',
                    padding: '5px',
                    border: '1px solid #ccc'
                }} key={ig.name} >{ig.name} ({ig.amount})</span>
            ))} </p>
            <p>Price: <strong>USD {props.price}</strong></p>
        </div>
    );
}

export default order;