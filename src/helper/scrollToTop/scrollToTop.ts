export const scrollToTop = () => {
  return new Promise((resolve) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    setTimeout(resolve, 500);
  });
};
