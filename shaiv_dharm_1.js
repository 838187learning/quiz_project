const questions = [
    {
        question: "शिव के प्रमुख गवाह कौन हैं?",
        answers: [
            { text: "ब्रह्मा", correct: false },
            { text: "विष्णु", correct: false },
            { text: "गणेश", correct: true },
            { text: "नारायण", correct: false }
        ]
    },
    {
        question: "शिव के प्रमुख वाहन का नाम क्या है?",
        answers: [
            { text: "सिंह", correct: false },
            { text: "मोर", correct: false },
            { text: "बैल", correct: true },
            { text: "हाथी", correct: false }
        ]
    },
    {
        question: "शिव का प्रसिद्ध मणि क्या है?",
        answers: [
            { text: "रत्न", correct: false },
            { text: "कालगुंब", correct: false },
            { text: "नीलकंठ", correct: false },
            { text: "चंद्रमा", correct: true }
        ]
    },
    {
        question: "शिव के परम भक्त कौन थे?",
        answers: [
            { text: "रावण", correct: true },
            { text: "अर्जुन", correct: false },
            { text: "श्री कृष्ण", correct: false },
            { text: "राम", correct: false }
        ]
    },
    {
        question: "शिव की तपस्या में प्रमुख स्थान क्या है?",
        answers: [
            { text: "काशी", correct: false },
            { text: "कैलाश", correct: true },
            { text: "हरिद्वार", correct: false },
            { text: "इलाहाबाद", correct: false }
        ]
    },
    {
        question: "शिव के प्रिय आभूषण कौन सा है?",
        answers: [
            { text: "त्रिशूल", correct: true },
            { text: "अंगूठी", correct: false },
            { text: "हार", correct: false },
            { text: "मुकुट", correct: false }
        ]
    },
    {
        question: "भगवान शिव का कौन सा रूप सबसे प्रसिद्ध है?",
        answers: [
            { text: "महाकाल", correct: true },
            { text: "पंचमुखी", correct: false },
            { text: "शंकर", correct: false },
            { text: "नागनाथ", correct: false }
        ]
    },
    {
        question: "'रुद्र' का क्या अर्थ है?",
        answers: [
            { text: "मृत्यु", correct: false },
            { text: "प्रलय", correct: false },
            { text: "शिव का उग्र रूप", correct: true },
            { text: "शांति", correct: false }
        ]
    },
    {
        question: "शिव की नगरी कौन सी है?",
        answers: [
            { text: "काशी", correct: true },
            { text: "कैलाश", correct: false },
            { text: "पंढरपूर", correct: false },
            { text: "द्वारका", correct: false }
        ]
    },
    {
        question: "शिव के कितने रूप होते हैं?",
        answers: [
            { text: "तीन", correct: false },
            { text: "चार", correct: true },
            { text: "पांच", correct: false },
            { text: "अठारह", correct: false }
        ]
    },
    {
        question: "'शिवलिंग' का क्या महत्व है?",
        answers: [
            { text: "भगवान शिव का प्रतीक", correct: true },
            { text: "जल का स्रोत", correct: false },
            { text: "पूजा स्थल", correct: false },
            { text: "संतुलन का प्रतीक", correct: false }
        ]
    },
    {
        question: "भगवान शिव की पत्नी कौन हैं?",
        answers: [
            { text: "दुर्गा", correct: false },
            { text: "पार्वती", correct: true },
            { text: "लक्ष्मी", correct: false },
            { text: "सरस्वती", correct: false }
        ]
    },
    {
        question: "शिव के साथ जो देवता हमेशा रहते हैं, उनका नाम क्या है?",
        answers: [
            { text: "विष्णु", correct: false },
            { text: "गणेश", correct: true },
            { text: "सरस्वती", correct: false },
            { text: "भृगु", correct: false }
        ]
    },
    {
        question: "शिव का दूसरा नाम कौन सा है?",
        answers: [
            { text: "नटराज", correct: false },
            { text: "रुद्र", correct: false },
            { text: "शंकर", correct: false },
            { text: "सभी", correct: true }
        ]
    },
    {
        question: "शिव के हाथ में क्या रहता है?",
        answers: [
            { text: "तलवार", correct: false },
            { text: "त्रिशूल", correct: true },
            { text: "धनुष", correct: false },
            { text: "गदा", correct: false }
        ]
    },
    {
        question: "भगवान शिव के द्वारा कौन सा पर्व मनाया जाता है?",
        answers: [
            { text: "शिवरात्रि", correct: true },
            { text: "दीपावली", correct: false },
            { text: "होली", correct: false },
            { text: "दशहरा", correct: false }
        ]
    },
    {
        question: "शिव को कौन सा फल प्रिय है?",
        answers: [
            { text: "नारियल", correct: true },
            { text: "केला", correct: false },
            { text: "आम", correct: false },
            { text: "संतरा", correct: false }
        ]
    },
    {
        question: "शिव के शिष्य कौन थे?",
        answers: [
            { text: "भैरव", correct: false },
            { text: "गोरखनाथ", correct: false },
            { text: "वेदव्यास", correct: false },
            { text: "सभी", correct: true }
        ]
    },
    {
        question: "'नटराज' रूप में शिव का चित्रण किसके रूप में किया गया है?",
        answers: [
            { text: "दिगंबर", correct: false },
            { text: "नृत्य करने वाले", correct: true },
            { text: "तपस्वी", correct: false },
            { text: "शांति", correct: false }
        ]
    },
    {
        question: "शिव का तीसरा नेत्र कहाँ स्थित है?",
        answers: [
            { text: "माथे पर", correct: true },
            { text: "हाथ में", correct: false },
            { text: "पैर में", correct: false },
            { text: "शरीर के हर अंग में", correct: false }
        ]
    },
    {
        question: "भगवान शिव का प्रिय रंग क्या है?",
        answers: [
            { text: "सफेद", correct: false },
            { text: "काला", correct: true },
            { text: "हरा", correct: false },
            { text: "नीला", correct: false }
        ]
    },
    {
        question: "शिव के कितने प्रमुख उपास्य रूप होते हैं?",
        answers: [
            { text: "एक", correct: false },
            { text: "दो", correct: false },
            { text: "तीन", correct: true },
            { text: "चार", correct: false }
        ]
    },
    {
        question: "भगवान शिव को 'ब्रह्मा' क्यों कहा जाता है?",
        answers: [
            { text: "सृष्टि के निर्माण के कारण", correct: false },
            { text: "पवित्रता के कारण", correct: false },
            { text: "विनाश के कारण", correct: true },
            { text: "सद्गति के कारण", correct: false }
        ]
    },
    {
        question: "शिव के महाप्रभु रूप का क्या नाम है?",
        answers: [
            { text: "महाकाल", correct: true },
            { text: "अर्धनारीश्वर", correct: false },
            { text: "सदाशिव", correct: false },
            { text: "रूद्र", correct: false }
        ]
    },
    {
        question: "भगवान शिव के गीत का नाम क्या है?",
        answers: [
            { text: "शिव गीत", correct: false },
            { text: "रुद्राष्टकश्लोक", correct: true },
            { text: "शंकर गीत", correct: false },
            { text: "शिव महिम्न", correct: false }
        ]
    },
    {
        question: "शिव के रूप में कौन एक देवी का रूप धारण करती है?",
        answers: [
            { text: "काली", correct: true },
            { text: "दुर्गा", correct: false },
            { text: "लक्ष्मी", correct: false },
            { text: "पार्वती", correct: false }
        ]
    },
    {
        question: "शिव के आशीर्वाद से किसे 'ज्ञान' प्राप्त होता है?",
        answers: [
            { text: "ज्ञानेश्वर", correct: false },
            { text: "योगेश्वर", correct: true },
            { text: "पाणिनि", correct: false },
            { text: "श्री कृष्ण", correct: false }
        ]
    },
    {
        question: "शिव के कौन से रूप का संबंध तंत्र-मंत्र से है?",
        answers: [
            { text: "महाकाल", correct: false },
            { text: "शिवलिंग", correct: false },
            { text: "शंकर", correct: false },
            { text: "भैरव", correct: true }
        ]
    },
    {
        question: "भगवान शिव के कौन से एक भक्त ने उन्हें अपनी शक्ति दी थी?",
        answers: [
            { text: "रावण", correct: true },
            { text: "महर्षि मरीचि", correct: false },
            { text: "नंदी", correct: false },
            { text: "भार्गव", correct: false }
        ]
    },
    {
        question: "शिव का कौन सा नाम उनके शांतिकारक रूप से जुड़ा है?",
        answers: [
            { text: "शिवशंकर", correct: true },
            { text: "महाकाल", correct: false },
            { text: "भुवनेश्वर", correct: false },
            { text: "रुद्र", correct: false }
        ]
    },
    {
        question: "भगवान शिव की पूजा के लिए कौन सा व्रत विशेष रूप से किया जाता है?",
        answers: [
            { text: "नववहिनी व्रत", correct: false },
            { text: "शिवरात्रि व्रत", correct: true },
            { text: "एकादशी व्रत", correct: false },
            { text: "पूर्णिमा व्रत", correct: false }
        ]
    },
    {
        question: "शिव की पत्नी पार्वती को किस नाम से भी जाना जाता है?",
        answers: [
            { text: "काली", correct: false },
            { text: "दुर्गा", correct: false },
            { text: "भवानी", correct: true },
            { text: "त्रिपुरा", correct: false }
        ]
    },
    {
        question: "शिव के पार्थिव रूप को किस रूप में पूजा जाता है?",
        answers: [
            { text: "नटराज", correct: false },
            { text: "शिवलिंग", correct: true },
            { text: "त्रिशूल", correct: false },
            { text: "ध्वज", correct: false }
        ]
    },
    {
        question: "शिव के प्रिय कवि कौन थे?",
        answers: [
            { text: "कालिदास", correct: false },
            { text: "तुकाराम", correct: true },
            { text: "कवि सूरदास", correct: false },
            { text: "संत तुकाराम", correct: false }
        ]
    },
    {
        question: "भगवान शिव को 'महादेव' क्यों कहा जाता है?",
        answers: [
            { text: "उनकी महानता के कारण", correct: true },
            { text: "उनके व्रत के कारण", correct: false },
            { text: "उनके तप के कारण", correct: false },
            { text: "उनके शक्तिशाली रूप के कारण", correct: false }
        ]
    },
    {
        question: "शिव के कौन से अवतार को महाकाल के रूप में पूजा जाता है?",
        answers: [
            { text: "शंकर", correct: false },
            { text: "रुद्र", correct: false },
            { text: "त्रिपुरारी", correct: false },
            { text: "कालभैरव", correct: true }
        ]
    },
    {
        question: "भगवान शिव का 'शिव महिमा' किस ग्रंथ में वर्णित है?",
        answers: [
            { text: "भगवद गीता", correct: false },
            { text: "शिव पुराण", correct: true },
            { text: "रामायण", correct: false },
            { text: "महाभारत", correct: false }
        ]
    },
    {
        question: "शिव के कौन से भक्त ने उनका अनुग्रह प्राप्त किया था?",
        answers: [
            { text: "रावण", correct: true },
            { text: "अर्जुन", correct: false },
            { text: "हनुमान", correct: false },
            { text: "श्री कृष्ण", correct: false }
        ]
    },
    {
        question: "शिव के मुख्य मंत्र का नाम क्या है?",
        answers: [
            { text: "ॐ नमः शिवाय", correct: true },
            { text: "राम राम", correct: false },
            { text: "ॐ गणेशाय", correct: false },
            { text: "ॐ भूर्भुवः स्वः", correct: false }
        ]
    },
    {
        question: "शिव के किस रूप में संसार की उत्पत्ति का वर्णन किया जाता है?",
        answers: [
            { text: "महाकाल", correct: false },
            { text: "पंचमुखी शिव", correct: false },
            { text: "अर्धनारीश्वर", correct: true },
            { text: "ब्रह्मा रूप", correct: false }
        ]
    },
    {
        question: "शिव की महिमा किस ग्रंथ में विस्तार से वर्णित है?",
        answers: [
            { text: "शिव पुराण", correct: true },
            { text: "वेद", correct: false },
            { text: "गीता", correct: false },
            { text: "उपनिषद", correct: false }
        ]
    },
    {
        question: "शिव के शरीर में क्या विशेषता है?",
        answers: [
            { text: "उबला हुआ शरीर", correct: false },
            { text: "जटाओं में गंगा", correct: false },
            { text: "नीलकंठ", correct: false },
            { text: "सभी", correct: true }
        ]
    },
    {
        question: "'अर्धनारीश्वर' रूप में शिव के साथ कौन रहती हैं?",
        answers: [
            { text: "लक्ष्मी", correct: false },
            { text: "सरस्वती", correct: false },
            { text: "पार्वती", correct: true },
            { text: "दुर्गा", correct: false }
        ]
    },
    {
        question: "शिव के प्रेम में रावण ने क्या किया था?",
        answers: [
            { text: "शिव की पूजा की", correct: false },
            { text: "शिवलिंग को ताज पहनाया", correct: true },
            { text: "महाकाल की तपस्या की", correct: false },
            { text: "रुद्राष्टक मंत्र को रच", correct: false }
        ]
    },
    {
        question: "शिव ने किस भक्ति के रूप में प्रकट हुए हैं?",
        answers: [
            { text: "वेदों में", correct: false },
            { text: "तंत्र-मंत्र", correct: false },
            { text: "भक्ति के रूप में", correct: true },
            { text: "सभी", correct: false }
        ]
    },
    {
        question: "शिव के मंत्र की पूजा में क्या मुख्य रूप से किया जाता है?",
        answers: [
            { text: "ध्यान और साधना", correct: true },
            { text: "पूजा विधि", correct: false },
            { text: "मंत्र जाप", correct: false },
            { text: "चढ़ावा चढ़ाना", correct: false }
        ]
    },
    {
        question: "शिव के बारे में किस पौराणिक ग्रंथ में विवरण दिया गया है?",
        answers: [
            { text: "श्वेताश्वत उपनिषद", correct: false },
            { text: "शिव महिमा", correct: true },
            { text: "रामायण", correct: false },
            { text: "भगवद गीता", correct: false }
        ]
    },
    {
        question: "भगवान शिव की जो शक्ति होती है, वह किससे जुड़ी होती है?",
        answers: [
            { text: "महाशक्ति", correct: true },
            { text: "शक्ति की पूजा", correct: false },
            { text: "ध्यान और साधना", correct: false },
            { text: "किसी की भी शक्ति", correct: false }
        ]
    },
    {
        question: "शिव के अभिषेक के लिए कौन सा स्थान प्रसिद्ध है?",
        answers: [
            { text: "काशी", correct: true },
            { text: "मथुरा", correct: false },
            { text: "शंकराचार्य", correct: false },
            { text: "कुम्भ मेला", correct: false }
        ]
    },
    {
        question: "भगवान शिव का मुख्य उद्देश्य क्या है?",
        answers: [
            { text: "संसार का उत्पन्न करना", correct: false },
            { text: "पुनर्निर्माण करना", correct: false },
            { text: "निर्माण और विनाश का संतुलन", correct: true },
            { text: "केवल विनाश करना", correct: false }
        ]
    }
];
