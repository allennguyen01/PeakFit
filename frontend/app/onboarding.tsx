import { Link } from 'expo-router';

import * as React from 'react';
import {
	ScrollView,
	View,
	Button,
	ButtonText,
	Heading,
} from '@gluestack-ui/themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function SignUp({ navigation }) {
	return (
		<View>
			<Heading>Welcome to Muscle Momentum</Heading>
			<Button onPress={() => navigation.navigate('You')}>
				<ButtonText>Next</ButtonText>
			</Button>
		</View>
	);
}

function You({ navigation }) {
	return (
		<View>
			<Button onPress={() => navigation.navigate('Goals')}>
				<ButtonText>Next</ButtonText>
			</Button>
		</View>
	);
}

function Goals({ navigation }) {
	return (
		<View>
			<Button onPress={() => navigation.navigate('Nutrition')}>
				<ButtonText>Next</ButtonText>
			</Button>
		</View>
	);
}

function Nutrition({ navigation }) {
	return (
		<View>
			<Link href='/(tabs)' asChild>
				<Button>
					<ButtonText>Home</ButtonText>
				</Button>
			</Link>
		</View>
	);
}

const Stack = createNativeStackNavigator();

function OnboardingStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Sign Up' component={SignUp} />
			<Stack.Screen name='You' component={You} />
			<Stack.Screen name='Goals' component={Goals} />
			<Stack.Screen name='Nutrition' component={Nutrition} />
		</Stack.Navigator>
	);
}

export default function App() {
	return <OnboardingStack />;
}
