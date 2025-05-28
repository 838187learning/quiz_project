const questions = [
    {
        question: "यजुर्वेद कितने प्रकार का होता है?",
        answers: [
            { text: "एक", correct: false },
            { text: "दो", correct: true },
            { text: "तीन", correct: false },
            { text: "चार", correct: false }
        ]
    },
    {
        question: "यजुर्वेद के दो प्रकार कौन-कौन से हैं?",
        answers: [
            { text: "कृष्ण और शुक्ल", correct: true },
            { text: "साम और ऋग", correct: false },
            { text: "पुराण और इतिहास", correct: false },
            { text: "गायत्री और त्रिष्टुप", correct: false }
        ]
    },
    {
        question: "यजुर्वेद मुख्य रूप से किस विषय से संबंधित है?",
        answers: [
            { text: "संगीत", correct: false },
            { text: "यज्ञ विधि", correct: true },
            { text: "आयुर्वेद", correct: false },
            { text: "ज्योतिष", correct: false }
        ]
    },
    {
        question: "यजुर्वेद में कुल कितनी शाखाएं थीं?",
        answers: [
            { text: "100", correct: false },
            { text: "86", correct: false },
            { text: "101", correct: true },
            { text: "108", correct: false }
        ]
    },
    {
        question: "वर्तमान में कितनी यजुर्वेद शाखाएं उपलब्ध हैं?",
        answers: [
            { text: "2", correct: true },
            { text: "5", correct: false },
            { text: "10", correct: false },
            { text: "15", correct: false }
        ]
    },
    {
        question: "कृष्ण यजुर्वेद को क्या कहते हैं?",
        answers: [
            { text: "कठ संहिता", correct: false },
            { text: "तैत्तिरीय संहिता", correct: false },
            { text: "मैत्रायणी संहिता", correct: false },
            { text: "सभी", correct: true }
        ]
    },
    {
        question: "शुक्ल यजुर्वेद की प्रमुख संहिता कौन सी है?",
        answers: [
            { text: "वाजसनेयी संहिता", correct: true },
            { text: "तैत्तिरीय संहिता", correct: false },
            { text: "साम संहिता", correct: false },
            { text: "कठ संहिता", correct: false }
        ]
    },
    {
        question: "वाजसनेयी संहिता कितने अध्यायों में विभाजित है?",
        answers: [
            { text: "10", correct: false },
            { text: "20", correct: false },
            { text: "40", correct: true },
            { text: "50", correct: false }
        ]
    },
    {
        question: "यजुर्वेद में 'यजुस्' का अर्थ क्या है?",
        answers: [
            { text: "गीत", correct: false },
            { text: "ज्ञान", correct: false },
            { text: "यज्ञ मंत्र", correct: true },
            { text: "गान", correct: false }
        ]
    },
    {
        question: "यजुर्वेद के अनुसार, अग्नि देवता का कार्य क्या है?",
        answers: [
            { text: "वर्षा कराना", correct: false },
            { text: "मृत्यु देना", correct: false },
            { text: "यज्ञ में आहुतियां पहुंचाना", correct: true },
            { text: "युद्ध कराना", correct: false }
        ]
    },
    {
        question: "यजुर्वेद का मुख्य उपयोग किस समय होता था?",
        answers: [
            { text: "ध्यान करते समय", correct: false },
            { text: "यज्ञ करते समय", correct: true },
            { text: "युद्ध करते समय", correct: false },
            { text: "विवाह में", correct: false }
        ]
    },
    {
        question: "यजुर्वेद में यज्ञ की विधियों के साथ किसका वर्णन है?",
        answers: [
            { text: "देवताओं की कहानियां", correct: false },
            { text: "ऋषियों के वंश", correct: false },
            { text: "मंत्रों का उपयोग", correct: true },
            { text: "मंदिर निर्माण", correct: false }
        ]
    },
    {
        question: "यजुर्वेद में किस देवता को यज्ञों का अधिपति माना गया है?",
        answers: [
            { text: "इन्द्र", correct: false },
            { text: "अग्नि", correct: true },
            { text: "यम", correct: false },
            { text: "वरुण", correct: false }
        ]
    },
    {
        question: "शुक्ल यजुर्वेद को ‘शुद्ध यजुर्वेद’ क्यों कहा जाता है?",
        answers: [
            { text: "इसमें संगीत है", correct: false },
            { text: "इसमें अलग से मंत्र और ब्राह्मण है", correct: true },
            { text: "इसमें ऋचाएँ हैं", correct: false },
            { text: "यह सामवेद से लिया गया है", correct: false }
        ]
    },
    {
        question: "कृष्ण यजुर्वेद में मंत्र और ब्राह्मण कैसे होते हैं?",
        answers: [
            { text: "एकसाथ मिश्रित", correct: true },
            { text: "अलग-अलग", correct: false },
            { text: "केवल ब्राह्मण", correct: false },
            { text: "केवल मंत्र", correct: false }
        ]
    },
    {
        question: "यजुर्वेद की संहिताएँ किस लिपि में लिखी गई थीं?",
        answers: [
            { text: "नागरी", correct: false },
            { text: "ब्राह्मी", correct: false },
            { text: "देवनागरी", correct: false },
            { text: "वैदिक संस्कृत", correct: true }
        ]
    },
    {
        question: "'ईशावास्य उपनिषद' किस यजुर्वेद संहिता से लिया गया है?",
        answers: [
            { text: "वाजसनेयी संहिता", correct: true },
            { text: "कठ संहिता", correct: false },
            { text: "तैत्तिरीय संहिता", correct: false },
            { text: "मैत्रायणी संहिता", correct: false }
        ]
    },
    {
        question: "यजुर्वेद में किस प्रकार के यज्ञों का वर्णन है?",
        answers: [
            { text: "शांति यज्ञ", correct: false },
            { text: "अश्वमेध यज्ञ", correct: false },
            { text: "राजसूय यज्ञ", correct: false },
            { text: "सभी", correct: true }
        ]
    },
    {
        question: "यजुर्वेद के अनुसार 'होम' किसका प्रतीक है?",
        answers: [
            { text: "अग्नि की पूजा", correct: false },
            { text: "देवता को अर्पण", correct: true },
            { text: "शांति", correct: false },
            { text: "भोग", correct: false }
        ]
    },
    {
        question: "यजुर्वेद के अनुसार यज्ञ का मुख्य उद्देश्य क्या था?",
        answers: [
            { text: "सुख प्राप्ति", correct: false },
            { text: "मोक्ष", correct: false },
            { text: "धर्म की स्थापना", correct: false },
            { text: "प्रकृति का संतुलन", correct: true }
        ]
    },
    {
        question: "वाजसनेयी संहिता को किस ऋषि ने संकलित किया था?",
        answers: [
            { text: "वाजसनेय", correct: false },
            { text: "याज्ञवल्क्य", correct: true },
            { text: "भारद्वाज", correct: false },
            { text: "विश्वामित्र", correct: false }
        ]
    },
    {
        question: "कृष्ण यजुर्वेद की कौन-सी शाखा दक्षिण भारत में प्रसिद्ध है?",
        answers: [
            { text: "कठ", correct: false },
            { text: "तैत्तिरीय", correct: true },
            { text: "मैत्रायणी", correct: false },
            { text: "काण्व", correct: false }
        ]
    },
    {
        question: "शुक्ल यजुर्वेद की कौन-सी शाखा अधिक प्रचलित है?",
        answers: [
            { text: "माध्यंदिन", correct: true },
            { text: "कठ", correct: false },
            { text: "मैत्रायणी", correct: false },
            { text: "भारद्वाज", correct: false }
        ]
    },
    {
        question: "यजुर्वेद में किस प्रकार के मंत्र अधिक हैं?",
        answers: [
            { text: "गान", correct: false },
            { text: "गद्य", correct: true },
            { text: "पद्य", correct: false },
            { text: "चित्र", correct: false }
        ]
    },
    {
        question: "किस संहिता में ‘नमः शिवाय’ मंत्र का उल्लेख है?",
        answers: [
            { text: "सामवेद", correct: false },
            { text: "अथर्ववेद", correct: false },
            { text: "यजुर्वेद", correct: true },
            { text: "ऋग्वेद", correct: false }
        ]
    },
    {
        question: "यजुर्वेद किस वेद का द्वितीय स्थान रखता है?",
        answers: [
            { text: "पहला", correct: false },
            { text: "दूसरा", correct: true },
            { text: "तीसरा", correct: false },
            { text: "चौथा", correct: false }
        ]
    },
    {
        question: "किस यज्ञ को सर्वोच्च माना गया है यजुर्वेद में?",
        answers: [
            { text: "राजसूय", correct: false },
            { text: "वाजपेय", correct: false },
            { text: "अश्वमेध", correct: true },
            { text: "अग्निहोत्र", correct: false }
        ]
    },
    {
        question: "‘सर्वं खल्विदं ब्रह्म’ उपदेश किस उपनिषद से है?",
        answers: [
            { text: "छांदोग्य", correct: false },
            { text: "ईश", correct: false },
            { text: "बृहदारण्यक", correct: true },
            { text: "तैत्तिरीय", correct: false }
        ]
    },
    {
        question: "कृष्ण यजुर्वेद की कठ संहिता का संबंध किस राज्य से है?",
        answers: [
            { text: "उत्तर प्रदेश", correct: false },
            { text: "पंजाब", correct: false },
            { text: "कर्नाटक", correct: false },
            { text: "बिहार", correct: true }
        ]
    },
    {
        question: "यजुर्वेद में यज्ञ के किस भाग को 'पवित्रतम' कहा गया है?",
        answers: [
            { text: "आहुतियाँ", correct: true },
            { text: "अग्नि", correct: false },
            { text: "यजमान", correct: false },
            { text: "ब्राह्मण", correct: false }
        ]
    },
    {
        question: "यजुर्वेद का एक प्रमुख उद्देश्य क्या था?",
        answers: [
            { text: "सामाजिक व्यवस्था", correct: false },
            { text: "धार्मिक शिक्षाएँ", correct: false },
            { text: "यज्ञ की विधि", correct: true },
            { text: "युद्ध कला", correct: false }
        ]
    },
    {
        question: "किस देवता को यजुर्वेद में 'प्रजापति' कहा गया है?",
        answers: [
            { text: "अग्नि", correct: false },
            { text: "सूर्य", correct: false },
            { text: "ब्रह्मा", correct: true },
            { text: "इन्द्र", correct: false }
        ]
    },
    {
        question: "यजुर्वेद में किसका महत्व विशेष रूप से दर्शाया गया है?",
        answers: [
            { text: "गान का", correct: false },
            { text: "यज्ञ का", correct: true },
            { text: "तप का", correct: false },
            { text: "ध्यान का", correct: false }
        ]
    },
    {
        question: "‘अहं ब्रह्मास्मि’ किस उपनिषद से लिया गया है?",
        answers: [
            { text: "तैत्तिरीय", correct: false },
            { text: "बृहदारण्यक", correct: true },
            { text: "ईश", correct: false },
            { text: "कठ", correct: false }
        ]
    },
    {
        question: "यजुर्वेद में प्रयुक्त मंत्र किस प्रकार के होते हैं?",
        answers: [
            { text: "गेय", correct: false },
            { text: "पठनीय", correct: false },
            { text: "गद्य और पद्य दोनों", correct: true },
            { text: "केवल चित्रमय", correct: false }
        ]
    },
    {
        question: "यजुर्वेद का प्रमुख कार्य किस पर आधारित है?",
        answers: [
            { text: "गान पर", correct: false },
            { text: "कथा पर", correct: false },
            { text: "कर्मकांड पर", correct: true },
            { text: "योग पर", correct: false }
        ]
    },
    {
        question: "\"बृहदारण्यक उपनिषद\" किस यजुर्वेद की शाखा से संबंधित है?",
        answers: [
            { text: "सामवेद", correct: false },
            { text: "कृष्ण यजुर्वेद", correct: false },
            { text: "शुक्ल यजुर्वेद", correct: true },
            { text: "अथर्ववेद", correct: false }
        ]
    },
    {
        question: "तैत्तिरीय संहिता किस यजुर्वेद से संबंधित है?",
        answers: [
            { text: "शुक्ल", correct: false },
            { text: "सामवेद", correct: false },
            { text: "कृष्ण", correct: true },
            { text: "ऋग्वेद", correct: false }
        ]
    },
    {
        question: "यजुर्वेद में ब्रह्मण ग्रंथों का उद्देश्य क्या होता था?",
        answers: [
            { text: "कथा कहने हेतु", correct: false },
            { text: "वेदों की व्याख्या हेतु", correct: true },
            { text: "गान हेतु", correct: false },
            { text: "युद्ध हेतु", correct: false }
        ]
    },
    {
        question: "यजुर्वेद का तात्पर्य किससे है?",
        answers: [
            { text: "संगीत", correct: false },
            { text: "ज्ञान", correct: false },
            { text: "यज्ञ मंत्रों का संग्रह", correct: true },
            { text: "विज्ञान", correct: false }
        ]
    },
    {
        question: "यजुर्वेद में कितने प्रकार के यज्ञों का उल्लेख है?",
        answers: [
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "अनेक", correct: true },
            { text: "केवल एक", correct: false }
        ]
    },
    {
        question: "यजुर्वेद में \"दक्षिणा\" का क्या महत्व है?",
        answers: [
            { text: "देवी का नाम", correct: false },
            { text: "उपासना विधि", correct: false },
            { text: "यज्ञ के बाद गुरु को दी जाने वाली भेंट", correct: true },
            { text: "नदी का नाम", correct: false }
        ]
    },
    {
        question: "यजुर्वेद के अनुसार यज्ञ के कौन-कौन से अंग होते हैं?",
        answers: [
            { text: "मंत्र, ब्राह्मण, आहुतियाँ", correct: true },
            { text: "देवता, ऋषि, राक्षस", correct: false },
            { text: "गीत, वाद्य, नृत्य", correct: false },
            { text: "भूमि, जल, वायु", correct: false }
        ]
    },
    {
        question: "यजुर्वेद का साहित्य किस प्रकार है?",
        answers: [
            { text: "दर्शन प्रधान", correct: false },
            { text: "कर्म प्रधान", correct: true },
            { text: "संगीतमय", correct: false },
            { text: "विज्ञान आधारित", correct: false }
        ]
    },
    {
        question: "किस यजुर्वेदी शाखा में सबसे अधिक यज्ञीय विधियों का विस्तृत विवरण है?",
        answers: [
            { text: "कठ संहिता", correct: false },
            { text: "वाजसनेयी संहिता", correct: false },
            { text: "तैत्तिरीय संहिता", correct: true },
            { text: "मैत्रायणी संहिता", correct: false }
        ]
    },
    {
        question: "शुक्ल यजुर्वेद का एक प्रसिद्ध पाठ कौन-सा है?",
        answers: [
            { text: "छांदोग्य उपनिषद", correct: false },
            { text: "ईश उपनिषद", correct: true },
            { text: "आरण्यक", correct: false },
            { text: "पाणिनीय सूत्र", correct: false }
        ]
    },
    {
        question: "यजुर्वेद में देवताओं के प्रति मुख्य भावना क्या होती है?",
        answers: [
            { text: "भय", correct: false },
            { text: "स्नेह", correct: false },
            { text: "श्रद्धा और आहुति", correct: true },
            { text: "विरोध", correct: false }
        ]
    },
    {
        question: "यजुर्वेद के अनुसार, यज्ञ किसका प्रतीक है?",
        answers: [
            { text: "शक्ति", correct: false },
            { text: "त्याग", correct: true },
            { text: "ज्ञान", correct: false },
            { text: "तपस्या", correct: false }
        ]
    },
    {
        question: "यजुर्वेद में प्रयुक्त 'ब्राह्मण ग्रंथ' किस उद्देश्य से रचे गए हैं?",
        answers: [
            { text: "कर्मकांड की व्याख्या हेतु", correct: true },
            { text: "वेदों की आलोचना हेतु", correct: false },
            { text: "संगीत हेतु", correct: false },
            { text: "विज्ञान हेतु", correct: false }
        ]
    },
    {
        question: "निम्न में से कौन सा यजुर्वेद से संबंधित नहीं है?",
        answers: [
            { text: "वाजसनेयी", correct: false },
            { text: "तैत्तिरीय", correct: false },
            { text: "कठ", correct: false },
            { text: "ऐतरेय", correct: true }
        ]
    }
];
