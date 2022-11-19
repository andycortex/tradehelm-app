import React, { ReactNode } from 'react';
import styles from './Modal.module.scss'

interface Props {
    onClose: VoidFunction;
    children?: ReactNode;
}

const Modal: React.FC<Props> = ({children,onClose}) => {
    return (
       <section className={styles.container}>
        <b/>
        <article>{children}</article>
       </section>
    );
};

export default Modal;