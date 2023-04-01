const rangeInput = document.querySelector('input[type="range"]');
const storageInfo = document.querySelector('.app__bottom-info span');
const storageLeftInfo = document.querySelector('.storage-left');

rangeInput.addEventListener('input', e => {
	let target = e.target;
	const minValue = target.min;
	const maxValue = target.max;
	const currentValue = target.value;

	const storageLeft = maxValue - currentValue;

	target.style.backgroundSize = ((currentValue - minValue) * 100) / (maxValue - minValue) + '% 100%';

	storageInfo.textContent = currentValue;
	storageLeftInfo.textContent = storageLeft;
});
