export class Validator {
	constructor(name) {
		this.name = name;
	}

	validateUsername() {
		const regex = /^[a-z0-9-_A-Z]+$/;
		const regexRepeat = /\d{4,}/;
		const regexStart = /^[-_0-9]/;
		const regexEnd = /^[0-9_-]|[_-]$/;

		if (this.name.match(regex) &&
			!regexRepeat.test(this.name) &&
			!regexStart.test(this.name) &&
			!regexEnd.test(this.name)
		) {
			return true;
		} else {
			return false;
		}
	}
}