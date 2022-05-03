function calculateTip(amount, rating) {

    rating = rating.toLowerCase()

    switch (rating) {
        case 'terrible':
            console.log(0)
            return 0
            break;
        case 'poor':
            console.log(Math.ceil(amount * .05))
            return Math.ceil(amount * .05)
            break;
        case 'good':
            console.log(Math.ceil(amount * .10))
            return Math.ceil(amount * .10)
            break;
        case 'great':
            console.log(Math.ceil(amount * .15))
            return Math.ceil(amount * .15)
            break;
        case 'excellent':
            console.log(Math.ceil(amount * .20))
            return Math.ceil(amount * .20)
            break;
        default:
            return 'Rating not recognised'
      }
}

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%



calculateTip(20, "Excellent") // 4);
calculateTip(26.95, "good") // 3);
