import React from 'react';

import styles from './Logo.module.css';
import BurgerLogo from '../../assets/burger-logo.png';

const logo = (props) => (
    <div
        className={styles.Logo}
        style={{ height: props.height }} >
        <img src={BurgerLogo} alt="Burger Logo" />
    </div>
)

export default logo;