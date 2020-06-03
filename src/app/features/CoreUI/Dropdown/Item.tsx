import React from 'react';
import classNames from 'classnames';

import styles from './Item.module.scss';

const Item: React.FC<JSX.IntrinsicElements['div']> = ({ children, className, ...props }) => (
  <div role='button' tabIndex={0} className={classNames(className, styles.item)} {...props}>
    {children}
  </div>
);

export default Item;
