function paperwork(n, m) {
    if( n <=0 || m <= 0 ){
        console.log(0)
        return 0
    }else{
        console.log(n * m)
        return n * m
}


}

// function tests
paperwork(5,5)  //  25, 'Failed at paperwork(5, 5)');
paperwork(5,-5)  //  0, 'Failed at paperwork(5, -5)');
paperwork(-5,-5)  //  0, 'Failed at paperwork(-5, -5)');
paperwork(-5,5)  //  0, 'Failed at paperwork(-5, 5)');
paperwork(5,0)  //  0, 'Failed at paperwork(5, 0)');
