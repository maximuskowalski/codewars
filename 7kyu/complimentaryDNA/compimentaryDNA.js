function DNAStrand(dna){

    let newDNA = ''

    for(let i = 0; i < dna.length; i++) {
        let char = dna[i]
        if( char == 'A' ){
            newDNA += 'T'
        }else if( char == 'T' ){
            newDNA += 'A'
        }else if( char == 'C' ){
            newDNA += 'G'
        }else if( char == 'G' ){
            newDNA += 'C'
        }
    }
    console.log(newDNA)
    return newDNA
}
// function tests

DNAStrand("AAAA") // "TTTT","String AAAA is")
DNAStrand("ATTGC") // "TAACG","String ATTGC is")
DNAStrand("GTAT") //"CATA","String GTAT is")
