const scrollTop = function (callback) {
  const hasCallback = callback => !callback || typeof callback !== 'function';

  if (hasCallback(callback)) {
    throw Error('Callback need to be set');
  }

  let isScrolling;

  window.addEventListener('scroll', function () {
    window.clearTimeout(isScrolling);

    isScrolling = setTimeout(function () {
      callback();
    }, 100);
  });
}
