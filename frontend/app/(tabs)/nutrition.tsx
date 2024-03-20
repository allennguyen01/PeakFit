import {
	Progress,
	ProgressFilledTrack,
	Text,
	VStack,
	ScrollView,
	Heading,
	HStack,
	Card,
	Image,
	Box,
} from '@gluestack-ui/themed';

import LinearProgressTracker from '@/components/LinearProgressTracker';

export default function Nutrition() {
	const nutritionData = {
		progress: 1550,
		goal: 2450,
		date: 'Tuesday, Jan 15',
		meals: [
			{
				type: 'Breakfast',
				calories: 650,
				foods: [
					'Tomato omelette',
					'black coffee',
					'greek yogurt',
					'rye toast',
				],
			},
			{
				type: 'Lunch',
				calories: 900,
				foods: ['Habanero chicken burrito bowl', 'mango smoothie'],
			},
			{
				type: 'Dinner',
				calories: 900,
				foods: ['Chicken pesto chicken', 'greek salad'],
			},
		],
	};

	return (
		<ScrollView backgroundColor='white'>
			<VStack margin={20} space='md'>
				<LinearProgressTracker plan={nutritionData} unit='Calories' />

				<Heading size='2xl' textAlign='center'>
					{nutritionData.date}
				</Heading>

				<VStack gap={12}>
					{nutritionData.meals.map((meal) => (
						<MealCard meal={meal} key={meal.type} />
					))}
				</VStack>
			</VStack>
		</ScrollView>
	);
}

function MealCard({ meal }: { meal: Meal }) {
	return (
		<Card
			size='md'
			variant='filled'
			m='$3'
			flexDirection='row'
			gap='$4'
			margin='$0'
			maxWidth='$full'
			display='flex'
			key={meal.type}
		>
			<Image
				source={{
					uri: 'https://i0.wp.com/www.sidekickinteractive.com/wp-content/uploads/2023/04/placeholder-3.png',
				}}
				alt={meal.type}
			/>
			<VStack flexShrink={1} space='sm'>
				<VStack>
					<Heading size='lg' marginBottom='$0'>
						{meal.type}
					</Heading>
					<Text fontWeight='$medium'>{meal.calories} calories</Text>
				</VStack>

				<Box flexDirection='row' flexShrink={1}>
					<Text size='sm' maxWidth='auto'>
						{meal.foods.join(', ')}
					</Text>
				</Box>
			</VStack>
		</Card>
	);
}

interface Meal {
	type: string;
	calories: number;
	foods: Array<string>;
}
