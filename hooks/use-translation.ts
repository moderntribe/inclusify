import axios from 'axios';
import { useQuery } from 'react-query';
function fetchTranslation() {
  return axios({
    url: '/translate',
    method: 'POST'
  });
}

export function useTranslation() {
  const query = useQuery('translation', fetchTranslation);
  console.log('query', query);
  return query;
}
