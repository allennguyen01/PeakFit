import { Link } from 'expo-router';

import * as React from 'react';
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
				/>

				<NumberInput
					title='How tall are you?'
					placeholder='Enter height here'
					unit='cm'
				/>

				<NumberInput
					title='How old are you?'
					placeholder='Enter age here'
					unit=''
				/>

				<VStack space='sm'>
					<Text textAlign='center' fontSize='$lg'>
						What is your sex?
					</Text>
					<Select>
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
					<Select>
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

			<Button onPress={() => navigation.navigate('Goals')} mb={50}>
				<ButtonText>Next</ButtonText>
			</Button>
		</VStack>
	);
}

function Goals({ navigation }) {
	const goals = ['Lose weight', 'Maintain weight', 'Gain weight'];

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

				<RadioGroup gap={10}>
					{goals.map((goal) => (
						<Radio
							value={goal}
							size='md'
							isInvalid={false}
							isDisabled={false}
							borderColor='$borderDark500'
							borderWidth={2}
							padding={10}
							borderRadius={10}
							key={goal}
						>
							<RadioIndicator mr='$2'>
								<RadioIcon as={CircleIcon} strokeWidth={1} />
							</RadioIndicator>
							<RadioLabel>{goal}</RadioLabel>
						</Radio>
					))}
				</RadioGroup>
			</VStack>

			<Button onPress={() => navigation.navigate('Nutrition')} mb={50}>
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

			<Link href='/(tabs)' asChild>
				<Button mb={50}>
					<ButtonText>Home</ButtonText>
				</Button>
			</Link>
		</VStack>
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
