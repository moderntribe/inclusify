import axios, { AxiosResponse } from 'axios';
import { useQuery, UseQueryResult } from 'react-query';

const BASE_URL = 'http://0.0.0.0:8080'; //'https://europe-west1-degenderify.cloudfunctions.net';

type QueryKey = [string, string, string[]];

async function fetchTranslation({ queryKey }: { queryKey: QueryKey }) {
  const [, text, options] = queryKey;
  const { data } = await axios.get(BASE_URL + '/', {
    params: {
      text,
      options
    }
  });
  return data as Translation;
}

export type UseTranslation = {
  text: string;
  options: (string | number)[];
};

export type Translation = (
  | string
  | {
      symbol: string;
      synonyms: string[];
      flags: string[];
    }
)[];

export function useTranslation(input: UseTranslation): UseQueryResult<Translation, unknown> {
  const { text, options } = input;
  const query = useQuery(['translation', text, options], fetchTranslation);
  return query;
}
