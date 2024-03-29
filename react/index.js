// React::
// React is a open-source front-end JavaScript library for building user interfaces.
// for SPAs by Facebook.
// Declarative (abstract way the control flow for logic, not tell step by step).

// Features of React::
// Reusable components based approach.
// single-directional flow of data. (Only transfer data from parent to child not vice-versa) (state -> component -> DOM)
// most of market share.
// VirtualDOM instead of RealDOM. 

// Virtual DOM advantages::
// VDOM is a programming concept where virtual representation of a UI is kept in memory and is synced with the real DOM.
// fast as compared to actual DOM, minimal memory consumption.

// Transformer:
// Babel

// React component life cycle:

// Component:
// Reusable piece of code that encapsulates markup and logic for a particular part of the user interface.

// compoenent vs element:
// Elements are the basic building blocks in React, while Components are pieces of code that control the Elements and allow for more complex React applications.

// Reconciliation::
// The process of syncing virtual dom with real dom.
// You tell React what state you want the UI to be in, and it makes sure the DOM matches that state.

// JSX:
// Javascript XML. HTML like syntax that is used in react.
// syntactic sugar for the React.createElement().

// React Create Element::
const element = React.createElement('div', { id: 'login-btn' }, 'Login'); // <div id='login-btn'>Login</div>
const domEle = document.createElement('img');
domEle.src = `https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png`;

// State: (local data of components)
// source of data that control aspects component behavior and rendering. mutable, upon change changes UI.

//  Props: (Input to component)
//  properties, that components get in parameter. immutable(you can't change props directly in components)

//  Higher order component:
//  A function that accepts a components enhances a functionality and returns a new component.
const newComponent = higherOrderComponent(orignalComponent);

//  Redux::
//  General object of state in react.
//  Action -> Reducer -> State -> UI

// Advantages of using redux::
// organized approach, testing ability, dev tools.

//  Phases of react component life cycle::
//  Initial => Update => Unmount.

// Synthetic events::
// onClick, onFocus all these type of events are synthetic events in react.
// Wrapper around real dom events to work in all browsers.

// Stateful components:: (uncontrolled components)
// components that has internal state.

// Pure components::
// renders the same output for the same state and props.
// React.PureComponent:
// React.PureComponent is exactly the same as React.Component except that it handles the shouldComponentUpdate() 
// method for you. When props or state changes, PureComponent will do a shallow comparison on both props and state. 
// Component on the other hand won't compare current props and state to next out of the box. Thus, the component will 
// re-render by default whenever shouldComponentUpdate is called.

// production mode::
// process.env.NODE_ENV=production
// auto-swith to production in build and development in start.

// cloneElement vs createElement::
// create element is to completely create new element and clone element to and pass new prop.

// React Fiber:
// New state reconcliation engine introduced in react 16.

// "key" prop::
// A key is a special string attribute you should include when creating arrays of elements. Key prop helps React 
// identify which items have changed, are added, or are removed.
// Using indexes for keys is not recommended if the order of items may change. This can negatively impact performance and may cause issues with component state.

// Hooks::
// starts with name use.
// call them at top level. Don't work inside regular functions.

// useState()::
// takes 1 optional patameter for default value.
// returns array of 2 values. first is reactive value and second is setter function.
// when ever reactive value changes UI updates.
const [count, setCount] = React.useState(0);

// useEffect()::
// hook to get callback on states changes in component.(init, update, unmount).
// takes 2 arguments. First callback, and second dependecy array.
React.useEffect(() => console.log('I will execute when any state changes in component.'));
React.useEffect(() => console.log('I will execute only component init.'), []);
React.useEffect(() => console.log("I wil execute on compoenet init and any time count changes."), [count]);
React.useEffect(() => () => console.log("I wil execute on component Unmount."), []);

// useContext()::
// Work with react contect API.
// share value across react tree without passing to each component.
const moods = { happy: "Happy", sad: "Sad" };
const MoodContext = React.createContext(moods);
const App = () => (
    <MoodContext.Provider value={moods.happy}>
        <ChildComponent />
    </MoodContext.Provider>
);
const ChildComponent = () => <GrandChildComponent />
const GrandChildComponent = () => {
    const mood = React.useContext(MoodContext);
    return <p>{mood}</p> //Happy
}

// useRef()::
// mutable object, keep same reference between renders. 
// Like a set state but didn't trigger re-render on value change.
// common use case is to grab JSX elements.
const btnRef = React.useRef(null);
<button ref={btnRef}>CLICK</button>

// useReducer()::
// works similar to use state.
// uses redux pattern.(action -> reducer -> store -> UI).
// takes reducer function as first parameter and init value as second parameter.
// returns 2 values. First is reactive state and seond is funciton that dispatch an action.
const reducer = (state, action) =>
    action.type === 'increment' ? state + 1 : action.type === 'decrement' ? state - 1 : new Error('Invalid call');
