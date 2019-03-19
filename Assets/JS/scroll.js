$('.scrollButton').on('click', scrollToDocs);

function scrollToDocs() {
  $('html, body').animate({
      scrollTop: ($('.scrollDocuments').first().offset().top)
  },500);
}
