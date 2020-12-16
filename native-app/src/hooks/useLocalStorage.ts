import React from 'react';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;
const useLocalStorage = () => {
  const setStorage = async (key: string, value: object|string) => {
    await Storage.set({
      key,
      value: JSON.stringify(value),
    });
  };

  const getStorage = async (key: string) => {
    const { value } = await Storage.get({ key });
    return value && JSON.parse(value);
  }

  const resetStorage = async () => {
    await Storage.clear();
  }

  const removeFromStorage = async (key: string) => {
    await Storage.remove({ key });
  }

  const checkAllKeysStorage = async () => {
    await Storage.keys();
  }

  return {
    getStorage,
    setStorage,
    resetStorage,
    removeFromStorage,
    checkAllKeysStorage
  }
};

export default useLocalStorage;