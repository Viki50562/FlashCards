const fs = require('fs');

class Model {

nighthawkQuestions;
otterQuestions;
raccooonQuestions;

  constructor() {

  }
  

  loadQuestionsMenuFromFiles() {
    // функция для перевода из массива строк (полученного из изначального файла) в массив объектов с ключами question и answer
    function infoToQandA(arr) {
      const questionAndAnswer = [];
      for (let i = 0; i < arr.length; i += 3) {
        const obj = {};
        obj.question = arr[i];
        obj.answer = arr[i + 1];
        questionAndAnswer.push(obj);
      }
      return questionAndAnswer
    }

    this.nighthawkQuestions = fs.readFileSync('topics/nighthawk_flashcard_data.txt', 'utf-8').split('\n');
    this.nighthawkQuestions = infoToQandA(this.nighthawkQuestions);

    this.otterQuestions = fs.readFileSync('topics/otter_flashcard_data.txt', 'utf-8').split('\n');
    this.otterQuestions =  infoToQandA(this.otterQuestions);

    this.raccooonQuestions = fs.readFileSync('topics/raccoon_flashcard_data.txt', 'utf-8').split('\n');
    this.raccooonQuestions = infoToQandA(this.raccooonQuestions);
  }


  getQuestionListByCategory(category) {
    // Будет возвращать набор вопросов
    if (category === 'Ястребы') {
      const questions = [];
      for(let i = 0; i < this.nighthawkQuestions.length; i += 1) {
        questions.push(this.nighthawkQuestions[i].question)
      }
      // console.log(questions);
      return questions;
    }
    if (category === 'Выдры') {
      const questions = [];
      for(let i = 0; i < this.otterQuestions.length; i += 1) {
        questions.push(this.otterQuestions[i].question)
      }
      // console.log(questions);
      return questions;
    }
    if (category === 'Еноты') {
      const questions = [];
      for(let i = 0; i < this.raccooonQuestions.length; i += 1) {
        questions.push(this.raccooonQuestions[i].question)
      }
      // console.log(questions);
      return questions;
    }
  }

  checkIncorrectAnswer(answer, category, index) {
    if (category === 'Ястребы') {
      const answers = [];
      for(let i = 0; i < this.nighthawkQuestions.length; i += 1) {
        answers.push(this.nighthawkQuestions[i].answer)
      }
      if (answers[index] === answer.toLowerCase()) {
        return true
      }
      return false
    }
    if (category === 'Выдры') {
      const answers = [];
      for(let i = 0; i < this.otterQuestions.length; i += 1) {
        answers.push(this.otterQuestions[i].answer)
      }
      if (answers[index] === answer.toLowerCase()) {
        return true
      }
      return false
    }
    if (category === 'Еноты') {
      const answers = [];
      for(let i = 0; i < this.raccooonQuestions.length; i += 1) {
        answers.push(this.raccooonQuestions[i].answer)
      }
      if (answers[index] === answer.toLowerCase()) {
        return true
      }
      return false
    }
  }
}

const model = new Model();
// model.loadQuestionsMenuFromFiles()
// model.getQuestionListByCategory('Выдры')

module.exports = Model