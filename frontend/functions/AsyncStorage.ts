import AsyncStorage from '@react-native-async-storage/async-storage';

async function storeData(key: string, value: object) {
	try {
		const jsonValue = JSON.stringify(value);
		await AsyncStorage.setItem(key, jsonValue);
	} catch (e) {
		// saving error
		console.error(e);
	}
}

async function getData(key: string) {
	try {
		const jsonValue = await AsyncStorage.getItem(key);
		return jsonValue != null ? JSON.parse(jsonValue) : null;
	} catch (e) {
		// error reading value
		console.error(e);
	}
}

export { storeData, getData };
