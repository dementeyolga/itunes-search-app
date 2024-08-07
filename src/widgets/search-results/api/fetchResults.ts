import axios from 'axios';

async function delay(milliseconds: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('');
    }, milliseconds);
  });
}

export async function fetchResultsByNameAndLimit(name: string, limit: number) {
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
  }
}
