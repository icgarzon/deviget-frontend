import { SET_THEME, DATA_LOADED, API_DATA, PAGE_NUMBER, DISMISS_ITEM, DISMISS_ALL } from "../constants/action-types";

type getDataProperties = {
    page:number,
    after:string,
    prev:string
};

type dispatchAction = {
    type: string;
    payload: any;
}

export const changeTheme = (payload: dispatchAction) => ({
    type: "SET_THEME",
    payload
});

export function getData( p:getDataProperties ){ 

    let get_params = '';
    if(p?.after){ get_params += `&after=${p.after}`; }
    if(p?.prev){ get_params += `&prev=${p.prev}`; }

    return function(dispatch:(arg0: dispatchAction) => void) {
        return fetch(`https://www.reddit.com/r/todayilearned/top.json?limit=50${get_params}`)
        .then(response => response.json())
        .then(json => {

            var after='',
                prev='';

            if(json?.data?.after){ after = json.data.after; }
            if(json?.data?.prev){ prev = json.data.prev; }
            else{
                if(p?.page && p.page > 0 && json?.data?.children[0]?.data?.id){
                    prev = json.data.children[0].data.id;
                }
            }

            dispatch({ type: "DATA_LOADED", payload: json && json.data && json.data.children ? json.data.children : [] });
            dispatch({ 
                type: "API_DATA", 
                payload:{
                    after: after,
                    prev: prev
                }  
            });

            if(p?.page && p?.after){ p.page++; }
            if(p?.page && p?.prev){ p.page--; }
            dispatch({ type: "PAGE_NUMBER", payload: p?.page?p.page:1 });

        });
    };

}

export const detailItem = (payload: dispatchAction) => ({
    type: "DETAIL_ITEM",
    payload
});


export const dismissItem = (payload: dispatchAction) => ({
    type: "DISMISS_ITEM",
    payload
});

export const dismissAll = () => ({
    type: "DISMISS_ALL"
});