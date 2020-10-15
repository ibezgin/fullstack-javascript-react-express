import { createAction } from "redux-actions";

const prefix = "SETTINGS";

export const MOBILE_SET = `${prefix}.MOBILE_SET`;

export const SettingsActions = {
    setMobile: createAction(
        MOBILE_SET,
        (isMobile: boolean) => isMobile,
    ),
};
