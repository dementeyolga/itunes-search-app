import axios from 'axios';
import { SearchResult } from '../model/interfaces';

async function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('');
    }, ms);
  });
}

export async function fetchByNameAndLimit(name: string, limit: number) {
  try {
    const { data } = await axios.get<{
      resultsCount: number;
      results: SearchResult[];
    }>('https://itunes.apple.com/search', {
      params: {
        term: name,
        limit,
      },
    });

    await delay(500);

    return data.results;
  } catch (error) {
    console.error(error, 'Failed to fetch results');
    throw new Error('Failed to fetch results');
  }
}
