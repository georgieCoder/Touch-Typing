export const timeToString = (minutes, seconds) => {
    const form = (n) => {
		return (n > 9 ? '' : '0') + n;
	}

    return form(minutes) + ":" + form(seconds);
}