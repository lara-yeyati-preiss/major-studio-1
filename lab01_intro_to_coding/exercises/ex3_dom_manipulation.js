/*
  Exercise 3
  DOM manipulation with vanilla JS
*/

// Task
// What does DOM stand for?


// The Document Object Model (DOM) is the data representation of a web page.
// It represents the page as a tree of nodes. Each branch ends in a node, and each node contains objects (elements, text, attributes).
// Scripts can use DOM methods to read and modify the document’s structure, style, and content.


// Task
// Open the file index.html in your browser. Open the index.html file in VS Code, right-click the tab and select "Open in Browser"
// If you are working locally, navigate to the excercise directory and start a python http server `python3 -m http.server 900`, press Control-c to stop the server 

// Task
// Delete the div with the class rectangle from index.html and refresh the preview.

// Task
// What does the following code do?
const viz = document.body.querySelector(".viz");
const button = document.body.querySelector("#button");

console.log(viz, viz.children);

const addChildToViz = () => {
  const newChild = document.createElement("div");
  newChild.className = "rectangle";
  newChild.style.height = Math.random() * 100 + "px";
  viz.appendChild(newChild);
};


// This code first sets up references to a container (class viz) and a button (id button) in the html 
// It defines a function called addChildToViz that creates a new <div> referenced as newChild. It then assigns it the class "rectangle", 
// and gives it a random height between 0 and 100 pixels.
// Finally, it appends it as a child div to the .viz container, so each time the function runs, another rectangle appears inside .viz.


// Task
// Modify index.html to make this event listener work
button.addEventListener("click", addChildToViz);

// Task
// Where can you see the results of the console.log below? How is it different from in previous exercises?

function drawIrisData() {
  window
    .fetch("./iris_json.json")
    .then(data => data.json())
    .then(data => {
      console.log(data);
    });
}

drawIrisData();

// The console.log output doesn’t show on the webpage, only in the dev console

// Task
// Modify the code above to visualize the Iris dataset in the preview of index.html.

function drawIrisData() {
  window
    .fetch("./iris_json.json")
    .then(data => data.json())
    .then(data => {
      data.forEach(e => {
        addChildToViz(e.petallength);
      });
    });
}

drawIrisData();


