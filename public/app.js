$( document ).ready(function() {
	
    var socket = io.connect('http://localhost');

	socket.on('new data', function (data) {	

		var width = 50;
		var height = 1000;

		d3.select("#helloWorld")
		    .append("rect")
		    .attr("class", "bar")
    		.attr("x", data.x)
    		.attr("y", function() {
			    return height - data.y;  //Height minus data value
			})
			.attr("width", 50)
			.attr("height", function() {
			    return data.y;  //Just the data value
			});
	});
});