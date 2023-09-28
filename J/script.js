// 10.

// function check_avval(x) {
//     if (x == 1) return 0;
  
//     for (let i = 2; i < x; i++) if (x % i == 0) return 0;
  
//     return 1;
//   }
  
//   function check_tam(x) {
//     let s = 0;
//     for (let i = 1; i < x; i++) if (x % i == 0) s += i;
  
//     if (s == x) return 1;
  
//     return 0;
//   }
  
//   for (let i = 3; i < 1000; i++) {
//     if (check_avval(i) || check_tam(i)) console.log(i);
//   }