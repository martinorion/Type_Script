function differneceMaxMin(array: number[]):number {
    let max:number = Math.max(...array);
     let min:number = Math.min(...array)
     return min > max? min - max : max - min;
 }
 console.log(differneceMaxMin([1,2,3,4,5]));