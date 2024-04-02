const sampleExerciseData = {
	userDetails: {
		fitnessLevel: 'Expert',
		goals: 'Run a half marathon in under 2 hours and lose 20 pounds in 6 months',
		preferences: 'Outdoor running and some weightlifting',
		equipmentAvailability: 'Local gym with all necessary gym equipment',
		availableTime: '60 minutes on weekdays, up to 90 minutes on weekends',
		healthConditions: 'None',
	},
	workoutPlan: [
		{
			day: 'Monday',
			workouts: [
				{
					name: 'Interval Running',
					description:
						'Start with a 10-minute warm-up at a comfortable pace. Then, alternate between 1 minute of sprinting and 1 minute of walking or slow jogging for a total of 30 minutes. Finish with a 10-minute cool-down walk.',
					duration: 50,
					intensity: 'High',
				},
				{
					name: 'Core Strengthening Workout',
					description:
						'Complete three sets of planks (45 seconds each), Russian twists (20 repetitions), and leg raises (15 repetitions).',
					duration: 10,
					intensity: 'Medium',
				},
			],
		},
		{
			day: 'Tuesday',
			workouts: [
				{
					name: 'Full Body Weightlifting',
					description:
						'Perform a circuit of exercises targeting all major muscle groups. Include deadlifts, squats, bench press, rows, and overhead press. Aim for 4 sets of 8-12 repetitions each.',
					duration: 60,
					intensity: 'High',
				},
			],
		},
		{
			day: 'Wednesday',
			workouts: [
				{
					name: 'Active Rest',
					description:
						'Engage in light activities such as walking, stretching, or yoga. Focus on recovery.',
					duration: 60,
					intensity: 'Low',
				},
			],
		},
		{
			day: 'Thursday',
			workouts: [
				{
					name: 'Tempo Running',
					description:
						'After a 10-minute warm-up, run at a pace you can hold for 20 minutes but would find difficult to maintain for much longer. Conclude with a 10-minute cool-down.',
					duration: 40,
					intensity: 'High',
				},
				{
					name: 'Leg and Glute Workout',
					description:
						'Perform exercises including lunges, step-ups, glute bridges, and calf raises. Aim for 3 sets of 12-15 reps.',
					duration: 20,
					intensity: 'Medium',
				},
			],
		},
		{
			day: 'Friday',
			workouts: [
				{
					name: 'Hill Repeats',
					description:
						'Find a steep hill. After warming up, sprint up the hill for 30 seconds, then walk or jog back down for recovery. Repeat 10 times. Finish with a cool-down.',
					duration: 50,
					intensity: 'High',
				},
				{
					name: 'Upper Body Workout',
					description:
						'Focus on push-ups, pull-ups, dips, and arm curls. Aim for 3 sets of each exercise, with repetitions according to your strength level.',
					duration: 10,
					intensity: 'Medium',
				},
			],
		},
		{
			day: 'Saturday',
			workouts: [
				{
					name: 'Long Distance Running',
					description:
						'Run at a steady, moderate pace for 90 minutes. Focus on endurance and maintaining a consistent speed.',
					duration: 90,
					intensity: 'Medium',
				},
			],
		},
		{
			day: 'Sunday',
			workouts: [
				{
					name: 'Rest',
					description:
						'Take the day off from training to allow your body to recover and rejuvenate for the next week.',
					duration: 0,
					intensity: 'None',
				},
			],
		},
	],
};

export default sampleExerciseData;
