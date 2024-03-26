const sampleNutritionData = {
	dietPlan: {
		dailyIntake: {
			totalCalories: 2000,
			macros: {
				protein: '150g',
				carbs: '200g',
				fat: '89g',
			},
		},
		meals: [
			{
				mealNumber: 1,
				mealType: 'Breakfast',
				totalCalories: 500,
				instructions:
					"Cook the oats in water or milk until they're soft. Then, mix in the chia seeds, protein powder, and honey. Top with sliced banana.",
				ingredients: [
					{
						food: 'Oats',
						quantity: '80g',
						calories: 303,
						macros: {
							protein: '10g',
							carbs: '54g',
							fat: '5g',
						},
					},
					{
						food: 'Chia Seeds',
						quantity: '15g',
						calories: 74,
						macros: {
							protein: '3g',
							carbs: '6g',
							fat: '5g',
						},
					},
					{
						food: 'Whey Protein Powder',
						quantity: '30g',
						calories: 120,
						macros: {
							protein: '24g',
							carbs: '3g',
							fat: '1g',
						},
					},
					{
						food: 'Honey',
						quantity: '1 tbsp',
						calories: 64,
						macros: {
							carbs: '17g',
						},
					},
					{
						food: 'Banana',
						quantity: '1 small',
						calories: 90,
						macros: {
							protein: '1g',
							carbs: '23g',
							fat: '0.3g',
						},
					},
				],
			},
			{
				mealNumber: 2,
				mealType: 'Lunch',
				totalCalories: 600,
				instructions:
					'Season the chicken breast with olive oil, salt, pepper, and grill until fully cooked. Serve with steamed broccoli and quinoa.',
				ingredients: [
					{
						food: 'Chicken Breast',
						quantity: '200g',
						calories: 330,
						macros: {
							protein: '62g',
							carbs: '0g',
							fat: '7g',
						},
					},
					{
						food: 'Olive Oil',
						quantity: '1 tbsp',
						calories: 119,
						macros: {
							fat: '14g',
						},
					},
					{
						food: 'Broccoli',
						quantity: '200g',
						calories: 70,
						macros: {
							protein: '5g',
							carbs: '14g',
							fat: '0.8g',
						},
					},
					{
						food: 'Quinoa',
						quantity: '50g',
						calories: 180,
						macros: {
							protein: '6g',
							carbs: '32g',
							fat: '2.5g',
						},
					},
				],
			},
			{
				mealNumber: 3,
				mealType: 'Dinner',
				totalCalories: 700,
				instructions:
					'Season salmon with lemon juice, salt, pepper, and bake in the oven. In a pan, cook spinach with garlic until wilted. Serve salmon with spinach and cooked sweet potato.',
				ingredients: [
					{
						food: 'Salmon',
						quantity: '180g',
						calories: 414,
						macros: {
							protein: '45g',
							carbs: '0g',
							fat: '24g',
						},
					},
					{
						food: 'Lemon Juice',
						quantity: '2 tbsp',
						calories: 8,
						macros: {
							carbs: '2g',
						},
					},
					{
						food: 'Spinach',
						quantity: '100g',
						calories: 23,
						macros: {
							protein: '3g',
							carbs: '4g',
							fat: '0.4g',
						},
					},
					{
						food: 'Garlic',
						quantity: '2 cloves',
						calories: 9,
						macros: {
							carbs: '2g',
						},
					},
					{
						food: 'Sweet Potato',
						quantity: '150g',
						calories: 135,
						macros: {
							protein: '2g',
							carbs: '31g',
							fat: '0.3g',
						},
					},
				],
			},
			{
				mealNumber: 4,
				mealType: 'Snack',
				totalCalories: 200,
				instructions: 'Blend all ingredients together until smooth.',
				ingredients: [
					{
						food: 'Greek Yogurt',
						quantity: '100g',
						calories: 59,
						macros: {
							protein: '10g',
							carbs: '3.6g',
							fat: '0.4g',
						},
					},
					{
						food: 'Mixed Berries',
						quantity: '100g',
						calories: 57,
						macros: {
							protein: '1g',
							carbs: '14g',
							fat: '0.3g',
						},
					},
					{
						food: 'Almond Milk',
						quantity: '100ml',
						calories: 17,
						macros: {
							protein: '0.4g',
							carbs: '0.6g',
							fat: '1.1g',
						},
					},
					{
						food: 'Almonds',
						quantity: '10g',
						calories: 57,
						macros: {
							protein: '2g',
							carbs: '2g',
							fat: '5g',
						},
					},
				],
			},
			{
				mealNumber: 5,
				mealType: 'Snack',
				totalCalories: 100,
				instructions: 'Enjoy a hard boiled egg with a side of avocado.',
				ingredients: [
					{
						food: 'Egg',
						quantity: '1 large',
						calories: 70,
						macros: {
							protein: '6g',
							carbs: '1g',
							fat: '5g',
						},
					},
					{
						food: 'Avocado',
						quantity: '30g',
						calories: 48,
						macros: {
							protein: '1g',
							carbs: '2g',
							fat: '4g',
						},
					},
				],
			},
		],
	},
};

export default sampleNutritionData;
