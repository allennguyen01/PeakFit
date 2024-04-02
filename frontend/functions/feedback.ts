import React from 'react';
import axios, { AxiosResponse } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface CacheEntry {
  time: number;
  output: any;
  feedback: string;
}

// Function to update the cache with a new entry using AsyncStorage
export async function updateCacheEntry(modelOutput: any, feedback: string): Promise<CacheEntry[]> {
  try {
    // Get current time in Unix epoch format
    const currentTime = Math.floor(Date.now() / 1000); // Convert milliseconds to seconds

    // Replace newlines or other whitespace with a single space
    const sanitizedFeedback = feedback.replace(/\s+/g, ' ');

    // Retrieve existing entries from AsyncStorage (if any)
    const existingEntries = AsyncStorage.getItem('cacheEntries');
    const entries: CacheEntry[] = existingEntries ? JSON.parse(existingEntries) : [];

    // Create the new entry
    const newEntry: CacheEntry = { time: currentTime, output: modelOutput, feedback: sanitizedFeedback };

    // Add the new entry to the list of entries
    entries.push(newEntry);

    // Save the updated entries back to AsyncStorage
    await AsyncStorage.setItem('cacheEntries', JSON.stringify(entries));

    return entries; // Return updated entries
  } catch (error) {
    console.error('Error updating cache:', error);
    throw error;
  }
}

// Function to retrieve and log cache entries
export async function logCacheEntries(): Promise<CacheEntry[]> {
  try {
    // Retrieve cache entries from AsyncStorage
    const cacheEntries = await AsyncStorage.getItem('cacheEntries');

    // Parse the JSON string to an array of entries
    const entries: CacheEntry[] = cacheEntries ? JSON.parse(cacheEntries) : [];

    return entries; // Return cache entries
  } catch (error) {
    console.error('Error retrieving cache entries:', error);
    throw error;
  }
}

// Function to clear the cache
export async function clearCache(): Promise<void> {
  try {
    // Clear cache entries from AsyncStorage
    await AsyncStorage.removeItem('cacheEntries');
    console.log('Cache cleared.');
  } catch (error) {
    console.error('Error clearing cache:', error);
  }
}

export async function getEntriesWithLargestSentiment(cache: CacheEntry[], numEntries: number): Promise<CacheEntry[]> {
  try {
    const sentimentPromises = cache.map(async (entry) => {
      const feedbackSentiment = await analyzeSentiments(entry.feedback);
      // console.log(`${entry.feedback}: ${feedbackSentiment}`);
      return { ...entry, sentiment: feedbackSentiment };
    });

    const entriesWithSentiments = await Promise.all(sentimentPromises);

    entriesWithSentiments.sort((a, b) => Math.abs(b.sentiment) - Math.abs(a.sentiment));

    return entriesWithSentiments.slice(0, numEntries);
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

export async function analyzeSentiments(strToAnalyze: string): Promise<number> {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };

    const response: AxiosResponse<{ score: number }> = await axios.post('http://localhost:3000/sentiment', { str: strToAnalyze }, { headers });

    const sentimentsResult = response.data;

    return sentimentsResult.score;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
