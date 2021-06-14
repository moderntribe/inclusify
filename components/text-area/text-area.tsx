import React from 'react';

export function TextArea(props) {
  return (
    <textarea className="flex flex-1 border-2 border-indigo-600 rounded mx-2" {...props}></textarea>
  );
}
