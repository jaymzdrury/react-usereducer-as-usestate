## React - useReducer as useState

<img src="https://images.unsplash.com/photo-1527409335569-f0e5c91fa707?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="React" width="350" />

***

instead of multiple useState's...

```JavaScript
    const [msg, msgSet] = useState('')
    const [todos, todosSet] = useState([])
    const [disabled, disabledSet] = useState(true)
```

useReducer instead...

```JavaScript
    const [todo, updateTodo] = useReducer(
        (data: Todo, partialData: Partial<Todo>) => ({
        ...data,
        ...partialData
        }),
        {msg: '', tags: [], disabled: true}
    )
```
