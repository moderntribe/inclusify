import Head from 'next/head';

import { Selector, TextArea, TextResult } from '@components';
import { useSelector } from '@hooks';
const OPTIONS = [
  { label: 'Gender', id: 'gender' },
  { label: 'Race', id: 'race' },
  { label: 'Religion', id: 'religion', disabled: true }
  /*   { name: 'Sexual orientation', href: '#', current: false, disabled: true }, */
];
export default function Home() {
  const selector = useSelector(OPTIONS);

  console.log('active selector', selector.selected);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Inclusify by MT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mt-10">
          Inclusify
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Build a more incusive world, word by word.
        </p>
        <Selector className="mt-8" {...selector} />
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <div className="flex w-1/2 min-h-sm">
            <TextArea></TextArea>
          </div>
          <div className="flex w-1/2 min-h-sm">
            <TextResult />
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by MT.
        </a>
      </footer>
    </div>
  );
}
