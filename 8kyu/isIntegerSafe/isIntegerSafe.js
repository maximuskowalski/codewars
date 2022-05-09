function SafeInteger(n) {
    return (n<=Number.MAX_SAFE_INTEGER)
}

// function tests
SafeInteger(9007199254740992) // , false, 'Value returned should be false');
SafeInteger(9007199254740990) // , true, 'Value returned should be true');
