// Create Root (Only Once)
const root = ReactDOM.createRoot(document.getElementById("root"));


// =========================
// Example 1 : Simple Heading
// =========================
// const element1 = React.createElement(
//     "h1",
//     {},
//     "Hello Coder Army"
// );

// root.render(element1);


// =========================
// Example 2 : Change Text
// =========================
const element2 = React.createElement(
    "h1",
    {},
    "Welcome to React"
);

//root.render(element2);


// =========================
// Example 3 : Add CSS
// =========================
const element3 = React.createElement(
    "h1",
    {
        style: {
            color: "red",
            backgroundColor: "yellow",
            padding: "10px"
        }
    },
    "Hello React"
);

root.render(element3);


// =========================
// Example 4 : Add Attributes
// =========================
const element4 = React.createElement(
    "a",
    {
        href: "https://google.com",
        target: "_blank"
    },
    "Open Google"
);

root.render(element4);


// =========================
// Example 5 : Multiple Elements
// =========================
const element5 = React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Heading"),
    React.createElement("p", {}, "This is a Paragraph")
);

 root.render(element5);


// =========================
// Example 6 : Button Event
// =========================
const element6 = React.createElement(
    "button",
    {
        onClick: () => alert("Button Clicked")
    },
    "Click Me"
);

root.render(element6);


// =========================
// Example 7 : List
// =========================
const element7 = React.createElement(
    "ul",
    {},
    React.createElement("li", {}, "HTML"),
    React.createElement("li", {}, "CSS"),
    React.createElement("li", {}, "JavaScript"),
    React.createElement("li", {}, "React")
);

root.render(element7);


// =========================
// Display One Example
// =========================

// Jis example ko dekhna ho usko uncomment karo

//root.render(element1);

root.render(element2);
// root.render(element3);
// root.render(element4);
// root.render(element5);
// root.render(element6);
// root.render(element7);