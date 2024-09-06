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

    // Remove existing theme elements
    document.querySelectorAll('.theme-element').forEach(el => el.remove());

    // Add new theme elements
    const commonIcons = ['🎂', '🎈', '🎉', '🎊', '🍰', '🍭', '🍬', '🍫', '🧁', '🎁'];
    const themeIcons = {
        vera: ['🦄', '🌈', '🎠', '🌟', '🦋', '🌸', '🧚', '🍦', '🌺', '🦜'],
        yngve: ['🦖', '🦕', '🐉', '🔥', '⚡', '🎮', '🦁', '🌋', '🌠', '🚀'],
        sara: ['🐼', '🌻', '🦊', '🌙', '🌈', '🦄', '🐶', '🎨', '🌷', '🦋']
    };

    const icons = [...commonIcons, ...themeIcons[name.toLowerCase()]];
    for (let i = 0; i < 50; i++) {
        const icon = icons[Math.floor(Math.random() * icons.length)];
        const element = document.createElement('div');
        element.className = `theme-element ${name.toLowerCase()}`;
        element.style.cssText = `
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            font-size: ${20 + Math.random() * 40}px;
            animation: ${Math.random() > 0.5 ? 'float' : 'bounce'} ${2 + Math.random() * 3}s infinite alternate ${Math.random() * -5}s;
        `;
        element.textContent = icon;
        document.body.appendChild(element);
    }

    // Trigger confetti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}
