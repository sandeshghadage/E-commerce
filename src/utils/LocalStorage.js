export function getLocalData() {
  const cart = localStorage.getItem("bag");
  if (cart) {
    try {
      return JSON.parse(cart);
    } catch {
      return [];
    }
  }
  return [];
}

export function setLocalData(cart) {
  localStorage.setItem("bag", JSON.stringify(cart));
}
