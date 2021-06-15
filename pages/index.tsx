import * as React from 'react';

import Head from 'next/head';
import { useDebounce } from 'use-debounce';

import { Selector, TextArea, TextResult } from '@components';
import { useSelector, useTranslation } from '@hooks';
const OPTIONS = [
  { label: 'Gender', id: 'gender' },
  { label: 'Name', id: 'name' },
  { label: 'Location', id: 'location' }
  /*   { name: 'Sexual orientation', href: '#', current: false, disabled: true }, */
];
export default function Home() {
  const selector = useSelector(OPTIONS);
  const [text, setText] = React.useState('');
  const [debounceText] = useDebounce(text, 1000);

  const { isFetching, data } = useTranslation({
    text: debounceText,
    options: Array.isArray(selector.checkbox.state) ? selector.checkbox.state : []
  });

  function onChangeText(event: React.FormEvent<HTMLTextAreaElement>) {
    // eslint-disable-next-line
    // @ts-ignore
    setText(event.target.value);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>Inclusify by MT</title>
        <meta
          name="description"
          content="Build a more inclusive world, word by word. Remove gender, age, location biases from your texts."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center w-full flex-1 px-6 sm:px-20 text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mt-10">
          Inclusify
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Build a more inclusive world, word by word.
        </p>
        <Selector className="mt-8 space-x-4" {...selector} />
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-around max-w-6xl mt-6 w-full gap-4">
          <div className="flex w-full lg:w-1/2 min-h-sm bg-white overflow-hidden shadow rounded-lg h-full p-1">
            <TextArea
              className="px-4 py-5 sm:p-6 w-full focus:outline-none focus:ring focus:border-blue-300 rounded"
              onChange={onChangeText}
            />
          </div>
          <div className="flex flex-col w-full lg:w-1/2 min-h-sm bg-white overflow-hidden shadow rounded-lg h-full">
            <TextResult
              className="px-4 py-5 sm:p-6 w-full flex-1 flex flex-wrap whitespace-pre-wrap"
              translation={data}
            />
            <div className="bg-gray-50 px-4 py-4 sm:px-6">Unbiased version</div>
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://tri.be"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by MT.
        </a>
      </footer>
    </div>
  );
}
