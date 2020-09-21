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
                <span className={styles.Ingredients} key={ig.name} >{ig.name} ({ig.amount})</span>
            ))} </p>
            <p>Price: <strong>USD {props.price}</strong></p>
        </div>
    );
}

export default order;