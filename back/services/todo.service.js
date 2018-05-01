import TodoModel from '../models/todo.model';
import ErrorCatching from '../functions/error/error';

/**
 * @name getTodos
 * @type {function}
 * @description Get todos in database
 * @return list of todos
 */
const getTodos = async () => {
  let todos = [];
  try {
    return await TodoModel.find().select({todo: 1}).cursor().eachAsync((todo) => {
      todos = [...todos, todo];
    }).then(() => todos);
  } catch (err) {
    if (err) {
      console.error(err);
      throw ErrorCatching.getInternalError();
    }
  }
};

/**
 * @name postTodos
 * @type {function}
 * @description Create a todo in database
 * @param {*} todo
 * @return object created in Mongo database
 */
const postTodos = async (todo) => {
  const todoObject = new TodoModel(todo);
  if (todoObject.JoiValidate(todo).error) throw {code: 400, message: 'payload doesn\'t correspond to predefined model'};
  try {
    return await todoObject.save();
  } catch (err) {
    console.error(err);
    throw ErrorCatching.getInternalError();
  }

};


export default {
  getTodos,
  postTodos
}