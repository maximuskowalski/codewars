function isLockNessMonster(s) {
    if ( s.includes("tree fiddy") || s.includes("3.50") || s.includes("three fifty") ){
        console.log(true)
        return true
    }else{
        console.log(false)
        return false
    }

  }



isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy")

isLockNessMonster("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance.")

isLockNessMonster("Yo, I heard 3.50")

isLockNessMonster("Yo, I heard three fifty")
