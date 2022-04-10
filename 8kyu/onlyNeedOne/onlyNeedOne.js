function check(a, x) {
  return (a.includes(x)) ? true : false;
}

check([66, 101], 66) //  ===> true
check([101, 45, 75, 105, 99, 107], 107) //  ===> true
check(['t', 'e', 's', 't'], 'e') //  ===>  true);
check(['what', 'a', 'great', 'kata'], 'kat') //  ===> false
check([66, 101], 0)
check([66, 101, 0, 10], 0)

