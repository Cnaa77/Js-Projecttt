// 4.

// let p = 0;
// let N = prompt("N:");
// let i = 1;
// while (i * 3 <= Number(N)) {
//   p += 1 / (i * 3);
//   i++;
// }

// console.log(p);

// let s = 0;
// let N = Number(prompt("N:"));
// let X = Number(prompt("X:"));
// let k = 1;
// for (let i = 1; i <= N; i++) {
//   s += k;
//   k *= X;
// }

// console.log(s);
// l
// let sin = 0;

// let N = Number(prompt("N:"));
// let X = Number(prompt("X:"));
// let al = 1;
// for (let i = 1; i <= 2 * N - 1; i = i + 2) {
//   sin += (tavan(X, i) * al) / fact(i);
//   al = -al;
// }

// console.log(sin);

// function fact(x) {
//   let p = 1;

//   for (let i = 1; i <= x; i++) {
//     p *= i;
//   }
//   return p;
// }

// function tavan(x, y) {
//   let p = 1;

//   for (let i = 1; i <= y; i++) p = p * x;

//   return p;
// }

// let T = 0;
// let N = Number(prompt("N:"));

// for (let i = 2; i <= N; i++) {
//   T += i * (i - 1);
// }
// console.log(T);