import { DATA_LOADED, API_NEXT, PAGE_NUMBER } from "../constants/action-types";

type getDataProperties = {
    page:number,
    after:string
};

export function getData( p:getDataProperties ){ 

    let get_params = '';
    if(p?.after){ get_params += `&after=${p.after}`; }

    return function(dispatch: (arg0: { type: string; payload: any; }) => void) {
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