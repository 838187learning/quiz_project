const questions = [
    {
        question: "सामवेद का प्रमुख विषय क्या है?",
        answers: [
            { text: "चिकित्सा", correct: false },
            { text: "युद्ध", correct: false },
            { text: "संगीत", correct: true },
            { text: "खगोलशास्त्र", correct: false }
        ]
    },
    {
        question: "सामवेद को कौन सा वेद कहा जाता है?",
        answers: [
            { text: "ज्ञान का वेद", correct: false },
            { text: "गीत का वेद", correct: true },
            { text: "क्रिया का वेद", correct: false },
            { text: "नीति का वेद", correct: false }
        ]
    },
    {
        question: "सामवेद में मुख्य रूप से कौन से मंत्र गाए जाते हैं?",
        answers: [
            { text: "ऋग्वेद से लिए गए", correct: true },
            { text: "यजुर्वेद से लिए गए", correct: false },
            { text: "अथर्ववेद से लिए गए", correct: false },
            { text: "नए रचे गए", correct: false }
        ]
    },
    {
        question: "सामवेद के कितने कुल मंत्र हैं?",
        answers: [
            { text: "1025", correct: false },
            { text: "1875", correct: false },
            { text: "1549", correct: false },
            { text: "1824", correct: true }
        ]
    },
    {
        question: "इनमें से सामवेद की एक शाखा कौन सी है?",
        answers: [
            { text: "कठ", correct: false },
            { text: "कौथुम", correct: true },
            { text: "वाजसनेयी", correct: false },
            { text: "मैत्रायणी", correct: false }
        ]
    },
    {
        question: "सामवेद में कितनी शाखाएं प्राचीन काल में थीं?",
        answers: [
            { text: "50", correct: true },
            { text: "100", correct: false },
            { text: "1000", correct: false },
            { text: "10", correct: false }
        ]
    },
    {
        question: "वर्तमान में सामवेद की कितनी शाखाएं जीवित हैं?",
        answers: [
            { text: "2", correct: true },
            { text: "3", correct: false },
            { text: "5", correct: false },
            { text: "10", correct: false }
        ]
    },
    {
        question: "सामवेद का मुख्य उपयोग किसमें होता था?",
        answers: [
            { text: "विवाह में", correct: false },
            { text: "युद्ध में", correct: false },
            { text: "यज्ञ में", correct: true },
            { text: "राजनीति में", correct: false }
        ]
    },
    {
        question: "सामवेद के प्रमुख देवता कौन हैं?",
        answers: [
            { text: "अग्नि", correct: false },
            { text: "वरुण", correct: false },
            { text: "इन्द्र", correct: true },
            { text: "यम", correct: false }
        ]
    },
    {
        question: "सामवेद का एक महत्वपूर्ण अंग क्या है?",
        answers: [
            { text: "ब्राह्मण", correct: false },
            { text: "संहिता", correct: false },
            { text: "उपनिषद", correct: false },
            { text: "सभी", correct: true }
        ]
    },
    {
        question: "सामवेद की भाषा क्या है?",
        answers: [
            { text: "प्राकृत", correct: false },
            { text: "पाली", correct: false },
            { text: "वैदिक संस्कृत", correct: true },
            { text: "आधुनिक संस्कृत", correct: false }
        ]
    },
    {
        question: "सामवेद को किस वेद का 'गायन रूप' कहा जाता है?",
        answers: [
            { text: "ऋग्वेद", correct: true },
            { text: "यजुर्वेद", correct: false },
            { text: "अथर्ववेद", correct: false },
            { text: "सभी वेद", correct: false }
        ]
    },
    {
        question: "सामवेद में गान के लिए विशेष पद्धति को क्या कहा जाता है?",
        answers: [
            { text: "स्वर", correct: false },
            { text: "छंद", correct: false },
            { text: "संहिता", correct: false },
            { text: "सामगान", correct: true }
        ]
    },
    {
        question: "सामवेद के कितने मंत्र ऋग्वेद से लिए गए हैं?",
        answers: [
            { text: "75%", correct: false },
            { text: "100%", correct: false },
            { text: "लगभग 95%", correct: true },
            { text: "50%", correct: false }
        ]
    },
    {
        question: "सामवेद के कौन-कौन से ग्रंथ हैं?",
        answers: [
            { text: "संहिता", correct: false },
            { text: "ब्राह्मण", correct: false },
            { text: "उपनिषद", correct: false },
            { text: "A, B, D", correct: true }
        ]
    },
    {
        question: "सामवेद की प्रमुख उपनिषद कौन सी है?",
        answers: [
            { text: "ईश", correct: false },
            { text: "मांडूक्य", correct: false },
            { text: "छांदोग्य", correct: true },
            { text: "तैत्तिरीय", correct: false }
        ]
    },
    {
        question: "सामवेद के गान में कितने स्वर होते हैं?",
        answers: [
            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "5", correct: false },
            { text: "7", correct: false }
        ]
    },
    {
        question: "सामवेद को गाया कौन करता था?",
        answers: [
            { text: "ब्राह्मण", correct: false },
            { text: "अध्वर्यु", correct: false },
            { text: "उद्गाता", correct: true },
            { text: "होता", correct: false }
        ]
    },
    {
        question: "सामवेद में किस यज्ञ से संबंधित गान प्रमुख होते हैं?",
        answers: [
            { text: "अग्निहोत्र", correct: false },
            { text: "सोमयज्ञ", correct: true },
            { text: "अश्वमेध", correct: false },
            { text: "राजसूय", correct: false }
        ]
    },
    {
        question: "सामवेद में प्रयोग होने वाले गीतों को क्या कहा जाता है?",
        answers: [
            { text: "ऋचा", correct: false },
            { text: "यजुस", correct: false },
            { text: "साम", correct: true },
            { text: "स्तोत्र", correct: false }
        ]
    },
    {
        question: "सामवेद की ब्राह्मण पुस्तक कौन सी है?",
        answers: [
            { text: "ऐतरेय", correct: false },
            { text: "पंचविंश", correct: true },
            { text: "बृहदारण्यक", correct: false },
            { text: "तैत्तिरीय", correct: false }
        ]
    },
    {
        question: "सामवेद में कुल कितने गीत संग्रहित हैं?",
        answers: [
            { text: "500", correct: false },
            { text: "2000", correct: false },
            { text: "1810", correct: false },
            { text: "1875", correct: true }
        ]
    },
    {
        question: "सामवेद में संगीत के लिए विशेष व्यवस्था किसके द्वारा की गई थी?",
        answers: [
            { text: "ऋषियों द्वारा", correct: true },
            { text: "राजाओं द्वारा", correct: false },
            { text: "ब्राह्मणों द्वारा", correct: false },
            { text: "देवताओं द्वारा", correct: false }
        ]
    },
    {
        question: "सामवेद के गान किन नियमों पर आधारित होते हैं?",
        answers: [
            { text: "व्याकरण", correct: false },
            { text: "छंद", correct: false },
            { text: "स्वर", correct: false },
            { text: "स्वर और छंद दोनों", correct: true }
        ]
    },
    {
        question: "सामवेद का विशेष रूप से संबंध किस क्रिया से है?",
        answers: [
            { text: "यज्ञ", correct: true },
            { text: "ध्यान", correct: false },
            { text: "युद्ध", correct: false },
            { text: "वाणिज्य", correct: false }
        ]
    },
    {
        question: "सामवेद के गीतों का प्रयोग किस उत्सव में अधिक होता था?",
        answers: [
            { text: "विवाह", correct: false },
            { text: "होली", correct: false },
            { text: "सोमयज्ञ", correct: true },
            { text: "दीपावली", correct: false }
        ]
    },
    {
        question: "सामवेद में प्रयुक्त स्वर कहलाते हैं –",
        answers: [
            { text: "ऋचाएँ", correct: false },
            { text: "सप्तक", correct: false },
            { text: "साम", correct: false },
            { text: "उद्गीथ", correct: true }
        ]
    },
    {
        question: "‘छांदोग्य उपनिषद’ किस वेद से संबंधित है?",
        answers: [
            { text: "यजुर्वेद", correct: false },
            { text: "ऋग्वेद", correct: false },
            { text: "सामवेद", correct: true },
            { text: "अथर्ववेद", correct: false }
        ]
    },
    {
        question: "सामवेद किस प्रकार की संहिता है?",
        answers: [
            { text: "गद्यात्मक", correct: false },
            { text: "पद्यात्मक", correct: false },
            { text: "गेय", correct: true },
            { text: "कथात्मक", correct: false }
        ]
    },
    {
        question: "सामवेद में किस प्रकार के छंद प्रमुख हैं?",
        answers: [
            { text: "गायत्री", correct: false },
            { text: "त्रिष्टुप", correct: false },
            { text: "जगती", correct: false },
            { text: "सभी", correct: true }
        ]
    },
    {
        question: "सामवेद की रचना का उद्देश्य क्या था?",
        answers: [
            { text: "दर्शन का प्रचार", correct: false },
            { text: "भक्ति का प्रसार", correct: false },
            { text: "यज्ञ में संगीत का समावेश", correct: true },
            { text: "युद्ध की योजना", correct: false }
        ]
    },
    {
        question: "सामवेद के अनुसार, मंत्रों को किस प्रकार प्रस्तुत किया जाता था?",
        answers: [
            { text: "मौखिक रूप में", correct: false },
            { text: "लेख रूप में", correct: false },
            { text: "गीत के रूप में", correct: true },
            { text: "कथानक में", correct: false }
        ]
    },
    {
        question: "सामवेद का प्रमुख उपयोगकर्ता कौन होता था?",
        answers: [
            { text: "ब्राह्मण", correct: false },
            { text: "अध्वर्यु", correct: false },
            { text: "उद्गाता", correct: true },
            { text: "उपदेशक", correct: false }
        ]
    },
    {
        question: "सामवेद में प्रयुक्त गायन शैली को क्या कहते हैं?",
        answers: [
            { text: "पद्य", correct: false },
            { text: "छंद", correct: false },
            { text: "सामगान", correct: true },
            { text: "ऋचागान", correct: false }
        ]
    },
    {
        question: "सामवेद के मंत्रों को गाने वाले पुजारी को क्या कहते हैं?",
        answers: [
            { text: "होता", correct: false },
            { text: "अध्वर्यु", correct: false },
            { text: "ब्रह्मा", correct: false },
            { text: "उद्गाता", correct: true }
        ]
    },
    {
        question: "सामवेद में कुल कितने अद्वितीय (unique) मंत्र हैं?",
        answers: [
            { text: "75", correct: false },
            { text: "99", correct: true },
            { text: "100", correct: false },
            { text: "150", correct: false }
        ]
    },
    {
        question: "सामवेद को किस प्रकार से प्रस्तुत किया जाता था?",
        answers: [
            { text: "कथा के रूप में", correct: false },
            { text: "नृत्य के रूप में", correct: false },
            { text: "संगीत और मंत्रों के मिश्रण से", correct: true },
            { text: "केवल लेखन से", correct: false }
        ]
    },
    {
        question: "पंचविंश ब्राह्मण किस वेद से संबंधित है?",
        answers: [
            { text: "ऋग्वेद", correct: false },
            { text: "यजुर्वेद", correct: false },
            { text: "सामवेद", correct: true },
            { text: "अथर्ववेद", correct: false }
        ]
    },
    {
        question: "सामवेद की ब्राह्मण शाखा का कार्य क्या है?",
        answers: [
            { text: "कर्मकांड का विवरण", correct: true },
            { text: "संगीत का अभ्यास", correct: false },
            { text: "वेदों की आलोचना", correct: false },
            { text: "खगोलशास्त्र का ज्ञान", correct: false }
        ]
    },
    {
        question: "सामवेद के गान में प्रयुक्त प्रतीकात्मक ध्वनियाँ क्या कहलाती हैं?",
        answers: [
            { text: "ऋचाएँ", correct: false },
            { text: "स्तोत्र", correct: false },
            { text: "स्वराक्षर", correct: true },
            { text: "उद्दत्त", correct: false }
        ]
    },
    {
        question: "सामवेद की दो जीवित शाखाएँ कौन सी हैं?",
        answers: [
            { text: "कठ और मैत्रायणी", correct: false },
            { text: "कौथुम और जैमिनीय", correct: true },
            { text: "वाजसनेयी और शतपथ", correct: false },
            { text: "ऐतरेय और बृहदारण्यक", correct: false }
        ]
    },
    {
        question: "सामवेद में किस प्रकार के मंत्र गाये जाते थे?",
        answers: [
            { text: "केवल नए मंत्र", correct: false },
            { text: "केवल ऋग्वेद के मंत्र", correct: false },
            { text: "ऋग्वेद के चुने हुए मंत्र", correct: true },
            { text: "सभी वेदों के मिश्रण", correct: false }
        ]
    },
    {
        question: "सामवेद के गीतों का उद्देश्य क्या था?",
        answers: [
            { text: "देवताओं को प्रसन्न करना", correct: true },
            { text: "सैनिकों का उत्साह बढ़ाना", correct: false },
            { text: "श्रोताओं का मनोरंजन", correct: false },
            { text: "उपनिषद का प्रचार", correct: false }
        ]
    },
    {
        question: "सामवेद की उपनिषद में आत्मा का ज्ञान किस माध्यम से बताया गया है?",
        answers: [
            { text: "उपदेश", correct: false },
            { text: "संवाद", correct: true },
            { text: "गान", correct: false },
            { text: "ध्यान", correct: false }
        ]
    },
    {
        question: "‘उद्गाता’ किस वेद का प्रतिनिधि होता है?",
        answers: [
            { text: "ऋग्वेद", correct: false },
            { text: "यजुर्वेद", correct: false },
            { text: "सामवेद", correct: true },
            { text: "अथर्ववेद", correct: false }
        ]
    },
    {
        question: "सामवेद के अध्ययन से किस प्रकार के ज्ञान की प्राप्ति होती है?",
        answers: [
            { text: "औषधि विज्ञान", correct: false },
            { text: "ज्योतिष", correct: false },
            { text: "संगीत और यज्ञ", correct: true },
            { text: "खगोलशास्त्र", correct: false }
        ]
    },
    {
        question: "सामवेद में किस युग का संगीत प्रतिबिंबित होता है?",
        answers: [
            { text: "वैदिक युग", correct: true },
            { text: "उत्तर वैदिक युग", correct: false },
            { text: "मौर्य युग", correct: false },
            { text: "गुप्त युग", correct: false }
        ]
    },
    {
        question: "सामवेद का अध्ययन किनके लिए अनिवार्य था?",
        answers: [
            { text: "व्यापारी", correct: false },
            { text: "क्षत्रिय", correct: false },
            { text: "सामग गायक", correct: true },
            { text: "ऋषिकाएँ", correct: false }
        ]
    },
    {
        question: "सामवेद में स्वर व्यवस्था किस उद्देश्य से की गई थी?",
        answers: [
            { text: "काव्य रचना", correct: false },
            { text: "गान की मधुरता", correct: true },
            { text: "व्याकरण सुधार", correct: false },
            { text: "वेद विरोध", correct: false }
        ]
    },
    {
        question: "सामवेद की परंपरा मुख्य रूप से किस क्षेत्र में जीवित है?",
        answers: [
            { text: "केरल", correct: false },
            { text: "गुजरात", correct: false },
            { text: "उत्तर प्रदेश", correct: false },
            { text: "तमिलनाडु", correct: true }
        ]
    }
];
