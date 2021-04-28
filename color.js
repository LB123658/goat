//chooses background color

		// JavaScript code to pick
		// a random color from array
		function pickColor() {
			
			// Array containing colors
			var colors = [
				'#2e9cd1', '#d12e79', '#dfe218',
				'#64d12e', '#ba18e2', '#e21818'
			];
			
			// selecting random color
			var random_color = colors[Math.floor(
					Math.random() * colors.length)];
			
			var x = document.getElementById('body');
			x.style.background = random_color;
		}
