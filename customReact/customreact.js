function customRender(reactElement, mainContainer){
    /*  Version 1
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    mainContainer.appendChild(domElement);
    */

    // Version 2
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue; // As it had happened in old times{
            domElement.setAttribute(prop, reactElement.props[prop])
            }
        mainContainer.appendChild(domElement)
    }


const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to Visit Google'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer)