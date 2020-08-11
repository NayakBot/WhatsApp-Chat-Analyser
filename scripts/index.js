$("input").on("change",function (e) {
    const reader = new FileReader();
    reader.readAsText(e.target.files[0]);
    reader.onload = function () {
        const result = extract(reader.result);
        graph(result);
    }
    $(".first").fadeToggle(0);
    $(".second").fadeToggle(1000);
    $("body").css("background-color", "white");
});

function showFirstPage() {
    $(".first").fadeToggle(1000);
    $(".second").fadeToggle(0);
    $("body").css("background-color", "rgb(252, 223, 252)");
    destroyCharts();
}

$('.go-to-top').each(function(){
    $(this).click(function(){ 
        $('html,body').animate({ scrollTop: 0 }, 'slow');
        return false; 
    });
});

function extract(data) {

    const temp = splitDates(data);

    const texts = temp[0];
    const dates = temp[1]; 

    const participants = getParticipants(texts);

    let wordsObject = getMessageCount(participants, texts);

    let topWords = mostUsedWords(wordsObject.words, 3);
    
    const dateCount = getDates(wordsObject.timeStamp, dates);
    
    const timeCount = getTimes(wordsObject.timeStamp, dates);
    
    return{
        participants,
        wordsObject,
        topWords,
        dateCount,
        timeCount
    };
}

function printer(param) {
    for (let i = 0; i < param.length; i++) {
        console.log(param[i]);
    }
}
