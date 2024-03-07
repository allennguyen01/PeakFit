import {
	Text,
	VStack,
	ScrollView,
	Heading,
	Card,
	Image,
	Box,
} from '@gluestack-ui/themed';

import LinearProgressTracker from '@/components/LinearProgressTracker';

export default function Exercise() {
	const exercisePlan = {
		progress: 30,
		goal: 60,
		date: 'Wednesday, Mar 6',
		plan: [
			{
				name: 'Dumbbell Bench Press',
				completed: true,
				minutes: 15,
				sets: 3,
				reps: 10,
				lbs: 50,
			},
			{
				name: 'Incline Dumbbell Bench Press',
				completed: true,
				minutes: 15,
				sets: 3,
				reps: 12,
				lbs: 35,
			},
			{
				name: 'Dips',
				completed: false,
				minutes: 15,
				sets: 3,
				reps: 5,
				lbs: 0,
			},
		],
	};

	return (
		<ScrollView backgroundColor='white'>
			<VStack margin={20} space='md'>
				<LinearProgressTracker plan={exercisePlan} unit='Minutes' />

				<Heading size='2xl' textAlign='center'>
					{exercisePlan.date}
				</Heading>

				<VStack gap={12}>
					{exercisePlan.plan.map((ex) => (
						<ExericseCard exercise={ex} key={ex.name} />
					))}
				</VStack>
			</VStack>
		</ScrollView>
	);
}

function ExericseCard({ exercise }: { exercise: Exercise }) {
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
			key={exercise.name}
		>
			<Image
				source={{
					uri: 'https://i0.wp.com/www.sidekickinteractive.com/wp-content/uploads/2023/04/placeholder-3.png',
				}}
				alt={exercise.name}
			/>
			<VStack flexShrink={1} space='sm'>
				<VStack>
					<Heading size='lg' marginBottom='$0'>
						{exercise.name}
					</Heading>
					<Text fontWeight='$medium'>{exercise.minutes} minutes</Text>
				</VStack>

				<Box flexDirection='row' flexShrink={1}>
					<Text size='sm' maxWidth='auto'>
						{`${exercise.sets} sets • ${exercise.reps} reps • ${exercise.lbs} lbs`}
					</Text>
				</Box>
			</VStack>
		</Card>
	);
}

interface Exercise {
	name: string;
	completed: boolean;
	minutes: number;
	sets: number;
	reps: number;
	lbs: number;
}
