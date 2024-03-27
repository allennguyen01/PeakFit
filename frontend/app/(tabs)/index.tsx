import {
	VStack,
	ScrollView,
	Button,
	ButtonText,
	Image,
	Pressable,
	Text,
	HStack,
} from '@gluestack-ui/themed';
import { Link } from 'expo-router';
import Calender from '@/components/Calender';
import PersonaButton from '@/components/PersonaButton';

export default function TabOneScreen() {
	return (
		<ScrollView>
			<VStack justifyContent='center' space='md' margin={20}>
				<Link href='/onboarding' asChild>
					<Button width={150} alignSelf='center'>
						<ButtonText>Sign Up</ButtonText>
					</Button>
				</Link>

				<HStack space='sm'>
					<PersonaButton
						description='Old man'
						imageURL='https://media.istockphoto.com/id/184089713/photo/senior-man-with-his-hands-in-pockets.jpg?s=612x612&w=0&k=20&c=Ewl03X3JCk8FoO02-lenmluMyt8-zTejioVKp0PrmeQ='
						// 						stats={{
						// 							age: 60,
						// 							sex: 'male',
						// 							weightKg: 85,
						// 							heightCm: 175,
						// 							goal: 'maintainWeight',
						// 							activityLevel: 'little',
						// 							fitnessLevel: 'beginner',
						// 							goals: 'To improve overall health, lose 10 kg, and increase flexibility and balance',
						// 							preferences:
						// 								'Low-impact exercises, enjoys walking and swimming, and is interested in starting yoga or pilates',
						// 							equipmentAvailability:
						// 								'Has access to a basic home gym setup with dumbbells, a treadmill, and a yoga mat. Lives near a park for outdoor walks and a community pool.',
						// 							availableTime:
						// 								'Can dedicate 30 minutes a day during the weekdays and up to 1 hour on weekends.',
						// 							healthConditions:
						// 								'Hypertension (controlled with medication), mild knee arthritis.',
						// 						}}
						// 						body={`- Age: 60
						// - Sex: Male
						// - Weight (kg): 85
						// - Height (cm): 175
						// - Fitness level: Beginner
						// - Fitness goals: To improve overall health, lose 10 kg, and increase flexibility and balance.
						// - Exercise preferences: Prefers low-impact exercises, enjoys walking and swimming, and is interested in starting yoga or Pilates.
						// - Equipment access: Has access to a basic home gym setup with dumbbells, a treadmill, and a yoga mat. Lives near a park for outdoor walks and a community pool.
						// - Available time for exercise: Can dedicate 30 minutes a day during the weekdays and up to 1 hour on weekends.
						// - Health conditions: Hypertension (controlled with medication), mild knee arthritis.`}
					/>
					<PersonaButton
						description='Male student'
						imageURL='https://img.freepik.com/premium-photo/college-student-young-man-full-body-portrait-success-successful-thumbs-up-smiling-isolated-white_770123-581.jpg'
					/>
					<PersonaButton
						description='Female student'
						imageURL='https://st4.depositphotos.com/1715570/22303/i/450/depositphotos_223034568-stock-photo-full-body-portrait-female-college.jpg'
					/>
					<PersonaButton
						description='Business woman'
						imageURL='https://media.istockphoto.com/id/452632457/photo/young-african-businesswoman-standing-relaxed-on-white.jpg?s=612x612&w=0&k=20&c=gYhVGS4kRw0gAR74pAxInjP6jD0bUG4Vf7r03EqQ9kw='
					/>
				</HStack>

				<Calender />
			</VStack>
		</ScrollView>
	);
}
