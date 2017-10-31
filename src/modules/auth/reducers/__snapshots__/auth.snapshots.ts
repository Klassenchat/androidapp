export let snapshots = {
    "AuthReducer undefined action should return the default state 1": '{ "loggedIn": false, "user": null }',
    "AuthReducer wrong login payload should NOT authenticate a user 1": '{ "loggedIn": false, "user": null }',
    "AuthReducer LOGIN_SUCCESS should add a user set loggedIn to true in auth state 1": '{ "loggedIn": true, "user": {"name": "test"} }',
    "AuthReducer LOGOUT should logout a user 1": '{ "loggedIn": false, "user": null }',
};
