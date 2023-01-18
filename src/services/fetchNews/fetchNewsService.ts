import {instance} from '..';

export const fetchNewsService = async (query: string) => {
  // const API_KEY = process.env.API_KEY;
  const API_KEY = '183daca270264bad86fc5b72972fb82a';

  try {
    const res = await instance({
      url: `${query}&apiKey=${API_KEY}`,
      method: 'GET',
    });

    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
