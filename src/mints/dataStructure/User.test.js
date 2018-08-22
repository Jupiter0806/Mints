import User from './User';

it('new user should return an instance of User', () => {
    expect(new User() instanceof User).toEqual(true);
})