document.getElementById('submitQuizBtn').addEventListener('click', function() {
  const form = document.getElementById('sortingQuizForm');
  const formData = new FormData(form);
  const answers = {};
  formData.forEach((value, key) => {
    answers[key] = value;
  });

  // Simple logic to determine house based on answers
  let house = '';
  if (answers.q1 === 'Gryffindor') {
    house = 'Gryffindor';
  } else if (answers.q1 === 'Hufflepuff') {
    house = 'Hufflepuff';
  } else if (answers.q1 === 'Ravenclaw') {
    house = 'Ravenclaw';
  } else if (answers.q1 === 'Slytherin') {
    house = 'Slytherin';
  }

  document.getElementById('result').innerText = `You belong to ${house}!`;
});
