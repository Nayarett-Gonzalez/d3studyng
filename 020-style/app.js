// const changeLook = () => {
//     d3.selectAll("circle").style("fill", "deeppink").style("stroke", "black").style("stroke-width", (p, i) => {

//         return i * 3;
//     });
//     // d3.selectAll("rect").style("stroke", "deeppink");
//     d3.selectAll("rect").style("stroke", "deeppink").style("stroke-width", "4");

//     d3.selectAll("rect").style("opacity", () => {
//         return Math.random();

//     });
//     d3.selectAll("circle").style("opacity", () => {
//         return Math.random();
//     });
// }

const changeLook = () => {
    d3.selectAll("circle").style("fill", "deeppink").style("stroke", "black").style("stroke-width", strokeWidth);
    // d3.selectAll("rect").style("stroke", "deeppink");
    d3.selectAll("rect").style("stroke", "deeppink").style("stroke-width", "4");

    d3.selectAll("rect").style("opacity", opacityRandom);
    d3.selectAll("circle").style("opacity", opacityRandom);
}

const opacityRandom = () => {
    return Math.random();
}

const strokeWidth = (p, i) => {
    return i * 3;
};