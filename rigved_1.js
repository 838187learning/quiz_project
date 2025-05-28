const questions = [
    {
        question: "ऋग्वेद में कुल कितने मंडल हैं?",
        answers: [
            { text: "4", correct: false },
            { text: "5", correct: false },
            { text: "10", correct: true },
            { text: "12", correct: false }
        ]
    },
    {
        question: "ऋग्वेद के किस मंडल में सबसे अधिक सूक्त हैं?",
        answers: [
            { text: "मंडल 1", correct: true },
            { text: "मंडल 2", correct: false },
            { text: "मंडल 3", correct: false },
            { text: "मंडल 8", correct: false }
        ]
    },
    {
        question: "ऋग्वेद के कितने सूक्त हैं?",
        answers: [
            { text: "1028", correct: true },
            { text: "1052", correct: false },
            { text: "1080", correct: false },
            { text: "1200", correct: false }
        ]
    },
    {
        question: "ऋग्वेद का भाषा किसके द्वारा रचित मानी जाती है?",
        answers: [
            { text: "संस्कृत", correct: true },
            { text: "प्राकृत", correct: false },
            { text: "पाली", correct: false },
            { text: "तमिल", correct: false }
        ]
    },
    {
        question: "ऋग्वेद में मुख्य रूप से कितने देवताओं की स्तुति की जाती है?",
        answers: [
            { text: "33", correct: true },
            { text: "33 हजार", correct: false },
            { text: "33 लाख", correct: false },
            { text: "50", correct: false }
        ]
    },
    {
        question: "ऋग्वेद में कौन सा देवता सबसे अधिक स्तुति प्राप्त करता है?",
        answers: [
            { text: "इन्द्र", correct: false },
            { text: "अग्नि", correct: true },
            { text: "सूर्या", correct: false },
            { text: "वरुण", correct: false }
        ]
    },
    {
        question: "ऋग्वेद के कौन से देवता युद्ध और युद्ध के परिणामों से जुड़े हुए हैं?",
        answers: [
            { text: "इन्द्र", correct: true },
            { text: "सोम", correct: false },
            { text: "वरुण", correct: false },
            { text: "यम", correct: false }
        ]
    },
    {
        question: "ऋग्वेद में किस देवता की सबसे अधिक उपासना की जाती है?",
        answers: [
            { text: "इन्द्र", correct: false },
            { text: "अग्नि", correct: true },
            { text: "सोम", correct: false },
            { text: "वरुण", correct: false }
        ]
    },
    {
        question: "ऋग्वेद के कितने मंत्र हैं?",
        answers: [
            { text: "1080", correct: false },
            { text: "1028", correct: true },
            { text: "2000", correct: false },
            { text: "2500", correct: false }
        ]
    },
    {
        question: "ऋग्वेद का पहला मंत्र किस देवता को समर्पित है?",
        answers: [
            { text: "सूर्य", correct: false },
            { text: "अग्नि", correct: true },
            { text: "इन्द्र", correct: false },
            { text: "सोम", correct: false }
        ]
    },
    {
        question: "ऋग्वेद के मंडल 1 में कितने सूक्त हैं?",
        answers: [
            { text: "100", correct: false },
            { text: "191", correct: true },
            { text: "200", correct: false },
            { text: "1000", correct: false }
        ]
    },
    {
        question: "ऋग्वेद में 'सोम' का क्या प्रतीक है?",
        answers: [
            { text: "जल", correct: false },
            { text: "चंद्रमा", correct: true },
            { text: "अग्नि", correct: false },
            { text: "सूर्य", correct: false }
        ]
    },
    {
        question: "ऋग्वेद में किस देवता को सूर्य का रूप माना गया है?",
        answers: [
            { text: "इन्द्र", correct: false },
            { text: "अग्नि", correct: false },
            { text: "सूर्य", correct: true },
            { text: "वरुण", correct: false }
        ]
    },
    {
        question: "ऋग्वेद के कौन से सूक्त \"सप्तशती\" के रूप में प्रसिद्ध हैं?",
        answers: [
            { text: "सोमसूक्त", correct: true },
            { text: "इन्द्रसूक्त", correct: false },
            { text: "विष्णु सूक्त", correct: false },
            { text: "अग्नि सूक्त", correct: false }
        ]
    },
    {
        question: "ऋग्वेद में 'अग्नि' को किस रूप में पूजा जाता है?",
        answers: [
            { text: "देवता", correct: false },
            { text: "अग्नि देवता", correct: true },
            { text: "पवित्र हवन", correct: false },
            { text: "ज्ञान का प्रतीक", correct: false }
        ]
    },
    {
        question: "ऋग्वेद में कुल कितने सूक्त हैं?",
        answers: [
            { text: "1000", correct: false },
            { text: "1028", correct: true },
            { text: "1200", correct: false },
            { text: "1500", correct: false }
        ]
    },
    {
        question: "ऋग्वेद में किस देवता को युद्ध का देवता माना गया है?",
        answers: [
            { text: "इन्द्र", correct: true },
            { text: "यम", correct: false },
            { text: "सोम", correct: false },
            { text: "अग्नि", correct: false }
        ]
    },
    {
        question: "ऋग्वेद के किस मंडल में इन्द्र के युद्ध और विजय का वर्णन है?",
        answers: [
            { text: "मंडल 1", correct: true },
            { text: "मंडल 2", correct: false },
            { text: "मंडल 3", correct: false },
            { text: "मंडल 7", correct: false }
        ]
    },
    {
        question: "ऋग्वेद के किस सूक्त में सोम रस के महत्व का वर्णन है?",
        answers: [
            { text: "अग्नि सूक्त", correct: false },
            { text: "सोम सूक्त", correct: true },
            { text: "विष्णु सूक्त", correct: false },
            { text: "यम सूक्त", correct: false }
        ]
    },
    {
        question: "ऋग्वेद में सबसे पहले किस देवता की स्तुति की जाती है?",
        answers: [
            { text: "इन्द्र", correct: false },
            { text: "अग्नि", correct: true },
            { text: "सूर्य", correct: false },
            { text: "वरुण", correct: false }
        ]
    },
    {
        question: "ऋग्वेद में इन्द्र के किस युद्ध को प्रमुख रूप से वर्णित किया गया है?",
        answers: [
            { text: "त्रिशंकु युद्ध", correct: false },
            { text: "विजया युद्ध", correct: true },
            { text: "द्रविड युद्ध", correct: false },
            { text: "विराट युद्ध", correct: false }
        ]
    },
    {
        question: "ऋग्वेद के किस मंडल में सोम के पौधे के बारे में चर्चा की गई है?",
        answers: [
            { text: "मंडल 1", correct: false },
            { text: "मंडल 9", correct: true },
            { text: "मंडल 8", correct: false },
            { text: "मंडल 3", correct: false }
        ]
    },
    {
        question: "ऋग्वेद में सबसे महत्वपूर्ण देवता कौन हैं?",
        answers: [
            { text: "इन्द्र और अग्नि", correct: true },
            { text: "सोम और सूर्या", correct: false },
            { text: "इन्द्र और वरुण", correct: false },
            { text: "यम और अग्नि", correct: false }
        ]
    },
    {
        question: "ऋग्वेद में सोम को किस रूप में पूजा जाता है?",
        answers: [
            { text: "देवता", correct: false },
            { text: "राक्षस", correct: false },
            { text: "अमृत", correct: true },
            { text: "ग्रह", correct: false }
        ]
    },
    {
        question: "ऋग्वेद में 'सप्ताश्वरथ' किसका प्रतीक है?",
        answers: [
            { text: "सोम", correct: false },
            { text: "सूर्य", correct: true },
            { text: "इन्द्र", correct: false },
            { text: "यम", correct: false }
        ]
    },
    {
        question: "ऋग्वेद के किस मंडल में अंधकार और प्रकाश का वर्णन है?",
        answers: [
            { text: "मंडल 1", correct: false },
            { text: "मंडल 2", correct: false },
            { text: "मंडल 7", correct: true },
            { text: "मंडल 9", correct: false }
        ]
    },
    {
        question: "ऋग्वेद के कौन से सूक्त में 'नमः' शब्द का प्रयोग होता है?",
        answers: [
            { text: "अग्नि सूक्त", correct: true },
            { text: "इन्द्र सूक्त", correct: false },
            { text: "सोम सूक्त", correct: false },
            { text: "यम सूक्त", correct: false }
        ]
    },
    {
        question: "ऋग्वेद में कौन सा देवता जल का स्वामी है?",
        answers: [
            { text: "इन्द्र", correct: false },
            { text: "वरुण", correct: true },
            { text: "सूर्य", correct: false },
            { text: "अग्नि", correct: false }
        ]
    },
    {
        question: "ऋग्वेद में किस देवता के बारे में कहा गया है कि वह ब्राह्मणों के प्रमुख देवता हैं?",
        answers: [
            { text: "इन्द्र", correct: false },
            { text: "सोम", correct: false },
            { text: "अग्नि", correct: true },
            { text: "ब्रह्मा", correct: false }
        ]
    },
    {
        question: "ऋग्वेद में कौन सा देवता सृष्टि का रचनाकार माना जाता है?",
        answers: [
            { text: "इन्द्र", correct: false },
            { text: "वरुण", correct: false },
            { text: "अग्नि", correct: false },
            { text: "ब्रह्मा", correct: true }
        ]
    },
    {
        question: "ऋग्वेद में किस देवता को आकाश का देवता कहा जाता है?",
        answers: [
            { text: "इन्द्र", correct: false },
            { text: "वरुण", correct: true },
            { text: "अग्नि", correct: false },
            { text: "सोम", correct: false }
        ]
    },
    {
        question: "ऋग्वेद के किस सूक्त में वृषभ (बैल) का वर्णन किया गया है?",
        answers: [
            { text: "अग्नि सूक्त", correct: true },
            { text: "सोम सूक्त", correct: false },
            { text: "इन्द्र सूक्त", correct: false },
            { text: "यम सूक्त", correct: false }
        ]
    },
    {
        question: "ऋग्वेद में यम का क्या कार्य बताया गया है?",
        answers: [
            { text: "आकाश का स्वामी", correct: false },
            { text: "मृत्यु का देवता", correct: true },
            { text: "जल का देवता", correct: false },
            { text: "वर्षा का देवता", correct: false }
        ]
    },
    {
        question: "ऋग्वेद में इन्द्र का मुख्य अस्तित्व किस रूप में है?",
        answers: [
            { text: "जल देवता", correct: false },
            { text: "आकाश देवता", correct: false },
            { text: "युद्ध देवता", correct: true },
            { text: "सूर्य देवता", correct: false }
        ]
    },
    {
        question: "ऋग्वेद में अग्नि को किस रूप में पूजा जाता है?",
        answers: [
            { text: "जल देवता", correct: false },
            { text: "पवित्र देवता", correct: true },
            { text: "अन्न देवता", correct: false },
            { text: "आकाश देवता", correct: false }
        ]
    },
    {
        question: "ऋग्वेद में समुद्र का देवता कौन है?",
        answers: [
            { text: "इन्द्र", correct: false },
            { text: "वरुण", correct: true },
            { text: "अग्नि", correct: false },
            { text: "समुद्र", correct: false }
        ]
    },
    {
        question: "ऋग्वेद के किस सूक्त में उषा (प्रात:काल) का वर्णन है?",
        answers: [
            { text: "अग्नि सूक्त", correct: false },
            { text: "उषा सूक्त", correct: true },
            { text: "सोम सूक्त", correct: false },
            { text: "इन्द्र सूक्त", correct: false }
        ]
    },
    {
        question: "ऋग्वेद में देवताओं का मुख्य कार्य क्या था?",
        answers: [
            { text: "सृष्टि निर्माण", correct: false },
            { text: "मनुष्य की रक्षा", correct: false },
            { text: "मरण के बाद आत्मा की यात्रा", correct: false },
            { text: "सभी उपर्युक्त", correct: true }
        ]
    },
    {
        question: "ऋग्वेद में किस देवता को 'सप्ताश्वरथ' कहा जाता है?",
        answers: [
            { text: "इन्द्र", correct: false },
            { text: "सोम", correct: false },
            { text: "सूर्य", correct: true },
            { text: "वरुण", correct: false }
        ]
    },
    {
        question: "ऋग्वेद के किस सूक्त में 'शांति' की प्राप्ति की कामना की गई है?",
        answers: [
            { text: "इन्द्र सूक्त", correct: false },
            { text: "सोम सूक्त", correct: false },
            { text: "शांति सूक्त", correct: true },
            { text: "विष्णु सूक्त", correct: false }
        ]
    },
    {
        question: "ऋग्वेद में ब्राह्मणों का सर्वोच्च स्थान किसके द्वारा प्राप्त किया गया है?",
        answers: [
            { text: "सोम", correct: false },
            { text: "इन्द्र", correct: false },
            { text: "अग्नि", correct: true },
            { text: "विष्णु", correct: false }
        ]
    },
    {
        question: "ऋग्वेद के किस मंडल में देवताओं के विवाह और उत्पत्ति का उल्लेख है?",
        answers: [
            { text: "मंडल 1", correct: false },
            { text: "मंडल 7", correct: true },
            { text: "मंडल 3", correct: false },
            { text: "मंडल 9", correct: false }
        ]
    },
    {
        question: "ऋग्वेद में किस देवता को राजा और प्रजा के बीच के रिश्ते का प्रहरी माना गया है?",
        answers: [
            { text: "इन्द्र", correct: false },
            { text: "सोम", correct: false },
            { text: "यम", correct: false },
            { text: "वरुण", correct: true }
        ]
    },
    {
        question: "ऋग्वेद के किस सूक्त में 'ऋत' (धर्म) का उपदेश दिया गया है?",
        answers: [
            { text: "अग्नि सूक्त", correct: false },
            { text: "सोम सूक्त", correct: false },
            { text: "वरुण सूक्त", correct: true },
            { text: "विष्णु सूक्त", correct: false }
        ]
    },
    {
        question: "ऋग्वेद में 'सोमरस' को किसके द्वारा लाया जाता है?",
        answers: [
            { text: "इन्द्र", correct: false },
            { text: "सोम", correct: true },
            { text: "वरुण", correct: false },
            { text: "सूर्य", correct: false }
        ]
    },
    {
        question: "ऋग्वेद में किस देवता की पूजा बल, शक्ति और विजय के लिए की जाती थी?",
        answers: [
            { text: "इन्द्र", correct: true },
            { text: "सोम", correct: false },
            { text: "अग्नि", correct: false },
            { text: "यम", correct: false }
        ]
    },
    {
        question: "ऋग्वेद में किस देवता को \"रजस्वला\" के रूप में माना गया है?",
        answers: [
            { text: "इन्द्र", correct: false },
            { text: "यम", correct: false },
            { text: "सूर्य", correct: true },
            { text: "सोम", correct: false }
        ]
    },
    {
        question: "ऋग्वेद के किस मंडल में सोम के लाभ और महत्व का वर्णन किया गया है?",
        answers: [
            { text: "मंडल 1", correct: false },
            { text: "मंडल 9", correct: true },
            { text: "मंडल 7", correct: false },
            { text: "मंडल 3", correct: false }
        ]
    },
    {
        question: "ऋग्वेद में किस देवता को 'नदी' के देवता के रूप में पूजा जाता है?",
        answers: [
            { text: "इन्द्र", correct: false },
            { text: "वरुण", correct: true },
            { text: "अग्नि", correct: false },
            { text: "यम", correct: false }
        ]
    },
    {
        question: "ऋग्वेद में किस देवता को 'कृषि और भूमि' के देवता के रूप में जाना जाता है?",
        answers: [
            { text: "इन्द्र", correct: false },
            { text: "सोम", correct: false },
            { text: "विष्णु", correct: false },
            { text: "पृथ्वी", correct: true }
        ]
    }
];
