let btnTest = document.querySelector(".btn_test"),
  divContent = document.querySelector(".content");

divContent.classList.add("hide");
btnTest.addEventListener("click", () => {
  btnTest.classList.add("hide");
  divContent.classList.remove("hide");

  var quiz = {
    JS: [
      {
        id: 1,
        question:
          "Har xil ko'rinishdagi oddiy va murakkab matnlarni taxrirlashga mo'ljallangan matn muharriri.",
        options: [
          {
            a: "Microsoft Word",
            b: "Microsoft Excel",
            c: "Microsoft PowerPoint",
            d: "Microsoft Access",
          },
        ],
        answer: "Microsoft Word",
        score: 0,
        status: "",
      },
      {
        id: 2,
        question:
          "Har ko'rinishdagi hisob - kitobli ma'lumotlar bilan ishlashga mo'ljallangan elektron jadvalli dastur.",
        options: [
          {
            a: "Microsoft Word",
            b: "Microsoft PowerPoint",
            c: "Microsoft Excel",
            d: "Microsoft Access",
          },
        ],
        answer: "Microsoft Excel",
        score: 0,
        status: "",
      },
      {
        id: 3,
        question:
          "Ma'lumotlarni taqdimot, reklama qilishga mo'ljallangan taqdimot dasturi",
        options: [
          {
            a: "Microsoft Word",
            b: "Microsoft Excel",
            c: "Microsoft PowerPoint",
            d: "Microsoft Access",
          },
        ],
        answer: "Microsoft PowerPoint",
        score: 0,
        status: "",
      },
      {
        id: 4,
        question:
          "Ma'lumotlar ombori (bazasi) bilan ishlashga mo'ljallangan dastur.",
        options: [
          {
            a: "Microsoft Word",
            b: "Microsoft Access",
            c: "Microsoft PowerPoint",
            d: "Microsoft Excel",
          },
        ],
        answer: "Microsoft Access",
        score: 0,
        status: "",
      },
      {
        id: 5,
        question: "Ma'lumot yig'ish va uni boshqarish dasturi.",
        options: [
          {
            a: "Microsoft Access",
            b: "Microsoft PowerPoint",
            c: "Microsoft InfoPath",
            d: "Microsoft Visio",
          },
        ],
        answer: "Microsoft InfoPath",
        score: 0,
        status: "",
      },
      {
        id: 6,
        question: "Biznes va texnik diagrammalar bilan ishlovchi dastur.",
        options: [
          {
            a: "Microsoft Visio",
            b: "Microsoft PowerPoint",
            c: "Microsoft InfoPath",
            d: "Microsoft Access",
          },
        ],
        answer: "Microsoft Visio",
        score: 0,
        status: "",
      },
      {
        id: 7,
        question: "Qaydnomalar yozish uchun mo'ljallangan dastur.",
        options: [
          {
            a: "Microsoft Visio",
            b: "Microsoft InfoPath",
            c: "Microsoft OneNote",
            d: "Microsoft PowerPoint",
          },
        ],
        answer: "Microsoft OneNote",
        score: 0,
        status: "",
      },
      {
        id: 8,
        question:
          "Ma'lumotlar omboridan ma'lumot oluvchi va ko'rib chiquvchi dastur",
        options: [
          {
            a: "Microsoft Groove",
            b: "Microsoft Project",
            c: "Microsoft Query",
            d: "Microsoft Access",
          },
        ],
        answer: "Microsoft Query",
        score: 0,
        status: "",
      },
      {
        id: 9,
        question: "Loyihalar bilan ishlovchi dastur.",
        options: [
          {
            a: "Microsoft Access",
            b: "Microsoft Query",
            c: "Microsoft Groove",
            d: "Microsoft Project",
          },
        ],
        answer: "Microsoft Project",
        score: 0,
        status: "",
      },
      {
        id: 10,
        question: "Ctrl + N - ",
        options: [
          {
            a: "Ekranda ochiq boʻlgan dokumеntni bosmaga chiqarish",
            b: "Ekranda ochiq boʻlgan dokumеntni saqlash",
            c: "Yangi dokumеntni yaratish",
            d: "Ekranda ochiq boʻlgan dokumеntni bеrkitish.",
          },
        ],
        answer: "Yangi dokumеntni yaratish",
        score: 0,
        status: "",
      },
      {
        id: 11,
        question: "Ctrl + W - ",
        options: [
          {
            a: "Ekranda ochiq boʻlgan dokumеntni saqlash",
            b: "Ekranda ochiq boʻlgan dokumеntni bosmaga chiqarish",
            c: "Ekranda ochiq boʻlgan dokumеntni bеrkitish.",
            d: "Yangi dokumеntni yaratish",
          },
        ],
        answer: "Ekranda ochiq boʻlgan dokumеntni bеrkitish.",
        score: 0,
        status: "",
      },
      {
        id: 12,
        question: "Ctrl + F - ",
        options: [
          {
            a: "Tanlangan soʻzning sinonimlarini topish",
            b: "Butun matnda biror bir soʻz yoki jumlani izlash",
            c: "Butun matnni tanlash",
            d: "Butun matnning imlo xatolarini tеkshirish",
          },
        ],
        answer: "Butun matnda biror bir soʻz yoki jumlani izlash",
        score: 0,
        status: "",
      },
      {
        id: 13,
        question:
          " - bu formulalarda qo’llaniladigan kiritib qo’yilgan tayyor uskunalar qolipidir.",
        options: [
          {
            a: "Funksiya",
            b: "Formulalarni qisqartirish",
            c: "Obyekt",
          },
        ],
        answer: "Funksiya",
        score: 0,
        status: "",
      },
      {
        id: 14,
        question:
          " - sonli jadval ko’rinisida berilgan axborotlarni ko’rgazmali namoyish etish usulidir",
        options: [
          {
            a: "Diagramma",
            b: "Funksiya",
            c: "Obyekt",
            d: "Formulalarni qisqartirish",
          },
        ],
        answer: "Diagramma",
        score: 0,
        status: "",
      },
      {
        id: 15,
        question: " - PowerPoint taqdimoti",
        options: [
          {
            a: ".pps",
            b: ".ppt",
            c: ".pot",
            d: ".html",
          },
        ],
        answer: ".ppt",
        score: 0,
        status: "",
      },
      {
        id: 16,
        question: " - PowerPoint modeli",
        options: [
          {
            a: ".css",
            b: ".pot",
            c: ".ppt",
            d: ".js",
          },
        ],
        answer: ".pot",
        score: 0,
        status: "",
      },
      {
        id: 17,
        question:
          " - bu prezentatsiyani alohida kadiri bulib, matnni, sarlavhalarini grafik va diagrammalarni o’z ichiga oladi.",
        options: [
          {
            a: "Slayd",
            b: "Prezentatsiya",
            c: "Word",
            d: "Excel",
          },
        ],
        answer: "Slayd",
        score: 0,
        status: "",
      },
      {
        id: 18,
        question: " - bu veb qidiruv tizimi va Google ning asosiy mahsuloti.",
        options: [
          {
            a: "Google Alerts",
            b: "Google Search",
            c: "Google Arts & Culture",
            d: "Google Kitoblar",
          },
        ],
        answer: "Google Search",
        score: 0,
        status: "",
      },
      {
        id: 19,
        question:
          " - AQShning biznes yangiliklari, fikrlari va moliyaviy ma'lumotlarini qidirish.",
        options: [
          {
            a: "Google Search",
            b: "Google Finance",
            c: "Google Arts & Culture",
            d: "Google Kitoblar",
          },
        ],
        answer: "Google Finance",
        score: 0,
        status: "",
      },
      {
        id: 20,
        question: " - parvoz chiptalarini qidirish tizimi.",
        options: [
          {
            a: "Google Flights",
            b: "Google Finance",
            c: "Google Kitoblar",
            d: "Google Arts & Culture",
          },
        ],
        answer: "Google Flights",
        score: 0,
        status: "",
      },
      {
        id: 21,
        question: " - Internetdagi rasmlarni qidirish mexanizmi.",
        options: [
          {
            a: "Google Flights",
            b: "Google Images",
            c: "Google Kitoblar",
            d: "Google Arts & Culture",
          },
        ],
        answer: "Google Images",
        score: 0,
        status: "",
      },
      {
        id: 22,
        question:
          " - 20 dan ortiq tillarda yangiliklar yig'ishning avtomatlashtirilgan xizmati va yangiliklar qidiruvi.",
        options: [
          {
            a: "Google News",
            b: "Google Images",
            c: "Google Kitoblar",
            d: "Google Arts & Culture",
          },
        ],
        answer: "Google News",
        score: 0,
        status: "",
      },
      {
        id: 23,
        question: " - bu onlayn reklama platformasi.",
        options: [
          {
            a: "Google Ads Manager",
            b: "Google AdSense",
            c: "Google Ads",
            d: "AdMob",
          },
        ],
        answer: "Google Ads",
        score: 0,
        status: "",
      },
      {
        id: 24,
        question: " - reklama almashish platformasi.",
        options: [
          {
            a: "Google Ads",
            b: "AdMob",
            c: "Google Ads Manager",
            d: "Google AdSense",
          },
        ],
        answer: "Google Ads Manager",
        score: 0,
        status: "",
      },
      {
        id: 25,
        question: " - elektron pochta xizmati",
        options: [
          {
            a: "Google hisobi",
            b: "Gmail",
            c: "Google Taqvim",
            d: "Google Collections",
          },
        ],
        answer: "Gmail",
        score: 0,
        status: "",
      },
    ],
  };
  var quizApp = function () {
    this.score = 0;
    this.qno = 1;
    this.currentque = 0;
    var totalque = quiz.JS.length;
    this.displayQuiz = function (cque) {
      this.currentque = cque;
      if (this.currentque < totalque) {
        $("#tque").html(totalque);
        $("#previous").attr("disabled", false);
        $("#next").attr("disabled", false);
        $("#qid").html(quiz.JS[this.currentque].id + ".");
        $("#question").html(quiz.JS[this.currentque].question);
        $("#question-options").html("");
        for (var key in quiz.JS[this.currentque].options[0]) {
          if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
            $("#question-options").append(
              "<div class='form-check option-block'>" +
                "<label class='form-check-label'>" +
                "<input type='radio' class='form-check-input' name='option' id='q" +
                key +
                "' value='" +
                quiz.JS[this.currentque].options[0][key] +
                "'><span id='optionval'>" +
                quiz.JS[this.currentque].options[0][key] +
                "</span></label>"
            );
          }
        }
      }
      if (this.currentque <= 0) {
        $("#previous").attr("disabled", true);
      }
      if (this.currentque >= totalque) {
        $("#next").attr("disabled", true);
        for (var i = 0; i < totalque; i++) {
          this.score = this.score + quiz.JS[i].score;
        }
        return this.showResult(this.score);
      }
    };
    this.showResult = function (scr) {
      $("#result").addClass("result");
      $("#result").html(
        "<h1 class='res-header'>Test Natijasi: &nbsp;" +
          scr +
          "/" +
          totalque +
          "</h1>"
      );
      for (var j = 0; j < totalque; j++) {
        var res;
        if (quiz.JS[j].score == 0) {
          res =
            '<span class="wrong">' +
            quiz.JS[j].score +
            '</span><i class="fa fa-remove c-wrong"></i>';
        } else {
          res =
            '<span class="correct">' +
            quiz.JS[j].score +
            '</span><i class="fa fa-check c-correct"></i>';
        }
        $("#result").append(
          '<div class="result-question"><span>N ' +
            quiz.JS[j].id +
            "</span> &nbsp;" +
            quiz.JS[j].question +
            "</div>" +
            "<div><b>Javob:</b> &nbsp;" +
            quiz.JS[j].answer +
            "</div>" +
            '<div class="last-row"><b>Natija:</b> &nbsp;' +
            res +
            "</div>"
        );
      }
    };
    this.checkAnswer = function (option) {
      var answer = quiz.JS[this.currentque].answer;
      option = option.replace(/</g, "&lt;");
      option = option.replace(/>/g, "&gt;");
      option = option.replace(/"/g, "&quot;");
      if (option == quiz.JS[this.currentque].answer) {
        if (quiz.JS[this.currentque].score == "") {
          quiz.JS[this.currentque].score = 1;
          quiz.JS[this.currentque].status = "correct";
        }
      } else {
        quiz.JS[this.currentque].status = "wrong";
      }
    };
    this.changeQuestion = function (cque) {
      this.currentque = this.currentque + cque;
      this.displayQuiz(this.currentque);
    };
  };
  var jsq = new quizApp();
  var selectedopt;
  $(document).ready(function () {
    jsq.displayQuiz(0);
    $("#question-options").on(
      "change",
      "input[type=radio][name=option]",
      function (e) {
        $(this).prop("checked", true);
        selectedopt = $(this).val();
      }
    );
  });
  $("#next").click(function (e) {
    e.preventDefault();
    if (selectedopt) {
      jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(1);
  });
  $("#previous").click(function (e) {
    e.preventDefault();
    if (selectedopt) {
      jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(-1);
  });
});