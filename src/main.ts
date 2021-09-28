function isPalindrome(str: string){
    let i : number = 0; 
    let j : number = str.length - 1;
    while(i < j){
   if(str.charAt(i) != str.charAt(j))
       return false;
       i++;
       j--;

    }
    return true;
}

console.log(isPalindrome("patap"));
console.log(isPalindrome("tanap"));