import { ChangeEvent, FormEvent, Fragment, useReducer } from "react";

interface Todo {
  msg: string,
  tags: string[],
  disabled: boolean
}

function App() {
  const [todo, updateTodo] = useReducer(
    (data: Todo, partialData: Partial<Todo>) => ({
      ...data,
      ...partialData
    }),
    {msg: '', tags: [], disabled: true}
  )

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    updateTodo({tags: [...todo.tags, todo.msg], msg: '', disabled: true})
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateTodo({msg: e.target.value, disabled: false})
  }

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <input value={todo.msg} onChange={onChange} />
        <button type="submit" disabled={todo.disabled}>Submit</button>
      </form>
      {todo.tags.map(t => <p key={t}>{t}</p>)}
    </Fragment>
  );
}

export default App;