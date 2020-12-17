import { useState, useEffect } from 'react';

import axios from 'axios';


const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api'
})

type AxiosConfig = object;

type InitialData = object;

const useAxios: (axiosConfig: AxiosConfig, initialData: InitialData) => any[] = (axiosConfig, initialData) => {
  const [state, setState] = useState(initialData);
  const [serviceConfig, setServiceConfig] = useState(axiosConfig);

  const runFetch = async () => {
    axiosInstance(axiosConfig).then((res) => {
      console.log('ran', res);

    }).catch((err) => {
      console.log('error', err);
    })
  }

  useEffect(() => {
    runFetch();
  }, [serviceConfig])

  return [
    state,
    setServiceConfig,
  ]
}; 

export default useAxios;