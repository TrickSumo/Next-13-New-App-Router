interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
interface Todos extends Array<Todo> {}