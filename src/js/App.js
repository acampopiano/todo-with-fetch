import React, { useState, useEffect, useRef } from "react";
import { SearchForm } from "./component/searchform.jsx";
import { TodoForm } from "./component/todoform.jsx";
import { Tasks } from "./component/tasks.jsx";
//create your first component
const App = () => {
	const [addToDo, setAddToDo] = useState("");
	const [delToDo, setDelToDo] = useState("");
	const [todoList, setTodoList] = useState([
		{ label: "Pintar la casa", done: false },
		{ label: "Cambiar las tejas", done: false },
		{ label: "Cambiar las ventanas", done: false },
		{ label: "Lijar la puerta", done: false }
	]);

	const removeItem = (arr, item) => {
		var index = arr.indexOf(item);
		return [
			// part of the array before the given item
			...arr.slice(0, index),

			// part of the array after the given item
			...arr.slice(index + 1)
		];
	};
	const deleteItem = e => {
		const elementToDelete = e.previousElementSibling.textContent;
		removeItem(todoList, elementToDelete);
		e.parentElement.remove();
		console.log(todoList);
	};

	const validateForm = e => {
		e.preventDefault();
	};
	const handleKeyPress = e => {
		if (e.target.value !== "" && e.charCode === 13) {
			let newTodo = {
				label: addToDo,
				done: false
			};
			let newToDoList = [...todoList, newTodo];
			setTodoList(newToDoList);
			e.target.value = "";
		}
	};

	return (
		<div className="container">
			<header className="text-center text-light my-4">
				<h1 className="mb-4">Todo List</h1>
				<SearchForm />
			</header>
			<div className="wrapper">
				<TodoForm
					setAddToDo={setAddToDo}
					handleKeyPress={handleKeyPress}
					validateForm={validateForm}
				/>
				<Tasks data={todoList} deleteItem={deleteItem} />
			</div>
		</div>
	);
};

export default App;
