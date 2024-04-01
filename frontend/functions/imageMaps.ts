const mealTypeToImgURL: { [key: string]: string } = {
	Breakfast:
		'https://www.eatingwell.com/thmb/-UULlbERQCfJRQTnb5bwjoo9-UQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/old-fashioned-oatmeal-hero-05-060861b81cb641cea272e068aba093fd.jpg',
	Lunch: 'https://www.acouplecooks.com/wp-content/uploads/2022/01/Hummus-Bowl-016.jpg',
	Dinner: 'https://www.eatingwell.com/thmb/brHFTvx40kZq844uGiitI4hWQKo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/grilled-salmon-and-vegetables-with-charred-lemon-vinaigrette-a4d5a04715bf427d86fdbadea6272679.jpg',
	Snack: 'https://static01.nyt.com/images/2018/07/18/dining/18YOGURT1/18YOGURT1-square640.jpg',
};

const exerciseDayToImgURL: { [key: string]: string } = {
	Monday: 'https://www.usnews.com/dims4/USNEWS/70e4547/2147483647/crop/2119x1413+1+0/resize/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2Fce%2F26%2F980578764e0db35ddc3b49e96e02%2Fgettyimages-1426186272.jpg',
	Tuesday:
		'https://familydoctor.org/wp-content/uploads/2016/11/exercise-705x370.jpg',
	Wednesday:
		'https://emi.parkview.com/media/Image/Dashboard_952_The-many-health-benefits-of-regular-exercise_11_20.jpg',
	Thursday:
		'https://prod-ne-cdn-media.puregym.com/media/819394/gym-workout-plan-for-gaining-muscle_header.jpg?quality=80',
	Friday: 'https://www.usnews.com/dims4/USNEWS/70e4547/2147483647/crop/2119x1413+1+0/resize/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2Fce%2F26%2F980578764e0db35ddc3b49e96e02%2Fgettyimages-1426186272.jpg',
	Saturday:
		'https://prod-ne-cdn-media.puregym.com/media/819394/gym-workout-plan-for-gaining-muscle_header.jpg?quality=80',
	Sunday: 'https://familydoctor.org/wp-content/uploads/2016/11/exercise-705x370.jpg',
};

const exerciseTypeToImgURL: { [key: string]: string } = {
	'Yoga Flow':
		'https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/w_363,c_limit/a4baaac3-01f0-4cf4-bad7-036a30f664bf/the-top-3-yoga-poses-to-get-stronger-according-to-experts.jpg',
	'Treadmill Jogging':
		'https://www.eatthis.com/wp-content/uploads/sites/4/2022/11/fit-man-beach-jogging.jpg?quality=82&strip=all',
};

export { mealTypeToImgURL, exerciseDayToImgURL, exerciseTypeToImgURL };
