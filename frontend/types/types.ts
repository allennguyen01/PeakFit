type Exercise = {
	day: String;
	workouts: Array<Workout>;
};

type Workout = {
	name: string;
	description: string;
	duration: number;
	intensity: string;
};

type Nutrition = {
	mealNumber: number;
	mealType: string;
	totalCalories: number;
	instructions: string;
	ingredients: Array<Ingredient>;
};

type Ingredient = {
	food: string;
	quantity: string;
	calories: number;
	macros: {
		protein: string;
		carbs: string;
		fat: string;
	};
};

export { Exercise, Workout, Nutrition, Ingredient };
