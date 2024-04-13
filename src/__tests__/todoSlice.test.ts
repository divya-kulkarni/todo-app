import reducer, { addTodo, toggleTodo } from "../features/todo/todoSlice";

describe("todo reducers", () => {
  it("should handle initial state", () => {
    expect(reducer(undefined, { type: "" })).toEqual({ todos: [] });
  });

  it("should add todo to an empty list", () => {
    expect(reducer({ todos: [] }, addTodo("Buy milk"))).toEqual({
      todos: [{ id: 1, text: "Buy milk", completed: false }],
    });
  });

  it("should add todo to a list with existing todos", () => {
    const previousState = {
      todos: [{ id: 1, text: "Buy milk", completed: false }],
    };
    expect(reducer(previousState, addTodo("Buy eggs"))).toEqual({
      todos: [
        { id: 1, text: "Buy milk", completed: false },
        { id: 2, text: "Buy eggs", completed: false },
      ],
    });
  });

  it("should toggle completion status of todo", () => {
    const previousState = {
      todos: [{ id: 1, text: "Buy milk", completed: false }],
    };
    expect(reducer(previousState, toggleTodo(1))).toEqual({
      todos: [{ id: 1, text: "Buy milk", completed: true }],
    });
  });
});
