function cannonsReady(gunners){
    return (Object.values(gunners).includes("nay")) ? 'Shiver me timbers!' : 'Fire!'
}

// nay

// Fire!
// Shiver me timbers!


let a = {'Mike':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'};
let b = {'Mike':'aye','Joe':'nay','Johnson':'aye','Peter':'aye'};

cannonsReady(a) // 'Fire!');
cannonsReady(b) // 'Shiver me timbers!');
