import {atom} from "recoil";

export const network=atom({
    key: "networkAtom",
    default: {
        network: 0,
        jobs: 0,
        messaging: 0,
        notifications: 0
    }
});



 