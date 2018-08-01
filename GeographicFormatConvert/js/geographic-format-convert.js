function createXMLElement() {
	var rows = document.getElementById("NumberOfRows").value;
	var columns = document.getElementById("NumberOfColumns").value;
	var geoDatum = document.getElementById("CoordFormat").value;
	var x = parseFloat(document.getElementById("CoordValueY").value);
	var y = parseFloat(document.getElementById("CoordValueY").value);
	var cellSize = document.getElementById("CellSize").value;

	if(document.getElementById("CoordLocation").value == "Center"){
		y = y + ( (rows - 1) * cellSize );
	}else if(document.getElementById("CoordLocation").value == "Corner"){
		y = y + ( (rows - 1) * cellSize ) + ( 0.5 * cellSize);
		x = x + ( 0.5 * cellSize);
	}
	
	document.getElementById("XMLText").value = "<rows>" + rows + "</rows>\r\n"
											+ "<columns>" + columns + "</columns>" + "\r\n"
											+ "<geoDatum>" + geoDatum + "</geoDatum>" + "\r\n"
											+ "<firstCellCenter> \r\n\t"
											+ "<x>" + x + "</x>" + "\r\n\t"
											+ "<y>" + y + "</y>" + "\r\n"
											+ "<firstCellCenter> \r\n"
											+ "<xCellSize>" + cellSize + "</xCellSize>" + "\r\n"
											+ "<yCellSize>" + cellSize + "</yCellSize>";
}