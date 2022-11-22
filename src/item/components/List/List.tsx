import React, { ReactNode } from 'react';

import styles from './List.module.scss'
interface Props {
    children?: ReactNode;
}

const List: React.FC<Props> = ({children}) => {
    return (
        <ul className={styles.container}>{children}</ul>
    );
};

export default List;