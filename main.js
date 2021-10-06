window.addEventListener('load', () => {
	const hourHTML = document.getElementById('hour');
	const minuteHTML = document.getElementById('minute');
	const secondHTML = document.getElementById('second');

	const showTime = () => {
		const date = new Date();
		const hour = date.getHours();
		const minute = date.getMinutes();
		const second = date.getSeconds();

		hourHTML.textContent = String(hour).padStart(2, '0');
		minuteHTML.textContent = String(minute).padStart(2, '0');
		secondHTML.textContent = String(second).padStart(2, '0');

		setInterval(showTime, 1000);
	};

	showTime();
});
