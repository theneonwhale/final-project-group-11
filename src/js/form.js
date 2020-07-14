(() => {
  document.querySelectorAll('.js-services-form').forEach((el) => {
    el.addEventListener('submit', e => {
      e.preventDefault();

      new FormData(e.currentTarget).forEach((value, name) =>
        console.log(`${name}: ${value}`),
      );

      e.currentTarget.reset();
    });
  });
})();
