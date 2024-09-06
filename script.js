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
    
    let message;
    if (daysLeft === 0) {
        message = `<span class="name">${name}</span>Hurra! Idag är det ${name}s födelsedag! Dags att fira med godis, lek och massvis av kul! Wohoo!`;
    } else if (daysLeft === 1) {
        message = `<span class="name">${name}</span>Nu är det bara 1 dag kvar tills ${name} fyller år! Imorgon blir det kalas med godis, lek och massvis av kul! Wohoo!`;
    } else {
        message = `<span class="name">${name}</span>Nu är det bara ${daysLeft} dagar kvar tills ${name} fyller år! Då blir det kalas med godis, lek och massvis av kul! Wohoo!`;
    }
    
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = message;
    resultElement.style.display = 'block';  // Make sure the card is visible
    
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
    for (let i = 0; i < 100; i++) {
        const icon = icons[Math.floor(Math.random() * icons.length)];
        const element = document.createElement('div');
        element.className = `theme-element ${name.toLowerCase()}`;
        element.style.cssText = `
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            font-size: ${15 + Math.random() * 30}px;
            animation: ${Math.random() > 0.5 ? 'float' : 'bounce'} ${2 + Math.random() * 3}s infinite alternate ${Math.random() * -5}s;
        `;
        element.textContent = icon;
        document.body.appendChild(element);
    }

    // Trigger confetti
    confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 }
    });
}
