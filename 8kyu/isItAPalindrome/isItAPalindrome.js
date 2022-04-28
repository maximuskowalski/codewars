function isPalindrome(x) {

    x = x.toLowerCase()

    return ( x === (x.split("").reverse().join("")) ) ? true : false;

}

isPalindrome("a")  //  true));

isPalindrome("aba")  //  true));

isPalindrome("Abba")  //  true));

isPalindrome("hello")  //  false));

isPalindrome("Bob")  //  true));

isPalindrome("Madam")  //  true));

isPalindrome("AbBa")  //  true));

isPalindrome("")  //  true));
