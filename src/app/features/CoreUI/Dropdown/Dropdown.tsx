/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import styles from './Dropdown.module.scss';

interface Props {
  isOpen: boolean;
}

const Dropdown: React.FC<Props> = ({ isOpen, children }) => {
  const ref = React.useRef<HTMLDivElement>();
  const offset = ref.current?.offsetHeight;

  return (
    <div
      ref={ref}
      className={styles.dropdown}
      style={{ visibility: isOpen ? 'visible' : 'hidden', bottom: `${-offset - 6}px` }}
    >
      {children}
    </div>
  );
};

export default Dropdown;
