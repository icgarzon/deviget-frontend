import { DATA_LOADED, API_NEXT, PAGE_NUMBER, DISMISS_ITEM, DISMISS_ALL } from "../constants/action-types";

type getDataProperties = {
    page:number,
    after:string
};

type dispatchAction = {
    type: string;
    payload: any;
}

export function getData( p:getDataProperties ){ 

    let get_params = '';
    if(p?.after){ get_params += `&after=${p.after}`; }

    return function(dispatch:(arg0: dispatchAction) => void) {
        return fetch(`https://www.reddit.com/r/todayilearned/top.json?limit=50${get_params}`)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: "DATA_LOADED", payload: json && json.data && json.data.children ? json.data.children : [] });
            dispatch({ type: "API_NEXT", payload: json && json.data && json.data.after ? json.data.after : [] });

            if(p?.page){ p.page++; }
            dispatch({ type: "PAGE_NUMBER", payload: p?.page?p.page:1 });
        });
    };

}

export const dismissItem = (payload: any) => ({
    type: "DISMISS_ITEM",
    payload
});

export const dismissAll = () => ({
    type: "DISMISS_ALL"
});