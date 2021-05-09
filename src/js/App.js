import React, { useState, useEffect, useRef } from "react";
import { SearchForm } from "./component/searchform.jsx";
import { TodoForm } from "./component/todoform.jsx";
import { Tasks } from "./component/tasks.jsx";
//create your first component
const App = () => {
	const tasksURL =
		"https://assets.breatheco.de/apis/fake/todos/user/acampopiano";
	const todos = useRef(null);
	const [todoList, setTodoList] = useState();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(tasksURL);
				const responseJson = await response.json();
				setTodoList(responseJson);
			} catch (e) {
				console.error(e);
			}
		};
		fetchData();
	}, []);

	const doneItem = (label, done) => {
		if (!done) {
			const filter = todoList.filter(d => d.label !== label);
			const filterToUpdate = todoList.filter(d => d.label === label);
			filterToUpdate.map((item, i) => {
				item.done = true;
			});
			const newToDoList = [...new Set([...filter, ...filterToUpdate])]; //   => remove duplication
			setTodoList(newToDoList);
			updateData(newToDoList);
		}
	};

	const deleteItem = e => {
		const elementToDelete = e.previousElementSibling.textContent;
		let filter = todoList.filter(d => d.label !== elementToDelete);
		setTodoList(filter);
		updateData(filter);
	};

	const validateForm = e => {
		e.preventDefault();
	};

	const handleKeyUp = e => {
		const term = e.target.value.trim().toLowerCase();
		filterTodo(term);
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
			updateData(newToDoList);
			e.target.value = "";
		}
	};

	const updateData = updatedList => {
		let updatedListToSend = JSON.stringify(updatedList);
		let options = {
			method: "PUT",
			body: updatedListToSend,
			headers: {
				"Content-Type": "application/json"
			}
		};

		fetch(tasksURL, options)
			.then(resp => resp.json())
			.then(data => console.log(data))
			.catch(error => console.log(error));
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
				<Tasks
					data={todoList}
					setDoneItem={doneItem}
					deleteItem={deleteItem}
					refer={todos}
				/>
			</div>
		</div>
	);
};

export default App;
