import config from '../../../conifg';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_RECEIVE = 'SIGN_UP_RECEIVE';
export const SIGN_UP_FAIL = 'SIGN_UP_FAILE';
export const SIGN_UP_CLEAR_ERROR_MESSAGE = 'SIGN_UP_CLEAR_ERROR_MESSAGE';

let BASE_URL = null;
if (config.DEVELOPMENT_MODE) {
    BASE_URL = 'https://us-central1-chat-eede9.cloudfunctions.net/';
} else {
    BASE_URL = 'https://us-central1-chat-eede9.cloudfunctions.net/';
}

const ACTIONS = {
    SIGN_UP: 'signUp',
}

function signUpRequest() {
    return {
        type: SIGN_UP_REQUEST
    };
}

function signUpReceive(response) {
    return {
        type: SIGN_UP_RECEIVE,
        response
    };
}

function signUpFail(errorMessage) {
    return {
        type: SIGN_UP_FAIL,
        errorMessage
    };
}

export function signUpClearErrorMessage() {
    return {
        type: SIGN_UP_CLEAR_ERROR_MESSAGE
    }
}

function signUpUser(user) {
    return dispatch => {
        dispatch(signUpRequest()) ;
        const payload = {
            UserID: user.userid,
            Name: user.name,
            Provider: user.provider,
            Password: user.password,
            SourceDeviceID: user.sourceDeviceID,
            SourceDeviceType: user.sourceDeviceType,
            Avator: user.avator
        };
        return post(payload, BASE_URL + ACTIONS.SIGN_UP)
                .then(response => {
                    if (isSucceed(response)) {
                        dispatch(signUpReceive(response))
                    } else {
                        dispatch(signUpFail(getErrorMessage(response)))
                    }
                })
                .catch(error => dispatch(signUpFail('Unknown Error: ' + JSON.stringify(error))));
    }
}

function shouldSignUpUser(state) {
    if (!state.user) {
        return true;
    } else if (state.user.isFetching || state.user.isLogging || state.user.isSignup) {
        return false;
    } else {
        return true;
    }
}

export function signUpUserIfNeeded(user) {
    return (dispacth, getState) => {
        if (shouldSignUpUser(getState())) {
            return dispacth(signUpUser(user));
        }
    };
}

function isSucceed(response) {
    return response.Status && response.Status.Code.toString() === '0';
}

function getErrorMessage(response) {
    return response.Status.Message || 'Unknown Error';
}

function post(payload, url) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accesstoken': config.API_ACCESS_TOKEN
        },
        body: JSON.stringify(payload)
    }).then(response => response.json());
}