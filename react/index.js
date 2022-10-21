// React::
// React is a JavaScript library for building user interfaces.
// declarative (abstract away the control flow for logic, not tell step by step).
// reusable components based approach. (components are like building blocks of react, independent of each  other)
// most of market share.
// single-directional flow of data. (You can only transfer data from parent to child and not vice versa.) (state -> component -> DOM)

// Virtual DOM advantages::
// VDOM is a programming concept where virtual representation of a UI is kept in memory and is synced with the real DOM.
// fast as compared to actual DOM, changes are made easily, minimal memory consumption.

// Reconciliation::
// The process of syncing virtual dom with real dom.
// You tell React what state you want the UI to be in, and it makes sure the DOM matches that state.

// JSX:
// Javascript XML. HTML like syntax that is used in react.

// State:
// source of data that control aspects component behavior and rendering. mutable, upon change changes UI.

//  Props:
//  properties, that components get in parameter. immutable(you cant change props directly in components)

//  Higher order component:
// function takes component as an argument and returns a new component.
// const newComponent = higherOrderComponent ( orignalComponent )
//  A function that accepts a components enhances a functionality and returns a new component.

//  Redux:
//  general object of state in react.
//  action -> reducer -> state -> view

//  Phases of react component life cycle:
//  initial
//  update
//  unmount

//  routing in react:

//  flux vs redux:

// synthetic events:
// onClick, onFocus all these type of events are synthetic events in react.

// stateful components: (uncontrolled components)
// components that has internal state.

//  advantages of using redux:
//   organized approach.
//   testing ability
//   dev tools

// pure components:
// renders the same output for the same state and props.

// production mode:
// process.env.NODE_ENV=production

// cloneElement vs createElement:
// create element is to completely create new element and clone element to clone element and pass new prop.

// React Fiber:
// New state reconcliation engine introduced in react 16.

// useContext vs Redux:

// Hooks:
// starts with name use.
// call them at top level. they  don't work inside regular functions.

// useState();
// const [count, setCount] = React.useState(0);

// useEffect():
//   React.useEffect(() => {
//     console.log("App component mounted");
//     console.log(count);
//     return () => console.log("App component unmounted");
//   }, [count]);

// useContext():
// share value across react tree without passing to each component.

// useRef(): (grab element form DOM)
//   mutable,  keep same reference value but didn't create re-render on value change.
//   const btnRef = React.useRef(null);
//   <button ref={btnRef}> CLICK ME </button>;

// useReducer():
// works similar to Redux pattern.  (action -> reducer -> store -> UI)

// useMemo():
// optimize competition cost. to deal with expensive calculations that we know are hurting performance.
//   const exponsiveCount = React.useMemo(() => count ** count,  [count]);

//   useCallback:
//   memorize complete function.
//   we have to pass function to multiple child's then by wrapping it in useCallback will point to same function.
//   const showCount = () => React.useCallback(() => console.log(count), [count]);

// useLayoutEffect():
// run after rendering but before actual painting of component.(before updating layout to enduser).

// getDetivedStatefromProps

// Suspence

// Lazyload

// concurrent rendering

// portals:

// memo vs useMemo

// higher order function

// controlled vs uncontrolled

// state reconcliation

// performance optimizations:
// check memory leasks(browser profiling)

// css-in-js::
