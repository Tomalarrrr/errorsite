var Quiz = function () {
    var self = this;
    this.init = function () {
        self._bindEvents();
    };

    this.correctAnswers = [
        { question: 1, answer: "a" },
    ];

    this._pickAnswer = function ($answer, $answers) {
        $answers.find(".quiz-answer").removeClass("active");
        $answer.addClass("active");
    };
    this._calcResult = function () {
        var numberOfCorrectAnswers = 0;
        $("ul[data-quiz-question]").each(function (i) {
        var $this = $(this),
            chosenAnswer = $this.find(".quiz-answer.active").data("quiz-answer"),
            correctAnswer;

        for (var j = 0; j < self.correctAnswers.length; j++) {
            var a = self.correctAnswers[j];
            if (a.question == $this.data("quiz-question")) {
            correctAnswer = a.answer;
            }
        }

        if (chosenAnswer == correctAnswer) {
            numberOfCorrectAnswers++;

            // highlight this as correct answer
            $this.find(".quiz-answer.active").addClass("correct");
        } else {
            $this
            .find('.quiz-answer[data-quiz-answer="' + correctAnswer + '"]')
            .addClass("correct");
            $this.find(".quiz-answer.active").addClass("incorrect");
        }
        });
        if (numberOfCorrectAnswers == 1) {
        return { code: "good", text: "Correct!" };
        } else {
        return { code: "bad", text: "Nope, Unlucky!" };
        }
    };

    this._bindEvents = function () {
        $(".quiz-answer").on("click", function () {
        var $answer = $(this),
            $answers = $answer.closest("ul[data-quiz-question]");
        self._pickAnswer($answer, $answers);
        });

        $(".quiz-result").on("click", function () {
        var result = self._calcResult();
        $(this)
            .removeClass()
            .addClass("quiz-result " + result.code)
            .text(result.text);
        });
    };
};

var quiz = new Quiz();
quiz.init();