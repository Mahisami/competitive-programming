const minSetSize = (arr) => {
	let length = arr.length / 2;
	let map = {};

	arr.forEach((el) => (map[el] = (map[el]++ || 0) + 1));

	let ints = Object.values(map).sort((a, b) => b - a);

	let count = 0;

	for (let i = 0; i < ints.length && length > 0; i++) {
		count++;
		length -= ints[i];
	}

	return count;
};
