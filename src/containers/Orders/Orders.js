import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import errorHandler from '../../hoc/ErrorHandler/errorHandler';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(response => {
                const fetchedOrders = [];
                for (const key in response.data) {
                    fetchedOrders.push({
                        ...response.data[key],
                        id: key
                    });
                }

                this.setState({ loading: false, orders: fetchedOrders });
            })
            .catch(error => this.setState({ loading: false }));
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price} />
                ))}
            </div>
        );
    }
}

export default errorHandler(Orders, axios);