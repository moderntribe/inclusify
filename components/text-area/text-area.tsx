import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export type TextAreaProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  children?: ReactNode;
};

export function TextArea(props: TextAreaProps) {
  return <textarea {...props} placeholder="Type to remove biases."></textarea>;
}
