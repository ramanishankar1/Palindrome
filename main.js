var str=prompt("Enter a string")
const isPalindrome=(isstr)=>{
    for(i=0;i<isstr.length/2;i++){
        if(isstr[i]!==isstr[isstr.length-1-i]){
            return ("Given String is not a Palindrome")
        }
        return ("Given String is  a Palindrome")
        
    }
}
console.log(isPalindrome(str));