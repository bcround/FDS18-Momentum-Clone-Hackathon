const renderQuote = data => {
  const $phrase = document.querySelector('.quotes-info-phrase');
  const $author = document.querySelector('.quotes-info-author');

  $phrase.textContent = data.quotes.[1].text;
  $author.textContent = data.quotes.[1].author;
};

export default renderQuote;
