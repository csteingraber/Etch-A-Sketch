var grid = '<div class="default-grid"></div>';
var containerWidth = parseFloat($('#container').css('width'));

$(document).ready(function() {
	drawGrid(16, 1);
	$('#container').on('mouseenter', '.default-grid', function() {
		$(this).addClass('hovered');
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