const CounterBtn = () => {
    const [state, dispatch] = React.useReducer(reducer, 0);
    return <button onClick={() => dispatch('increment')}>{state}</button>
}

// useMemo()::
// optimize competition cost. to deal with expensive calculations that we know are hurting performance.
const exponsiveCount = React.useMemo(() => count ** count, [count]);

// useCallback:: (memorize complete function) 
// we have to pass function to multiple child's then by wrapping it in useCallback will point to same function.
const showCount = React.useCallback(() => console.log(count), [count]);

// useLayoutEffect():
// run after rendering but before actual painting of component.(before updating layout to enduser).
React.userLayoutEffect(() => console.log('HEllo, I will execute before actual pointing.'));

// useContext vs Redux::

// getDetivedStatefromProps::

// Lazyload::
// incremental downloading. 
// code/compoents not required in specfic page can be lazy-loaded.
const about = React.lazy(() => import('./componenets/about'));
<React.Suspense fallback={"loading..."}><About /></React.Suspense>

// memo:: (higher order component)
// If props don't change it will use re-rendering.
// performance boost in some cases by memoizing the result. 
// by default it shallow compares props.

// css-in-js::
// write css in compoent. Idea behind styled compoents.

// Routing in react:

// Do react compare object shallow or deep::

// Force rerender component::
// avoid this because this don't agree this with react mindset.
// for class components there is method of .forceUpdate().
// for function compoents maybe make hook.

// Hot reloading vs live reloading::

// Error Boundaries::

// class vs function::

// useRef vs createRef:

// Make Custom hook:

// Headless comonents:
// solely written as "pure" JavaScript functions and do not have any render method declared. 
// This means you will never see them created when the component is rendered, and they could never be "mounted" on the DOM.

// REDUX

// Redux::
// JS library for managing state of library. Global State.

// Flow of redux:
// Action => Reducer => Store => UI

// multiple reducer:
// Yes.

// Components:: 
// store, actions, and reducers.

// Store::
// object that holds the state of the application and allows it to be accessed anywhere.

// Action:: 
// Method that describes the change in state.

// Reducer in redux::
// Redux is a function that takes the current state and an action and returns a new state. It updates the state based on the type of the action received.

// Dispatch::
// function used to send actions to the store.

// Subscribe function::
// Redux allows components to be notified of changes to the state and re-render as necessary.

// Aynchronous actions::
// redux-thunk or redux-saga

// Middleware::
// Allows you to intercept and handle actions.
// Used for tasks such as logging, handling async actions, or performing side effects.


// Object.create vs Object.assign:

// How browser works in detail:

// REST:

// Basic testing:

// Flex vs GRID:

// Design patterns for react:  (MVC, SOLID -> render props, HOF)
// 1. Layout components:
//  - Components should not care about where they are displayed. Generic components.
const ListMapper = ({items, propertyName, PropertyComponent, uniqueIdentiferKey}) =>  
    items.map((item, index) => <PropertyComponent {...{[propertyName]: item}} key={item[uniqueIdentiferKey] || uuid()} />);


// 2.Controlled/Uncontrolled:
// a. Controlled: (we can get component behave in any way we want by passing right props)
    // Manage their own state.
    // predticable
// b. Uncontrolled:
    // Their parent manages its state for them.
    // non-predticable


// 3. Custom Hooks:
export default function useCounter() {
    const [counter, setCounter] = React.useState(0);
    const increment = () => setCounter((prevCounter) => prevCounter + 1);
    const decrement = () => setCounter((prevCounter) => prevCounter - 1);
    const setCustomValue = (customValue) => setCounter(+customValue);
    return { counter, increment, decrement, setCustomValue };
}

// 4.Functional Programming:
// Data and funcnality is not coupled.
// Minimize state change.
// advantages:
    // controlled compoenents.
    // functional components.
    // HOC.
    // recursive components.
    // parcitally applied components.
    // components composition.


// HOC:
// component that return another component.
// sharing behavour/logic between other components.
// Add extra funcnality in our existing component.
const PrintProps = (component) => {
    return (props) => {
        console.log(props);
        return <component {...props} />
    }
}
const Card = () => <Card {...props} />
const NewFunc = (PrintProps(Card))
// <NewFunc /> 

const withUser = (Component, userId) => {
    return (props) => {
        const [user, setUser] = React.useState('');
        React.useEffect(()=>{
            fetch(`/api-url/${userId}`)
            .then(resp => resp.json())
            .then(data => setUser(data));
        }, []);
        return <Component {...props} user={user} />
    }
}
const WithUser = withUser(User, '123');
// <WithUser />



// debouncing:
function useDebounce(value, delay) {
    const [debouncedValue, setDebounceValue] = React.useState(null);
    React.useEffect(()=>{
        const timeOut = setTimeout(()=> setDebounceValue(value),delay);
        return () => clearTimeout(timeOut);
    },[]);
    return debouncedValue;
}