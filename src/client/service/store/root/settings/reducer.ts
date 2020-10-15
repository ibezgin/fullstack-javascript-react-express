import { handleActions } from "redux-actions";
import { MOBILE_SET, SettingsActions } from "./actions";

export const settingsInititalState = {
    isMobile: false,
};

export const settingsReducer = handleActions(
    {
        [MOBILE_SET]: (
            state,
            { payload }: ReturnType<typeof SettingsActions.setMobile>,
        ) => ({
            ...state,
            isMobile: payload,
        }),
    },
    settingsInititalState,
);
