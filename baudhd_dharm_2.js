const questions = [
    {
        question: "भगवान बुद्ध का उपदेश किसे दिया था?",
        answers: [
            { text: "संतों को", correct: false },
            { text: "आम लोगों को", correct: true },
            { text: "सम्राट अशोक को", correct: false },
            { text: "राजाओं को", correct: false }
        ]
    },
    {
        question: "‘निवृत्त मार्ग’ का पालन किसके लिए किया जाता है?",
        answers: [
            { text: "शांति की प्राप्ति के लिए", correct: false },
            { text: "आत्मा के निर्वाण के लिए", correct: true },
            { text: "मनुष्य के उन्नति के लिए", correct: false },
            { text: "कर्मों के नाश के लिए", correct: false }
        ]
    },
    {
        question: "भगवान बुद्ध के पहले शिष्य का नाम क्या था?",
        answers: [
            { text: "आनंद", correct: false },
            { text: "महाकश्यप", correct: true },
            { text: "सुजात", correct: false },
            { text: "उरविका", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म में ‘निराकार’ का क्या अर्थ है?",
        answers: [
            { text: "रूपहीन ईश्वर", correct: true },
            { text: "नश्वर जीवन", correct: false },
            { text: "शुद्ध आत्मा", correct: false },
            { text: "साकार रूप में भगवान", correct: false }
        ]
    },
    {
        question: "भगवान बुद्ध के अनुयायी के लिए ‘संघ’ क्या है?",
        answers: [
            { text: "एक मंदिर", correct: false },
            { text: "एक समुदाय", correct: true },
            { text: "एक साधना केंद्र", correct: false },
            { text: "एक बौद्ध स्कूल", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म में ‘परिणाम’ का क्या महत्व है?",
        answers: [
            { text: "कर्मों के फल", correct: true },
            { text: "धार्मिक अनुष्ठान", correct: false },
            { text: "पूजा विधि", correct: false },
            { text: "शांति की स्थिति", correct: false }
        ]
    },
    {
        question: "भगवान बुद्ध ने ‘सम्यक दृष्टि’ का पालन क्यों किया?",
        answers: [
            { text: "आत्मा की शुद्धि के लिए", correct: false },
            { text: "संसार से मुक्ति के लिए", correct: true },
            { text: "ध्यान की प्राप्ति के लिए", correct: false },
            { text: "शांति की स्थिति प्राप्त करने के लिए", correct: false }
        ]
    },
    {
        question: "‘कर्म’ और ‘नियत’ का संबंध क्या है?",
        answers: [
            { text: "कर्मों का फल", correct: true },
            { text: "ध्यान साधना", correct: false },
            { text: "ईश्वर के आदेश", correct: false },
            { text: "किसी कार्य का परिणाम", correct: false }
        ]
    },
    {
        question: "भगवान बुद्ध की शिक्षाओं का संग्रह कहाँ किया गया?",
        answers: [
            { text: "त्रिपिटक", correct: true },
            { text: "गीता", correct: false },
            { text: "वेद", correct: false },
            { text: "कुरआन", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म में ‘सिद्धांत’ क्या होता है?",
        answers: [
            { text: "पूजा विधि", correct: false },
            { text: "आत्मा की शुद्धि के नियम", correct: false },
            { text: "शांति की स्थिति", correct: false },
            { text: "संसार से मुक्ति के सिद्धांत", correct: true }
        ]
    },
    {
        question: "भगवान बुद्ध ने कितने वर्षों तक धर्म प्रचार किया?",
        answers: [
            { text: "15 साल", correct: false },
            { text: "30 साल", correct: false },
            { text: "45 साल", correct: true },
            { text: "50 साल", correct: false }
        ]
    },
    {
        question: "भगवान बुद्ध ने ‘पढ़ाई’ का उपदेश किसे दिया था?",
        answers: [
            { text: "ब्राह्मणों को", correct: false },
            { text: "आम लोगों को", correct: true },
            { text: "राजाओं को", correct: false },
            { text: "संतों को", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म में ‘तत्त्व’ का क्या अर्थ है?",
        answers: [
            { text: "धर्म", correct: false },
            { text: "कर्म", correct: false },
            { text: "सब कुछ", correct: true },
            { text: "ईश्वर", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म में ‘निर्वाण’ का क्या उद्देश्य है?",
        answers: [
            { text: "स्वर्ग जाना", correct: false },
            { text: "संसार के दुखों से मुक्ति", correct: true },
            { text: "तपस्वी जीवन जीना", correct: false },
            { text: "ध्यान की प्राप्ति", correct: false }
        ]
    },
    {
        question: "‘माघ मास’ में बौद्ध धर्म में कौन सा महत्वपूर्ण पर्व मनाया जाता है?",
        answers: [
            { text: "बुद्ध पूर्णिमा", correct: false },
            { text: "महासमाधि", correct: true },
            { text: "बुद्ध धम्म", correct: false },
            { text: "माघ मेला", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म के अनुयायी का कार्य क्या होता है?",
        answers: [
            { text: "उपदेश देना", correct: false },
            { text: "ध्यान और साधना करना", correct: true },
            { text: "पूजा अर्चना करना", correct: false },
            { text: "भिक्षाटन करना", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म के अनुसार, ‘अंतरात्मा’ का क्या महत्व है?",
        answers: [
            { text: "शांति की प्राप्ति", correct: false },
            { text: "ईश्वर का दर्शन", correct: false },
            { text: "स्वर्ग का मार्ग", correct: false },
            { text: "आत्मज्ञान", correct: true }
        ]
    },
    {
        question: "बौद्ध धर्म में ‘तीन रत्न’ का क्या अर्थ है?",
        answers: [
            { text: "बुद्ध, धर्म, संघ", correct: true },
            { text: "ध्यान, साधना, पूजा", correct: false },
            { text: "व्रत, तपस्या, भिक्षाटन", correct: false },
            { text: "कर्म, पुण्य, शांति", correct: false }
        ]
    },
    {
        question: "भगवान बुद्ध के अंतिम शब्द क्या थे?",
        answers: [
            { text: "'मुझसे जो पूछा जाएगा, मैं बताऊंगा'", correct: false },
            { text: "'संसार दुखमय है'", correct: false },
            { text: "'आपका ध्यान और साधना ही महत्वपूर्ण है'", correct: false },
            { text: "'आप अपने ही अंदर अपने मार्ग को खोज सकते हैं'", correct: true }
        ]
    },
    {
        question: "बौद्ध धर्म में ‘सुख’ का क्या अर्थ है?",
        answers: [
            { text: "सांसारिक सुख", correct: false },
            { text: "मानसिक शांति", correct: true },
            { text: "ध्यान की प्राप्ति", correct: false },
            { text: "कर्मों का फल", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म में ‘सत्य’ का पालन कैसे किया जाता है?",
        answers: [
            { text: "पूजा विधि से", correct: false },
            { text: "साधना और ध्यान से", correct: true },
            { text: "व्रत और तप से", correct: false },
            { text: "मन की शांति से", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म में ‘संघ’ का क्या कार्य है?",
        answers: [
            { text: "भिक्षाटन करना", correct: false },
            { text: "पूजा करना", correct: false },
            { text: "एक दूसरे की सहायता करना", correct: true },
            { text: "उपदेश देना", correct: false }
        ]
    },
    {
        question: "‘अष्टांग मार्ग’ का पालन करने से किसका लाभ होता है?",
        answers: [
            { text: "सुख की प्राप्ति", correct: false },
            { text: "शांति और ध्यान", correct: true },
            { text: "कर्मों का नाश", correct: false },
            { text: "सम्यक दृष्टि", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म के ‘विनय पिटक’ का प्रमुख विषय क्या है?",
        answers: [
            { text: "ध्यान", correct: false },
            { text: "भिक्षु समुदाय के नियम", correct: true },
            { text: "पूजा विधि", correct: false },
            { text: "शांति साधना", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म के किस ग्रंथ में जीवन और मृत्यु के विषय में उपदेश दिए गए हैं?",
        answers: [
            { text: "त्रिपिटक", correct: true },
            { text: "गीता", correct: false },
            { text: "वेद", correct: false },
            { text: "कुरआन", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म के अनुसार, जीवन में दुख क्यों होता है?",
        answers: [
            { text: "कर्मों के फल", correct: false },
            { text: "सांसारिक मोह", correct: true },
            { text: "मृत्यु", correct: false },
            { text: "सब का होना और न होना", correct: false }
        ]
    },
    {
        question: "'मध्यमार्ग' का पालन बौद्ध धर्म में किस कारण किया जाता है?",
        answers: [
            { text: "संसार से मुक्ति", correct: true },
            { text: "शांति की प्राप्ति", correct: false },
            { text: "ईश्वर की भक्ति", correct: false },
            { text: "ध्यान और साधना", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म में 'कर्म' का क्या महत्व है?",
        answers: [
            { text: "अच्छा कर्म सुख की ओर ले जाता है", correct: true },
            { text: "बुरा कर्म दुख की ओर ले जाता है", correct: false },
            { text: "कर्म एक भ्रम है", correct: false },
            { text: "कर्म और माया का कोई संबंध नहीं", correct: false }
        ]
    },
    {
        question: "'बुद्ध' के अनुयायी किसका पालन करते हैं?",
        answers: [
            { text: "'सत्य'", correct: false },
            { text: "'धर्म'", correct: true },
            { text: "'ध्यान'", correct: false },
            { text: "'सभी सत्य'", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म के अनुसार, किसे 'मुक्ति' मिलती है?",
        answers: [
            { text: "भिक्षु", correct: false },
            { text: "तपस्वी", correct: false },
            { text: "संत", correct: false },
            { text: "ज्ञानी", correct: true }
        ]
    },
    {
        question: "भगवान बुद्ध का जन्म कहां हुआ था?",
        answers: [
            { text: "नेपाल", correct: true },
            { text: "भारत", correct: false },
            { text: "चीन", correct: false },
            { text: "श्रीलंका", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म में 'तीन रत्न' का पालन क्यों किया जाता है?",
        answers: [
            { text: "शांति और सुख के लिए", correct: true },
            { text: "कर्मों का फल", correct: false },
            { text: "ध्यान की प्राप्ति", correct: false },
            { text: "किसी महान शक्ति को पाने के लिए", correct: false }
        ]
    },
    {
        question: "'धम्म' का पालन बौद्ध धर्म में किस उद्देश्य से किया जाता है?",
        answers: [
            { text: "ईश्वर की पूजा", correct: false },
            { text: "आचार और व्यवहार में सुधार", correct: true },
            { text: "संसार से मुक्ति", correct: false },
            { text: "ध्यान की प्राप्ति", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म में 'कर्म' का क्या महत्व है?",
        answers: [
            { text: "पुण्य और पाप", correct: true },
            { text: "मानसिक शांति", correct: false },
            { text: "ध्यान और साधना", correct: false },
            { text: "शारीरिक कष्ट", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म में 'सिद्धि' प्राप्त करने का मार्ग क्या है?",
        answers: [
            { text: "तपस्या", correct: false },
            { text: "ध्यान और साधना", correct: true },
            { text: "पूजा विधि", correct: false },
            { text: "भिक्षाटन", correct: false }
        ]
    },
    {
        question: "भगवान बुद्ध का मुख्य उद्देश्य क्या था?",
        answers: [
            { text: "धर्म प्रचार", correct: false },
            { text: "संसार से मुक्ति", correct: true },
            { text: "भिक्षुओं का पालन", correct: false },
            { text: "शांति की प्राप्ति", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म के अनुसार, 'सत्य' का पालन करने से क्या मिलता है?",
        answers: [
            { text: "शांति और सुख", correct: true },
            { text: "कर्म का फल", correct: false },
            { text: "ध्यान", correct: false },
            { text: "मुक्ति", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म में 'निराकार' की अवधारणा का क्या मतलब है?",
        answers: [
            { text: "किसी रूप या आकार का न होना", correct: true },
            { text: "शांति की प्राप्ति", correct: false },
            { text: "ईश्वर के रूप का न होना", correct: false },
            { text: "कर्म का कोई परिणाम न होना", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म के अनुयायी क्या मानते हैं?",
        answers: [
            { text: "कर्म और धर्म का पालन", correct: false },
            { text: "भगवान का दर्शन", correct: false },
            { text: "शांति और ध्यान", correct: true },
            { text: "पूजा विधि", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म के 'विनय पिटक' का प्रमुख उद्देश्य क्या है?",
        answers: [
            { text: "ध्यान साधना", correct: false },
            { text: "भिक्षु समुदाय के नियमों का पालन", correct: true },
            { text: "पूजा विधि", correct: false },
            { text: "धार्मिक जीवन का पालन", correct: false }
        ]
    },
    {
        question: "भगवान बुद्ध की शिक्षाओं का पालन किसे करना चाहिए?",
        answers: [
            { text: "सभी इंसानों को", correct: true },
            { text: "केवल संतों को", correct: false },
            { text: "केवल भिक्षुओं को", correct: false },
            { text: "सिर्फ राजाओं को", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म में 'विहार' किसके लिए होता है?",
        answers: [
            { text: "पूजा के लिए", correct: false },
            { text: "भिक्षु के रहने के लिए", correct: true },
            { text: "ध्यान के लिए", correct: false },
            { text: "अनुष्ठान के लिए", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म में 'सम्यक दृष्टि' का क्या अर्थ है?",
        answers: [
            { text: "सही विश्वास", correct: false },
            { text: "सही मार्ग", correct: false },
            { text: "सही दृष्टिकोण", correct: true },
            { text: "सही कर्म", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म में 'धम्म चक्क पवत्तन' का क्या महत्व है?",
        answers: [
            { text: "धर्म का प्रचार", correct: true },
            { text: "ध्यान की प्राप्ति", correct: false },
            { text: "पूजा विधि", correct: false },
            { text: "धर्म में अडिग विश्वास", correct: false }
        ]
    },
    {
        question: "'धम्म चक्क पवत्तन' का मतलब क्या है?",
        answers: [
            { text: "धर्म चक्र की घड़ी", correct: false },
            { text: "धर्म का प्रचार करना", correct: true },
            { text: "शांति की स्थापना", correct: false },
            { text: "ध्यान साधना का मार्ग", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म में 'अष्टांग मार्ग' का पालन क्यों किया जाता है?",
        answers: [
            { text: "ध्यान साधना के लिए", correct: false },
            { text: "अच्छे कर्मों के लिए", correct: false },
            { text: "शांति और ज्ञान के लिए", correct: true },
            { text: "स्वर्ग प्राप्ति के लिए", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म में 'निर्वाण' का सिद्धांत क्या है?",
        answers: [
            { text: "शारीरिक सुख", correct: false },
            { text: "संसार से मुक्ति", correct: true },
            { text: "ईश्वर का दर्शन", correct: false },
            { text: "ध्यान साधना", correct: false }
        ]
    },
    {
        question: "भगवान बुद्ध का कौन सा शिष्य उनके ज्ञान का सबसे अच्छा उपदेशक माना जाता है?",
        answers: [
            { text: "आनंद", correct: false },
            { text: "महाकश्यप", correct: false },
            { text: "सारिपुत्र", correct: true },
            { text: "बोधि", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म में 'प्रवचन' का क्या महत्व है?",
        answers: [
            { text: "ध्यान की प्राप्ति", correct: false },
            { text: "समाज सुधार", correct: false },
            { text: "शांति और सुकून", correct: false },
            { text: "धर्म का प्रचार", correct: true }
        ]
    },
    {
        question: "बौद्ध धर्म के अनुयायी 'संग्रह' का पालन क्यों करते हैं?",
        answers: [
            { text: "एकता के लिए", correct: true },
            { text: "शांति के लिए", correct: false },
            { text: "कर्मों के फल के लिए", correct: false },
            { text: "ध्यान और साधना के लिए", correct: false }
        ]
    }
];
