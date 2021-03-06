import React from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKeys => {
            return (
                <li>
                    <span style={{ textTransform: 'capitalize' }}>{igKeys}</span>: {props.ingredients[igKeys]}
                </li>
            );
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button
                btnType="Danger"
                clicked={props.purchaseClosed}>CANCEL</Button>
            <Button
                btnType="Success"
                clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    );
}

export default orderSummary;