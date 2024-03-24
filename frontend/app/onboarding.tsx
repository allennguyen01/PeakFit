import { Link } from 'expo-router';

import * as React from 'react';
import { useState } from 'react';
import { storeData, getData } from '@/functions/AsyncStorage';

import {
	Button,
	ButtonText,
	Heading,
	Text,
	Input,
	InputField,
	VStack,
	Select,
	SelectTrigger,
	SelectInput,
	SelectIcon,
	Icon,
	ChevronDownIcon,
	SelectPortal,
	SelectBackdrop,
	SelectContent,
	SelectDragIndicatorWrapper,
	SelectDragIndicator,
	SelectItem,
	Checkbox,
	CheckboxIndicator,
	CheckboxLabel,
	CheckboxIcon,
	CheckIcon,
	RadioGroup,
	Radio,
	RadioIndicator,
	RadioIcon,
	RadioLabel,
	CircleIcon,
	ScrollView,
} from '@gluestack-ui/themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NumberInput from '@/components/NumberInput';
import TextInput from '@/components/TextInput';

import {
	PersonDetails,
	calculateMacros,
	Sex,
	ActivityLevel,
	Goal,
} from '@/functions/calculateMacros';

const person: PersonDetails = {
	age: 0,
	sex: null,
	weightKg: 0,
	heightCm: 0,
	activityLevel: null,
	goal: null,
};

function SignUp({ navigation }) {
	return (
		<VStack
			padding={20}
			justifyContent='space-between'
			height='$full'
			backgroundColor='white'
			borderTopColor='black'
			borderTopWidth={0.5}
		>
			<VStack space='lg'>
				<Heading textAlign='center'>Create your account!</Heading>
				<Input
					variant='outline'
					size='md'
					isDisabled={false}
					isInvalid={false}
					isReadOnly={false}
				>
					<InputField
						placeholder='Email Address'
						keyboardType='email-address'
					/>
				</Input>
				<Input
					variant='outline'
					size='md'
					isDisabled={false}
					isInvalid={false}
					isReadOnly={false}
				>
					<InputField
						placeholder='Password'
						keyboardType='visible-password'
					/>
				</Input>
			</VStack>

			<Button onPress={() => navigation.navigate('You')} mb={50}>
				<ButtonText>Next</ButtonText>
			</Button>
		</VStack>
	);
}

