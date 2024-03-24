const sampleExerciseData = {
	userDetails: {
		fitnessLevel: 'Intermediate',
		goals: 'Complete a half marathon in under two hours',
		preferences:
			'Prefers outdoor running but is open to strength and conditioning exercises',
		equipmentAvailability:
			'Basic home gym with dumbbells, resistance bands, and a treadmill',
		availableTime: '45 minutes on weekdays, up to 90 minutes on weekends',
		healthConditions: 'None',
	},
	workoutPlan: [
		{
			week: 1,
			days: [
				{
					day: 'Monday',
					workouts: [
						{
							name: 'Interval Running',
							description:
								'Warm-up for 10 minutes at a moderate pace. Perform 5 sets of 400m sprints with 1-2 minutes of walking or jogging for recovery in between sets. Cool down for 5 minutes.',
							duration: '45 minutes',
							intensity: 'High',
						},
						{
							name: 'Core Strengthening',
							description:
								'Include exercises like planks, Russian twists, and mountain climbers. Use a timer to do each exercise for 45 seconds with 15 seconds of rest in between. Repeat the circuit twice.',
							duration: '15 minutes',
							intensity: 'Medium',
						},
					],
				},
				{
					day: 'Tuesday',
					workouts: [
						{
							name: 'Rest or Active Recovery',
							description:
								'Take a rest day or opt for a low-intensity activity like walking or yoga.',
							duration: '-',
							intensity: 'Low',
						},
					],
				},
				{
					day: 'Wednesday',
					workouts: [
						{
							name: 'Hill Repeats',
							description:
								'After a 10-minute warm-up, find a hill that takes roughly 1 minute to run up at a hard effort. Jog back down for recovery. Repeat 6-8 times. Cool down for 5 minutes.',
							duration: '45 minutes',
							intensity: 'High',
						},
						{
							name: 'Lower Body Strength',
							description:
								'Use dumbbells and resistance bands for squats, lunges, deadlifts, and calf raises. Perform 3 sets of 12-15 reps for each exercise.',
							duration: '20 minutes',
							intensity: 'Medium',
						},
					],
				},
				{
					day: 'Thursday',
					workouts: [
						{
							name: 'Rest or Active Recovery',
							description:
								'Take a rest day or opt for a low-intensity activity like walking or yoga.',
							duration: '-',
							intensity: 'Low',
						},
					],
				},
				{
					day: 'Friday',
					workouts: [
						{
							name: 'Tempo Run',
							description:
								'Warm up for 10 minutes at an easy pace. Run for 20 minutes at a pace just outside your comfort zone, aiming for a pace you could hold for about an hour in a race. Cool down for 15 minutes.',
							duration: '45 minutes',
							intensity: 'High',
						},
					],
				},
				{
					day: 'Saturday',
					workouts: [
						{
							name: 'Long Run',
							description:
								'Run at an easy to moderate pace aiming to increase your endurance. Start with 60 minutes and aim to increase by 5-10 minutes each week.',
							duration: 'up to 90 minutes',
							intensity: 'Medium',
						},
						{
							name: 'Full Body Strength',
							description:
								'Use your home gym equipment for a full-body workout including push-ups, pull-ups, dumbbell rows, overhead press, and leg presses. Aim for 3 sets of 8-12 reps for each exercise.',
							duration: '30 minutes',
							intensity: 'Medium',
						},
					],
				},
				{
					day: 'Sunday',
					workouts: [
						{
							name: 'Rest or Light Activity',
							description:
								'Opt for light activities such as walking, stretching, or yoga to promote recovery.',
							duration: '-',
							intensity: 'Low',
						},
					],
				},
			],
		},
	],
};

console.log(sampleExerciseData.workoutPlan.days);

export default sampleExerciseData;
