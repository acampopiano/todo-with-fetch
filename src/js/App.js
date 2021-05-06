import React, { useState, useEffect, useRef } from "react";
import { SearchForm } from "./component/searchform.jsx";
import { TodoForm } from "./component/todoform.jsx";
import { Tasks } from "./component/tasks.jsx";
//create your first component
const App = () => {
	const [addTask, setAddTask] = useState("");

	return (
		<div className="container">
			<header className="text-center text-light my-4">
				<h1 className="mb-4">Todo List</h1>
				<SearchForm />
			</header>
			<div className="wrapper">
				<TodoForm setAddTask={setAddTask} />
				<Tasks />
			</div>
		</div>
	);
};

export default App;
