const questions = [
    {
        question: "भगवान बुद्ध का जन्म किस स्थान पर हुआ था?",
        answers: [
            { text: "वाराणसी", correct: false },
            { text: "लुंबिनी", correct: true },
            { text: "गया", correct: false },
            { text: "बोधगया", correct: false }
        ]
    },
    {
        question: "भगवान बुद्ध का वास्तविक नाम क्या था?",
        answers: [
            { text: "महात्मा गांधी", correct: false },
            { text: "सिद्धार्थ गौतम", correct: true },
            { text: "महावीर स्वामी", correct: false },
            { text: "कृष्ण", correct: false }
        ]
    },
    {
        question: "भगवान बुद्ध को ज्ञान की प्राप्ति कहां हुई थी?",
        answers: [
            { text: "लुंबिनी", correct: false },
            { text: "सारनाथ", correct: false },
            { text: "बोधगया", correct: true },
            { text: "राजगीर", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म में 'निर्वाण' का क्या अर्थ है?",
        answers: [
            { text: "जीवन का उद्देश्य", correct: false },
            { text: "सुख की प्राप्ति", correct: false },
            { text: "संसार से मुक्ति", correct: true },
            { text: "मृत्यु के बाद स्वर्ग जाना", correct: false }
        ]
    },
    {
        question: "भगवान बुद्ध ने किस वृक्ष के नीचे ज्ञान प्राप्त किया?",
        answers: [
            { text: "पीपल वृक्ष", correct: true },
            { text: "बरगद वृक्ष", correct: false },
            { text: "आम वृक्ष", correct: false },
            { text: "नीम वृक्ष", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म में 'धम्म चक्क पवत्तन सूत्र' को किसने प्रस्तुत किया?",
        answers: [
            { text: "महावीर स्वामी", correct: false },
            { text: "भगवान बुद्ध", correct: true },
            { text: "अर्जुन", correct: false },
            { text: "राम", correct: false }
        ]
    },
    {
        question: "'चार आर्य सत्य' किसके द्वारा उपदेशित किए गए थे?",
        answers: [
            { text: "महात्मा गांधी", correct: false },
            { text: "भगवान बुद्ध", correct: true },
            { text: "महावीर स्वामी", correct: false },
            { text: "श्री कृष्ण", correct: false }
        ]
    },
    {
        question: "'चार आर्य सत्य' में से पहला सत्य क्या है?",
        answers: [
            { text: "दुख का अस्तित्व", correct: true },
            { text: "दुख का कारण", correct: false },
            { text: "दुख का नाश", correct: false },
            { text: "दुख से मुक्ति का मार्ग", correct: false }
        ]
    },
    {
        question: "'नoble eightfold path' के आठ भागों में कौन सा नहीं है?",
        answers: [
            { text: "सही दृष्टिकोण", correct: false },
            { text: "सही वाणी", correct: false },
            { text: "सही तप", correct: true },
            { text: "सही आचरण", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म में 'संस्कृत' का क्या महत्व है?",
        answers: [
            { text: "पूजा का भाषा", correct: false },
            { text: "बौद्ध धर्म के ग्रंथों की भाषा", correct: true },
            { text: "अनुवाद का माध्यम", correct: false },
            { text: "बौद्ध धर्म का मंत्र", correct: false }
        ]
    },
    {
        question: "भगवान बुद्ध ने कितने वर्षों तक उपदेश दिया?",
        answers: [
            { text: "10 वर्ष", correct: false },
            { text: "25 वर्ष", correct: false },
            { text: "45 वर्ष", correct: true },
            { text: "50 वर्ष", correct: false }
        ]
    },
    {
        question: "भगवान बुद्ध का उपदेश देने का मुख्य स्थान कौन सा था?",
        answers: [
            { text: "गंगा", correct: false },
            { text: "सारनाथ", correct: true },
            { text: "मगध", correct: false },
            { text: "काशी", correct: false }
        ]
    },
    {
        question: "भगवान बुद्ध के शिष्य जो पहले भिक्षु बने थे, उनका नाम क्या था?",
        answers: [
            { text: "आनंद", correct: false },
            { text: "सुधर्मा", correct: false },
            { text: "अंजलि", correct: false },
            { text: "महाकश्यप", correct: true }
        ]
    },
    {
        question: "बौद्ध धर्म के अनुयायी कौन से 'तीन रत्न' मानते हैं?",
        answers: [
            { text: "बुद्ध, धर्म, संघ", correct: true },
            { text: "सत्य, अहिंसा, ब्रह्मचर्य", correct: false },
            { text: "ज्ञान, योग, भक्ति", correct: false },
            { text: "शांति, शक्ति, प्रेम", correct: false }
        ]
    },
    {
        question: "भगवान बुद्ध ने 'मध्यमार्ग' का उपदेश क्यों दिया?",
        answers: [
            { text: "अत्यधिक तपस्या से बचने के लिए", correct: false },
            { text: "सांसारिक सुखों को त्यागने के लिए", correct: false },
            { text: "मध्यस्थ मार्ग अपनाने के लिए", correct: true },
            { text: "शारीरिक कष्ट को दूर करने के लिए", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म में 'विहार' क्या होता है?",
        answers: [
            { text: "स्थान या मंदिर", correct: true },
            { text: "ध्यान स्थल", correct: false },
            { text: "पूजा का स्थान", correct: false },
            { text: "संतों का आश्रम", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म का पहला संप्रदाय कौन सा था?",
        answers: [
            { text: "श्रमण", correct: false },
            { text: "संघ", correct: true },
            { text: "महायान", correct: false },
            { text: "हीनयान", correct: false }
        ]
    },
    {
        question: "भगवान बुद्ध के अनुयायी किस धर्म ग्रंथ का पालन करते हैं?",
        answers: [
            { text: "गीता", correct: false },
            { text: "तेनाच्च", correct: false },
            { text: "त्रिपिटक", correct: true },
            { text: "वेद", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म के अनुसार, 'माया' का क्या अर्थ है?",
        answers: [
            { text: "सत्य", correct: false },
            { text: "संसारिक भ्रम", correct: true },
            { text: "ध्यान", correct: false },
            { text: "कर्म", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म के प्रमुख त्यौहार कौन से हैं?",
        answers: [
            { text: "दीपावली और होली", correct: false },
            { text: "बुद्ध पूर्णिमा", correct: true },
            { text: "ईद और क्रिसमस", correct: false },
            { text: "दशहरा और रक्षाबंधन", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म के किस अनुयायी ने 'महायान' का प्रचार किया?",
        answers: [
            { text: "नागार्जुन", correct: true },
            { text: "अशोक", correct: false },
            { text: "महाकश्यप", correct: false },
            { text: "आचार्य शंकर", correct: false }
        ]
    },
    {
        question: "'महायान' बौद्ध धर्म में क्या मान्यता है?",
        answers: [
            { text: "केवल एक बुद्ध है", correct: false },
            { text: "हर व्यक्ति बुद्ध बन सकता है", correct: true },
            { text: "केवल तेरह बुद्ध होते हैं", correct: false },
            { text: "साधारण लोग निर्वाण नहीं प्राप्त कर सकते", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म में 'हीनयान' का क्या अर्थ है?",
        answers: [
            { text: "न्यूनतम साधना", correct: false },
            { text: "अन्याय", correct: false },
            { text: "बुद्ध के उपदेश का पालन", correct: false },
            { text: "छोटा मार्ग", correct: true }
        ]
    },
    {
        question: "बौद्ध धर्म के अनुसार, 'धम्म' का क्या अर्थ है?",
        answers: [
            { text: "उद्देश्य", correct: false },
            { text: "सुख", correct: false },
            { text: "धर्म", correct: true },
            { text: "भगवान", correct: false }
        ]
    },
    {
        question: "'तिन्ता' का क्या मतलब है?",
        answers: [
            { text: "संसार के दुख", correct: true },
            { text: "संसार के सभी सुख", correct: false },
            { text: "इच्छाओं का त्याग", correct: false },
            { text: "संसार का भ्रम", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म में 'अंतर्यामी' का क्या मतलब है?",
        answers: [
            { text: "वह जो सब देखता है", correct: false },
            { text: "वह जो सब जानता है", correct: true },
            { text: "वह जो सब सृजित करता है", correct: false },
            { text: "वह जो सब भुगतता है", correct: false }
        ]
    },
    {
        question: "'तत्त्वदर्शन' बौद्ध धर्म में किसका अध्ययन करता है?",
        answers: [
            { text: "सांसारिक सुखों का", correct: false },
            { text: "ज्ञान और ध्यान का", correct: true },
            { text: "आत्मा और भगवान का", correct: false },
            { text: "कर्म और मोह का", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म में 'आचार' का क्या महत्व है?",
        answers: [
            { text: "सही कर्मों का पालन", correct: true },
            { text: "पूजा करने का तरीका", correct: false },
            { text: "ध्यान करने का तरीका", correct: false },
            { text: "सबका पालन करना", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म में 'संघ' क्या है?",
        answers: [
            { text: "संतों का समुदाय", correct: true },
            { text: "आस्थावान लोगों का समूह", correct: false },
            { text: "सबका एकत्रित समूह", correct: false },
            { text: "एक धार्मिक साधना केंद्र", correct: false }
        ]
    },
    {
        question: "'पंचशील' बौद्ध धर्म में क्या होता है?",
        answers: [
            { text: "पांच व्रत", correct: true },
            { text: "पांच सिद्धांत", correct: false },
            { text: "पांच तत्व", correct: false },
            { text: "पांच नियम", correct: false }
        ]
    },
    {
        question: "'धम्म चक्क पवत्तन' के बाद भगवान बुद्ध ने किस स्थान पर उपदेश देना शुरू किया था?",
        answers: [
            { text: "बोधगया", correct: false },
            { text: "सारनाथ", correct: true },
            { text: "राजगीर", correct: false },
            { text: "लुंबिनी", correct: false }
        ]
    },
    {
        question: "'विनय पिटक' में क्या संग्रहित है?",
        answers: [
            { text: "बौद्ध धर्म का दर्शन", correct: false },
            { text: "भगवान बुद्ध के उपदेश", correct: false },
            { text: "भिक्षु समुदाय के नियम", correct: true },
            { text: "मंत्रों का संग्रह", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म के अनुयायी किस उपदेश का पालन करते हैं?",
        answers: [
            { text: "शांति और अहिंसा", correct: true },
            { text: "हिंसा और युद्ध", correct: false },
            { text: "तपस्या और पूजा", correct: false },
            { text: "शरणागत वत्सलता", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म के 'विनय पिटक' में कितने भाग होते हैं?",
        answers: [
            { text: "तीन", correct: false },
            { text: "चार", correct: true },
            { text: "पांच", correct: false },
            { text: "छह", correct: false }
        ]
    },
    {
        question: "'धम्मचक्क पवत्तन' के समय भगवान बुद्ध ने किस विषय पर उपदेश दिया?",
        answers: [
            { text: "संसार के दुखों के कारण", correct: true },
            { text: "मानव जीवन का उद्देश्य", correct: false },
            { text: "कर्मों का फल", correct: false },
            { text: "सम्यक मार्ग का पालन", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म के 'मध्यमार्ग' का क्या उद्देश्य है?",
        answers: [
            { text: "कर्मों से मुक्ति", correct: false },
            { text: "शारीरिक सुख", correct: false },
            { text: "मानसिक शांति", correct: false },
            { text: "दोनों अति-पूर्ण और अति-दुख से बचना", correct: true }
        ]
    },
    {
        question: "भगवान बुद्ध के किस शिष्य ने उनके उपदेशों को सबसे पहले लिखित रूप में संकलित किया?",
        answers: [
            { text: "आनंद", correct: true },
            { text: "महाकश्यप", correct: false },
            { text: "उदायन", correct: false },
            { text: "धम्मारक्षित", correct: false }
        ]
    },
    {
        question: "'त्रिपिटक' में कौन से ग्रंथ शामिल हैं?",
        answers: [
            { text: "धर्म, दर्शन, और मंत्र", correct: false },
            { text: "विनय, धम्म, और अभिधम्म", correct: true },
            { text: "तंत्र, मंत्र, और उपदेश", correct: false },
            { text: "शास्त्र, पूजा, और भक्ति", correct: false }
        ]
    },
    {
        question: "'सामान्य जीवन' का पालन करने की क्या विशेषता है?",
        answers: [
            { text: "पूजा और तप", correct: false },
            { text: "संतुलित जीवन", correct: true },
            { text: "केवल ध्यान", correct: false },
            { text: "भिक्षाटन", correct: false }
        ]
    },
    {
        question: "भगवान बुद्ध ने किस वयोवृद्ध महिला से मिलने के बाद उनके उपदेश दिए थे?",
        answers: [
            { text: "महाप्रजापति", correct: true },
            { text: "रानी विमला", correct: false },
            { text: "रानी त्रिशला", correct: false },
            { text: "रानी माया", correct: false }
        ]
    },
    {
        question: "भगवान बुद्ध का निधन कहां हुआ था?",
        answers: [
            { text: "गयाजी", correct: false },
            { text: "कुशीनगर", correct: true },
            { text: "राजगीर", correct: false },
            { text: "सारनाथ", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म में 'धम्म' का कौन सा रूप है?",
        answers: [
            { text: "आचार", correct: false },
            { text: "उपदेश", correct: false },
            { text: "अनुभव", correct: false },
            { text: "सत्य", correct: true }
        ]
    },
    {
        question: "बौद्ध धर्म में 'भिक्खु' और 'भिक्खुनियां' का क्या अर्थ है?",
        answers: [
            { text: "उपदेशक", correct: false },
            { text: "साधक पुरुष और महिला", correct: true },
            { text: "तपस्वी", correct: false },
            { text: "धार्मिक शिक्षक", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म में 'संग्रह' का क्या अर्थ है?",
        answers: [
            { text: "उपदेश", correct: false },
            { text: "भिक्षाटन", correct: false },
            { text: "समुदाय का पालन", correct: true },
            { text: "ध्यान और साधना", correct: false }
        ]
    },
    {
        question: "भगवान बुद्ध का कौन सा उपदेश प्रमुख है?",
        answers: [
            { text: "'कर्मों से बचो'", correct: false },
            { text: "'संसार दुखमय है'", correct: true },
            { text: "'ध्यान करो'", correct: false },
            { text: "'मुक्ति ही जीवन का उद्देश्य है'", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म के अनुसार, 'कर्म' का पालन किससे संबंधित है?",
        answers: [
            { text: "पुनर्जन्म", correct: true },
            { text: "भक्ति", correct: false },
            { text: "पुण्य", correct: false },
            { text: "शांति", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म में 'सिद्धि' प्राप्त करने का रास्ता क्या है?",
        answers: [
            { text: "ध्यान और साधना", correct: true },
            { text: "शांति और अहिंसा", correct: false },
            { text: "कर्मों का फल", correct: false },
            { text: "पूजा और व्रत", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म के अनुयायी किस प्रकार का जीवन जीते हैं?",
        answers: [
            { text: "तपस्वी जीवन", correct: false },
            { text: "सांसारिक सुखों से मुक्त जीवन", correct: true },
            { text: "संन्यासी जीवन", correct: false },
            { text: "सामान्य जीवन", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म में 'शून्यता' का क्या अर्थ है?",
        answers: [
            { text: "अनंत सुख", correct: false },
            { text: "विश्व का अस्तित्व", correct: false },
            { text: "सभी चीजों की अस्थिरता", correct: true },
            { text: "मृत्यु का मार्ग", correct: false }
        ]
    },
    {
        question: "बौद्ध धर्म के अनुसार, 'मायाजाल' का क्या अर्थ है?",
        answers: [
            { text: "ज्ञान प्राप्ति का मार्ग", correct: false },
            { text: "संसार का भ्रम", correct: true },
            { text: "शांति की प्राप्ति", correct: false },
            { text: "पुण्य का संग्रह", correct: false }
        ]
    }
];
