import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

import { v4 as uuid } from 'uuid';

type TextResultProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  translation: string;
};

export function TextResult(props: TextResultProps) {
  const { translation = '', ...rest } = props;

  return (
    <div id="result" {...rest}>
      <p className="text-left" dangerouslySetInnerHTML={{ __html: translation }}></p>
    </div>
  );
}

const _remoteColors = [
  'bg-green-100',
  'bg-purple-100',
  'bg-indigo-100',
  'text-green-700',
  'text-purple-700',
  'text-indigo-700'
];
