import axios from 'axios';

const baseURL = 'http://localhost:8080';

type FetchConfig = {
  url: string;
  data: object;
};

const useAxios = () => {

  // const useGet = async (fetchConfig: FetchConfig) => {
  //   axios.get(`${baseURL}/${fetchConfig.url}`)
  // }

  const postMethod = async (fetchConfig: FetchConfig) => {
    return axios.post(`${baseURL}/${fetchConfig.url}`, {
      data: fetchConfig.data,
    }).then((res) => res).catch((err) => err)
  }

  return {postMethod}
}; 

export default useAxios;