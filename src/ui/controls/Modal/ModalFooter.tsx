import React, {ReactNode} from 'react';

import styles from './ModalFooter.module.scss'

interface Props {
    children?: ReactNode;
}

const ModalFooter: React.FC<Props> = ({children}) => {
    return <nav className={styles.container}>{children}</nav>;
};

export default ModalFooter;