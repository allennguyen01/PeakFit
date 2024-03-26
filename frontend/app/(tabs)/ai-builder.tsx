import * as React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
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
	Spinner,
} from '@gluestack-ui/themed';
import { FontAwesome6 } from '@expo/vector-icons';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { calculateMacros } from '@/functions/calculateMacros';
import sampleNutritionData from '@/sample_data/sampleDietResponse';
import sampleExerciseData from '@/sample_data/sampleExerciseResponse';
import { getData } from '@/functions/AsyncStorage';
import getMondayBasedWeek from '@/functions/getMondayBasedWeek';

function Nutrition() {
	const [nutritionData, setNutritionData] = React.useState<Array<Nutrition>>(
		[],
	);

	useEffect(() => {
		setNutritionData(sampleNutritionData.dietPlan.meals);
	}, []);

	async function getNutritionData() {
		try {
			const data = await AsyncStorage.getItem('person');
			const parsedData = data != null ? JSON.parse(data) : null;

			const userMacros = calculateMacros(parsedData);

			console.log(userMacros);

			const headers = {
				'Content-Type': 'application/json',
			};

			const dietPlan = await axios.post(
				`http://128.189.195.232:3000/create-diet-plan`,
				JSON.stringify(userMacros),
				{ headers },
			);

			console.log(dietPlan.data.dietPlan.meals);
			setNutritionData(dietPlan.data.dietPlan.meals);
		} catch (e) {
			console.error(e);
		}
	}

	const mondayWeek = getMondayBasedWeek();

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
					onPress={getNutritionData}
				>
					<FontAwesome6
						name='wand-magic-sparkles'
						size={24}
						color='white'
					/>
					<ButtonText> Build with AI</ButtonText>
				</Button>

				<Heading size='xl' fontWeight='600' textAlign='center'>
					Week of {mondayWeek.start} - {mondayWeek.end}
				</Heading>

				<VStack gap={12}>
					{nutritionData.map((n) => (
						<NutritionCard nutrition={n} key={n.mealNumber} />
					))}
				</VStack>
			</VStack>
		</ScrollView>
	);
}

function NutritionCard({ nutrition }: { nutrition: Nutrition }) {
	const [imageURL, setImageURL] = React.useState<string>('');

	useEffect(() => {
		(async () => {
			try {
				// Fetch image from backend for meal 1 only
				if (nutrition.mealNumber !== 1) {
					return;
				}
				const imageResponse = await axios.get(
					'http://128.189.195.232:3000/generate-diet-image',
					{
						params: {
							instructions: nutrition.instructions,
						},
					},
				);

				setImageURL(imageResponse.data);
			} catch (e) {
				console.error('Could not fetch image', e);
			}
		})();
	}, []);

	const mealImageURL: { [key: string]: string } = {
		Breakfast:
			'https://www.eatingwell.com/thmb/-UULlbERQCfJRQTnb5bwjoo9-UQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/old-fashioned-oatmeal-hero-05-060861b81cb641cea272e068aba093fd.jpg',
		Lunch: 'https://www.acouplecooks.com/wp-content/uploads/2022/01/Hummus-Bowl-016.jpg',
		Dinner: 'https://www.eatingwell.com/thmb/brHFTvx40kZq844uGiitI4hWQKo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/grilled-salmon-and-vegetables-with-charred-lemon-vinaigrette-a4d5a04715bf427d86fdbadea6272679.jpg',
		Snack: 'https://static01.nyt.com/images/2018/07/18/dining/18YOGURT1/18YOGURT1-square640.jpg',
	};

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
			alignItems='center'
			justifyContent='flex-start'
			key={nutrition.mealNumber}
		>
			{imageURL ? (
				<Image
					source={{
						uri: imageURL,
					}}
					alt={nutrition.mealType}
					width={80}
					height={80}
					borderRadius={10}
				/>
			) : (
				<Image
					source={{
						uri: mealImageURL[nutrition.mealType],
					}}
					alt={nutrition.mealType}
					width={80}
					height={80}
					borderRadius={10}
				/>
			)}
			<VStack flexShrink={1} space='sm'>
				<VStack>
					<Heading size='lg' marginBottom='$0'>
						{nutrition.mealType}
					</Heading>
					<Text fontWeight='$medium'>
						{nutrition.totalCalories} calories
					</Text>
				</VStack>

				<Box flexDirection='row' flexShrink={1}>
					<Text size='sm' maxWidth='auto'>
						{nutrition.ingredients
							.map((ing) => ing.food)
							.join(', ')}
					</Text>
				</Box>
			</VStack>
		</Card>
	);
}

interface Nutrition {
	mealNumber: number;
	mealType: string;
	totalCalories: number;
	instructions: string;
	ingredients: Array<Ingredient>;
}

interface Ingredient {
	food: string;
	quantity: string;
	calories: number;
	macros: {
		protein: string;
		carbs: string;
		fat: string;
	};
}

function Exercise() {
	const [exerciseData, setExerciseData] = React.useState<Array<Exercise>>([]);

	useEffect(() => {
		setExerciseData(sampleExerciseData.workoutPlan);
	}, []);

	async function getExerciseData() {
		const exerciseUserData = await getData('exerciseData');

		console.log(exerciseUserData);

		const headers = {
			'Content-Type': 'application/json',
		};

		const workoutPlan = await axios.post(
			`http://128.189.195.232:3000/create-workout-plan`,
			JSON.stringify(exerciseUserData),
			{ headers },
		);

		const parsedWorkoutPlan = JSON.parse(workoutPlan.data).workoutPlan;
		setExerciseData(parsedWorkoutPlan);
	}

	const mondayWeek = getMondayBasedWeek();

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
					onPress={getExerciseData}
				>
					<FontAwesome6
						name='wand-magic-sparkles'
						size={24}
						color='white'
					/>
					<ButtonText> Build with AI</ButtonText>
				</Button>

				<Heading size='xl' fontWeight='600' textAlign='center'>
					Week of {mondayWeek.start} - {mondayWeek.end}
				</Heading>

				<VStack gap={12}>
					{exerciseData.map((ex) => (
						<ExerciseCard exercise={ex} key={ex.day} />
					))}
				</VStack>
			</VStack>
		</ScrollView>
	);
}

function ExerciseCard({ exercise }: { exercise: Exercise }) {
	const totalDuration = exercise.workouts.reduce((total, workout) => {
		return total + workout.duration;
	}, 0);

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
		>
			<Image
				source={{
					uri: 'https://i0.wp.com/www.sidekickinteractive.com/wp-content/uploads/2023/04/placeholder-3.png',
				}}
				alt={exercise.day}
			/>
			<VStack flexShrink={1} space='sm'>
				<VStack>
					<Heading size='lg' marginBottom='$0'>
						{exercise.day}
					</Heading>
					<Text fontWeight='$medium'>{totalDuration} minutes</Text>
				</VStack>

				<Box flexDirection='row' flexShrink={1}>
					<Text size='sm' maxWidth='auto'>
						{exercise.workouts.map((w) => w.name).join(', ')}
					</Text>
				</Box>
			</VStack>
		</Card>
	);
}

interface Exercise {
	day: String;
	workouts: Array<Workout>;
}

interface Workout {
	name: string;
	description: string;
	duration: number;
	intensity: string;
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
