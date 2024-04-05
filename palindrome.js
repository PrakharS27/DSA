// Q4. Given an integer x describe, return true if x is a palindrome, and false otherwise.


function isPalindrome(x){
    let copyNum = x, reverseNum = 0;

    while(copyNum>0){
        const lastDigit = copyNum%10;
        reverseNum = reverseNum*10 + lastDigit;

        copyNum = Math.floor(copyNum/10)
    }

    return x === reverseNum;

}


console.log(isPalindrome(121));