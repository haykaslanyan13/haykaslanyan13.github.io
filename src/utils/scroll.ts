export const scrollToTop = (behavior: 'auto' | 'smooth') => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior
  })
}
