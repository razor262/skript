(() => {
	let delay = 0;
	const jobs = document.querySelectorAll('.vacancy-serp-item__layout a.bloko-button');
	jobs.forEach(job => {
		setTimeout(() => {
			job.click();
		}, delay)
		delay += 2000
	})
})();