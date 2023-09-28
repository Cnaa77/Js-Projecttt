// 16.

// let n = Number(prompt("تعداد فروشگاه:"));
// let id = [];
// let sale = [];
// let pay = [];
// let max = 0;
// let max_index = 0;

// let d;
// for (let i = 0; i < n; i++) {
//   id.push(Number(prompt("شماره فروشگاه:")));
//   sale.push(Number(prompt("مقدار فروش:")));

//   if (sale[i] <= 500000) d = 0.03;
//   else if (sale[i] < 700000) d = 0.05;

//   pay.push(sale[i] * d);
//   if (pay[i] > max) {
//     max = pay[i];
//     max_index = i;
//   }

//   console.log(id[i], sale[i], pay[i]);
// }

// console.log("بیشترین فروش:", id[max_index]);