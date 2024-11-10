# React + TypeScript + Vite

## Babel
- Babel converts HTML into Javascript.

Example:
```
<h1>Hello World</h1>
```

Converted to JS:
```
React.createElement("h1", null, "Hello World");\
```

## Virtual DOM
In React applications, we don’t query and update the DOM. Instead, we describe our
application using small, reusable components. React will take care of efficiently creating
and updating DOM elements.

### Remember Note!
`In JSX, only HTML elements can be written and no if or any JS statement. So inorder to write JS in JSX we use {}`

## Fragments
In return "React" a component cannot return more than one element. So wrap in fragments
```
<Fragment> </Fragment>
or
<> </>
```

Each child in a list should have unique "Key" prop. React needs this to keep track of item to remove or add:

```
items.map(
      item =>
      <li key={item} >
      {item}
      </li>
)
```

Example:

```
true && 'Raveena' = Raveena
true && 1 = 1

false && 'Raveena' = false

So,
if(items.length === 0 ? '<p>No element found </p>' : null)
is equivalent to

items.length === 0 && <p>No element found </p>
``` 

### onClick
Event handlers have access to the React event that triggered the function.

 It takes event as an optional parameter which is an object with information like target element, mouse position, type of event, default behavior

 ## Type of Event
 In Ts, react does not know the type of Event so use "MouseEvent" as its type
 ```
 const handleEvent = (event: MouseEvent) =>{
  console.log(event);
 }
 ```

 ## In Bootstrap we have 'active' class which means highlight. Making className dynamic or when index is selected highlight it.

 ```
 className={ selectedIndex === index ? 'list-group-index active': 'list-group-item'}
 ```

## useState
Hook is a function that helps us to get built in features in React.

useState is a function that returns an array with two elements(variable and updater function). When state of component changes React itself update the DOM

## Using Props to pass Data:
Suppose we want to show list of different types like cities, colors .. etc
Pass items as input to the function. This is called as Props. We can use interface or type to define shape of input if there are more than one input to be passed as props

```
interface ListProps{
  items: string[];
  heading:string;
}
```
### Passing Children in a component

```
<Alert text="Hello World"/>
```
Here for Alert the text passed is small but wwhat if we want to pass a big text or html then it is not good. So use:
```
<Alert>
  Hello World
</Alert>

To use as above we need to pass as "children"

interface Props{
  children: string;
}

const Alert : ({children}: Props) =>{
  return(
    <div>{children} </div>
  )
}

To pass a complex structure as a children in parent we use type as ReactNode
```

### CSS in JS
```
npm i styled-components
npm i @types/styled-components
```

State is stored outside components so that at every re-render of component it is not re-initialized. React updates state asynchronously.

Choosing state structure:

```
const[firstName, setFirstName] = useState(''); // here firstName is variable
const[isLoading, setIsLoading] = useState(false);  //here isLoading is an object
or
const[person, setPerson] = useState([
  firstName:'',
  lastName:''
]) // this is also object. Avoid deeply nested object
```
### Pure Function
Given same input it always return same result. If different result its impure

Pure Component . Whatever same props we give we get same JSX

### How to keep components pure?
```
`Pure Component:`
const Message = () =>{
  let count = 0;
  return(
    <div>
    <Message {count} />
    </div>
  )
}

`Impure Component`
const Message = () => {
  let count = 0;
  return(
    <div>
      count++;
      <Message {count}/>
      </div>
  )
}

To keep component pure make sure you keep objects which are going to change in Component itself and not outside of component  or before anything renders!

const Message=()=>{
  let count = 0;
  count++;
  return(
    <div>
    Message {count}
    </div>
  )
}

Answer everytime for above is
Message 1
Message 1
Message 1
```

### StrictMode
StrictMode does not have visual representation but helps in catching any potential bugs

One bugs is impure component.
If StrictMode is enable React renders each component twice! Takes second one to show.
First Render: To catch any problems
Second Render: To render on UI

React 18 strictmode turned on by default so renders render twice

`In production strictmode checks are disabled`

To update object we need to pass new object and update it and not just variable example:
```
const[drink, setDrink] = useState({
  title: "Americano",
  price: 5
})  ;

//this is fine
const handleClick = () =>{
  const newDrink ={
    title: "Americano",
    price: 6
  }
  setDrink(newDrink);
}


But this is not fine
const handleClick = () =>{
  drink.price = 6
  setDrink(drink); // This will not work since drink is object we need to create a new object only to update drink obj
}

To copy all properties in new object use spread operator

const handleClick = () =>{
   const newDrink = {
    ...drink,
    drink.price = 6;
   }
   setDrink(newDrink);
}
```

To udpate Nested objects:
```
const[customer, setcustomer] = useState({
  name: 'John',
  address:{
    city: 'San Francisco',
    zip: '121'
  }
});

const handleClick = () =>{
  setCustomer({...customer, address:
  ...customer.address,
  zip:'141';
  });
}
```

`To modify Arrays`
```
const[tags, setTags] = useState(['happy', 'cheerful']);
const handleClick = () =>{

  //to add
  setTags([...tags, 'exciting']);

  //to remove
  setTags([tags.filter(tag => tag !== 'happy')])

  //to update
  setTags(tags.map(tag => tag === 'happy' ? 'happiness' : tag)); 
}
```