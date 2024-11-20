/*

Building: " <h1 title="foo">Hello</h1> " using React FrameWork

  const element = <h1 title="foo">Hello</h1>
  const container = document.getElementById("root")
  React.render(element, container)

React will get the node, <h1 title="foo">Hello</h1>, by the following: 
  const element = React.createElement("h1",{title: "foo"},"Hello")

React.createElement creates an object from its arguments. 
Besides some validations, that’s all it does. 
So we can safely replace the function call with its output.

  {
    type: "h2",
    props: {
      title: "foo",
      children: "Hello! Index.js",
    }
  }

Note:
To avoid confusion, I’ll use “element” to refer to React elements and “node” for DOM elements.
*/

//===================================================
// We try to build <h1 title="foo">Hello</h1> without using React FrameWork or any FrameWork

const elementRaw = {
  type: "h2",
  props: {
    title: "foo",
    children: "Hello! Index.js",
  }
}

// Get the root container
const container = document.getElementById("root")

const node = document.createElement(elementRaw.type)
node["title"] = elementRaw.props.title

const text = document.createTextNode("")
text["nodeValue"] = elementRaw.props.children

node.appendChild(text)
container.appendChild(node);