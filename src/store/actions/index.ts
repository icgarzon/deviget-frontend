import { DATA_LOADED } from "../constants/action-types";

export function getData() {
    return function(dispatch: (arg0: { type: string; payload: any; }) => void) {
        return fetch("https://www.reddit.com/r/todayilearned/top.json?limit=50")
        .then(response => response.json())
        .then(json => {
            dispatch({ type: "DATA_LOADED", payload: json && json.data && json.data.children ? json.data.children : [] });
        });
    };
}