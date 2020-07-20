function splitLines(data){

    let temp = data.split('\n');

    let check = 0;

    while(true)
    {
        for(let i = 1 ; i < temp.length-1 ; i++)
        {

            if(isNaN(temp[i].charAt(0)) || !(temp[i].charAt(1) == '/' || temp[i].charAt(2) == '/'))
            {
                if(temp[i][0] == ' ')
                    temp[i - 1] += temp[i];
                else
                    temp[i - 1] += " " + temp[i];
                temp = temp.slice(0, i).concat(temp.slice(i + 1));
                check = 0;
                break;
            }
            check = 1;
        }

        if(check)
            break;
    }

    return temp;
}

function splitDates(data) {

    const lines = splitLines(data);

    let temp = [], dates = [];
    for(let i = 0; i < lines.length; i++)
    {
        const splitLine = lines[i].split(' - ');
        const message = splitLine.slice(1);
        const date = splitLine.slice(0 , 1);
        dates.push(date);
        temp.push(message.join(' - '));
    }

    return [temp, dates];
    
}

function getParticipants(texts) {
    
    let temp = [];

    for(let i = 0; i < texts.length; i++)
    {
        if(texts[i].includes(':'))
        {
            const participant = texts[i].split(': ')[0];

            if(!temp.includes(participant)  && (participant+'').match("changed the subject") == null)
                temp.push(participant);
        }
    }

    return temp;
}

function getMessageCount(participants, texts) {
    
    let messages = new Array(participants.length);
    messages.fill(0);
    let media = new Array(participants.length);
    media.fill(0);
    let del_msg = new Array(participants.length);
    del_msg.fill(0);
    let msgLength = new Array(participants.length);
    msgLength.fill(0);

    let words = [];
    let timeStamp = [];

    for(let i = 0; i < texts.length; i++)
    {
        let split = texts[i].split(": ");
        if(split.length == 1)
            continue;
        
        let user = split[0];
        let message = split.slice(1).join(": ").trim();
        messages[participants.indexOf(user)]++;
        timeStamp.push(i);

        const check = /<Media omitted>/;

        if (message.match(check) && message.length == "<Media omitted>".length)
        {
            media[participants.indexOf(user)]++;
            continue;
        }

        const check1 = /This message was deleted/;
        
        if (message.match(check1) && message.length == "This message was deleted".length) 
        {
            del_msg[participants.indexOf(user)]++;
            continue;
        }

        let splitMessage = message.split(' ');
        msgLength[participants.indexOf(user)] += splitMessage.length;

        for(let j = 0; j < splitMessage.length; j++){
            let punctuationless = splitMessage[j].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]|[.,\/#!$%\^&\*;:{}=\-_`~()?])/g, "");
            let finalString = punctuationless.replace(/\s{2,}/g, "");
            words.push(finalString.trim().toLowerCase());
        }
        
    }

    return { messages, media, del_msg, msgLength, words, timeStamp };
}

