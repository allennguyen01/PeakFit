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
  const prompt = `Create an optimum diet plan for an individual adhering to with the following exact nutrition requirements: Calories: ${calories}, Protein: ${protein} g, Carbs: ${carbs} g, Fat: ${fat} g.`;
  // {
  //   "dietPlan": {
  //     "dailyIntake": {
  //       "totalCalories": <calories>,
  //       "macros": {
  //         "protein": "<protein>",
  //         "carbs": "<carbs>",
  //         "fat": "<fat>"
  //       }
  //     },
  //     "meals": [
  //       {
  //         "mealNumber": 1,
  //         "items": [
  //           {
  //             "food": "<food_name>",
  //             "quantity": "<quantity>",
  //             "instructions": "<instructions>",
  //             "calories": <calories>,
  //             "macros": {
  //               "protein": "<protein_g>",
  //               "carbs": "<carbs_g>",
  //               "fat": "<fat_g>"
  //             }
  //           },
  //           {
  //             "food": "<food_name>",
  //             "in`;structions": "<instructions>",
  //             "calories": <calories>,
  //             "macros": {
  //               "protein": "<protein_g>",
  //               "carbs": "<carbs_g>",
  //               "fat": "<fat_g>"
  //             }
  //           }
  //           // More items as needed
  //         ]
  //       }
  //       // Additional meals and snacks following the same structure
  //     ]
  //   }
  // }
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
                  minItems: 2,
                  maxItems: 10,
                  items: {
                    type: "object",
                    properties: {
                      mealNumber: { type: "number" },
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
                    required: ["mealNumber", "instructions", "ingredients"],
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
