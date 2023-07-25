export const timeToString = (minutes: number, seconds: number): string => {
    const form = (n: number): string => {
		return (n > 9 ? '' : '0') + n;
	}

    return form(minutes) + ":" + form(seconds);
}