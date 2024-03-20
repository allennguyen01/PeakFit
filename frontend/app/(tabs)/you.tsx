import {
	Text,
	ScrollView,
	Box,
	Avatar,
	AvatarImage,
	HStack,
	VStack,
	Heading,
	Progress,
	ProgressFilledTrack,
	Image,
} from '@gluestack-ui/themed';

import CircularProgress from 'react-native-circular-progress-indicator';

export default function You() {
	const userData = {
		name: 'John Smith',
		location: 'Vancouver, BC Canada',
		profileImg:
			'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
		streakScore: 13,
		nutritionDays: 5,
		exerciseDays: 8,
		nutritionProgress: 1150,
		nutritionGoal: 2150,
		exerciseProgress: 30,
		exerciseGoal: 45,
		achievements: [
			{
				name: '1st workout logged',
				awardImgSrc: require('./../../assets/images/gold-trophy.png'),
			},
			{
				name: '7 day nutrition streak',
				awardImgSrc: require('./../../assets/images/gold-trophy.png'),
			},
			{
				name: '200% workout goal',
				awardImgSrc: require('./../../assets/images/gold-trophy.png'),
			},
			{
				name: '200% workout goal',
				awardImgSrc: require('./../../assets/images/gold-trophy.png'),
			},
			{
				name: '200% workout goal',
				awardImgSrc: require('./../../assets/images/gold-trophy.png'),
			},
		],
	};

	return (
		<ScrollView>
			<VStack margin={20} space='lg'>
				<HStack id='user-info' space='md' alignItems='center'>
					<Avatar size='xl'>
						<AvatarImage
							source={{
								uri: userData.profileImg,
							}}
							alt='Profile image'
						/>
					</Avatar>
					<VStack space='md'>
						<Box>
							<Heading size='xl'>{userData.name}</Heading>
							<Text size='sm'>{userData.location}</Text>
						</Box>
						<Text>Streak score: {userData.streakScore}</Text>
					</VStack>
				</HStack>

				<VStack space='md'>
					<Heading>Streaks 🔥</Heading>
					<VStack>
						<Text>
							Nutrition:{' '}
							<Text fontWeight='$bold'>
								{userData.nutritionDays} days
							</Text>{' '}
							• Exercise:{' '}
							<Text fontWeight='$bold'>
								{userData.exerciseDays} days
							</Text>
						</Text>
					</VStack>
				</VStack>

				<VStack space='md'>
					<Heading>Progress</Heading>
					<HStack
						justifyContent='space-evenly'
						alignItems='center'
						space='lg'
						backgroundColor='$secondary100'
						padding='$4'
						borderRadius='$lg'
					>
						<VStack
							space='md'
							alignItems='center'
							justifyContent='center'
						>
							<CircularProgress
								value={userData.nutritionProgress}
								maxValue={userData.nutritionGoal}
								activeStrokeColor={'#F29D38'}
								inActiveStrokeColor={'#F29D38'}
								inActiveStrokeOpacity={0.5}
								title={`/ ${userData.nutritionGoal} cal`}
								titleColor={'grey'}
								titleStyle={{ fontWeight: '500' }}
							/>
							<Text fontWeight='$semibold'>Nutrition</Text>
						</VStack>

						<VStack
							space='md'
							alignItems='center'
							justifyContent='center'
						>
							<CircularProgress
								value={userData.exerciseProgress}
								maxValue={userData.exerciseGoal}
								activeStrokeColor={'#F29D38'}
								inActiveStrokeColor={'#F29D38'}
								inActiveStrokeOpacity={0.5}
								title={`/ ${userData.exerciseGoal} min`}
								titleColor={'grey'}
								titleStyle={{ fontWeight: '500' }}
							/>
							<Text fontWeight='$semibold'>Exercise</Text>
						</VStack>
					</HStack>
				</VStack>

				<VStack space='md'>
					<Heading>Achievements</Heading>
					<HStack
						space='lg'
						justifyContent='space-evenly'
						backgroundColor='$secondary100'
						padding='$4'
						borderRadius='$lg'
					>
						{userData.achievements.slice(0, 3).map((ach) => (
							<VStack
								width='$1/3'
								alignItems='center'
								space='md'
								key={ach.name}
							>
								<Image
									size='md'
									source={ach.awardImgSrc}
									alt='trophy'
								/>
								<Text textAlign='center'>{ach.name}</Text>
							</VStack>
						))}
					</HStack>
				</VStack>
			</VStack>
		</ScrollView>
	);
}
