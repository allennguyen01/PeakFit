import express from "express";
import OpenAIApi from "openai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const openai = new OpenAIApi({
  apiKey: process.env.OPENAI_API_KEY,
});

// Middleware
app.use(express.json());

// Endpoint to receive parameters and return diet plan
app.post("/create-diet-plan", async (req, res) => {
  const { calories, protein, carbs, fat } = req.query;

  try {
    const dietPlan = await generateDietPlan(calories, protein, carbs, fat);
    res.send(dietPlan);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

async function generateDietPlan(calories, protein, carbs, fat) {
  const prompt = `Create an optimum diet plan for an individual adhering to with the following exact nutrition requirements: Calories: ${calories}, Protein: ${protein} g, Carbs: ${carbs} g, Fat: ${fat} g. Make sure that the total calories and macronutrient breakdown are met, i.e., the total sum of calories from all meals should roughly equal the calores, protein, carbs, and fat breakdown that I told you to make. Take your time and make sure you get it right, it is of extreme importance. Include meals with ingredients, instructions, and macronutrient breakdown.`;
  const tools = [
    {
      type: "function",
      function: {
        name: "get-diet-plan",
        description:
          "A diet plan including meals to eat, ingredients, instructions to make the food and marco nutrient breakdown.",
        parameters: {
          type: "object",
          properties: {
            dietPlan: {
              type: "object",
              properties: {
                dailyIntake: {
                  type: "object",
                  properties: {
                    totalCalories: {
                      type: "number",
                      description:
                        "Total calories to be consumed in a day according to the diet plan.",
                    },
                    macros: {
                      type: "object",
                      properties: {
                        protein: { type: "string" },
                        carbs: { type: "string" },
                        fat: { type: "string" },
                      },
                      required: ["protein", "carbs", "fat"],
                      description:
                        "Total macronutrient breakdown to be consumed in a day according to the diet plan.",
                    },
                  },
                  required: ["totalCalories", "macros"],
                },
                meals: {
                  type: "array",
                  minItems: 3,
                  maxItems: 10,
                  items: {
                    type: "object",
                    properties: {
                      mealNumber: { type: "number" },
                      mealType: {
                        type: "string",
                        description: "Breakfast, Lunch, Dinner, Snack, etc.",
                      },
                      totalCalories: {
                        type: "number",
                        description: "Total calories in the meal.",
                      },
                      instructions: {
                        type: "string",
                        description: "Description of how to prepare the food.",
                      },
                      ingredients: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            food: { type: "string" },
                            quantity: { type: "string" },
                            calories: { type: "number" },
                            macros: {
                              type: "object",
                              properties: {
                                protein: { type: "string" },
                                carbs: { type: "string" },
                                fat: { type: "string" },
                              },
                            },
                          },
                          required: ["food", "calories", "macros"],
                        },
                      },
                    },
                    required: [
                      "mealNumber",
                      "mealType",
                      "totalCalories",
                      "instructions",
                      "ingredients",
                    ],
                  },
                },
              },
              required: ["dailyIntake", "meals"],
            },
          },
          required: ["dietPlan"],
        },
      },
    },
  ];

  const completion = await openai.chat.completions.create({
    model: "gpt-4-0125-preview",
    messages: [
      {
        role: "system",
        content: "You are an experienced fitness coach and nutritionist.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    tools,
    tool_choice: { type: "function", function: { name: "get-diet-plan" } },
  });

  return completion.choices[0].message.tool_calls[0].function.arguments;
}

// New endpoint to receive parameters and return a personalized workout plan
app.post("/create-workout-plan", async (req, res) => {
  const {
    fitnessLevel,
    goals,
    preferences,
    equipmentAvailability,
    availableTime,
    healthConditions,
  } = req.body;

  try {
    const workoutPlan = await generateWorkoutPlan(
      fitnessLevel,
      goals,
      preferences,
      equipmentAvailability,
      availableTime,
      healthConditions
    );
    res.json(workoutPlan);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

async function generateWorkoutPlan(
  fitnessLevel,
  goals,
  preferences,
  equipmentAvailability,
  availableTime,
  healthConditions
) {
  const prompt = `Given the following user details, generate a personalized workout plan:
  - Fitness Level: ${fitnessLevel}
  - Goals: ${goals}
  - Preferences: ${preferences}
  - Equipment Availability: ${equipmentAvailability}
  - Available Time: ${availableTime}
  - Health Conditions: ${healthConditions}`;

  const tools = [
    {
      type: "function",
      function: {
        name: "get-workout-plan",
        description:
          "A workout plan including the fitness level, goals, preferences, equipment availability, available time, health conditions, and a structured plan for workouts.",
        parameters: {
          $schema: "http://json-schema.org/draft-07/schema#",
          title: "Workout Plan",
          type: "object",
          properties: {
            userDetails: {
              type: "object",
              properties: {
                fitnessLevel: { type: "string" },
                goals: { type: "string" },
                preferences: { type: "string" },
                equipmentAvailability: { type: "string" },
                availableTime: { type: "string" },
                healthConditions: { type: "string" },
              },
              required: [
                "fitnessLevel",
                "goals",
                "preferences",
                "equipmentAvailability",
                "availableTime",
                "healthConditions",
              ],
            },
            workoutPlan: {
              type: "array",
              minItems: 5,
              maxItems: 7,
              items: {
                type: "object",
                properties: {
                  day: { type: "string" },
                  workouts: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        name: { type: "string" },
                        description: {
                          type: "string",
                          description:
                            "detailed description of the workout, telling the user how to perform it.",
                        },
                        duration: {
                          type: "integer",
                          description: "duration of the workout in minutes",
                        },
                        intensity: { type: "string" },
                      },
                      required: [
                        "name",
                        "description",
                        "duration",
                        "intensity",
                      ],
                    },
                  },
                },
                required: ["day", "workouts"],
              },
              required: ["workoutPlan"],
            },
          },
          required: ["userDetails", "workoutPlan"],
        },
      },
    },
  ];

  // Here, assume "get-workout-plan" is a hypothetical tool you've developed or integrated for generating workout plans
  const completion = await openai.chat.completions.create({
    model: "gpt-4-0125-preview",
    messages: [
      {
        role: "system",
        content: "You are an experienced fitness coach and nutritionist.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    tools,
    tool_choice: {
      type: "function",
      function: { name: "get-workout-plan" },
    },
  });

  return completion.choices[0].message.tool_calls[0].function.arguments;
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
