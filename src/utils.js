export function generate_token(length) {
  //edit the token allowed characters
  var a =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
  var b = [];
  for (var i = 0; i < length; i++) {
    var j = (Math.random() * (a.length - 1)).toFixed(0);
    b[i] = a[j];
  }
  return b.join("");
}
export const sortingChallenge = (challenges, sortingMethod) => {
  if (sortingMethod === "date") {
    return challenges.sort((a, b) => {
      return b.registered - a.registered;
    });
  }
  if (sortingMethod === "rating") {
    return challenges.sort((a, b) => {
      return b.rating - a.rating;
    });
  }
};
export class localStorageUse {
  static getItem(keyName) {
    return JSON.parse(window.localStorage.getItem(keyName));
  }
  static setItem(keyName, value) {
    return window.localStorage.setItem(keyName, JSON.stringify(value));
  }
  static clearStorage() {
    return window.localStorage.clear();
  }
}
