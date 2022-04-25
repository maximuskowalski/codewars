function correctPolishLetters (string) {
    let removeAccents = string.split('').map((item) => item.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[\u0142]/g, 'l')).join('')
    console.log(removeAccents)
    return removeAccents
  }

// function tests

correctPolishLetters("Jędrzej Błądziński") // "Jedrzej Bladzinski");
correctPolishLetters("Lech Wałęsa") // "Lech Walesa");
correctPolishLetters("Maria Skłodowska-Curie")  //"Maria Sklodowska-Curie");