const stopwords = ['about', 'all', 'also' ,'am', 'and', 'any', 'are', 'ask', 'but', 'can', 'could', "couldn't", 'did' ,'do', 'does', "doesn't", "don't" , 'even',
                    'for','from', 'get', 'gets', 'got', 'had', "hadn't", 'has', "hasn't", 'have', "haven't", 'he', "he's", 'her', 'hers', 'hi',
                    'him', 'his', 'how', "i'd", 'if', "i'll", "i'm", "i've", 'is', "isn't", 'it', "it'd", "it'll", "it's",
                    'its', 'just', 'know', 'let', "let's", 'me', 'might', 'more', 'moreover', 'most', 'mostly', 'much', 'must', 'my', 'myself',
                    'name', 'no', 'nobody', 'non', 'none', 'noone', 'nor', 'not', 'nothing', 'now', 'nowhere', 'obviously', 
                    'of', 'off', 'often', 'oh', 'ok', 'okay', 'old', 'on', 'once', 'one', 'ones', 'only', 'onto', 'or', 
                    'other', 'others', 'otherwise', 'ought', 'our', 'ours', 'ourselves', 'out', 'outside', 'over', 'overall',
                    'own', 'people', 'per', 'provides', 'right', 'said', 'see', 'same', 'saw', 'say', 'shall', 'she', 'should', "shouldn't", 'since',
                    'some', 'somebody', 'somehow', 'someone', 'something', 'sometime', 'sometimes', 'somewhat', 'somewhere', 
                    'sup', 'sure', 'tell', 'than', 'thank', 'thanks', 'thanx', 'that', "that's", 'thats', 'the', 'their', 'theirs', 
                    'them', 'themselves', 'then', 'thence', 'there', "there's", 'thereafter', 'thereby', 'therefore', 'therein', 'time',
                    'theres', 'thereupon', 'these', 'they', "they'd", "they'll", "they're", "they've", 'think', 'third', 'this',
                    'thorough', 'thoroughly', 'those', 'though', 'three', 'through', 'throughout', 'thru', 'thus', 'to', 
                    'together', 'too', 'took', 'toward', 'towards', 'tried', 'tries', 'truly', 'try', 'trying', 'twice', 'two',
                    'un', 'under', 'unfortunately', 'unless', 'unlikely', 'until', 'unto', 'up', 'upon', 'us', 'use', 'used',
                    'useful', 'uses', 'using', 'usually', 'value', 'various', 'very', 'via', 'viz', 'vs', 'want', 'wants', 
                    'was', "wasn't", 'way', 'we', "we'd", "we'll", "we're", "we've", 'welcome', 'well', 'went', 'were', 
                    "weren't", 'what', "what's", 'whatever', 'when', 'whence', 'whenever', 'where', "where's", 'whereafter', 
                    'whereas', 'whereby', 'wherein', 'whereupon', 'wherever', 'whether', 'which', 'while', 'whither', 'who', 'whos' ,
                    "who's", 'whoever', 'whole', 'whom', 'whose', 'why', 'will', 'willing', 'wish', 'with', 'within', 'without',
                    "won't", 'wonder', 'would', "wouldn't", 'yes', 'yet', 'you', "you'd", "you'll", "you're", "you've", 'your',
                    'yours', 'yourself', 'yourselves'];

function mostUsedWords(words, minLength) {
    
    let properWords = [];
    
    for(let i = 0; i < words.length; i++)
    {
        if(!stopwords.includes(words[i]) && words[i].length >= minLength)
            properWords.push(words[i]);
    }

    let wordCount = {};

    for(let i = 0; i < properWords.length; i++)
    {
        const word = properWords[i];
        wordCount[word] = wordCount[word] ? wordCount[word] + 1 : 1;
    }

    let wordList = [];
    for(let word in wordCount) 
        wordList.push([[word], wordCount[word]]);

    wordList.sort((a,b) => {
        return b[1]-a[1];
    });

    let top10 = wordList.slice(0, 10);

    let top10Words = [];
    let top10Counts = [];

    for(let i = 0; i < top10.length; i++)
    {
        top10Words.push(top10[i][0]);
        top10Counts.push(top10[i][1]);
    }

    return [top10Words, top10Counts];
}

function count(arr){
    let counts = {};

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    return counts;
}

function getDates(timeStamp, dates) {
    dateList = [];

    for (let i = 0; i < timeStamp.length; i++) {
        let date = dates[timeStamp[i]];
        dateList.push(date[0].split(', ')[0]);
    }

    return count(dateList);
}

function getTimes(timeStamp, dates) {
    timeList = {};
    for (let i = 0; i < 23; i++) {
        timeList[i] = 0;
    }

    for (let i = 0; i < timeStamp.length; i++) {

        let date = dates[timeStamp[i]];
        let time = date[0].split(', ')[1];
        let hr = parseInt(time.split(':')[0]);
        
        let period = time.split(':')[1].split(' ')[1];
        
        if(period == 'pm' && hr!='12')
            timeList[hr + 12] = timeList[hr + 12] ? timeList[hr + 12] + 1 : 1;
        else
            timeList[hr] = timeList[hr] ? timeList[hr] + 1 : 1;

    }

    return(timeList);

}