export default function getCurrentDateFormatted() {
	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const now = new Date();
	const dayOfWeek = days[now.getDay()];
	const month = months[now.getMonth()];
	const dayOfMonth = now.getDate();

	return `${dayOfWeek}, ${month} ${dayOfMonth}`;
}
