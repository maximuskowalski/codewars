function lowercaseCount(str) {
    let result = 0;
    for (let i = 0; i < str.length; i += 1) {
        if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <=122 ) {
            result += 1;
            }
        }
     console.log(result)
     return result
}

// ascii codes for lower case letters
// 97 = a
// 122 = z


// Function Tests
lowercaseCount("abc")  //  ===> 3
lowercaseCount("abcABC123")  //  ===> 3
lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~")  //  ===> 3
lowercaseCount("")  //  ===> 0;
lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~")  //  ===> 0
lowercaseCount("abcdefghijklmnopqrstuvwxyz")  //  ===> 26