function You({ navigation }) {
	const [weightKg, setWeightKg] = useState('');
	const [heightCm, setHeightCm] = useState('');
	const [age, setAge] = useState('');
	const [sex, setSex] = useState('');
	const [activityLevel, setActivityLevel] = useState('');

	const handleWeightChange = (text: string) => {
		setWeightKg(text);
	};
	const handleHeightChange = (text: string) => {
		setHeightCm(text);
	};
	const handleAgeChange = (text: string) => {
		setAge(text);
	};

	return (
		<VStack
			padding={20}
			justifyContent='space-between'
			height='$full'
			backgroundColor='white'
			borderTopColor='black'
			borderTopWidth={0.5}
		>
			<VStack space='lg'>
				<NumberInput
					title='How much do you weigh?'
					placeholder='Enter weight here'
					unit='kg'
					onTextChange={handleWeightChange}
				/>

				<NumberInput
					title='How tall are you?'
					placeholder='Enter height here'
					unit='cm'
					onTextChange={handleHeightChange}
				/>

				<NumberInput
					title='How old are you?'
					placeholder='Enter age here'
					unit=''
					onTextChange={handleAgeChange}
				/>

				<VStack space='sm'>
					<Text textAlign='center' fontSize='$lg'>
						What is your sex?
					</Text>
					<Select selectedValue={sex} onValueChange={setSex}>
						<SelectTrigger variant='outline' size='md'>
							<SelectInput placeholder='Select option' />
							<SelectIcon mr='$3'>
								<Icon as={ChevronDownIcon} />
							</SelectIcon>
						</SelectTrigger>
						<SelectPortal>
							<SelectBackdrop />
							<SelectContent>
								<SelectDragIndicatorWrapper>
									<SelectDragIndicator />
								</SelectDragIndicatorWrapper>
								<SelectItem label='Male' value='male' />
								<SelectItem label='Female' value='female' />
							</SelectContent>
						</SelectPortal>
					</Select>
				</VStack>

				<VStack space='sm'>
					<VStack space='sm'>
						<Text textAlign='center' fontSize='$lg'>
							What is your activity level per week?
						</Text>
						<Text textAlign='center' text='$secondary400'>
							(hours of exercise/sports week)
						</Text>
					</VStack>
					<Select
						selectedValue={activityLevel}
						onValueChange={setActivityLevel}
					>
						<SelectTrigger variant='outline' size='md'>
							<SelectInput placeholder='Select option' />
							<SelectIcon mr='$3'>
								<Icon as={ChevronDownIcon} />
							</SelectIcon>
						</SelectTrigger>
						<SelectPortal>
							<SelectBackdrop />
							<SelectContent>
								<SelectDragIndicatorWrapper>
									<SelectDragIndicator />
								</SelectDragIndicatorWrapper>
								<SelectItem
									label='None (little to no physical activity)'
									value='none'
								/>
								<SelectItem
									label='A little (1 to 3 hours)'
									value='little'
								/>
								<SelectItem
									label='Some (4 to 6 hours)'
									value='some'
								/>
								<SelectItem
									label='A lot (7 to 9 hours per week)'
									value='lot'
								/>
								<SelectItem
									label='A ton (10+ hours per week)'
									value='ton'
								/>
							</SelectContent>
						</SelectPortal>
					</Select>
				</VStack>
			</VStack>

			<Button
				onPress={() => {
					navigation.navigate('Goals');

					person.weightKg = Number(weightKg);
					person.heightCm = Number(heightCm);
					person.age = Number(age);
					person.sex = sex as Sex;
					person.activityLevel = activityLevel as ActivityLevel;
				}}
				mb={50}
			>
				<ButtonText>Next</ButtonText>
			</Button>
		</VStack>
	);
}

function Goals({ navigation }) {
	const goals = [
		{ title: 'Lose fat', value: 'lostFat' },
		{ title: 'Maintain weight', value: 'maintain' },
		{ title: 'Gain muscle', value: 'gainMuscle' },
	];

	const [goal, setGoal] = useState('');

	return (
		<VStack
			padding={20}
			justifyContent='space-between'
			height='$full'
			backgroundColor='white'
			borderTopColor='black'
			borderTopWidth={0.5}
		>
			<VStack space='lg'>
				<Text textAlign='center' fontSize='$lg'>
					What is your fitness goal?
				</Text>

				<RadioGroup gap={10} value={goal} onChange={setGoal}>
					{goals.map((g) => (
						<Radio
							value={g.value}
							size='md'
							isInvalid={false}
							isDisabled={false}
							borderColor='$borderDark500'
							borderWidth={2}
							padding={10}
							borderRadius={10}
							key={g.title}
						>
							<RadioIndicator mr='$2'>
								<RadioIcon as={CircleIcon} strokeWidth={1} />
							</RadioIndicator>
							<RadioLabel>{g.title}</RadioLabel>
						</Radio>
					))}
				</RadioGroup>
			</VStack>

			<Button
				onPress={() => {
					navigation.navigate('Nutrition');
					person.goal = goal as Goal;

					storeData('person', person);

					getData('person').then((value) => {
						console.log(value);
					});
				}}
				mb={50}
			>
				<ButtonText>Next</ButtonText>
			</Button>
		</VStack>
	);
}

