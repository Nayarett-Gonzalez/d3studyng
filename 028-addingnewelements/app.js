// //Se agrega un párrafo al finnal de los párrafos existentes al final de los párrafos existentes
// const addElement = () => {
//     d3.select("#parent").append("p").text("Last Paragraph").style("font-weight", "bold");
// }

// Se inserta un párrafo en la tercera posición
const addElement = () => {
    d3.select("#parent").insert("p", "p:nth-child(3)").text("Last Paragraph").style("font-weight", "bold");
}