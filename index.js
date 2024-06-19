const heroes = [
    { name: 'Kratos', xp: 200 },
    { name: 'Zeus', xp: 300 },
    { name: 'Hades', xp: 250 },
    { name: 'Athena', xp: 1500 },
    { name: 'Ares', xp: 2200 },
    { name: 'Gaia', xp: 3500 }
  ];
  
  function getTotalPoints(hero) {
    return hero.xp;
  }
  
  function getLevel(hero) {
    const xp = getTotalPoints(hero);
  
    let level;
  
    if (xp < 1000) {
      level = 'Ferro';
    } else if (xp >= 1001 && xp <= 2000) {
      level = 'Bronze';
    } else if (xp >= 2001 && xp <= 3000) {
      level = 'Prata';
    } else if (xp >= 3001 && xp <= 4000) {
      level = 'Ouro';
    } else if (xp >= 4001 && xp <= 5000) {
      level = 'Platina Diamante';
    } else if (xp >= 5001 && xp <= 6000) {
      level = 'Ascendente';
    } else if (xp >= 6001 && xp <= 7000) {
      level = 'Imortal';
    }
  
    return level;
  }
  
  heroes.forEach(hero => {
    console.log(`${hero.name} é ${getLevel(hero)}`);
  });
  