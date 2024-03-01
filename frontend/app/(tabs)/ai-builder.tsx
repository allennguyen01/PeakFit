import * as React from 'react';
import { View, useWindowDimensions, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const Nutrition = () => <View style={{ flex: 1 }} />;

const Exercise = () => <View style={{ flex: 1 }} />;

const renderScene = SceneMap({
	first: Nutrition,
	second: Exercise,
});

export default function AIBuilder() {
	const layout = useWindowDimensions();

	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: 'first', title: 'Nutrition' },
		{ key: 'second', title: 'Exercise' },
	]);

	return (
		<TabView
			navigationState={{ index, routes }}
			renderScene={renderScene}
			renderTabBar={renderTabBar}
			onIndexChange={setIndex}
			initialLayout={{ width: layout.width }}
		/>
	);
}

function renderTabBar(props: any) {
	return (
		<TabBar
			{...props}
			indicatorStyle={{ backgroundColor: '#F29D38', height: 3 }}
			style={{ backgroundColor: 'white', color: 'black' }}
			renderLabel={({ route, focused, color }) => (
				<Text
					style={{
						color: 'black',
						margin: 4,
						fontSize: 18,
					}}
				>
					{route.title}
				</Text>
			)}
		/>
	);
}
