import React, { ReactNode } from 'react';

import styles from './ListItem.module.scss'

interface Props {
    onRemove: VoidFunction;
    children?: ReactNode;
}
const ListItem: React.FC<Props> = ({children, onRemove}) => {
    return (
        <li className={styles.container}>
            <span>{children}</span>
            <button onClick={onRemove}>delete</button>
        </li>
    );
};

export default ListItem;