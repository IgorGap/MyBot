const button = document.querySelector('.button');
const buttoncl = document.querySelector('.buttoncl');
const input = document.querySelector('.input');
const qst = document.querySelector('.qst');
const ans = document.querySelector('.ans');
button.addEventListener('click', () => {
  const newDivQst = document.createElement('div');
  const newDivAns = document.createElement('div');
  newDivQst.innerText = input.value;
  newDivAns.innerText = input.value;
  qst.append(newDivQst);
  ans.append(newDivAns);
  function getQuestionWord(inputValue) {
    const question = inputValue.split(' ');
    const answer = ['сколько нужно бегать? - 60-70 км в неделю, этого будет достаточно', 'рекорд 2 часа и 1 минута', 'лучший результат - 2 часа и 1 минута',
      'самый быстрый марафнец -кенийц Элиуд Кипчоге ', 'марафон? спортивный бег на 42 км 195 м',
      'погода не главный фактор, в любую погоду можно бегать',
      'кросовки не главное, главное настрой', 'я могу пробежать и ты сможешь пробежать марафон',
      'дорого ли бегать? нет это не дорого', 'сложно? ахаха, не так сложно',
      'тяжело бегать? ахаха, не очень тяжело', 'безопасно ли бегать?, если делать все грамотно то конечно безопастно',
      'тренироваться желательно регулярно и постоянно', 'бегать желательно регулярно и постоянно',
      'успех бега в регулярных и постоянных тренировках', 'история появления - в 490 году до н. э',
      'зародился в Афинах - в 490 году до н. э', 'несчастные случаю бывают, но редко', 'травмы бывают, но редко',
      'полезно для тела и духа', 'помогает сохранять сдоровье', 'популярное занятие', 'темп бега - за сколько минут ты пробигаешь 1 километр',
      'скорость на марафоне около 24 км в час', 'часто или нет давайте оценим ваши возможности', 'время нестоит тратить на ерунду, займись',
      'лень побороть просто - начни бегать', 'страх побороть просто - начни бегать', 'получится ли пробежать? конечно, даже не сомневайся в этом',
      'как пробежать марафон? для начала нужно встать и выйти на пробежку', 'польза от бега очень болшая', 'полезен ли бег? да конечно',
      'мотивация - ее порой очень сложно найти', 'тренер, хорошая идея, но можно и без него']
    for (let i = 0; i < question.length; i += 1) {
      for (let j = 0; j < answer.length; j += 1) {
        if (answer[j].includes(question[i])) {
          return answer[j];
        }
      }
    }
    return 'Я поищу ответ на этот вопрос, а пока задайте мне другой';
  }
  newDivQst.innerText = input.value;
  newDivAns.innerText = getQuestionWord(input.value);

  buttoncl.addEventListener('click', () => {
    newDivQst.innerText = '';
    newDivAns.innerText = '';
  });
});
