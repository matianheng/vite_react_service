// src/store/actions.ts
export const increment = () => ({
    type: 'INCREMENT'
  });
  
  export const setUser = (user: any) => ({
    type: 'SET_USER',
    payload: user
  });
  