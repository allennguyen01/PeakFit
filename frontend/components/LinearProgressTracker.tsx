import {
	Progress,
	ProgressFilledTrack,
	Text,
	VStack,
	Heading,
	HStack,
} from '@gluestack-ui/themed';

export default function LinearProgressTracker({
	plan,
	unit,
}: {
	plan: Plan;
	unit: string;
}) {
	return (
		<VStack space='sm'>
			<Heading>{unit}</Heading>
			<Progress value={(plan.progress / plan.goal) * 100}>
				<ProgressFilledTrack bg='$amber500' />
			</Progress>
			<HStack justifyContent='space-between'>
				<Text>
					Remaining:{' '}
					<Text fontWeight='$semibold'>
						{plan.goal - plan.progress}
					</Text>
				</Text>
				<Text>
					Goal: <Text fontWeight='$semibold'>{plan.goal}</Text>
				</Text>
			</HStack>
		</VStack>
	);
}

interface Plan {
	progress: number;
	goal: number;
}
