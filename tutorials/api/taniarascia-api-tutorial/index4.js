$.ajax({
	type: 'GET',
	url: 'https://ghibliapi.herokuapp.com/films',
	async: true,
	success: function(data, status, xhr) {
		data.forEach(function(movie) {
			const card = document.createElement('div');
			card.setAttribute('class', 'card mb-3');
			card.setAttribute('style', 'card');
			
			const h4 = document.createElement('h4');
			h4.setAttribute('class', 'card-head m-3');
			h4.textContent = movie.title;
			
			const p1 = document.createElement('p1');
			p1.setAttribute('class', 'card-subtitle mb-2 text-muted ml-4');
			p1.textContent = "Rating: " + movie.rt_score;
			
			
			const p = document.createElement('p');
			p.setAttribute('class', 'card-body');
			p.textContent = movie.description;
			
			const a = document.createElement('a');
			a.setAttribute('class', 'card-link mb-3 ml-4');
			a.textContent = "More";
			a.href = movie.url;
			
			container.appendChild(card);
			card.appendChild(h4);
			card.appendChild(p1);
			card.appendChild(p);
			card.appendChild(a);
			
		});
	},
	error: function(xhr, status, err) {
		console.log(err);
	},
});

const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';
logo.setAttribute('class', 'mt-3 ml-3 mb-4');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);
