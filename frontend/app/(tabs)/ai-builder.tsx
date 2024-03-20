import * as React from 'react';
import { useWindowDimensions } from 'react-native';
import {
	Text,
	View,
	Button,
	ButtonText,
	ButtonIcon,
	Card,
	VStack,
	Heading,
	Box,
	Image,
	ScrollView,
} from '@gluestack-ui/themed';
import { FontAwesome6 } from '@expo/vector-icons';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

function Nutrition() {
	const nutritionData = [
		{
			id: 0,
			date: new Date('2024-03-04'),
			calories: 2500,
			exercises: [
				'Tomato omelette',
				'Habanero chicken burrito bowl',
				'Chicken pesto pasta',
			],
		},
		{
			id: 1,
			date: new Date('2024-03-05'),
			calories: 2500,
			exercises: [
				'Tomato omelette',
				'Habanero chicken burrito bowl',
				'Chicken pesto pasta',
			],
		},
		{
			id: 2,
			date: new Date('2024-03-06'),
			calories: 2500,
			exercises: [
				'Tomato omelette',
				'Habanero chicken burrito bowl',
				'Chicken pesto pasta',
			],
		},
		{
			id: 3,
			date: new Date('2024-03-07'),
			calories: 2500,
			exercises: [
				'Tomato omelette',
				'Habanero chicken burrito bowl',
				'Chicken pesto pasta',
			],
		},
	];

	return (
		<ScrollView backgroundColor='white'>
			<VStack gap={20} margin={20}>
				<Button
					size='xl'
					variant='solid'
					action='primary'
					py={10}
					px={40}
					height={60}
					gap={12}
					mb={10}
					borderRadius='$full'
					alignSelf='center'
					shadowColor='black'
					hardShadow='2'
					shadowRadius={10}
					isDisabled={false}
					isFocusVisible={false}
				>
					<FontAwesome6
						name='wand-magic-sparkles'
						size={24}
						color='white'
					/>
					<ButtonText> Build with AI</ButtonText>
				</Button>

				<Heading size='xl' fontWeight='600' textAlign='center'>
					Week of Mar 3 - Mar 9
				</Heading>

				<VStack gap={12}>
					{nutritionData.map((n) => (
						<NutritionCard nutrition={n} key={n.id} />
					))}
				</VStack>
			</VStack>
		</ScrollView>
	);
}

function NutritionCard({ nutrition }: { nutrition: Nutrition }) {
	const weekday = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

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
			key={nutrition.date.toISOString()}
		>
			<Image
				source={{
					uri: 'https://i0.wp.com/www.sidekickinteractive.com/wp-content/uploads/2023/04/placeholder-3.png',
				}}
				alt={nutrition.date.toISOString()}
			/>
			<VStack flexShrink={1} space='sm'>
				<VStack>
					<Heading size='lg' marginBottom='$0'>
						{weekday[nutrition.date.getDay()]}
					</Heading>
					<Text fontWeight='$medium'>
						{nutrition.calories} calories
					</Text>
				</VStack>

				<Box flexDirection='row' flexShrink={1}>
					<Text size='sm' maxWidth='auto'>
						{nutrition.exercises.join(', ')}
					</Text>
				</Box>
			</VStack>
		</Card>
	);
}

interface Nutrition {
	date: Date;
	calories: number;
	exercises: Array<string>;
}

function Exercise() {
	const exerciseData = [
		{
			id: 0,
			date: new Date('2024-03-04'),
			durationMinutes: 60,
			split: 'Legs',
			exercises: ['Squats', 'Leg Extensions', 'Bulgarian Split Squats'],
		},
		{
			id: 1,
			date: new Date('2024-03-05'),
			durationMinutes: 60,
			split: 'Legs',
			exercises: ['Squats', 'Leg Extensions', 'Bulgarian Split Squats'],
		},
		{
			id: 2,
			date: new Date('2024-03-06'),
			durationMinutes: 60,
			split: 'Legs',
			exercises: ['Squats', 'Leg Extensions', 'Bulgarian Split Squats'],
		},
		{
			id: 3,
			date: new Date('2024-03-07'),
			durationMinutes: 60,
			split: 'Legs',
			exercises: ['Squats', 'Leg Extensions', 'Bulgarian Split Squats'],
		},
		{
			id: 4,
			date: new Date('2024-03-08'),
			durationMinutes: 60,
			split: 'Legs',
			exercises: ['Squats', 'Leg Extensions', 'Bulgarian Split Squats'],
		},
	];

	return (
		<ScrollView backgroundColor='white'>
			<VStack gap={20} margin={20}>
				<Button
					size='xl'
					variant='solid'
					action='primary'
					py={10}
					px={40}
					height={60}
					gap={12}
					mb={10}
					borderRadius='$full'
					alignSelf='center'
					shadowColor='black'
					hardShadow='2'
					shadowRadius={10}
					isDisabled={false}
					isFocusVisible={false}
				>
					<FontAwesome6
						name='wand-magic-sparkles'
						size={24}
						color='white'
					/>
					<ButtonText> Build with AI</ButtonText>
				</Button>

				<Heading size='xl' fontWeight='600' textAlign='center'>
					Week of Mar 3 - Mar 9
				</Heading>

				<VStack gap={12}>
					{exerciseData.map((ex) => (
						<ExerciseCard exercise={ex} key={ex.id} />
					))}
				</VStack>
			</VStack>
		</ScrollView>
	);
}

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
				<Text color='black' margin={4} fontSize={18}>
					{route.title}
				</Text>
			)}
		/>
	);
}

function ExerciseCard({ exercise }: { exercise: Exercise }) {
	const weekday = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

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
			key={exercise.date.toISOString()}
		>
			<Image
				source={{
					uri: 'https://i0.wp.com/www.sidekickinteractive.com/wp-content/uploads/2023/04/placeholder-3.png',
				}}
				alt={exercise.date.toISOString()}
			/>
			<VStack flexShrink={1} space='sm'>
				<VStack>
					<Heading size='lg' marginBottom='$0'>
						{weekday[exercise.date.getDay()]}
					</Heading>
					<Text fontWeight='$medium'>
						{exercise.durationMinutes} minutes
					</Text>
				</VStack>

				<Box flexDirection='row' flexShrink={1}>
					<Text size='sm' maxWidth='auto'>
						{exercise.exercises.join(', ')}
					</Text>
				</Box>
			</VStack>
		</Card>
	);
}

interface Exercise {
	date: Date;
	durationMinutes: number;
	split: string;
	exercises: Array<string>;
}
