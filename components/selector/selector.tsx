import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

import classNames from 'classnames';
import { Radio, RadioGroup } from 'reakit/Radio';

import { UseSelector } from '@hooks';

export type SelectorProps = UseSelector &
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export function Selector(props: SelectorProps) {
  const { options = [], selected, radio, ...rest } = props;

  return (
    <div {...rest}>
      <RadioGroup {...radio} className="flex space-x-4" aria-label="bias">
        {options.map(option => (
          <Radio
            {...radio}
            key={option.id}
            value={option.id}
            as="button"
            className={classNames(
              option.id === selected
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-gray-500 hover:text-gray-700',
              'px-3 py-2 font-medium text-sm rounded-md',
              'disabled:cursor-not-allowed disabled:text-gray-300'
            )}
            disabled={option.disabled}
          >
            {option.label}
          </Radio>
        ))}
      </RadioGroup>
    </div>
  );
}
