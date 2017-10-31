export let snapshots = {
    "LoginPageReducer LOGIN should make pending to true 1": '{ "error": null, "pending": true }',
    "LoginPageReducer LOGIN_FAILURE should have an error and no pending state 1": '{ "error": "login failed", "pending": false }',
    "LoginPageReducer LOGIN_SUCCESS should have no error and no pending state 1":'{ "error": null, "pending": false }',
    "LoginPageReducer undefined action should return the default state 1": '{ "error": null, "pending": false }',
};

