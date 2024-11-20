/*
Reference:
  const element = <h1 title="foo">Hello</h1>
  const container = document.getElementById("root")
  React.render(element, container)


Micmic functions:
  React.createElement("h1",{title: "foo"},"Hello")

  {
    type: "h2",
    props: {
      title: "foo",
      children: "Hello! Index.js",
    }
  }

*/

/* 

const element = Diat.createElement("h1", {title: "foo", style: "color: red;"}, "Hello I'm Diat")

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
// createElement
export default function createElement(type , props, ...children){
  return {
    type,
    props: {
      ...props,
      children: children.map(child=>
        typeof child === 'object' 
          ? child : 
          createTextElement(child)
      )
    }
  }
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  }
}
