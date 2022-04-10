function shortcut (string) {
  let newString = string.replace(/[a|e|i|o|u]/gi, '');
  console.log(newString);
  return newString
}

shortcut('hello')  // 'hll'
shortcut('how are you today?')  // 'hw r y tdy?'
shortcut('complain')  // 'cmpln'
