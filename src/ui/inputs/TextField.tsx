import React from 'react';

import styles from './TextField.module.scss'

const TextField: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
    return <input className={styles.container} type="text" {...props}/>;
};

export default TextField;