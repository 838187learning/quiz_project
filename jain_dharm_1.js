const questions = [
    {
        question: "जैन धर्म के संस्थापक कौन थे?",
        answers: [
            {text: "महावीर स्वामी", correct: true},
            {text: "गौतम बुद्ध", correct: false},
            {text: "पतंजलि", correct: false},
            {text: "रामकृष्ण परमहंस", correct: false}
        ]
    },
    {
        question: "महावीर स्वामी का जन्म कहाँ हुआ था?",
        answers: [
            {text: "लुंबिनी", correct: false},
            {text: "कुंडलपुर", correct: true},
            {text: "पैटरल", correct: false},
            {text: "वशाली", correct: false}
        ]
    },
    {
        question: "महावीर स्वामी का वास्तविक नाम क्या था?",
        answers: [
            {text: "सिद्धार्थ", correct: false},
            {text: "महावीर", correct: false},
            {text: "वर्धमान", correct: true},
            {text: "अर्जुन", correct: false}
        ]
    },
    {
        question: "महावीर स्वामी ने कब निर्वाण प्राप्त किया था?",
        answers: [
            {text: "527 ई.पू.", correct: true},
            {text: "500 ई.पू.", correct: false},
            {text: "400 ई.पू.", correct: false},
            {text: "350 ई.पू.", correct: false}
        ]
    },
    {
        question: "जैन धर्म के अनुसार, धर्म का पालन करने का मुख्य उद्देश्य क्या है?",
        answers: [
            {text: "आस्तिकता", correct: false},
            {text: "अहिंसा", correct: true},
            {text: "भक्ति", correct: false},
            {text: "समृद्धि", correct: false}
        ]
    },
    {
        question: "जैन धर्म के अनुयायी कितने मुख्य सिद्धांतों का पालन करते हैं?",
        answers: [
            {text: "3", correct: false},
            {text: "5", correct: true},
            {text: "7", correct: false},
            {text: "6", correct: false}
        ]
    },
    {
        question: "जैन धर्म में अहिंसा के सिद्धांत को क्या कहते हैं?",
        answers: [
            {text: "शांति", correct: false},
            {text: "अहिंसा परमो धर्म", correct: true},
            {text: "सत्य", correct: false},
            {text: "कर्म", correct: false}
        ]
    },
    {
        question: "जैन धर्म में 'अशोक' के शिलालेखों में किस धर्म का उल्लेख किया गया था?",
        answers: [
            {text: "बौद्ध धर्म", correct: false},
            {text: "जैन धर्म", correct: true},
            {text: "हिन्दू धर्म", correct: false},
            {text: "कोई नहीं", correct: false}
        ]
    },
    {
        question: "जैन धर्म के पाँच सिद्धांतों में से एक सिद्धांत क्या है?",
        answers: [
            {text: "मांसाहार", correct: false},
            {text: "अहिंसा", correct: true},
            {text: "व्यापार", correct: false},
            {text: "पूजा", correct: false}
        ]
    },
    {
        question: "जैन धर्म में जिनेन्द्र के क्या अर्थ हैं?",
        answers: [
            {text: "भगवान", correct: false},
            {text: "तत्वज्ञानी", correct: false},
            {text: "जैन भगवान", correct: true},
            {text: "व्रती", correct: false}
        ]
    },
    {
        question: "जैन धर्म का प्रमुख ग्रंथ क्या है?",
        answers: [
            {text: "त्रिपिटक", correct: false},
            {text: "गीता", correct: false},
            {text: "आगम", correct: true},
            {text: "उपनिषद", correct: false}
        ]
    },
    {
        question: "जैन धर्म के अनुयायी किसका पालन करते हैं?",
        answers: [
            {text: "पंच महाव्रत", correct: true},
            {text: "पंच कर्म", correct: false},
            {text: "पंच पूजा", correct: false},
            {text: "पंच आत्मा", correct: false}
        ]
    },
    {
        question: "महावीर स्वामी की जीवित अवस्था में कौन उनके प्रमुख शिष्य थे?",
        answers: [
            {text: "गौतम", correct: true},
            {text: "श्रीनाथ", correct: false},
            {text: "वासुपूज्य", correct: false},
            {text: "आनंद", correct: false}
        ]
    },
    {
        question: "जैन धर्म में 'न्याय' के सिद्धांत को क्या कहा जाता है?",
        answers: [
            {text: "कर्म सिद्धांत", correct: false},
            {text: "पर्यावरण सिद्धांत", correct: false},
            {text: "द्वैत सिद्धांत", correct: false},
            {text: "सम्यक दर्शन", correct: true}
        ]
    },
    {
        question: "जैन धर्म में 'केवलज्ञान' का क्या अर्थ है?",
        answers: [
            {text: "ज्ञान प्राप्ति", correct: false},
            {text: "परमात्मा का अनुभव", correct: true},
            {text: "कर्म का फल", correct: false},
            {text: "शरीर का दर्शन", correct: false}
        ]
    },
    {
        question: "जैन धर्म के अनुसार, संसार के दुखों से मुक्ति पाने का उपाय क्या है?",
        answers: [
            {text: "भक्ति", correct: false},
            {text: "तप", correct: false},
            {text: "ज्ञान और ध्यान", correct: true},
            {text: "कर्म", correct: false}
        ]
    },
    {
        question: "जैन धर्म में \"पंच महाव्रत\" क्या हैं?",
        answers: [
            {text: "अहिंसा, सत्य, अस्तेय, ब्रह्मचर्य, अपरिग्रह", correct: true},
            {text: "अहिंसा, सत्य, त्याग, ब्रह्मचर्य, निःस्वार्थता", correct: false},
            {text: "सत्य, शांति, अहिंसा, शुद्धि, ज्ञान", correct: false},
            {text: "कर्म, भक्ति, ज्ञान, तप, शांति", correct: false}
        ]
    },
    {
        question: "महावीर स्वामी के पूर्व जैन तीर्थंकर कौन थे?",
        answers: [
            {text: "श्रीराम", correct: false},
            {text: "ऋषभदेव", correct: true},
            {text: "वासुपूज्य", correct: false},
            {text: "भगवान कृष्ण", correct: false}
        ]
    },
    {
        question: "जैन धर्म के अनुयायी किस प्रकार के भोजन से बचते हैं?",
        answers: [
            {text: "दूध", correct: false},
            {text: "मांसाहार", correct: true},
            {text: "फल", correct: false},
            {text: "ताजे खाद्य पदार्थ", correct: false}
        ]
    },
    {
        question: "जैन धर्म में 'तप' का क्या महत्व है?",
        answers: [
            {text: "आत्मा की शुद्धि", correct: true},
            {text: "समृद्धि की प्राप्ति", correct: false},
            {text: "सामाजिक स्थिति", correct: false},
            {text: "शिक्षा की प्राप्ति", correct: false}
        ]
    },
    {
        question: "जैन धर्म के अनुसार, किसे 'महाव्रत' कहा जाता है?",
        answers: [
            {text: "पाँच प्रमुख नियम", correct: true},
            {text: "पवित्रता", correct: false},
            {text: "ब्राह्मण", correct: false},
            {text: "जैन भगवान", correct: false}
        ]
    },
    {
        question: "जैन धर्म में 'सिद्धार्थ' का क्या अर्थ है?",
        answers: [
            {text: "ज्ञान का पथ", correct: false},
            {text: "मुक्ति प्राप्ति", correct: true},
            {text: "सिद्धता", correct: false},
            {text: "स्वाभाविक रूप", correct: false}
        ]
    },
    {
        question: "जैन धर्म में 'सम्यक दर्शन' का क्या अर्थ है?",
        answers: [
            {text: "सही दृष्टिकोण", correct: true},
            {text: "सच्चा ज्ञान", correct: false},
            {text: "सत्य बोलना", correct: false},
            {text: "तपस्या", correct: false}
        ]
    },
    {
        question: "जैन धर्म में 'अपरिग्रह' का क्या अर्थ है?",
        answers: [
            {text: "स्वामित्व से दूर रहना", correct: true},
            {text: "भक्ति", correct: false},
            {text: "सत्य बोलना", correct: false},
            {text: "शांति का पालन करना", correct: false}
        ]
    },
    {
        question: "महावीर स्वामी के द्वारा दिए गए 'अहिंसा' के सिद्धांत के अनुसार, क्या करना चाहिए?",
        answers: [
            {text: "दूसरों को दंडित करना", correct: false},
            {text: "किसी भी प्रकार का हिंसक कार्य न करना", correct: true},
            {text: "केवल ज्ञान प्राप्त करना", correct: false},
            {text: "ध्यान और तपस्या में लीन रहना", correct: false}
        ]
    },
    {
        question: "जैन धर्म के अनुयायी कब 'दीक्षा' लेते हैं?",
        answers: [
            { text: "विवाह के समय", correct: false },
            { text: "जीवन के अंत में", correct: false },
            { text: "धार्मिक अनुभव के समय", correct: true },
            { text: "बचपन में", correct: false }
        ]
    },
    {
        question: "जैन धर्म के अनुसार, 'कर्म' किस प्रकार की प्रक्रिया है?",
        answers: [
            { text: "केवल कर्मों का शुद्धिकरण", correct: false },
            { text: "पुण्य और पाप का परिणाम", correct: true },
            { text: "आत्मा की शक्ति का निर्धारण", correct: false },
            { text: "शरीर के लिए उपयुक्त क्रियाएँ", correct: false }
        ]
    },
    {
        question: "जैन धर्म के अनुयायी किस प्रकार के आहार का पालन करते हैं?",
        answers: [
            { text: "शाकाहारी", correct: true },
            { text: "मांसाहारी", correct: false },
            { text: "केवल फलाहारी", correct: false },
            { text: "केवल शाकाहारी और दूध", correct: false }
        ]
    },
    {
        question: "महावीर स्वामी का उपदेश किसे 'जीवों का उद्धार' के रूप में दिया जाता है?",
        answers: [
            { text: "ब्राह्मणों को", correct: false },
            { text: "सभी प्राणियों को", correct: true },
            { text: "केवल मनुष्यों को", correct: false },
            { text: "केवल तीर्थंकारों को", correct: false }
        ]
    },
    {
        question: "जैन धर्म के अनुयायी किस प्रकार की पूजा करते हैं?",
        answers: [
            { text: "मूर्तिपूजा", correct: false },
            { text: "अग्निपूजा", correct: false },
            { text: "ध्यान और तप", correct: true },
            { text: "बलिपूजा", correct: false }
        ]
    },
    {
        question: "जैन धर्म में 'केवलज्ञान' का स्थान क्या है?",
        answers: [
            { text: "आत्मज्ञान", correct: true },
            { text: "भगवान का ज्ञान", correct: false },
            { text: "प्रकृति का ज्ञान", correct: false },
            { text: "सभी", correct: false }
        ]
    },
    {
        question: "जैन धर्म में 'शुद्धि' का क्या मतलब है?",
        answers: [
            { text: "जीवन की सरलता", correct: false },
            { text: "ध्यान और तप से आत्मा की शुद्धि", correct: true },
            { text: "यज्ञ के द्वारा शुद्धि", correct: false },
            { text: "मानसिक शांति", correct: false }
        ]
    },
    {
        question: "जैन धर्म के अनुयायी किस पर्व को प्रमुख मानते हैं?",
        answers: [
            { text: "दीपावली", correct: false },
            { text: "महावीर जयंती", correct: true },
            { text: "रक्षाबंधन", correct: false },
            { text: "होली", correct: false }
        ]
    },
    {
        question: "महावीर स्वामी के कितने प्रमुख शिष्य थे?",
        answers: [
            { text: "10", correct: false },
            { text: "11", correct: false },
            { text: "12", correct: true },
            { text: "14", correct: false }
        ]
    },
    {
        question: "जैन धर्म में 'सिद्ध' किसे कहा जाता है?",
        answers: [
            { text: "निर्वाण प्राप्त संत", correct: true },
            { text: "कर्मों से मुक्त व्यक्ति", correct: false },
            { text: "तपस्वी", correct: false },
            { text: "ज्ञान प्राप्त व्यक्ति", correct: false }
        ]
    },
    {
        question: "जैन धर्म में 'अहिंसा' के सिद्धांत को कहाँ से लिया गया था?",
        answers: [
            { text: "शास्त्रों से", correct: false },
            { text: "समाज से", correct: false },
            { text: "महावीर स्वामी से", correct: true },
            { text: "बौद्ध धर्म से", correct: false }
        ]
    },
    {
        question: "जैन धर्म के अनुयायी किसे 'जीव' के रूप में मानते हैं?",
        answers: [
            { text: "केवल मनुष्य", correct: false },
            { text: "केवल जानवर", correct: false },
            { text: "सभी प्राणी", correct: true },
            { text: "कोई नहीं", correct: false }
        ]
    },
    {
        question: "जैन धर्म के अनुसार, 'पंचमृत' में क्या-क्या शामिल होता है?",
        answers: [
            { text: "दूध, शहद, घी, दही, चीनी", correct: true },
            { text: "दूध, घी, शहद, फल, शक्कर", correct: false },
            { text: "पानी, घी, दही, शहद, नमक", correct: false },
            { text: "दूध, चीनी, शहद, घी, फल", correct: false }
        ]
    },
    {
        question: "महावीर स्वामी के शिक्षा का मुख्य उद्देश्य क्या था?",
        answers: [
            { text: "आत्मज्ञान", correct: true },
            { text: "भक्ति", correct: false },
            { text: "सांसारिक सुख", correct: false },
            { text: "समाज की सेवा", correct: false }
        ]
    },
    {
        question: "जैन धर्म के अनुसार, 'सामयिक' का क्या अर्थ है?",
        answers: [
            { text: "ज्ञान की प्राप्ति", correct: false },
            { text: "आत्मनिर्भरता", correct: false },
            { text: "शरीर के लिए उपयुक्त क्रियाएँ", correct: false },
            { text: "सम्यक दृष्टि के अनुसार जीवन जीना", correct: true }
        ]
    },
    {
        question: "जैन धर्म में 'व्रत' के पालन का क्या उद्देश्य है?",
        answers: [
            { text: "मानसिक शांति", correct: false },
            { text: "शारीरिक स्वास्थ्य", correct: false },
            { text: "आत्मा की शुद्धि", correct: true },
            { text: "पुण्य कमाना", correct: false }
        ]
    },
    {
        question: "जैन धर्म के अनुसार, 'उत्सव' का महत्व क्या है?",
        answers: [
            { text: "समाज के साथ खुशी बांटना", correct: false },
            { text: "धार्मिक अनुष्ठान करना", correct: true },
            { text: "आस्था का प्रचार करना", correct: false },
            { text: "ज्ञान का प्रचार करना", correct: false }
        ]
    },
    {
        question: "जैन धर्म में 'क्षमा' का क्या महत्व है?",
        answers: [
            { text: "आत्मा के विकास का हिस्सा", correct: true },
            { text: "शरीर के स्वास्थ्य का ध्यान", correct: false },
            { text: "समाज के कल्याण के लिए", correct: false },
            { text: "सभी", correct: false }
        ]
    },
    {
        question: "जैन धर्म में 'नकली सुख' से बचने के लिए क्या करना चाहिए?",
        answers: [
            { text: "केवल भक्ति करना", correct: false },
            { text: "कर्मों से दूर रहना", correct: false },
            { text: "ध्यान और तप का पालन करना", correct: true },
            { text: "व्रत का पालन करना", correct: false }
        ]
    },
    {
        question: "जैन धर्म में 'मुक्ति' को किससे जोड़ा जाता है?",
        answers: [
            { text: "कर्मों से मुक्ति", correct: true },
            { text: "ज्ञान प्राप्ति से मुक्ति", correct: false },
            { text: "भक्ति से मुक्ति", correct: false },
            { text: "सत्य से मुक्ति", correct: false }
        ]
    },
    {
        question: "जैन धर्म में 'तप' का क्या अर्थ है?",
        answers: [
            { text: "शरीर की शुद्धि", correct: false },
            { text: "आत्मा की शुद्धि", correct: true },
            { text: "समाज के कल्याण के लिए", correct: false },
            { text: "भक्ति में लीन होना", correct: false }
        ]
    },
    {
        question: "जैन धर्म में 'आध्यात्मिक ज्ञान' का क्या महत्व है?",
        answers: [
            { text: "ज्ञान से मुक्ति मिलती है", correct: false },
            { text: "कर्मों का परिणाम सिखाता है", correct: false },
            { text: "मानसिक शांति का स्रोत है", correct: false },
            { text: "सभी", correct: true }
        ]
    },
    {
        question: "जैन धर्म में 'आध्यात्मिक साधना' किसके द्वारा की जाती है?",
        answers: [
            { text: "संतों द्वारा", correct: false },
            { text: "समाज द्वारा", correct: false },
            { text: "सभी व्यक्तियों द्वारा", correct: true },
            { text: "विशेष रूप से ब्राह्मणों द्वारा", correct: false }
        ]
    },
    {
        question: "जैन धर्म में 'अंतरात्मा' के बारे में क्या माना जाता है?",
        answers: [
            { text: "आत्मा आत्मनिर्भर होती है", correct: true },
            { text: "आत्मा केवल संतों में होती है", correct: false },
            { text: "आत्मा का अस्तित्व केवल ईश्वर में है", correct: false },
            { text: "आत्मा मनुष्य से जुड़ी नहीं होती", correct: false }
        ]
    },
    {
        question: "महावीर स्वामी की शिक्षा का क्या उद्देश्य था?",
        answers: [
            { text: "सांसारिक सुख", correct: false },
            { text: "ब्राह्मणों का कल्याण", correct: false },
            { text: "आत्मज्ञान और मुक्ति", correct: true },
            { text: "केवल भक्ति", correct: false }
        ]
    }
];