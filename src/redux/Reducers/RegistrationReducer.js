import {USER_REGISTRATION_SUCCESS, USER_REGISTRATION_FAIL} from '../Constants/RegistrationConstants';
 
const initialState = {};
export const RegistrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_REGISTRATION_SUCCESS:
            return {
                userRegistrationApi: action.payload,
            };
        
        case USER_REGISTRATION_FAIL:
            return {
                userRegistrationApi: null,
            };

        default:
            return state;
    }
}
