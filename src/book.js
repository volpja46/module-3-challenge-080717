class Book {
	constructor(json) {
		this.title = json.title;
		this.imageUrl = json.imageLink;
		this.id = json.id;
		this.author = json.author;
		this.description = json.description;
		this.pages = json.pages;
		Book.all.push(this);
	}

	render() {
		let imageArea = `<img src=${this.imageUrl} alt="image">`;
		return `
		<text align= 'left'>
    ${imageArea}
    <ol><u>Title: </u>${this.title}</ol>
		<ol><u>Author: </u>${this.author}</ol>
		<ol><u>Description: </u>${this.description}</ol>
		<ol><u>Pages: </u>${this.pages}</ol>
		`;
	}
}

Book.all = [];
