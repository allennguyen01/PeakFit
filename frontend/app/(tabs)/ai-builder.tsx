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
import { getData, storeData } from '@/functions/AsyncStorage';
import getMondayBasedWeek from '@/functions/getMondayBasedWeek';
import { mealTypeToImgURL, exerciseDayToImgURL } from '@/functions/imageMaps';
import { Nutrition, Exercise } from '@/types/types';

function NutritionScreen() {
	const [nutritionData, setNutritionData] = React.useState<Array<Nutrition>>(
		[],
	);

	useEffect(() => {
		setNutritionData(sampleNutritionData.dietPlan.meals as Nutrition[]);
		storeData('nutritionPlan', sampleNutritionData.dietPlan.meals);
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
				`http://${process.env.EXPO_PUBLIC_IPv4_ADDRESS}:3000/create-diet-plan`,
				JSON.stringify(userMacros),
				{ headers },
			);

			console.log(dietPlan.data.dietPlan.meals);
			setNutritionData(dietPlan.data.dietPlan.meals);
			storeData('nutritionPlan', dietPlan.data.dietPlan.meals);
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
					`http://${process.env.EXPO_PUBLIC_IPv4_ADDRESS}:3000/generate-diet-image`,
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
						uri: mealTypeToImgURL[nutrition.mealType],
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

function ExerciseScreen() {
	const [exerciseData, setExerciseData] = React.useState<Array<Exercise>>([]);

	useEffect(() => {
		setExerciseData(sampleExerciseData.workoutPlan);
		storeData('exerciseplan', sampleExerciseData.workoutPlan);
	}, []);

	async function getExerciseData() {
		const exerciseUserData = await getData('exerciseData');

		console.log(exerciseUserData);

		const headers = {
			'Content-Type': 'application/json',
		};

		const workoutPlan = await axios.post(
			`http://${process.env.EXPO_PUBLIC_IPv4_ADDRESS}:3000/create-workout-plan`,
			JSON.stringify(exerciseUserData),
			{ headers },
		);

		const parsedWorkoutPlan = JSON.parse(workoutPlan.data).workoutPlan;
		setExerciseData(parsedWorkoutPlan);
		storeData('exerciseplan', sampleExerciseData.workoutPlan);
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
			alignItems='center'
		>
			<Image
				source={{
					uri: exerciseDayToImgURL[exercise.day],
				}}
				alt={exercise.day}
				borderRadius={10}
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

const renderScene = SceneMap({
	first: NutritionScreen,
	second: ExerciseScreen,
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
