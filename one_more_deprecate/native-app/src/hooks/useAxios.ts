import axios from 'axios';

const baseURL = 'http://localhost:8080';

type PostConfig = {
  url: string;
  data: object;
};

const useAxios = () => {

  const getMethod = async (requestUrl: String) => {
    return axios.get(`${baseURL}/${requestUrl}`);
  }

  const postMethod = async (config: PostConfig) => {
    return axios.post(`${baseURL}/${config.url}`, {
      data: config.data,
    }).then((res) => res).catch((err) => err)
  }

  return { getMethod, postMethod }
}; 

export default useAxios;