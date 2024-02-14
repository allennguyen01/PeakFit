import {
  GluestackUIProvider,
  Box,
  Text,
  Avatar,
  Progress,
  ProgressFilledTrack,
  Icon,
  AddIcon,
} from '@gluestack-ui/themed';

export default function TabOneScreen() {
  const userData = {
    name: 'John Smith',
    location: 'Vancouver, BC Canada',
    streakScore: 13,
    nutritionDays: 5,
    exerciseDays: 8,
    nutritionProgress: 0.54, // 54%
    exerciseProgress: 0.66, // 66%
  };

  return (
    <GluestackUIProvider>
      <Box flex={1} bg="background" p={4}>
        <Box alignItems="center" mb={4}>
          <Avatar size="lg" source={{ uri: 'path-to-your-image' }} />
          <Text fontSize="lg" fontWeight="bold">
            {userData.name}
          </Text>
          <Text>{userData.location}</Text>
          <Text>Streak score: {userData.streakScore}</Text>
        </Box>

        <Box mb={4}>
          <Text fontWeight="bold">Streaks</Text>
          <Text>Nutrition: {userData.nutritionDays} days</Text>
          <Text>Exercise: {userData.exerciseDays} days</Text>
        </Box>

        <Box mb={4}>
          <Text fontWeight="bold">Progress</Text>
          <Progress value={55} w="$80" h="$1">
            <ProgressFilledTrack h="$1" />
          </Progress>
        </Box>

        <Box flexDirection="row" justifyContent="space-between">
          <Icon as={AddIcon} m="$2" w="$4" h="$4" />
        </Box>
      </Box>
    </GluestackUIProvider>
  );
}
