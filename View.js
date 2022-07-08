const readLine = require('readline-sync');

class View {
  rl; 
  controller;

  constructor() {  }

  //Тут вывожу просто конкретный вопрос

  showQuestion(question) {
    const answer = readLine.question(question);
    return answer;

  }

  //Тут вывожу эмодзи в зависимости от результата проверки ответа из модели
  showResult(check) {
    if (check) {
      return  '🥳';
    } else {
      return '💩';
    }
  }


  showCategories(categoriasList) {
    categoriasList.forEach((el, index) => {
      console.log(`${index + 1}. ${el}`);
    });
  }

  getCategory() {
    const answer = readLine.question('Выберите категорию: ');
    return answer;
  }

}

module.exports = View