import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

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
  'text-green-700',
  'bg-purple-100',
  'text-purple-700',
  'bg-indigo-100',
  'text-indigo-700',
  'bg-red-100',
  'text-red-700'
];
