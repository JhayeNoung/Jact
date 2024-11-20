const elementRaw = {
  type: "h2",
  props: {
    title: "foo",
    children: "Hello! Index.js",
  }
}

const node = document.createElement(elementRaw.type)
node["title"] = elementRaw.props.title

const text = document.createTextNode("")
text["nodeValue"] = elementRaw.props.children

const container = document.getElementById('root')

node.appendChild(text)
container.appendChild(node);