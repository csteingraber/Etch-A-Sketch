var grid = '<div class="default-grid"></div>';
var containerWidth = parseFloat($('#container').css('width'));

$(document).ready(function() {
	drawGrid(16, 1);
	$('#container').on('mouseenter', '.default-grid', function() {
		var currentDOMElement = $(this);
		if(currentDOMElement.css('background-color') !== 'rgb(193, 66, 66)') {
			currentDOMElement.addClass('hovered');
			currentDOMElement.css({'opacity': '0.1'});
		} else if( currentDOMElement.css('opacity') < 1 ) {
			currentDOMElement.css({'opacity': '+=0.2'});
		}
	});
});

function drawGrid(numCells, borderSize) {
	var dimensions = (containerWidth/numCells) - (2 * borderSize);
	for(var i = 0; i < numCells; i++) {
		for(var j = 0; j < numCells; j++) {
			$('#container').append($(grid).css({'width': dimensions + 'px',
												'height': dimensions + 'px',
												'border-width': borderSize + 'px'}));
		}
	}
}

function newGrid() {
	var response = parseInt(prompt('How many grids per side would you like?', '16'));
	$('#container').empty();
	drawGrid(response, 1);
}