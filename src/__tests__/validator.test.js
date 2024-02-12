import { Validator } from '../js/Validator';

test('Проверка имени, состоящее из заглавных букв, цифр и подчеркиваний.', () => {
	const user = new Validator('Nitka_Max023');
	expect(user.validateUsername()).toBe(true)
});

test('Проверка имени, начинающееся с цифры', () => {
	const user = new Validator('023nitkamax');
	expect(user.validateUsername()).toBe(false)
});

test('Проверка имени , состоящее только из цифр', () => {
	const user = new Validator('0_2_3');
	expect(user.validateUsername()).toBe(false)
});

test('Проверка имени , начинающееся с дефиса', () => {
	const user = new Validator('-nitkamax');
	expect(user.validateUsername()).toBe(false)
});

test('Проверка имени , начинающееся с подчеркивания', () => {
	const user = new Validator('_nitkamax');
	expect(user.validateUsername()).toBe(false)
});

test('Проверка имени  со специальными символами', () => {
	const user = new Validator('nitka@max');
	expect(user.validateUsername()).toBe(false);
});

test('Проверяет имя со смешанными строчными и прописными буквами.', () => {
	const user = new Validator('NiTkAmAx');
	expect(user.validateUsername()).toBe(true);
});