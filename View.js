const readLine = require('readline-sync');

class View {
  rl; 
  controller;

  constructor() {  }

  //Тут вывожу просто конкретный вопрос
  showQuestion(arrQuestion) {
    arrQuestion.forEach((el) => {
    // console.log(el)
    const answer = readLine.question(el + '\n');
    // console.log(answer)
    })



  }

  //Тут вывожу эмодзи в зависимости от результата проверки ответа из модели
  showResult(check) {

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