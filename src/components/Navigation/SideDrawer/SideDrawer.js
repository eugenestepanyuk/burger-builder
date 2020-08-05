import React from 'react';

import styles from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const sideDrawer = () => {
    return (
        <div className={styles.SideDrawer}>
            <div className={styles.Logo}>
                <Logo />
            </div>
            <NavigationItems />
        </div>
    );
}

export default sideDrawer;