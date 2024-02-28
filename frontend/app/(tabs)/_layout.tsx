import React from 'react';
import { Tabs } from 'expo-router';
import { Icon } from '@gluestack-ui/themed';
import {
	ChefHat,
	Activity,
	Home,
	Sparkles,
	UserRound,
} from 'lucide-react-native';

export default function TabLayout() {
	return (
		<Tabs>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Home',
					tabBarIcon: ({ color, focused }) => (
						<Icon
							as={Home}
							size='xl'
							color={`${focused ? '#F29D38' : color}`}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='ai-builder'
				options={{
					title: 'AI Builder',
					tabBarIcon: ({ color, focused }) => (
						<Icon
							as={Sparkles}
							size='xl'
							color={`${focused ? '#F29D38' : color}`}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='nutrition'
				options={{
					title: 'Nutrition',
					tabBarIcon: ({ color, focused }) => (
						<Icon
							as={ChefHat}
							size='xl'
							color={`${focused ? '#F29D38' : color}`}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='exercise'
				options={{
					title: 'Exercise',
					tabBarIcon: ({ color, focused }) => (
						<Icon
							as={Activity}
							size='xl'
							color={`${focused ? '#F29D38' : color}`}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='you'
				options={{
					title: 'You',
					tabBarIcon: ({ color, focused }) => (
						<Icon
							as={UserRound}
							size='xl'
							color={`${focused ? '#F29D38' : color}`}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
