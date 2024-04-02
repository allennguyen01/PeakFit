import {
	Text,
	VStack,
	ScrollView,
	Heading,
	Card,
	Image,
	Box,
	HStack,
} from '@gluestack-ui/themed';

import LinearProgressTracker from '@/components/LinearProgressTracker';
import { Workout } from '@/types/types';
import * as React from 'react';
import sampleExerciseData from '@/sample_data/sampleExerciseResponse';
import getCurrentDateFormatted from '@/functions/getCurrentDateFormatted';
import { exerciseTypeToImgURL } from '@/functions/imageMaps';
import CompletionCheckbox from '@/components/CompletionCheckbox';

export default function ExerciseScreen() {
	const progressData = {
		progress: 30,
		goal: 60,
	};

	const mondayBasedDayOfWeek = (new Date().getDay() + 6) % 7;

	const [exercisePlan, setExercisePlan] = React.useState<Array<Workout>>([]);

	React.useEffect(() => {
		setExercisePlan(
			sampleExerciseData.workoutPlan[mondayBasedDayOfWeek].workouts,
		);
	}, []);

	return (
		<ScrollView backgroundColor='white'>
			<VStack margin={20} space='md'>
				<LinearProgressTracker plan={progressData} unit='Minutes' />

				<Heading size='2xl' textAlign='center'>
					{getCurrentDateFormatted()}
				</Heading>

				<VStack gap={12}>
					{exercisePlan.map((workout) => (
						<WorkoutCard workout={workout} key={workout.name} />
					))}
				</VStack>
			</VStack>
		</ScrollView>
	);
}

function WorkoutCard({ workout }: { workout: Workout }) {
	return (
		<Card
			size='md'
			variant='filled'
			m='$3'
			flexDirection='row'
			margin='$0'
			maxWidth='$full'
			display='flex'
			justifyContent='space-between'
			key={workout.name}
		>
			<HStack gap='$4' maxWidth='$5/6' alignItems='center'>
				<Image
					source={{
						uri: exerciseTypeToImgURL[workout.name],
					}}
					alt={workout.name}
					borderRadius={5}
				/>
				<VStack flexShrink={1} space='sm'>
					<VStack>
						<Heading size='lg'>{workout.name}</Heading>
						<Text fontWeight='$medium'>
							{workout.duration} minutes
						</Text>
					</VStack>

					<Box flexDirection='row' flexShrink={1}>
						<Text size='sm' maxWidth='auto'>
							{workout.intensity} intensity
						</Text>
					</Box>
				</VStack>
			</HStack>
			<CompletionCheckbox />
		</Card>
	);
}
