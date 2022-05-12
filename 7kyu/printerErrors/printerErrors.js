function printerError(s) {
    let contString = s.length

    let errors = (s.match(/n|o|p|q|r|s|t|u|v|w|x|y|z/g) || []).length

    console.log( `${errors}/${contString}` )
    return `${errors}/${contString}`

}


printerError('aaabbbbhaijjjm') // "0/14"

printerError('aaaxbbbbyyhwawiwjjjwwmm') // 8/22"

// kieflegaclfadembdcgjfdfailkmhaickighfakmkihdblkdblbfacadbfbebglfmdddgjcjjjmdceaakghbcledldigcfcikljaflmhgkfdekajclfcdbjhljjhimdjihklkbfbelkecmaddblbefmkbabemkjgdegiggjigcjjeaiihfmaeglffflhckijabfhkaakkdhjmlmffcghgkbkdffghfdebgbdjdggflfgbacdbilhcegjhglmhjjaggffgfgaaffcbfacdibkdkifajmkhdaidaaakdgmlflcbjfgeeibaijbmkhidbiagkblemeifcddjlahjamimjchkhackmfclgekdkhimhealgmckahchiaklmbekajddlagcfheaecjmkfbhekdhlddbmdekihiakjlagfediijididmjjmjkcfdehdeihlemdkkdembjeaggajfcjccbbgilkfligdghakeaiaejjlfaalhjaebfmlemmlbhklhgkgbjhhbeafckkgcjljhgjadlgfidkafjclmgdegidkhcelhfjmdkffhlellhhjkmlkmibjembcmbkifjcdlfalemaighbljiabhefhdjicdibeblmkfiifadmlgkhdejhehcjdehhmfkgkcgadflkgcfefagikmamkimbjyfeeegfblbegifkbdsmdkehilgmdgmklflplcalhkmeddhkjdleselmcbjgikgldkljknhjjeehmhdihhjleayeeghgkikdihmghfenkgmjdliglcfidilcycdbdjkhefmlggiikwkkbjgdaigehjhhifpifgjjacfbeaildjjtiifdiiihiemfimmlxckhdhclekdbdhakergdehg
// expected '11/890' to equal '13/890'
