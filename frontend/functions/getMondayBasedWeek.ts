export default function getMondayBasedWeek() {
	const currentDate = new Date();
	const first = currentDate.getDate() - (currentDate.getDay() || 7) + 1; // Adjust when day is 0 (Sunday)
	const last = first + 6;

	const firstDayOfWeek = new Date(currentDate.setDate(first));
	const lastDayOfWeek = new Date(currentDate.setDate(last));

	// Reset hours to avoid daylight saving time issues
	firstDayOfWeek.setHours(0, 0, 0, 0);
	lastDayOfWeek.setHours(23, 59, 59, 999);

	return {
		start: formatDate(firstDayOfWeek),
		end: formatDate(lastDayOfWeek),
	};
}

function formatDate(date: Date): string {
	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];
	const monthName = months[date.getMonth()];
	const dayOfMonth = date.getDate();
	return `${monthName} ${dayOfMonth}`;
}
