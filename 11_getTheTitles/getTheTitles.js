const getTheTitles = function(books) {
  titles = [];
  for (i = 0; i < books.length; i++) {
    titles[i] = books[i].title;
  }
  return titles;
  //better solution: return books.map(book => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
