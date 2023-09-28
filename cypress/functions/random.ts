function randomInt(): number {
  const min = 10000;
  const max = 99999;
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomString(): string {
  const letters = "ABCDEFGHIKJLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < letters.length; i++) {
    const random = Math.floor(Math.random() * letters.length);
    result += letters.charAt(random);
  }
  return result;
}
