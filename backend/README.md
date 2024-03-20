Make a .env file in the root of the backend folder with the following properties -

```bash
OPENAI_API_KEY=your-api-key
PORT=3000
```

Then do the following to run the server -

```bash
npm i
```

```bash
node server.js
```

# API Documentation

This document provides information on how to use the Personalized Workout and Diet Plan APIs. These APIs are designed to create customized workout and diet plans based on user inputs.

## Endpoints

### Workout Plan API

- **Endpoint:** `/create-workout-plan`
- **Method:** `POST`
- **Description:** Generates a personalized workout plan based on the provided user details.
- **Content-Type:** `application/json`
- **Request Body:**

```json
{
  "fitnessLevel": "string",
  "goals": "string",
  "preferences": "string",
  "equipmentAvailability": "string",
  "availableTime": "string",
  "healthConditions": "string"
}
```

**Response**

```json
{
  "userDetails": {
    "fitnessLevel": "string",
    "goals": "string",
    "preferences": "string",
    "equipmentAvailability": "string",
    "availableTime": "string",
    "healthConditions": "string"
  },
  "workoutPlan": [
    {
      "week": "integer",
      "days": [
        {
          "day": "string",
          "workouts": [
            {
              "name": "string",
              "description": "string",
              "duration": "string",
              "intensity": "string"
            }
          ]
        }
      ]
    }
  ]
}
```

## Diet Plan API

- **Endpoint:** /create-diet-plan

- **Method:** POST

- **Description:** Generates a personalized diet plan based on the specified nutritional requirements.

- **Content-Type:** application/json

- **Query Parameters:**

```
calories: Target calorie intake per day.
protein: Target protein intake in grams per day.
carbs: Target carbohydrate intake in grams per day.
fat: Target fat intake in grams per day.
```

**Response**

```json
{
  "dailyIntake": {
    "totalCalories": "number",
    "macros": {
      "protein": "string",
      "carbs": "string",
      "fat": "string"
    }
  },
  "meals": [
    {
      "mealNumber": "number",
      "instructions": "string",
      "ingredients": [
        {
          "food": "string",
          "quantity": "string",
          "calories": "number",
          "macros": {
            "protein": "string",
            "carbs": "string",
            "fat": "string"
          }
        }
      ]
    }
  ]
}
```

## Usage

To use these APIs, send a POST request to the respective endpoint with the required information in the body (for the Workout Plan API) or as query parameters (for the Diet Plan API). Responses will be returned in JSON format.

## Examples

### JavaScript Example for Workout Plan API

```javascript
const workoutPlanData = {
  fitnessLevel: "Intermediate",
  goals: "Lose weight",
  preferences: "Prefers yoga and light jogging",
  equipmentAvailability: "Limited to yoga mat and running shoes",
  availableTime: "30 minutes per day",
  healthConditions: "None",
};

fetch("http://localhost:3000/create-workout-plan", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(workoutPlanData),
})
  .then((response) => response.json())
  .then((data) => console.log("Workout Plan:", data))
  .catch((error) => {
    console.error("Error:", error);
  });
```

### JavaScript Example for Diet Plan API

```javascript
const queryParams = new URLSearchParams({
  calories: 2000,
  protein: 150,
  carbs: 250,
  fat: 70,
}).toString();

const dietPlanUrl = `http://localhost:3000/create-diet-plan?${queryParams}`;

fetch(dietPlanUrl, {
  method: "POST", // Even though we're sending a POST request, our data is in the query string
})
  .then((response) => response.json())
  .then((data) => console.log("Diet Plan:", data))
  .catch((error) => {
    console.error("Error:", error);
  });
```

**_Notes_**

- Replace http://localhost:3000 with your actual API's base URL if it's hosted elsewhere.
- These examples use the Fetch API to send HTTP requests. The fetch function is called with the endpoint URL, an options object specifying the HTTP method, headers, and body content (for the Workout Plan API), and a promise chain to handle the response.
- The Diet Plan example demonstrates how to include query parameters by constructing a URLSearchParams object and appending it to the endpoint URL.
- Ensure your server accepts cross-origin requests if the client making these calls is hosted on a different domain than your API. This might involve setting up CORS (Cross-Origin Resource Sharing) headers on your server.
