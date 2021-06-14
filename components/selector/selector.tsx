import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

import classNames from 'classnames';
import { Checkbox } from 'reakit/Checkbox';

import { UseSelector } from '@hooks';

export type SelectorProps = UseSelector &
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export function Selector(props: SelectorProps) {
  const { options = [], checkbox, ...rest } = props;

  return (
    <div {...rest}>
      {options.map(option => (
        <Checkbox
          {...checkbox}
          key={option.id}
          value={option.id}
          as="button"
          className={classNames(
            Array.isArray(checkbox.state) && checkbox.state.includes(option.id)
              ? 'bg-indigo-100 text-indigo-700'
              : 'text-gray-500 hover:text-gray-700',
            'px-3 py-2 font-medium text-sm rounded-md',
            'disabled:cursor-not-allowed disabled:text-gray-300'
          )}
          disabled={option.disabled}
        >
          {option.label}
        </Checkbox>
      ))}
    </div>
  );
}
