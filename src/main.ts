function Numbers(a: number, b: number, c:number){
    if(a == b && a != c || b == c && c != a || a == c && c != b){
            console.log(2);
        }
         else if(a != b && a != c && b != c){
            console.log(0);
        }
        else if (a == b && a == c){
            console.log(3);
        }
}

Numbers(1,2,1);