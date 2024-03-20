import { View, Text } from '@gluestack-ui/themed';
import { Link } from 'expo-router';
import { Pressable } from 'react-native';

export default function TabOneScreen() {
	return (
		<View>
			<Text>Home</Text>
			<Link href='/onboarding' asChild>
				<Pressable>
					<Text>Go to Onboarding</Text>
				</Pressable>
			</Link>
		</View>
	);
}
