import isFunction from './isFunction';

it('should return true', () => {
    expect(isFunction(function(){})).toEqual(true);
});

it('should return false as it is an array', () => {
    expect(isFunction([])).toEqual(false);
});

it('should return false as it is an object', () => {
    expect(isFunction({})).toEqual(false);
});