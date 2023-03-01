class Book {
    constructor(title, author, isbn, numCopies) {
        this.author = author;
        this.title = title;
        this.isbn = isbn;
        this.numCopies = numCopies
    }

    get availability() {
        this.getAvailablity()
    }

    getAvailablity() {
        return this.numCopies === 0 ? "out of stock" : this.numCopies < 10 ? "low stock" : "in stock"
    }
    sell(numSold = 1) {
        this.numCopies -= numSold
    }

    restock(numCopies = 5) {
        this.numCopies += numCopies
    }
}