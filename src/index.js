document.addEventListener('DOMContentLoaded', function(e) {
	fetch('http://localhost:3000/books')
		.then(res => res.json())
		.then(res => createBooks(res));
});

function createBooks(res) {
	res.forEach(function(b) {
		let book = new Book(b);
		displayTitles(book);
	});

	function displayTitles(b) {
		let bookList = document.querySelector('.list-group');
		let li = document.createElement('li');
		li.innerText = b.title;
		bookList.appendChild(li);
		li.addEventListener('click', function(e) {
			showMoreInfo(b);
		});
	}

	function showMoreInfo(b) {
		let moreInfoArea = document.querySelector('#book-detail');
		moreInfoArea.innerHTML = b.render();
	}
}

// '.list-group' titles
// more details '#book-detail'
