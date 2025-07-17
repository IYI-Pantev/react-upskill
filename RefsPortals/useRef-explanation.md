# useRef Explained in React – With Code Example and Comparison

---

## ✅ What This Code Does

You are:

- Creating a text input field.
- Using `useRef` to get the **value of the input** when a button is clicked.
- Using `useState` to **store the submitted value** (`playerName`).
- Not using `onChange` or controlled input — instead, you get the input value only **on submit**.

---

## 🔍 Let's Break It Down

### 🧠 1. `const inputName = useRef();`

- This creates a **ref object**:  
  `{ current: undefined }` initially
- When the component renders, React sets `inputName.current` to the DOM node of the `<input>`.

---

### 🧠 2. `<input ref={inputName} />`

- This line binds the **real DOM input element** to the `inputName` ref.
- After the first render, you can access that element using:  
  `inputName.current`

---

### 🧠 3. `setPlayerName(inputName.current.value);`

- This line runs when the **button is clicked**.
- It accesses the current value of the `<input>` using `.value`, which is a standard DOM property.
- Example:
  - If the user types `Nick`, then:
    `inputName.current.value === 'Nick'`
- This sets the `playerName` state to the typed input **without needing `onChange`**.

---

### 🧠 4. How the `ref` "connects" the input

```jsx
<input ref={inputName} />
```
