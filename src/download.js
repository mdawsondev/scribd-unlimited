/*(function() {
  const url  = window.location.href,
  file = url.match(/\d+/),
  link = `https://www.scribd.com/document_downloads/${file}?extension=pdf`,
  list = document.querySelector('.document_actions');

  btn  = document.createElement('a');
  btn.href = link;
  btn.classList.add('flat_btn');
  btn.innerHTML = 'SU Download';

  list.prepend(btn);
})();*/