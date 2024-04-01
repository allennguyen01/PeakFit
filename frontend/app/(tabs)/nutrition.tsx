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
import * as React from 'react';
import { Nutrition } from '@/types/types';
import sampleNutritionData from '@/sample_data/sampleDietResponse';
import { mealTypeToImgURL } from '@/functions/imageMaps';
import getCurrentDateFormatted from '@/functions/getCurrentDateFormatted';
import CompletionCheckbox from '@/components/CompletionCheckbox';

export default function NutritionScreen() {
	const progressData = {
		progress: 1550,
		goal: 2450,
	};

	const [nutritionData, setNutritionData] = React.useState<Array<Nutrition>>(
		[],
	);

	React.useEffect(() => {
		setNutritionData(sampleNutritionData.dietPlan.meals as Nutrition[]);
	}, []);

	return (
		<ScrollView backgroundColor='white'>
			<VStack margin={20} space='md'>
				<LinearProgressTracker plan={progressData} unit='Calories' />

				<Heading size='2xl' textAlign='center'>
					{getCurrentDateFormatted()}
				</Heading>

				<VStack gap={12}>
					{nutritionData.map((meal) => (
						<MealCard nutrition={meal} key={meal.mealNumber} />
					))}
				</VStack>
			</VStack>
		</ScrollView>
	);
}

function MealCard({ nutrition }: { nutrition: Nutrition }) {
	return (
		<Card
			size='md'
			variant='filled'
			m='$3'
			flexDirection='row'
			margin='$0'
			maxWidth='$full'
			display='flex'
			alignItems='center'
			justifyContent='space-between'
			key={nutrition.mealType}
		>
			<HStack gap='$4' maxWidth='$5/6' alignItems='center'>
				<Image
					source={{
						uri: mealTypeToImgURL[nutrition.mealType],
					}}
					alt={nutrition.mealType}
					borderRadius={5}
				/>
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
			</HStack>
			<CompletionCheckbox />
		</Card>
	);
}
