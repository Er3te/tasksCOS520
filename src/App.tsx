import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div
            className="App"
            style={{
                backgroundColor: "red",
            }}
        >
            <h1 className="App-header">
                UM COS420 with React Hooks and TypeScript
            </h1>

            <img
                src="https://www.freecodecamp.org/news/content/images/2024/04/GitHub-1.png"
                alt="A picture GitHub's landing page."
            />

            <Button
                onClick={() => {
                    console.log("Log Hello World");
                }}
            >
                Hello World!
            </Button>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Ray Hello World
            </p>

            <ul>
                <li>React-ing</li>
                <li>TypeScripting</li>
                <li>Bookstrapping</li>
            </ul>
        </div>
    );
}

export default App;
