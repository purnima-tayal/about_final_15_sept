const accordions = document.querySelectorAll(".accordion");
for (const accordion of accordions) {
const items = accordion.querySelectorAll(".accordion-item");
for (const item of items) {
  const head = item.querySelector(".accordion-title");
  head.addEventListener('click', () => {
    for (const otherPanel of items) {
      if (otherPanel !== item) {
        otherPanel.classList.remove('accordion-expanded');
      }
    }
    item.classList.add('accordion-expanded');
  });
}
}

$('.accordion-title').click(function(e) {
  	e.preventDefault();
    var $this = $(this);
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('.accordion-panel').removeClass('show');
        $this.parent().parent().find('.accordion-panel').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});