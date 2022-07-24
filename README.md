### Write the comment before the #14 tutorial

---

## NO.14 useEffect Hook

runs a function everytime any component rendered
hapens once when the component loads, and after, everytime the state changes and rerenders the component, the function will be fired again.

## NO.15 useEffect Dependencies

Use in case if you want to trigger in a center render, not in every render.
When dependencies used in useEffect hook, the function runs only once, when first rendered.

by useEffect hook we pas on state dependency, which triggers function when only that dependancy changes.

## NO.16 Using JSON Server

JSON Server - allows us to make fake API

```
npx json-server --watch path --port 8000
```

json-server automatically creates endpoints /blogs, id etc

### Endpoints according the project

/blogs | GET | Fetch all blogs \
/blogs/{id} | GET | Fetch a single blog\
/blogs | POST | Add a new blog \
/blogs/{id} | DELETE | Delete a blog \

## NO.17 Fetching Data with useEffect

```js
useEffect(() => {
  fetch("http://localhost:8000/blogs")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setBlogs(data);
    });
}, []);
```

## NO.18 Conditional Loading Message

To make loading message, need to create a state first, isPending, isLoading and set default value to true, when the data is loaded in useEffect, change the state value into false.

to simulate the loading we use setTimeout function.

## NO.19 Handling Fetch Errors

.catch - catches errors in promise chain, when you use .then methods in promise, usually used at the end of promise
response object has ok properties, if it is true then the data is fetched correctly, if it is false, the server gave the data, but could not give propers data, or some error.
by response object we can throw error

```js
throw Error("Could not fetch data for that resource...");
```

by putting this error message into conditional state we can render error message on DOM or data.

```jsx
const [error, setError] = useState(null);

{
  error && <div>{error}</div>;
}
```

## NO.20 Creating a Custom Hook

Moving all the code inside the Home component to an independent component (useFetch) - customer hook. all the customer hooks should start with word use + something (useFetch). all the fetch related code moved to independent file useFetch.json as component.

## NO.21 The React Routers

The way of doing multiple page websites

Need to instal react-router-dom package

```command-line
npm install react-router-dom@version
```

import to main App.js file and wrap the components

```js
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

<Router>
  <Navbar />

  <Switch>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
</Router>;
```

## NO.22 Exact Match Routes

The \<Switch></Switch> start to match the links from start to bottom, and the first one matches, that element fires on. to avoid the wrong firing, exact attribute is used inside \<Route exact path="/"></Route>

## NO. 23 Router Links

it is used to intercept the request to the server from anchor tag \<a>, when router links are used, the request not sent to the server, but handles from jsx app itself.

```
  <Link to="/create">New Blog</Link>
```

## NO.24 useEffect Cleanup

run cleanup functions in useFetch component, when useEffect mounts
not sure what errors was about, in my variant this error didn't occur

## NO.25 Route Parameters

route parameter - variable inside a route
useParams get the parameter from the browser /blogs/:id

## NO.26 Reusing Custom Hooks

useFetch custom hook used to reach the blog with specific id.

## NO.27 Controlled Inputs (forms)

input values linked to state hook, and controlled by setValue hooks. where set value hook linked to onChange attribute function in input react element, with e.target.value data passed to onChange function. This on change function fired when any change occurs in the element.

## NO.28 Submit Events

onSubmit attribute function is called when pushed the button, so we target this through the form element. and link it to our custom hanldeSubmit function which prevents default behavior of submit form button, and creates const data of blog from state attributes of the react element.
Now need to do post request which send the blog data to the json servers with blogs, localhost:8000/blogs.
