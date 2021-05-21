import {useReducer,useEffect} from 'react'

function showsReducer(prevState,action){
    switch(action.type){
      case 'ADD': return [...prevState,action.showId]
      case 'REMOVE' : prevState.filter(showId => showid!== action.showId)
      default: return prevState;
    }
}

function usePersistedReducer(reducer,initialState,key){
    const [state,dispatch] = useReducer(reducer,initialState,inital => {
      const persisted = localStorage.getItem(key);
      return persisted?JSON.parse(persisted):initialState;
    });

    useEffect(()=>{
      localStorage.setItem(key,JSON.stringify(state))
    },[state]);

    return [state,dispatch];
}

export function useShows(key = "shows"){
  return usePersistedReducer(showsReducer,[],key);
}