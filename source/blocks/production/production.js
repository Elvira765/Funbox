const items = Array.from(document.querySelectorAll('.production__item'));
if (items.length > 0) {
  items.forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      if (!el.classList.contains('production__item--default')) {
        if (!el.classList.contains('production__item--selected')) {
          el.classList.add('production__item--selected');
        } else {
          el.classList.remove('production__item--selected');
        }
      }
    });
  });
}