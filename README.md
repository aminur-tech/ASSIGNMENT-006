
#### 1) What is the difference between var, let, and const?
- Answer: 
- **var**: old, function-scoped, re-declarable.
- **let**: modern, block-scoped, reassignable, not re-declarable.
- **const**: modern, block-scoped, no reassignment (but contents of objects/arrays can change).


#### 2) What is the difference between map(), forEach(), and filter()? 
- **map()**: transforms each element, returns new array.
- **forEach()**: just does something, no return array.
- **filter()**: selects elements that pass a test, returns new array.

#### 3) What are arrow functions in ES6?
- **arrow function**: Arrow functions are a shorter way to write functions in JavaScript
**Example:**  
```javascript
const add = (a, b) => a + b;
```
#### 4) How does destructuring assignment work in ES6?
- Destructuring is a feature in ES6 that lets you unpack values from arrays or objects into separate variables in a clean way.
- such as
- **Array destructuring**: [a, b] = array

- **Object destructuring**: {key} = object


#### 5) Explain template literals in ES6. How are they different from string concatenation?
- Template literals in ES6 use backticks (`) and allow string interpolation with ${}and multi-line strings
- Example :
```javascript
const name = "Alex";
const msg = `Hello, ${name}!`; //template literals

const msg2 = "Hello, " + name + "!"; //simple string

```


