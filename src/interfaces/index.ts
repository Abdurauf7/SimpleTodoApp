export interface Todo {
    id: number,
    text:string
}

export interface TodoListProps {
    items: {id:number,text:string}[];
    onDeleteTodo: (id:number) => void
}
  