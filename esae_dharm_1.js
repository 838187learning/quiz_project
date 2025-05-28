const questions = [
    {
        question: "ईसाई धर्म के संस्थापक कौन थे?",
        answers: [
            { text: "गौतम बुद्ध", correct: false },
            { text: "ईसा मसीह", correct: true },
            { text: "मोहम्मद साहब", correct: false },
            { text: "भगवान राम", correct: false }
        ]
    },
    {
        question: "ईसाई धर्म का पवित्र ग्रंथ क्या है?",
        answers: [
            { text: "गीता", correct: false },
            { text: "बाइबिल", correct: true },
            { text: "कुरआन", correct: false },
            { text: "तौरा", correct: false }
        ]
    },
    {
        question: "बाइबिल के कितने भाग होते हैं?",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false },
            { text: "4", correct: false }
        ]
    },
    {
        question: "ईसा मसीह का जन्म कहाँ हुआ था?",
        answers: [
            { text: "रोम", correct: false },
            { text: "मक्का", correct: false },
            { text: "बेथलहम", correct: true },
            { text: "मदीना", correct: false }
        ]
    },
    {
        question: "ईसाई धर्म में यीशु मसीह को किस रूप में पूजा जाता है?",
        answers: [
            { text: "भगवान", correct: true },
            { text: "एक संत", correct: false },
            { text: "एक पैगंबर", correct: false },
            { text: "एक शिक्षक", correct: false }
        ]
    },
    {
        question: "ईसा मसीह की माता का नाम क्या था?",
        answers: [
            { text: "लीह", correct: false },
            { text: "हाना", correct: false },
            { text: "मैरी", correct: true },
            { text: "एस्थेर", correct: false }
        ]
    },
    {
        question: "ईसा मसीह की मृत्यु कहाँ हुई थी?",
        answers: [
            { text: "रोम", correct: false },
            { text: "जेरुसलम", correct: true },
            { text: "मक्का", correct: false },
            { text: "बैतलहम", correct: false }
        ]
    },
    {
        question: "ईसाई धर्म के अनुसार ईसा मसीह को किसने क्रूस पर चढ़ाया था?",
        answers: [
            { text: "पीलातुस", correct: true },
            { text: "हेरोद", correct: false },
            { text: "पतरस", correct: false },
            { text: "फिलिप", correct: false }
        ]
    },
    {
        question: "ईसा मसीह की पुनरुत्थान का पर्व कौन सा है?",
        answers: [
            { text: "क्रिसमस", correct: false },
            { text: "पास्का", correct: false },
            { text: "ईस्टर", correct: true },
            { text: "पेंटेकोस्ट", correct: false }
        ]
    },
    {
        question: "ईसाई धर्म में पवित्र आत्मा को क्या माना जाता है?",
        answers: [
            { text: "भगवान का एक रूप", correct: true },
            { text: "एक संत", correct: false },
            { text: "एक पैगंबर", correct: false },
            { text: "एक प्रेरक शक्ति", correct: false }
        ]
    },
    {
        question: "ईसाई धर्म में ‘संत पतरस’ का क्या महत्व है?",
        answers: [
            { text: "वे ईसा मसीह के शिष्य थे", correct: false },
            { text: "वे पहला पोप थे", correct: false },
            { text: "उन्होंने चर्च की नींव रखी", correct: false },
            { text: "सभी उपर्युक्त", correct: true }
        ]
    },
    {
        question: "ईसाई धर्म में बपतिस्मा का क्या महत्व है?",
        answers: [
            { text: "यह मृत्यु का प्रतीक है", correct: false },
            { text: "यह पुनः जन्म का प्रतीक है", correct: true },
            { text: "यह व्रत का प्रतीक है", correct: false },
            { text: "यह प्रार्थना का प्रतीक है", correct: false }
        ]
    },
    {
        question: "ईसाई धर्म का प्रमुख प्रतीक क्या है?",
        answers: [
            { text: "चक्र", correct: false },
            { text: "क्रॉस", correct: true },
            { text: "त्रिशूल", correct: false },
            { text: "मछली", correct: false }
        ]
    },
    {
        question: "‘आध्यात्मिक पुनर्निर्माण’ का मतलब ईसाई धर्म में क्या है?",
        answers: [
            { text: "प्रार्थना", correct: false },
            { text: "माफी और सुधार", correct: true },
            { text: "उपवास", correct: false },
            { text: "उपदेश", correct: false }
        ]
    },
    {
        question: "ईसाई धर्म के अनुसार, ईसा मसीह के पुनरुत्थान के बाद किस दिन को मनाया जाता है?",
        answers: [
            { text: "क्रिसमस", correct: false },
            { text: "ईस्टर", correct: true },
            { text: "वेलेंटाइन डे", correct: false },
            { text: "गुड फ्राइडे", correct: false }
        ]
    },
    {
        question: "‘गुड फ्राइडे’ किसकी याद में मनाया जाता है?",
        answers: [
            { text: "ईसा मसीह की मृत्यु", correct: true },
            { text: "ईसा मसीह का जन्म", correct: false },
            { text: "ईसा मसीह के जीवन", correct: false },
            { text: "ईसा मसीह के जन्म", correct: false }
        ]
    },
    {
        question: "ईसाई धर्म में ‘पोप’ का क्या कार्य है?",
        answers: [
            { text: "चर्च का प्रमुख", correct: true },
            { text: "ईसा मसीह का शिष्य", correct: false },
            { text: "एक संत", correct: false },
            { text: "एक शिक्षक", correct: false }
        ]
    },
    {
        question: "क्रिसमस का पर्व किसकी जयंती के रूप में मनाया जाता है?",
        answers: [
            { text: "संत पतरस", correct: false },
            { text: "ईसा मसीह", correct: true },
            { text: "संत पॉल", correct: false },
            { text: "संत फ्रांसिस", correct: false }
        ]
    },
    {
        question: "इस्लाम और ईसाई धर्म में कौन सा समानता है?",
        answers: [
            { text: "दोनों का पवित्र ग्रंथ है", correct: false },
            { text: "दोनों में ईश्वर की पूजा होती है", correct: false },
            { text: "दोनों धर्मों में पैगंबर की पूजा होती है", correct: false },
            { text: "सभी उपर्युक्त", correct: true }
        ]
    },
    {
        question: "‘पेंटेकोस्ट’ किस पर्व को कहते हैं?",
        answers: [
            { text: "ईसा मसीह का पुनरुत्थान", correct: false },
            { text: "संतों का पर्व", correct: false },
            { text: "पवित्र आत्मा का आगमन", correct: true },
            { text: "मसीही धर्म की स्थापना", correct: false }
        ]
    },
    {
        question: "बाइबिल का पुराना भाग किसके बारे में है?",
        answers: [
            { text: "ईसा मसीह के बारे में", correct: false },
            { text: "धर्म के नियमों के बारे में", correct: false },
            { text: "इज़राइल के इतिहास और नियमों के बारे में", correct: true },
            { text: "सभी उपर्युक्त", correct: false }
        ]
    },
    {
        question: "बाइबिल के नए भाग में किसका वर्णन है?",
        answers: [
            { text: "ईसा मसीह का जीवन", correct: false },
            { text: "ईसा मसीह की शिक्षा", correct: false },
            { text: "ईसा मसीह की मृत्यु और पुनरुत्थान", correct: false },
            { text: "सभी उपर्युक्त", correct: true }
        ]
    },
    {
        question: "ईसाई धर्म में ‘विपत्ति का दिन’ किसे कहा जाता है?",
        answers: [
            { text: "गुड फ्राइडे", correct: true },
            { text: "क्रिसमस", correct: false },
            { text: "ईस्टर", correct: false },
            { text: "पास्का", correct: false }
        ]
    },
    {
        question: "ईसा मसीह के अनुसार, भगवान के राज्य में कौन प्रवेश करेगा?",
        answers: [
            { text: "पापी", correct: false },
            { text: "गरीब", correct: false },
            { text: "निर्दोष और शुद्ध दिल वाले", correct: true },
            { text: "राजा", correct: false }
        ]
    },
    {
        question: "ईसाई धर्म में ‘बपतिस्मा’ क्यों किया जाता है?",
        answers: [
            { text: "शुद्धता के लिए", correct: false },
            { text: "ईश्वर के मार्ग पर चलने के लिए", correct: false },
            { text: "अपने पापों को धोने के लिए", correct: false },
            { text: "सभी उपर्युक्त", correct: true }
        ]
    },
    {
        question: "किसे ईसाई धर्म में 'गॉस्पल' कहा जाता है?",
        answers: [
            { text: "बाइबिल", correct: false },
            { text: "ईसा मसीह के उपदेश", correct: true },
            { text: "प्रार्थना", correct: false },
            { text: "चर्च", correct: false }
        ]
    },
    {
        question: "ईसाई धर्म में 'प्रभु के प्रार्थना' को क्या कहते हैं?",
        answers: [
            { text: "Our Father", correct: false },
            { text: "Hail Mary", correct: false },
            { text: "Lord's Prayer", correct: true },
            { text: "Ave Maria", correct: false }
        ]
    },
    {
        question: "‘महासंप्रेषण’ (Great Commission) का क्या अर्थ है?",
        answers: [
            { text: "ईसा मसीह का संदेश फैलाना", correct: true },
            { text: "चर्च का निर्माण करना", correct: false },
            { text: "मसीह की मृत्यु का प्रचार करना", correct: false },
            { text: "पवित्र आत्मा की पूजा करना", correct: false }
        ]
    },
    {
        question: "'एवं आमीन' का क्या अर्थ है?",
        answers: [
            { text: "धन्यवाद", correct: false },
            { text: "शांति", correct: false },
            { text: "यही सच है", correct: true },
            { text: "भगवान की पूजा", correct: false }
        ]
    },
    {
        question: "‘संत पॉल’ को किस कारण से जाना जाता है?",
        answers: [
            { text: "उन्होंने ईसाई धर्म का प्रचार किया", correct: true },
            { text: "उन्होंने चर्च की नींव रखी", correct: false },
            { text: "उन्होंने बाइबिल लिखी", correct: false },
            { text: "उन्होंने क्रूस पर चढ़कर मृत्यु प्राप्त की", correct: false }
        ]
    },
    {
        question: "ईसा मसीह के अनुयायी किसे कहा जाता है?",
        answers: [
            { text: "ईसाई", correct: true },
            { text: "मुसलमान", correct: false },
            { text: "हिंदू", correct: false },
            { text: "सिख", correct: false }
        ]
    },
    {
        question: "ईसाई धर्म में शांति का प्रतीक क्या है?",
        answers: [
            { text: "क्रॉस", correct: false },
            { text: "सफेद कबूतर", correct: true },
            { text: "पैगंबर का चित्र", correct: false },
            { text: "बाइबिल", correct: false }
        ]
    },
    {
        question: "चर्च की सबसे महत्वपूर्ण संरचना क्या है?",
        answers: [
            { text: "क्रॉस", correct: false },
            { text: "वेदी", correct: true },
            { text: "घंटी", correct: false },
            { text: "चित्र", correct: false }
        ]
    },
    {
        question: "ईसाई धर्म में ‘प्रेरणा’ का क्या अर्थ है?",
        answers: [
            { text: "भगवान की प्रेरणा से मनुष्य को मार्गदर्शन मिलना", correct: true },
            { text: "संतों का प्रेरित होना", correct: false },
            { text: "बाइबिल का लिखना", correct: false },
            { text: "उपवास रखना", correct: false }
        ]
    },
    {
        question: "ईसाई धर्म के अनुसार, अंतिम न्याय का दिन किसे कहा जाता है?",
        answers: [
            { text: "आकाशगंगा", correct: false },
            { text: "दिन-समाप्ति", correct: false },
            { text: "यम का दिन", correct: false },
            { text: "अंतिम दिन", correct: true }
        ]
    },
    {
        question: "ईसाई धर्म में ‘मसीह की महिमा’ क्या होती है?",
        answers: [
            { text: "ईसा मसीह का जीवन", correct: false },
            { text: "उनका जन्म और पुनरुत्थान", correct: false },
            { text: "उनके अद्भुत कार्य और चमत्कार", correct: false },
            { text: "सभी उपर्युक्त", correct: true }
        ]
    },
    {
        question: "ईसाई धर्म में कौन सा त्योहार विशेष रूप से ईसा मसीह के जन्म से जुड़ा हुआ है?",
        answers: [
            { text: "ईस्टर", correct: false },
            { text: "क्रिसमस", correct: true },
            { text: "गॉस्पल", correct: false },
            { text: "पास्का", correct: false }
        ]
    },
    {
        question: "किसे ईसाई धर्म में 'लॉर्ड' कहा जाता है?",
        answers: [
            { text: "ईसा मसीह", correct: true },
            { text: "संत पतरस", correct: false },
            { text: "संत पॉल", correct: false },
            { text: "यीशु", correct: false }
        ]
    },
    {
        question: "क्रिसमस का पर्व किस तिथि को मनाया जाता है?",
        answers: [
            { text: "25 दिसंबर", correct: true },
            { text: "1 जनवरी", correct: false },
            { text: "14 अप्रैल", correct: false },
            { text: "31 अक्टूबर", correct: false }
        ]
    },
    {
        question: "ईसाई धर्म में उपास्य देवता कौन हैं?",
        answers: [
            { text: "पवित्र आत्मा, ईसा मसीह और भगवान", correct: true },
            { text: "यीशु और संत पॉल", correct: false },
            { text: "पवित्र आत्मा और संत पतरस", correct: false },
            { text: "ईसा मसीह और संत ल्यूक", correct: false }
        ]
    },
    {
        question: "ईसाई धर्म में व्रत या उपवास का क्या उद्देश्य होता है?",
        answers: [
            { text: "मन की शुद्धि", correct: false },
            { text: "माफी मांगना", correct: false },
            { text: "ईश्वर के मार्ग पर चलना", correct: false },
            { text: "सभी उपर्युक्त", correct: true }
        ]
    },
    {
        question: "संत पॉल की कितनी पत्रिकाएँ बाइबिल में हैं?",
        answers: [
            { text: "10", correct: false },
            { text: "14", correct: true },
            { text: "5", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "बाइबिल के पुराने विधान में कितने किताबें हैं?",
        answers: [
            { text: "10", correct: false },
            { text: "39", correct: true },
            { text: "27", correct: false },
            { text: "66", correct: false }
        ]
    },
    {
        question: "ईसाई धर्म के अनुयायी किस दिन रविवार को चर्च जाते हैं?",
        answers: [
            { text: "पूजा के लिए", correct: true },
            { text: "प्रार्थना के लिए", correct: false },
            { text: "उपवास के लिए", correct: false },
            { text: "सभी उपर्युक्त", correct: false }
        ]
    },
    {
        question: "ईसा मसीह ने कितने प्रमुख उपदेश दिए थे?",
        answers: [
            { text: "5", correct: false },
            { text: "7", correct: false },
            { text: "10", correct: true },
            { text: "12", correct: false }
        ]
    },
    {
        question: "ईसाई धर्म में किसे ‘संत’ कहा जाता है?",
        answers: [
            { text: "केवल भगवान", correct: false },
            { text: "केवल पवित्र आत्मा", correct: false },
            { text: "केवल ईसा मसीह", correct: false },
            { text: "पवित्र जीवन जीने वाले लोग", correct: true }
        ]
    },
    {
        question: "ईसाई धर्म में ‘नया विधान’ क्या है?",
        answers: [
            { text: "सृष्टि का सृजन", correct: false },
            { text: "ईसा मसीह का जीवन और उपदेश", correct: true },
            { text: "धर्म के नियम", correct: false },
            { text: "पुराने नियम के अध्याय", correct: false }
        ]
    },
    {
        question: "बाइबिल के नए विधान में कितनी किताबें हैं?",
        answers: [
            { text: "27", correct: true },
            { text: "39", correct: false },
            { text: "15", correct: false },
            { text: "5", correct: false }
        ]
    },
    {
        question: "ईसा मसीह के साथ कितने शिष्य थे?",
        answers: [
            { text: "12", correct: true },
            { text: "10", correct: false },
            { text: "15", correct: false },
            { text: "5", correct: false }
        ]
    },
    {
        question: "ईसाई धर्म में ‘पाप’ से मुक्ति के लिए क्या किया जाता है?",
        answers: [
            { text: "उपवास", correct: false },
            { text: "बपतिस्मा", correct: true },
            { text: "प्रार्थना", correct: false },
            { text: "सभी उपर्युक्त", correct: false }
        ]
    }
];
