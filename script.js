function calculateBirthdayInfo(birthday) {
    const today = new Date();
    let nextBirthday = new Date(birthday);
    nextBirthday.setFullYear(today.getFullYear());
    
    if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    
    const daysLeft = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));
    const yearsOld = nextBirthday.getFullYear() - new Date(birthday).getFullYear();
    
    return { daysLeft, yearsOld };
}

function showBirthdayInfo(name, birthday) {
    const { daysLeft, yearsOld } = calculateBirthdayInfo(birthday);
    document.getElementById('result').innerHTML = `${name}'s birthday:<br>${daysLeft} days left<br>Will turn ${yearsOld} years old`;
    
    // Change theme
    document.body.className = name.toLowerCase() + '-theme';
}
