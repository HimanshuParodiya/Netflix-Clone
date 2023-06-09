import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

// userSlice is a slice of our store we can have so many slices 
export const userSlice = createSlice({
  // we have user named state in this createSlice store 
  name: 'user',

  // we have already initialize the state
  initialState,

  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes

    // below we are creating our action
    // we push infomation into it by using action 
    login: (state,action) =>{
      state.user = action.payload;
    },
    logout : (state) =>{
      state.user = null;
    }
  },
  // Use the PayloadAction type to declare the contents of `action.payload`
    
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.

});

// Exporting below action from userSlice.action

export const { login, logout } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`


// by action we push information to our store/state but how do i get that information out of it and then use in our component
// so to get the userinfomation from the user store we need to use selector 
// and this selectore will give me back value

// creating selectUser then it will go into the state
// then in the state it will get user 
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
