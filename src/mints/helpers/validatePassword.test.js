import validatePassword from './validatePassword';

it('should return null for errors', () => {
    expect(validatePassword('as6283198')).toEqual(undefined);
});

it('should return error of "Password cannot be empty"', () => {
    expect(validatePassword()).toEqual("Password cannot be empty");
});

it('should return error of "Password cannot be empty"', () => {
    expect(validatePassword("")).toEqual("Password cannot be empty");
});

it('should return error of "Password length should greater than 5"', () => {
    expect(validatePassword("12345")).toEqual("Password length should greater than 5");
});