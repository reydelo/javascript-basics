function BookReader(book) {
  this.book = book;
  this.currentPage = 0;
}

BookReader.prototype.nextPage = function() {
  if (this.currentPage !== this.book.length -1) {
    this.currentPage++;
  }
  return this.book[this.currentPage];
};

BookReader.prototype.previousPage = function() {
  // your code here
};

BookReader.prototype.pagesLeft = function() {
  // your code here
};

BookReader.prototype.encouragement = function() {
  // your code here
};

// DO NOT MODIFY BELOW THIS COMMENT:
module.exports = BookReader;
