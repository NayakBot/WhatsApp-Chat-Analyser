$("input").on("change",function (e) {
    console.log(e.target.files[0]);
    const reader = new FileReader();
    reader.readAsText(e.target.files[0]);
    reader.onload = function () {
        console.log(reader.result);
    }
    $(".first").fadeToggle(0);
    $(".second").fadeToggle(1000);
});

function showFirstPage() {
    $(".first").fadeToggle(1000);
    $(".second").fadeToggle(0);
}

// const data = `"11/03/20, 10:20 pm - Manoj Rvce: I mean atleast their parents
// 11/03/20, 10:20 pm - Manoj Rvce: Like MY PARENTS were like don't go and spread anything stay at home only
// 11/03/20, 10:20 pm - Manoj Rvce: Like whyy??
// 11/03/20, 10:21 pm - Mridul Mohta RV CS: Yeah
// 11/03/20, 10:25 pm - Mridul Mohta RV CS: Dear all,
// Quizzes and tests are postponed to 23rd March onwards. Official circular will be sent shortly.
// Hod ISE
// 11/03/20, 10:26 pm - Manjunath S Nayak: Damn this will be a hectic few weeks
// 11/03/20, 10:26 pm - Amaan RV CS: Okay so that is 10 days holidays
// 11/03/20, 10:27 pm - Mridul Mohta RV CS: Ig
// 11/03/20, 10:29 pm - Amaan RV CS: <Media omitted>
// 11/03/20, 10:29 pm - Amaan RV CS: Guysss do nptel
// 11/03/20, 10:29 pm - Mridul Mohta RV CS: Yas
// 11/03/20, 10:29 pm - Manjunath S Nayak: Thanks for reminding
// 11/03/20, 10:30 pm - Amaan RV CS: 🤘🏻"`;
// console.log(data);

// function test(data) {
//     data[0]=25;
// }

// function test1(data) {
//     data[1]=26;
// }

// test(data);
// console.log(data);

// test1(data);
// console.log(data);