$(document).ready(function() {
	
	//TODO: crop thumbnail size images for thumbs array
	
	var hexGallery = $('#hex-gallery'),
			thumbs = [
			'img/hexagons/1.jpg',
			'img/hexagons/2.jpg',
			'img/hexagons/3.jpg',
			'img/hexagons/4.jpg',
			'img/hexagons/5.jpg',
			'img/hexagons/6.jpg',
			'img/hexagons/7.jpg',
			'img/hexagons/8.jpg',
			'img/hexagons/9.jpg',
			'img/hexagons/10.jpg',
			'img/hexagons/11.jpg',
			'img/hexagons/12.jpg',
			'img/hexagons/13.jpg'
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
			'img/workshops/12.jpg',
			'img/workshops/13.jpg'
		],
		rowNumber = 0,
		containerWidth = hexGallery.width(),
		hexWidth = 150,
		hexPadding = 5;

		var hexPerRow = Math.floor(containerWidth / hexWidth),
			rowOffset = hexWidth * 0.88,
			hexHeight = hexWidth * 1.1666667,
			rows = thumbs.length / hexPerRow,
			i = 0;

		var svg = SVG('hex-gallery').size(containerWidth, (hexHeight * 1.333) * rows)
		svg.viewbox(0,0,containerWidth, hexHeight * rows),
		lightBoxContainer = $('#light-box-container')

	for (var j = 0; j < rows; j++) {
		if (i >= thumbs.length) {
			break;
		}

		var row = svg.group()
		row.size(containerWidth, hexHeight)

		row.translate(rowNumber%2 != 0 ? (hexWidth + hexPadding) / 2 : 0, rowOffset * rowNumber)

		for (var k = 0; k < hexPerRow; k++) {
			if (i >= thumbs.length) {
				break;
			}

			var image = svg.image(thumbs[i], hexWidth, hexHeight).move((hexWidth + hexPadding) * k, 0)
			var hexagon = svg.polygon('75,0 75,43 0,85 -75,43 -75,-43 0,-85 75,-43')
			hexagon.move(image.attr('x'), image.attr('y'))
			image.attr('data-lightbox-index', i)
			image.attr('class', 'hexImage')
			row.add(image)
			image.clipWith(hexagon)
			var lightBoxImg = $('<a href="'+ imgs[i] +'" data-gallery="hexLightbox" data-toggle="lightbox"></a>')
			lightBoxImg.appendTo(lightBoxContainer)

			i++
		}

		rowNumber++
	}

	$('#hex-gallery').on('click', '.hexImage', function() {
		console.log($(this).attr('data-lightbox-index'))
		lightBoxContainer.find('a').eq($(this).attr('data-lightbox-index')).click()
	})
})