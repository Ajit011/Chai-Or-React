// 1. Define how your custom React element structure looks behind the scenes
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
};

// 2. Create the modular render engine
function customRender(reactElement, container) {
    // Create the DOM element based on the object type
    const domElement = document.createElement(reactElement.type);
    
    // Inject the inner content/text
    domElement.innerHTML = reactElement.children;

    // Loop through props dynamically to set any available attributes
    for (const prop in reactElement.props) {
        if (prop === 'children') continue; // Safety check if children is bundled in props
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    // Append the completely built node into your root container
    container.appendChild(domElement);
}

// 3. Select the target HTML container and execute the render
const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer);