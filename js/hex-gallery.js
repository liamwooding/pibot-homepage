$(document).ready(function() {
	
	//TODO: crop thumbnail size images for thumbs array
	
	var hexGallery = $('#hex-gallery'),
			thumbs = [
			'img/workshops/1.jpg',
			'img/workshops/2.jpg',
			'img/workshops/3.jpg',
			'img/workshops/4.jpg',
			'img/workshops/5.jpg',
			'img/workshops/6.jpg',
			'img/workshops/7.jpg',
			'img/workshops/8.jpg',
			'img/workshops/9.jpg',
			'img/workshops/10.jpg',
			'img/workshops/11.jpg',
			'img/workshops/12.jpg'
		],
		imgs = [
			'img/workshops/1.jpg',
			'img/workshops/2.jpg',
			'img/workshops/3.jpg',
			'img/workshops/4.jpg',
			'img/workshops/5.jpg',
			'img/workshops/6.jpg',
			'img/workshops/7.jpg',
			'img/workshops/8.jpg',
			'img/workshops/9.jpg',
			'img/workshops/10.jpg',
			'img/workshops/11.jpg',
			'img/workshops/12.jpg'
		],
		rowNumber = 0,
		imageTemplate = '<image xlink:href="#" preserveAspectRatio="none" clip-path="url(#hexagon)" height="150" width="175" id="pic1"></image>',
		rowTemplate = $('<g></g>'),
		mostRecentThumb = null,
		mostRecentRow = null,
		containerWidth = hexGallery.width();

		var hexPerRow = Math.floor(containerWidth / 150),
			rows = thumbs.length / hexPerRow,
			i = 0;

		var svg = SVG('hex-gallery').size(containerWidth, 180 * rows);
		var hexagon = svg.polygon('75,0 75,43 0,85 -75,43 -75,-43 0,-85 75,-43'),
		hexContainer = svg.group();

		hexContainer.attr({ x: 0, y: 0 }).size(containerWidth, 190 * rows)

	for (var j = 0; j < rows; j++) {
		if (i > thumbs.length) {
			break;
		}

		var group = hexContainer.group()
		group.size(containerWidth, 190)
		if (rowNumber%2 != 0) {
			group.translate(75, 0)
		}

		group.translate(0, 180 * rowNumber)

		for (var k = 0; k < hexPerRow; k++) {
			if (i > thumbs.length) {
				break;
			}

			var image = svg.image(thumbs[i], 150, 175).translate(155 * k, 0)
			image.clipWith(hexagon)
			group.add(image)
			i++
		}
		rowNumber++
	}


		// if (mostRecentThumb == null) {
		// 	mostRecentRow = rowTemplate.clone()
		// 	hexContainer.append(mostRecentRow)
		// 	mostRecentThumb = imageTemplate.clone()
		// 	mostRecentThumb.find('image').attr('xlink:href', thumbs[i])
		// 	mostRecentRow.append(mostRecentThumb)
		// } else if (mostRecentThumb.position().left + (mostRecentThumb.width() * 2) < mostRecentRow.width()) {
		// 	mostRecentThumb = $(imageTemplate)
		// 	mostRecentThumb.find('image').attr('xlink:href', thumbs[i])
		// 	mostRecentRow.append(mostRecentThumb)
		// 	mostRecentThumb.attr('transform', mostRecentThumb.width() + 5 + ' 0')
		// } else {
		// 	rowNumber++
		// 	mostRecentRow = $('<g></g>')
		// 	hexContainer.append(mostRecentRow)
		// 	if (rowNumber%2 != 0) {
		// 		mostRecentRow.attr('transform', 75 + ' ' + (155 * rowNumber))
		// 	}
		// 	mostRecentThumb = $(imageTemplate)
		// 	mostRecentThumb.find('image').attr('xlink:href', thumbs[i])
		// }
})