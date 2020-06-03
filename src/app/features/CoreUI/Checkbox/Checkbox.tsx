import React, { FC, forwardRef, Ref } from 'react';
import classNames from 'classnames';

import CheckboxIcon from '../Icons/CheckboxIcon';
import styles from './Checkbox.module.scss';

interface Props {
  /**
   * Identifier for form submit
   */
  name?: string;

  /**
   * Placeholder to show when empty
   */
  label?: string;

  /**
   * Register callback for change event
   */
  onChange?: () => void;

  /**
   * Read only mode. Default: false
   */
  disabled?: boolean;

  /**
   * Display error state
   */
  error?: boolean;

  /**
   * input className
   */
  className?: string;

  /**
   * Current checked value of input
   */
  checked?: boolean;

  /**
   * React ref passtrough to input node
   */
  ref?: Ref<HTMLInputElement>;
}

const Checkbox: FC<Props> = forwardRef((props, ref) => {
  const { disabled, className, error, name, label, ...otherProps } = props;
  const [isInteracting, setInteraction] = React.useState(false);
  const [isChecked, toggle] = React.useState(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    toggle(event.target.checked);

    event.target.focus();
  }

  return (
    <div
      className={classNames(styles.checkbox, className, { [styles.disabled]: disabled, [styles.error]: error })}
    >
      <input
        id={name}
        ref={ref}
        className={styles.hidden}
        disabled={disabled}
        name={name}
        type='checkbox'
        checked={isChecked}
        onChange={handleChange}
        onMouseOver={() => setInteraction(true)}
        onMouseOut={() => setInteraction(false)}
        onFocus={() => setInteraction(true)}
        onBlur={() => setInteraction(false)}
        {...otherProps}
      />
      <div className={styles.control}>
        <CheckboxIcon hasHover={!disabled && isInteracting} isActive={isChecked} />
      </div>
      {label && <label className={styles.label} htmlFor={name}>{label}</label>}
    </div>
  );
});

export default Checkbox;
