import React, { FC, forwardRef } from 'react';
import classNames from 'classnames';

import Input, { Props as InputProperties } from '../Input/Input';
import styles from './Select.module.scss';
import DropDownIcon from '../Icons/DropDownIcon';
import Dropdown, { Item as DropdownItem } from '../Dropdown';
import CheckboxIcon from '../Icons/CheckboxIcon';

interface Props extends Omit<InputProperties, 'type' | 'ref'> {
  /**
   * Select value type
   */
  type?: 'multi' | 'single';
  /**
   * Open value
   */
  isOpen?: boolean;
  /**
   * Options
   */
  options: string[];
  /**
   * React ref passtrough to select node
   */
  ref?: React.Ref<HTMLSelectElement>;
}

const Select: FC<Props> = forwardRef((props, ref) => {
  const [isOpen, toggle] = React.useState(false);
  const [selected, setSelected] = React.useState<string[]>([]);
  const {
    className,
    error,
    disabled,
    options,
    placeholder,
    type = 'single',
    name,
  } = props;
  const isMulti = type === 'multi';
  const first = selected[0] || '';

  function handleToggle() {
    if (!disabled) {
      toggle(!isOpen);
    }
  }

  function handleChangeSingle(option: string) {
    setSelected(option ? [option] : []);
    toggle(false);
  }

  function handleChangeMulti(option: string, shouldAdd: boolean) {
    setSelected(
      shouldAdd
        ? selected.concat(option)
        : selected.filter((_option) => _option !== option),
    );
  }

  return (
    <div className={classNames(styles.select, { [styles.disabled]: disabled })}>
      <select
        ref={ref}
        readOnly
        value={isMulti ? selected : first}
        multiple={isMulti}
        className={styles.hidden}
        name={name}
      >
        {options.map((option) => <option value={option} key={option}>{option}</option>)}
      </select>
      <Input
        readOnly
        error={error}
        value={isMulti ? selected.join(', ') : first}
        className={classNames(styles.input, className)}
        disabled={disabled}
        onClick={handleToggle}
        onKeyDown={(event) => event.keyCode === 32 && handleToggle()}
        placeholder={placeholder}
      />
      <div className={styles.icon}>
        <DropDownIcon />
      </div>
      <Dropdown isOpen={!disabled && isOpen}>
        {options?.map((option) => {
          const isSelected = selected.includes(option);

          return (
            <DropdownItem
              key={option}
              className={styles.item}
              onClick={() => (
                isMulti
                  ? handleChangeMulti(option, !isSelected)
                  : handleChangeSingle(option)
              )}
              onKeyDown={(event) => (
                [32, 13].includes(event.keyCode)
                && (
                  isMulti
                    ? handleChangeMulti(option, !isSelected)
                    : handleChangeSingle(option)
                )

              )}
            >
              {isMulti && <CheckboxIcon isActive={isSelected} />}
              <span>{option}</span>
            </DropdownItem>
          );
        })}
        {!isMulti && first && (
          <DropdownItem className={styles.remove} onClick={() => handleChangeSingle('')}>
            Delete
          </DropdownItem>
        )}
      </Dropdown>
    </div>
  );
});

export default Select;
