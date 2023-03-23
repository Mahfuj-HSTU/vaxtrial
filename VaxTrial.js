const vaxTrail = (persons) => {
	const A = [];
	const B = [];
	const C = [];
	const D = [];

	for (let person of persons) {
		const { age, temperature } = person;

		if (age >= 20 && age <= 30 && temperature < 100) {
			A.push(person);
		} else if (age >= 31 && age <= 40 && temperature < 100) {
			B.push(person);
		} else if (age >= 41 && age <= 50 && temperature < 100) {
			C.push(person);
		} else if (temperature >= 100) {
			D.push(person);
		}
	}

	const sortByEvenAges = (a, b) => {
		return a.age % 2 === 0 ? (b.age % 2 === 0 ? a.age - b.age : -1) : 1;
	};

	A.sort(sortByEvenAges);
	B.sort(sortByEvenAges);
	C.sort(sortByEvenAges);
	D.sort(sortByEvenAges);

	return { A, B, C, D };
};

let array = [
	{ name: 'mahfuj', age: 37, temperature: 98 },
	{ name: 'Biplap', age: 42, temperature: 99 },
	{ name: 'mehedi', age: 24, temperature: 100 },
	{ name: 'tahmid', age: 30, temperature: 101 },
	{ name: 'sunil', age: 23, temperature: 97 },
	{ name: 'tushar', age: 27, temperature: 98 },
	{ name: 'Kabir', age: 36, temperature: 99 },
	{ name: 'Rahul', age: 37, temperature: 99 },
	{ name: 'Nayem', age: 50, temperature: 100 },
	{ name: 'Sabnaj', age: 51, temperature: 101 },
];
const result = vaxTrail(array);
console.log(result);
