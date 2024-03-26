import { VStack, ScrollView, Button, ButtonText } from '@gluestack-ui/themed';
import { Link } from 'expo-router';
import Calender from '@/components/Calender';

export default function TabOneScreen() {
	return (
		<ScrollView>
			<VStack justifyContent='center' space='md'>
				<Link href='/onboarding' asChild>
					<Button width={150} alignSelf='center'>
						<ButtonText>Sign Up</ButtonText>
					</Button>
				</Link>
				<Calender />
			</VStack>
		</ScrollView>
	);
}
