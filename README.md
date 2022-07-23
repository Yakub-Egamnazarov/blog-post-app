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
