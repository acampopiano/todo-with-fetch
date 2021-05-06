import React, { useState, useEffect, useRef } from "react";
import { SearchForm } from "./component/searchform.jsx";
import { TodoForm } from "./component/todoform.jsx";
import { Tasks } from "./component/tasks.jsx";
//create your first component
const App = () => {
	const [addToDo, setAddToDo] = useState("");
	const [todoList, setTodoList] = useState([
		{ label: "Pintar la casa", done: false },
		{ label: "Cambiar las tejas", done: false },
		{ label: "Cambiar las ventanas", done: false },
		{ label: "Lijar la puerta", done: false }
	]);
	return (
		<div className="container">
			<header className="text-center text-light my-4">
				<h1 className="mb-4">Todo List</h1>
				<SearchForm />
			</header>
			<div className="wrapper">
				<TodoForm setAddToDo={setAddToDo} />
				<Tasks data={todoList} />
			</div>
		</div>
	);
};

export default App;
