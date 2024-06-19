const names = ['Kratos', 'Zeus', 'Hades'];
const powerPoints = [70, 100, 80];
const defensePoints = [75, 90, 70];
const speedPoints = [65, 85, 60];
const experiencePoints = [80, 95, 90];

function getTotalPoints(index) {
  return powerPoints[index] + defensePoints[index] + speedPoints[index] + experiencePoints[index];
}

function getLevel(index) {
  const totalPoints = getTotalPoints(index);

  if (totalPoints <= 100) {
    return 'Nível 1: Herói Iniciante';
  } else if (totalPoints <= 200) {
    return 'Nível 2: Herói Intermediário';
  } else if (totalPoints <= 300) {
    return 'Nível 3: Herói Avançado';
  } else {
    return 'Nível 4: Herói Mestre';
  }
}

for (let i = 0; i < names.length; i++) {
  console.log(`${names[i]} é ${getLevel(i)}`);
}
