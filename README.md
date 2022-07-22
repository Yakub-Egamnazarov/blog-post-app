### Write the comment before the #14 tutorial

---

## NO.14 useEffect Hook

runs a function everytime any component rendered
hapens once when the component loads, and after, everytime the state changes and rerenders the component, the function will be fired again.

## NO.15 useEffect Dependencies

Use in case if you want to trigger in a center render, not in every render.
When dependencies used in useEffect hook, the function runs only once, when first rendered.

by useEffect hook we pas on state dependency, which triggers function when only that dependancy changes.
