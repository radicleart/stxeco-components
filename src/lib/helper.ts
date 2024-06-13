

export function makeFlash(el1:HTMLElement|null) {
	let count = 0;
	if (!el1) return;
	el1.classList.add("flasherize-button");
    const ticker = setInterval(function () {
		count++;
		if ((count % 2) === 0) {
			el1.classList.add("flasherize-button");
		}
		else {
			el1.classList.remove("flasherize-button");
		}
		if (count === 2) {
			el1.classList.remove("flasherize-button");
			clearInterval(ticker)
		}
	  }, 2000)
}

export function truncate(stringy?:string, amount?:number) {
	if (!stringy) return '?';
	if (!amount) amount = 4;
	return stringy.substring(0, amount) + '...' + stringy.substring(stringy.length - amount);
}
  