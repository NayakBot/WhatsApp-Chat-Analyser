$("input").on("change",function (e) {
    console.log(e.target.files[0]);
    const reader = new FileReader();
    reader.readAsText(e.target.files[0]);
    reader.onload = function () {
        const result = extract(reader.result);
        //graph(result);
    }
    $(".first").fadeToggle(0);
    $(".second").fadeToggle(1000);
});

function showFirstPage() {
    $(".first").fadeToggle(1000);
    $(".second").fadeToggle(0);
    destroyCharts();
}

function extract(data) {

    const temp = splitDates(data);

    const texts = temp[0];
    const dates = temp[1]; 
    console.log(temp);
    //console.log(dates);
    const participants = getParticipants(texts);
//console.log(participants);
    // let wordsObject = getMessageCount(participants, texts);

    // let topWords = mostUsedWords(wordsObject.words, 3);

    // const dateCount = getDates(wordsObject.timeStamp, dates);
    
    // const timeCount = getTimes(wordsObject.timeStamp, dates);
    
    // return{
    //     participants,
    //     wordsObject,
    //     topWords,
    //     dateCount,
    //     timeCount
    // };
}

function printer(param) {
    for (let i = 0; i < param.length; i++) {
        console.log(param[i]);
    }
}
// 01/04/20, 12:00 pm - Mridul Mohta RV CS changed the group description
// 01/04/20, 11:41 am - Mridul Mohta RV CS: That's my boy
// 01/04/20, 11:51 am - Manoj Rvce: <Media omitted>
// 01/04/20, 11:51 am - Manjunath S Nayak: Who's this
// 17/03/20, 7:05 pm - Mridul Mohta RV CS: I'm disappointed
// 17/03/20, 7:05 pm - Manoj Rvce: 😂😂😂😂
// 17/03/20, 7:09 pm - Mridul Mohta RV CS: True
// 17/03/20, 7:10 pm - Amaan RV CS: 💯
// 01/04/20, 11:52 am - Manjunath S Nayak: This is more important
// 17/03/20, 7:08 pm - Amaan RV CS: This message was deleted
// 17/03/20, 7:08 pm - Mridul Mohta RV CS: We support you mate
// 01/04/20, 11:52 am - NEW1: This is more important
// 17/03/20, 7:08 pm - NEW2: This message was deleted
// 17/03/20, 7:08 pm - NEW3: We support you mate
// 17/03/20, 7:08 pm - Mridul Mohta RV CS: We support you mate
// 01/04/20, 11:52 am - NEW4: This is more important
// 17/03/20, 7:08 pm - NEW5: This message was deleted
// 17/03/20, 7:08 pm - NEW6: We support you mate