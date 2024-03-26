import React, { useState } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';

const Calender = () => {
	const [selected, setSelected] = useState('');

	return (
		<Calendar
			onDayPress={(day) => {
				setSelected(day.dateString);
			}}
			markedDates={{
				[selected]: {
					selected: true,
					disableTouchEvent: true,
					selectedColor: 'orange',
				},
			}}
			style={{
				backgroundColor: 'white',
				marginHorizontal: 20,
				padding: 10,
				borderRadius: 10,
			}}
		/>
	);
};

export default Calender;
