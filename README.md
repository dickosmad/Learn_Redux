### Learn_Redux

- Redux basic
- Redux Thunk basic ;
- MapStateToProps , HOC , Action creators , connect function

#### Created with CodeSandbox

- Since reducers are supposed to be “pure,” we can’t do any API calls or dispatch actions from inside a reducer.

### What’s a “thunk”?

- A “thunk” is a (uncommon) name for a function that’s returned by another function.

1 - Whenever you want to change the state you will change it in the reducer.

2 - When you want to change the state the workflow should be :
Component will call => Action will call => Reducer => Reducer will have a case: statement for your action in which state update will take place.
