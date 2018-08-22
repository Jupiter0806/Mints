import validateEmail from './validateEmail';

it('should return true', () => {
    expect(validateEmail('123@gmail.com')).toEqual(true);
});

it('should return false as no @ no domain', () => {
    expect(validateEmail('123')).toEqual(false);
});

it('should return false as no domain', () => {
    expect(validateEmail('123@')).toEqual(false);
});

it('should return false as invalid domain format', () => {
    expect(validateEmail('123@gmail')).toEqual(false);
});

