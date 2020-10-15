import superagent from 'superagent';

export const getApi = (url) => {
  return superagent
    .get(url)
    .withCredentials()
};
