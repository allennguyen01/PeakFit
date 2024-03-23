interface PersonDetails {
	age: number;
	sex: 'male' | 'female';
	weightKg: number;
	heightCm: number;
	activityLevel: 'none' | 'little' | 'some' | 'lot' | 'ton';
	goal: 'loseFat' | 'maintain' | 'gainMuscle';
}

type Sex = 'male' | 'female';
type ActivityLevel = 'none' | 'little' | 'some' | 'lot' | 'ton';
type Goal = 'loseFat' | 'maintain' | 'gainMuscle';

interface NutritionalNeeds {
	calories: number;
	protein: number;
	carbs: number;
	fat: number;
}

function calculateMacros(person: PersonDetails): NutritionalNeeds {
	// Calculate Basal Metabolic Rate (BMR) using the Mifflin St. Jeor Equation

	// Sedentary: 1.2, Lightly active: 1.375, Moderately active: 1.55, Very active: 1.725, Extra active: 1.9
	const activityLevelMap = {
		none: 1.2,
		little: 1.375,
		some: 1.55,
		lot: 1.725,
		ton: 1.9,
	};

	const activityLevel: number = activityLevelMap[person.activityLevel];

	const bmr =
		person.sex === 'male'
			? 10 * person.weightKg + 6.25 * person.heightCm - 5 * person.age + 5
			: 10 * person.weightKg +
			  6.25 * person.heightCm -
			  5 * person.age -
			  161;

	// Adjust BMR based on activity level
	let calories = bmr * activityLevel;

	// Adjust calories based on the goal
	switch (person.goal) {
		case 'loseFat':
			calories -= 500; // Subtract to create a caloric deficit
			break;
		case 'gainMuscle':
			calories += 500; // Add to create a caloric surplus
			break;
		// case 'maintain' doesn't change calories
	}

	// Simplistic distribution of macros: 40% carbs, 30% protein, 30% fats
	const protein = (calories * 0.3) / 4; // There are 4 calories in a gram of protein
	const carbs = (calories * 0.4) / 4; // There are 4 calories in a gram of carb
	const fat = (calories * 0.3) / 9; // There are 9 calories in a gram of fat

	return {
		calories,
		protein,
		carbs,
		fat,
	};
}

export { PersonDetails, Sex, ActivityLevel, Goal, calculateMacros };

// Example usage
const person: PersonDetails = {
	age: 30,
	sex: 'male',
	weightKg: 70,
	heightCm: 175,
	activityLevel: 'some',
	goal: 'maintain',
};

console.log(calculateMacros(person));
