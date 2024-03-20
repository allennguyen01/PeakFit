import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

function TabBarIcon({
	names,
	color,
	focused,
}: {
	names: Array<
		| 'home'
		| 'home-outline'
		| 'sparkles'
		| 'sparkles-outline'
		| 'nutrition'
		| 'nutrition-outline'
		| 'body'
		| 'body-outline'
		| 'person'
		| 'person-outline'
	>;
	focused: boolean;
	color: string;
}) {
	return (
		<Ionicons
			name={focused ? names[0] : names[1]}
			size={focused ? 32 : 26}
			color={`${focused ? '#F29D38' : color}`}
		/>
	);
}

export default function TabLayout() {
	return (
		<Tabs screenOptions={{ tabBarActiveTintColor: '#F29D38' }}>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Home',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							names={['home', 'home-outline']}
							focused={focused}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='ai-builder'
				options={{
					title: 'AI Builder',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							names={['sparkles', 'sparkles-outline']}
							focused={focused}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='nutrition'
				options={{
					title: 'Nutrition',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							names={['nutrition', 'nutrition-outline']}
							focused={focused}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='exercise'
				options={{
					title: 'Exercise',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							names={['body', 'body-outline']}
							focused={focused}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='you'
				options={{
					title: 'You',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							names={['person', 'person-outline']}
							focused={focused}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
