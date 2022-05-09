function match(candidate, job) {

    let x = parseInt(candidate.minSalary)
    let y = parseInt(job.maxSalary)

    if ( x == null || y == null ) throw -1
    if ( x == undefined || y == undefined ) throw -1

    if ( isNaN(x) || isNaN(y) ) throw -1
    if ( x <= 0 || y <= 0 ) throw -1

    return (0.9 * candidate.minSalary <= job.maxSalary)
}

