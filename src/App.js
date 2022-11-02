import React from "react";
// import TodoList from "./TodoList";
import { ButtonAppBar } from "./Component/Header";
import { MediaCard } from "./Component/Cards";
import { Footer } from "./Component/Footer";

function App() {
    return (
        <div classname="App">
            <ButtonAppBar />
            <MediaCard />
            <Footer />
        </div>
    );
}

export default App;
