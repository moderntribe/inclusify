import React, { ReactNode } from 'react';

interface ITextResultProps {
  children?: ReactNode;
}

export function TextResult({ children, ...restProps }: ITextResultProps) {
  return (
    <div id="result" className="border-2 border-indigo-600 rounded flex flex-1 mx-2" {...restProps}>
      {children}
    </div>
  );
}
