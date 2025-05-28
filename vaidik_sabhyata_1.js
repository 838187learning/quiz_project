const questions = [
    {
        question:"वैदिक सभ्यता का समयकाल लगभग किस वर्ष के आसपास था?",
        answers:[
            {text:"1500-1000 ईसा पूर्व", correct:true},
            {text:"1500-500 ईसा पूर्व", correct:false},
            {text:"5000-3000 ईसा पूर्व", correct:false},
            {text:"1000-500 ईसा पूर्व", correct:false},
        ]
    },
    {
        question:"वेदों की संख्या कितनी है?",
        answers:[
            {text:"तीन", correct:false},
            {text:"चार", correct:true},
            {text:"पांच", correct:false},
            {text:"छह", correct:false},
        ]
    },
    {
        question:"वेदों का किस भाषा में लेखन हुआ था?",
        answers:[
            {text:"संस्कृत", correct:true},
            {text:"प्राकृत", correct:false},
            {text:"तमिल", correct:false},
            {text:"पाली", correct:false},
        ]
    },
    {
        question:"वेदिक सभ्यता में प्रमुख देवता कौन थे?",
        answers:[
            {text:"इन्द्र", correct:false},
            {text:"अग्नि", correct:false},
            {text:"सूर्य", correct:false},
            {text:"सभी", correct:true},
        ]
    },
    {
        question:"ऋग्वेद में कुल कितनी सूक्तियाँ हैं?",
        answers:[
            {text:"1028", correct:true},
            {text:"1000", correct:false},
            {text:"500", correct:false},
            {text:"1500", correct:false},
        ]
    },
    {
        question:"वेदिक सभ्यता का प्रमुख सामाजिक वर्ग क्या था?",
        answers:[
            {text:"ब्राह्मण", correct:true},
            {text:"क्षत्रिय", correct:false},
            {text:"वैश्य", correct:false},
            {text:"शूद्र", correct:false},
        ]
    },
    {
        question:"ऋग्वेद का सबसे पुराना मंडल कौन सा है?",
        answers:[
            {text:"पहला मंडल", correct:true},
            {text:"दूसरा मंडल", correct:false},
            {text:"तीसरा मंडल", correct:false},
            {text:"दसवां मंडल", correct:false},
        ]
    },
    {
        question:"वेदिक सभ्यता में पूजा स्थल किसे कहा जाता था?",
        answers:[
            {text:"यज्ञशाला", correct:true},
            {text:"मन्दिर", correct:false},
            {text:"देवालय", correct:false},
            {text:"गुरुकुल", correct:false},
        ]
    },
    {
        question:"वेदिक समाज के प्रमुख शासक वर्ग को क्या कहा जाता था?",
        answers:[
            {text:"ब्राह्मण", correct:false},
            {text:"क्षत्रिय", correct:true},
            {text:"वैश्य", correct:false},
            {text:"शूद्र", correct:false},
        ]
    },
    {
        question:"वेदों में किसे 'ऋषि' के रूप में संबोधित किया गया?",
        answers:[
            {text:"देवी", correct:false},
            {text:"देवता", correct:false},
            {text:"मनीषी", correct:true},
            {text:"राजा", correct:false},
        ]
    },
    {
        question:"वेदों के संकलन की प्रक्रिया का नाम क्या था?",
        answers:[
            {text:"वेदविद्या", correct:false},
            {text:"ब्राह्मण", correct:false},
            {text:"संहिता", correct:true},
            {text:"यज्ञ", correct:false},
        ]
    },
    {
        question:"वेदिक साहित्य में किस ग्रंथ को यज्ञों के निर्देश के रूप में माना जाता है?",
        answers:[
            {text:"सामवेद", correct:false},
            {text:"यजुर्वेद", correct:true},
            {text:"ऋग्वेद", correct:false},
            {text:"अथर्ववेद", correct:false},
        ]
    },
    {
        question:"वेदिक काल में जो यज्ञ संपन्न किए जाते थे, उन्हें क्या कहा जाता था?",
        answers:[
            {text:"अग्नि यज्ञ", correct:false},
            {text:"सोम यज्ञ", correct:false},
            {text:"अश्वमेध यज्ञ", correct:true},
            {text:"उपनयन यज्ञ", correct:false},
        ]
    },
    {
        question:"ऋग्वेद के किस मंत्र में 'आदित्य' देवता का उल्लेख किया गया है?",
        answers:[
            {text:"मण्डल 1, सूक्त 1", correct:false},
            {text:"मण्डल 10, सूक्त 85", correct:true},
            {text:"मण्डल 2, सूक्त 2", correct:false},
            {text:"मण्डल 8, सूक्त 7", correct:false},
        ]
    },
    {
        question:"वेदों में 'सोम' के बारे में क्या बताया गया है?",
        answers:[
            {text:"एक देवता", correct:false},
            {text:"एक वृक्ष", correct:false},
            {text:"एक पौधा", correct:true},
            {text:"एक नशा", correct:false},
        ]
    },
    {
        question:"वेदों में 'यज्ञ' का प्रमुख उद्देश्य क्या था?",
        answers:[
            {text:"देवताओं की उपासना", correct:true},
            {text:"प्रकृति की पूजा", correct:false},
            {text:"सामाजिक समरसता", correct:false},
            {text:"धार्मिक शिक्षा", correct:false},
        ]
    },
    {
        question:"वेदिक सभ्यता में 'उपनयन' संस्कार का क्या अर्थ था?",
        answers:[
            {text:"शादी", correct:false},
            {text:"शिक्षा प्रारंभ", correct:true},
            {text:"यज्ञ", correct:false},
            {text:"सामूहिक पूजा", correct:false},
        ]
    },
    {
        question:"वेदिक काल में समाज का सबसे निम्न वर्ग कौन सा था?",
        answers:[
            {text:"ब्राह्मण", correct:false},
            {text:"क्षत्रिय", correct:false},
            {text:"वैश्य", correct:false},
            {text:"शूद्र", correct:true},
        ]
    },
    {
        question:"वेदिक साहित्य में 'आरण्यक' ग्रंथ किससे संबंधित हैं?",
        answers:[
            {text:"शास्त्रों से", correct:false},
            {text:"यज्ञों से", correct:false},
            {text:"वनवास से", correct:true},
            {text:"विवाह से", correct:false},
        ]
    },
    {
        question:"वेदों में एक महत्वपूर्ण मंत्र 'ॐ' किसका प्रतीक है?",
        answers:[
            {text:"ब्रह्म", correct:true},
            {text:"देवता", correct:false},
            {text:"धर्म", correct:false},
            {text:"आकाश", correct:false},
        ]
    },
    {
        question:"वेदिक सभ्यता में महिलाओं की स्थिति के बारे में क्या कहा गया है?",
        answers:[
            {text:"स्वतंत्र", correct:false},
            {text:"दबाव में", correct:false},
            {text:"निरीह", correct:false},
            {text:"समान अधिकार", correct:true},
        ]
    },
    {
        question:"'सामवेद' का मुख्य उद्देश्य क्या था?",
        answers:[
            {text:"यज्ञ के मंत्रों का संकलन", correct:false},
            {text:"शास्त्रों का संग्रह", correct:false},
            {text:"संगीत और गायन", correct:true},
            {text:"नीति शास्त्र", correct:false},
        ]
    },
    {
        question:"यजुर्वेद का प्रमुख विषय क्या था?",
        answers:[
            {text:"मंत्रों का गायन", correct:false},
            {text:"यज्ञ के कर्मकांड", correct:true},
            {text:"धर्म के सिद्धांत", correct:false},
            {text:"भक्ति का उपदेश", correct:false},
        ]
    },
    {
        question:"वेदिक सभ्यता में सबसे पहले किस नगर का उल्लेख मिलता है?",
        answers:[
            {text:"काशी", correct:false},
            {text:"हस्तिनापुर", correct:true},
            {text:"अयोध्या", correct:false},
            {text:"ट्रेने", correct:false},
        ]
    },
    {
        question:"वेदिक सभ्यता में किस देवता को 'वायु' देवता के रूप में पूजा जाता था?",
        answers:[
            {text:"इन्द्र", correct:false},
            {text:"अग्नि", correct:false},
            {text:"वायु", correct:true},
            {text:"सूर्य", correct:false},
        ]
    },
    {
        question: "वेदों में 'ऋषि' शब्द का क्या अर्थ है?",
        answers: [
            { text: "देवता", correct: false },
            { text: "ज्ञानी", correct: true },
            { text: "भगवान", correct: false },
            { text: "यज्ञकर्ता", correct: false },
        ]
    },
    {
        question: "वेदों में 'सप्तसिंधु' किसे कहा जाता था?",
        answers: [
            { text: "सात प्रमुख नदियाँ", correct: true },
            { text: "सात प्रमुख देवता", correct: false },
            { text: "सात प्रमुख कुल", correct: false },
            { text: "सात प्रमुख पर्व", correct: false },
        ]
    },
    {
        question: "वेदों के संकलन के दौरान ऋषियों द्वारा लिखे गए मंत्रों को क्या कहा जाता था?",
        answers: [
            { text: "ब्राह्मण", correct: false },
            { text: "संहिता", correct: true },
            { text: "उपनिषद", correct: false },
            { text: "वेदांग", correct: false },
        ]
    },
    {
        question: "वेदिक सभ्यता के लोग किस प्रकार के यज्ञ करते थे?",
        answers: [
            { text: "सोम यज्ञ", correct: false },
            { text: "अश्वमेध यज्ञ", correct: false },
            { text: "अग्नि यज्ञ", correct: false },
            { text: "सभी", correct: true },
        ]
    },
    {
        question: "वेदिक काल में 'अग्नि' देवता के लिए कौन सा यज्ञ किया जाता था?",
        answers: [
            { text: "सोम यज्ञ", correct: false },
            { text: "अग्निहोत्र यज्ञ", correct: true },
            { text: "आदी यज्ञ", correct: false },
            { text: "शांति यज्ञ", correct: false },
        ]
    },
    {
        question: "वेदिक सभ्यता में जो 'संहिता' की विद्या है, वह किससे संबंधित है?",
        answers: [
            { text: "यज्ञ कर्म", correct: true },
            { text: "संगीत", correct: false },
            { text: "धार्मिक शिक्षा", correct: false },
            { text: "पूजा विधि", correct: false },
        ]
    },
    {
        question: "वेदिक सभ्यता के प्रमुख यज्ञों में कौन सा यज्ञ शामिल था?",
        answers: [
            { text: "सोम यज्ञ", correct: true },
            { text: "पुष्य यज्ञ", correct: false },
            { text: "द्रव्य यज्ञ", correct: false },
            { text: "कोई भी नहीं", correct: false },
        ]
    },
    {
        question: "वेदिक समाज में प्रमुख वर्ण व्यवस्था क्या थी?",
        answers: [
            { text: "ब्राह्मण, क्षत्रिय, वैश्य, शूद्र", correct: true },
            { text: "ब्राह्मण, राजा, व्यापारी, शूद्र", correct: false },
            { text: "क्षत्रिय, वैश्य, व्यापारी, शूद्र", correct: false },
            { text: "सभी वर्णों का कोई निश्चित क्रम नहीं था", correct: false },
        ]
    },
    {
        question: "वेदिक सभ्यता में जीवन की दृष्टि किस पर आधारित थी?",
        answers: [
            { text: "तपस्विता", correct: false },
            { text: "भक्ति", correct: false },
            { text: "कर्म", correct: true },
            { text: "ज्ञान", correct: false },
        ]
    },
    {
        question: "वेदों के 'आरण्यक' क्या होते थे?",
        answers: [
            { text: "समाज के नियम", correct: false },
            { text: "उपनिषदों से जुड़े ग्रंथ", correct: false },
            { text: "यज्ञकांड", correct: false },
            { text: "जंगल में निवास करने वाले लोगों के बारे में ग्रंथ", correct: true },
        ]
    },
    {
        question: "वेदों में किस देवता को 'वर्षा देवता' माना गया है?",
        answers: [
            { text: "इन्द्र", correct: false },
            { text: "अग्नि", correct: false },
            { text: "वरुण", correct: true },
            { text: "सूर्य", correct: false },
        ]
    },
    {
        question: "वेदों के सबसे पुराण भाग को क्या कहा जाता है?",
        answers: [
            { text: "संहिता", correct: true },
            { text: "ब्राह्मण", correct: false },
            { text: "उपनिषद", correct: false },
            { text: "आरण्यक", correct: false },
        ]
    },
    {
        question: "वेदों में गायन और संगीत को किस ग्रंथ में सबसे अधिक महत्व दिया गया है?",
        answers: [
            { text: "ऋग्वेद", correct: false },
            { text: "यजुर्वेद", correct: false },
            { text: "सामवेद", correct: true },
            { text: "अथर्ववेद", correct: false },
        ]
    },
    {
        question: "वेदों में यज्ञ के दौरान प्रसाद के रूप में किस वस्तु की प्रमुखता थी?",
        answers: [
            { text: "जल", correct: false },
            { text: "दूध", correct: false },
            { text: "घी", correct: true },
            { text: "फल", correct: false },
        ]
    },
    {
        question: "वेदों में शिक्षा प्राप्त करने के लिए किस विधि का पालन किया जाता था?",
        answers: [
            { text: "मौखिक शिक्षा", correct: true },
            { text: "लिखित शिक्षा", correct: false },
            { text: "प्रायोगिक शिक्षा", correct: false },
            { text: "ऑनलाइन शिक्षा", correct: false },
        ]
    },
    {
        question: "वेदों के अनुसार किस देवता का क़ोई निश्चित रूप से पूजन नहीं होता था?",
        answers: [
            { text: "इन्द्र", correct: false },
            { text: "अग्नि", correct: false },
            { text: "ब्रह्मा", correct: true },
            { text: "सूर्य", correct: false },
        ]
    },
    {
        question: "वेदों में सबसे पहला धर्माचार्य किसे माना जाता था?",
        answers: [
            { text: "ऋषि वेद", correct: false },
            { text: "मनीषी ब्राह्मण", correct: true },
            { text: "शिष्य गुरू", correct: false },
            { text: "देवता शिव", correct: false },
        ]
    },
    {
        question: "वेदिक सभ्यता के दौरान प्रत्येक कक्षा का अपना क्या था?",
        answers: [
            { text: "धर्म", correct: false },
            { text: "कर्म", correct: false },
            { text: "कार्यक्षेत्र", correct: false },
            { text: "सभी", correct: true },
        ]
    },
    {
        question: "वेदों के मंत्रों का उद्देश्य क्या था?",
        answers: [
            { text: "पूजा", correct: false },
            { text: "यज्ञ", correct: false },
            { text: "शिक्षा", correct: false },
            { text: "शिक्षा और यज्ञ दोनों", correct: true },
        ]
    },
    {
        question: "वेदों में 'आत्मा' शब्द का प्रयोग किस संदर्भ में हुआ है?",
        answers: [
            { text: "शरीर के रूप में", correct: false },
            { text: "आत्मज्ञान के रूप में", correct: true },
            { text: "मानसिक स्थिति", correct: false },
            { text: "शरीर और आत्मा का एक रूप", correct: false },
        ]
    },
    {
        question: "वेदों में 'धर्म' के बारे में क्या कहा गया है?",
        answers: [
            { text: "केवल कर्म ही धर्म है", correct: false },
            { text: "धर्म का पालन ईश्वर के प्रति श्रद्धा से होता है", correct: true },
            { text: "केवल शारीरिक कठिनाइयों से धर्म है", correct: false },
            { text: "धर्म केवल सत्ता प्राप्ति से जुड़ा है", correct: false },
        ]
    },
    {
        question: "वेदों में किस देवता को 'युद्ध देवता' कहा गया है?",
        answers: [
            { text: "इन्द्र", correct: true },
            { text: "अग्नि", correct: false },
            { text: "वरुण", correct: false },
            { text: "वायु", correct: false },
        ]
    },
    {
        question: "वेदिक सभ्यता में लोग किस प्रकार की कृति करते थे?",
        answers: [
            { text: "शिकार", correct: false },
            { text: "कृषि", correct: false },
            { text: "व्यापार", correct: false },
            { text: "सभी", correct: true },
        ]
    },
    {
        question: "वेदिक काल में प्रमुख रूप से किस प्रकार के यज्ञ आयोजित किए जाते थे?",
        answers: [
            { text: "सामूहिक यज्ञ", correct: false },
            { text: "व्यक्तिगत यज्ञ", correct: false },
            { text: "धार्मिक यज्ञ", correct: false },
            { text: "सभी", correct: true },
        ]
    },
    {
        question: "वेदिक समाज में महिलाओं को कौन सा प्रमुख अधिकार था?",
        answers: [
            { text: "विवाह अधिकार", correct: false },
            { text: "शिक्षा का अधिकार", correct: false },
            { text: "धार्मिक कार्यों में भागीदारी", correct: false },
            { text: "सभी", correct: true },
        ]
    },
]