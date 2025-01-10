import AsyncStorage from "@react-native-async-storage/async-storage";
export const setLocalStorage = async (
  key: string,
  value: any
): Promise<void> => {
  await AsyncStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = async (key: string): Promise<any | null> => {
  const value = await AsyncStorage.getItem(key);
  return value !== null ? JSON.parse(value) : null;
};

export const removeLocalStorage = async () => {
  await AsyncStorage.clear();
};
