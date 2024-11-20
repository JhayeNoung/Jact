/*
{
  type: "h1",
  props: {
    title: "foo",
    style: "color: red;"
    children: {
      type: "TEXT_ELEMENT"
      props: {
       nodeValue: "Hello I'm Diat",
       children: []
      }
    }
  }
}
*/

// render
export default function render(element, container){
  // We start by creating the DOM node using the element type
  const dom =
    element.type == "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type)
  
  // check if the key is not children
  const isProperty = key => key !== "children"

  Object.keys(element.props)
    .filter(isProperty)
    .forEach(key_name => {
      dom[key_name] = element.props[key_name]
    })

  // We recursively do the same for each child.
  element.props.children.forEach(child =>
    render(child, dom)
  )

  // append the new node to the container.
  container.appendChild(dom)
}
