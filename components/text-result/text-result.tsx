import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

import { uuid } from 'uuidv4';

import { Translation } from '@hooks';

type TextResultProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  translation: Translation;
};

export function TextResult(props: TextResultProps) {
  const { translation = [], ...rest } = props;

  return (
    <div id="result" {...rest}>
      <p style={{ textAlign: 'start' }}>
        {translation.reduce((acc, word, index) => {
          const isFirst = 0 === index;
          const isLast = translation.length - 1 === index;

          if (typeof word === 'string') return [...acc, word];
          return [
            ...acc,
            isFirst ? '' : ' ',
            <span key={uuid()} className="bg-indigo-100 text-indigo-700">
              {word.symbol}
            </span>,
            isLast ? '' : ' '
          ];
        }, [] as React.ReactElement[])}
      </p>
    </div>
  );
}
