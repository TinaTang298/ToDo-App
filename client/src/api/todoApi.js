import axios from 'axios';

const API_URL = 'http://localhost:5000/api/todos';

export const fetchTodos = () => axios.get(API_URL).then(res => res.data);

export const createTodo = (text) => axios.post(API_URL, { text }).then(res => res.data);

export const updateTodo = (id, updates) => axios.put(`${API_URL}/${id}`, updates).then(res => res.data);

export const deleteTodo = (id) => axios.delete(`${API_URL}/${id}`);