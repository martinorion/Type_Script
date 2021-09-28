function Triangle(a:number, b:number,c:number):boolean {
    if(a + b > c && b + c > a && a + c > b) {
               return true;
   }
   return false;
   }
   
   console.log(Triangle(2,5,4))