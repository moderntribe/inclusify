import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

type TextResultProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  children?: ReactNode;
};

export function TextResult({ children, ...rest }: TextResultProps) {
  return (
    <div id="result" {...rest}>
      {children}
    </div>
  );
}
