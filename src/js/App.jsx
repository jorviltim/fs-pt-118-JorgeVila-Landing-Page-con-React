import React from "react";
import { NavBar } from "./components/NavBar";
import { Jumbotron } from "./components/Jumbotron";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
//create your first component
const App = () => {
	return (
		<div >
            <NavBar/>
			<Jumbotron/>
			<Cards/>
            <Footer/>
		</div>
	);
};

export default App;