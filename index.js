import Diat from "./Diat.js"

const element = Diat.createElement("h1", {title: "foo", style: "color: red;"}, "Hello I'm Diat")
const container = document.getElementById('root')
Diat.render(element, container)
