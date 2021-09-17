export const idlFactory = ({ IDL }) => {
  const ToDo = IDL.Record({
    'id' : IDL.Nat,
    'completed' : IDL.Bool,
    'description' : IDL.Text,
  });
  return IDL.Service({
    'addTodo' : IDL.Func([IDL.Text], [], []),
    'completeTodo' : IDL.Func([IDL.Nat], [], []),
    'getTodos' : IDL.Func([], [IDL.Vec(ToDo)], ['query']),
    'showTodos' : IDL.Func([], [IDL.Text], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
