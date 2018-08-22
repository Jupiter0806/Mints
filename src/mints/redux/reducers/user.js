import { USER_ACTIONS } from '../actions';
import { User } from '../../dataStructure';

export default function user (
    state = {
        data: new User(),

        isSignUp: false,
        signUpErrorMessage: '',
    },
    action
) {
    switch (action.type) {

        case USER_ACTIONS.SIGN_UP_REQUEST:
            return Object.assign({}, state, {
                isSignUp: true,
                signUpErrorMessage: ''
            });

        case USER_ACTIONS.SIGN_UP_RECEIVE:
            return Object.assign({}, state, {
                isSignUp: false,
                signUpErrorMessage: '',
                data: Object.assign({}, state.data.parseServerResponse(action.response).loggedIn())
            });

        case USER_ACTIONS.SIGN_UP_FAIL:
            return Object.assign({}, state, {
                isSignUp: false,
                signUpErrorMessage: action.errorMessage
            });

        case USER_ACTIONS.SIGN_UP_CLEAR_ERROR_MESSAGE:
            return Object.assign({}, state, { signUpErrorMessage: '' });

        default: 
            return state;
    }
}