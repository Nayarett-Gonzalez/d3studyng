const update = () => {
    // d3.selectAll("circle").attr("r", 20);
    // d3.selectAll("circle").attr("r", () => {
    //     return Math.random() * 40;
    // });

    // d3.selectAll("circle").attr("cy", () => {
    //     return Math.random() * 40;
    // });

    d3.selectAll("circle").attr("cy", (d, i) => {
        return (i * 50) * Math.random();
    });
}