function Nutrition({ navigation }) {
	const dietaryRestrictions = [
		'Vegetarian',
		'Vegan',
		'Halal',
		'Kosher',
		'Gluten-free',
		'Diary-free',
		'Diabetic',
	];

	return (
		<VStack
			padding={20}
			justifyContent='space-between'
			height='$full'
			backgroundColor='white'
			borderTopColor='black'
			borderTopWidth={0.5}
		>
			<VStack space='lg'>
				<Text textAlign='center' fontSize='$lg'>
					Do you have any dietary restrictions?
				</Text>
				<VStack space='md'>
					{dietaryRestrictions.map((dr) => (
						<Checkbox
							key={dr}
							size='md'
							isInvalid={false}
							isDisabled={false}
							value={dr}
							aria-label={dr}
							borderColor='$borderDark500'
							borderWidth={2}
							padding={10}
							borderRadius={10}
						>
							<CheckboxIndicator mr='$2'>
								<CheckboxIcon as={CheckIcon} />
							</CheckboxIndicator>
							<CheckboxLabel>{dr}</CheckboxLabel>
						</Checkbox>
					))}
				</VStack>
			</VStack>

			<Button onPress={() => navigation.navigate('Exercise')} mb={50}>
				<ButtonText>Next</ButtonText>
			</Button>
		</VStack>
	);
}

function Exercise({ navigation }) {
	const [fitnessLevel, setFitnessLevel] = useState('');
	const [goals, setGoals] = useState('');
	const [preferences, setPreferences] = useState('');
	const [equipmentAvailability, setEquipmentAvailability] = useState('');
	const [availableTime, setAvailableTime] = useState('');
	const [healthConditions, setHealthConditions] = useState('');

	const handleGoalsChange = (text: string) => {
		setGoals(text);
	};
	const handlePreferencesChange = (text: string) => {
		setPreferences(text);
	};
	const handleEquipmentAvailabilityChange = (text: string) => {
		setEquipmentAvailability(text);
	};
	const handleAvailableTimeChange = (text: string) => {
		setAvailableTime(text);
	};
	const handleHealthConditionsChange = (text: string) => {
		setHealthConditions(text);
	};

	return (
		<ScrollView>
			<VStack
				padding={20}
				justifyContent='space-between'
				height='$full'
				backgroundColor='white'
				borderTopColor='black'
				borderTopWidth={0.5}
				space='lg'
			>
				<VStack space='lg'>
					<VStack space='sm'>
						<Text fontSize='$lg'>What is your fitness level?</Text>
						<Select
							selectedValue={fitnessLevel}
							onValueChange={setFitnessLevel}
						>
							<SelectTrigger variant='outline' size='md'>
								<SelectInput placeholder='Select option' />
								<SelectIcon mr='$3'>
									<Icon as={ChevronDownIcon} />
								</SelectIcon>
							</SelectTrigger>
							<SelectPortal>
								<SelectBackdrop />
								<SelectContent>
									<SelectDragIndicatorWrapper>
										<SelectDragIndicator />
									</SelectDragIndicatorWrapper>
									<SelectItem
										label='Begineer'
										value='begineer'
									/>
									<SelectItem
										label='Intermediate'
										value='intermediate'
									/>
									<SelectItem label='Expert' value='expert' />
								</SelectContent>
							</SelectPortal>
						</Select>
					</VStack>

					<TextInput
						title='What are your goals?'
						example='e.g. run a half marathon in under 2 hours and lose 10 lbs'
						onChangeText={handleGoalsChange}
					/>

					<TextInput
						title='What are your preferred form of exercises?'
						example='e.g. outdoor running but is open to strength and conditioning exercises'
						onChangeText={handlePreferencesChange}
					/>

					<TextInput
						title='What kind of fitness equipment do you have access to?'
						example='e.g. basic home gym with dumbbells, resistance bands, and a yoga mat'
						onChangeText={handleEquipmentAvailabilityChange}
					/>

					<TextInput
						title='How much available time do you have?'
						example='e.g. 45 minutes on weekdays, up to 90 minutes on weekends'
						onChangeText={handleAvailableTimeChange}
					/>

					<TextInput
						title='What health conditions do you have?'
						example='e.g. none, asthma, arthritis, etc.'
						onChangeText={handleHealthConditionsChange}
					/>
				</VStack>

				<Link href='/(tabs)' asChild>
					<Button mb={50}>
						<ButtonText>Complete setup</ButtonText>
					</Button>
				</Link>
			</VStack>
		</ScrollView>
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
			<Stack.Screen name='Exercise' component={Exercise} />
		</Stack.Navigator>
	);
}

export default function App() {
	return <OnboardingStack />;
}
