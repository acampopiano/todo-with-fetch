import React, { useState, useEffect, useRef } from "react";
import { SearchForm } from "./component/searchform.jsx";
import { TodoForm } from "./component/todoform.jsx";
import { Tasks } from "./component/tasks.jsx";
//create your first component
const App = () => {
	const todos = useRef(null);
	const [todoList, setTodoList] = useState([
		{ label: "Pintar la casa", done: false },
		{ label: "Cambiar las tejas", done: false },
		{ label: "Cambiar las ventanas", done: false },
		{ label: "Lijar la puerta", done: false }
	]);

	const deleteItem = e => {
		const elementToDelete = e.previousElementSibling.textContent;
		let filter = todoList.filter(d => d.label !== elementToDelete);
		setTodoList(filter);
	};

	const validateForm = e => {
		e.preventDefault();
	};

	const handleKeyUp = e => {
		if (e.target.value !== "") {
			const term = e.target.value.trim().toLowerCase();
			filterTodo(term);
		}
	};

	// filter todos
	const filterTodo = term => {
		const node = todos.current;
		Array.from(node.children)
			.filter(todo => !todo.textContent.toLowerCase().includes(term))
			.forEach(todo => todo.classList.add("filtered"));

		Array.from(node.children)
			.filter(todo => todo.textContent.toLowerCase().includes(term))
			.forEach(todo => todo.classList.remove("filtered"));
	};

	const handleKeyPress = e => {
		if (e.target.value !== "" && e.charCode === 13) {
			let newTodo = {
				label: e.target.value,
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
				<SearchForm handleKeyUp={handleKeyUp} />
			</header>
			<div className="wrapper">
				<TodoForm
					handleKeyPress={handleKeyPress}
					validateForm={validateForm}
				/>
				<Tasks data={todoList} deleteItem={deleteItem} refer={todos} />
			</div>
		</div>
	);
};

export default App;
