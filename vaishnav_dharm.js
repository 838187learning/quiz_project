const questions = [
    {
        question: "विष्णु के प्रमुख अवतार कौन से हैं?",
        answers: [
            { text: "राम, कृष्ण, बुद्ध", correct: false },
            { text: "राम, कृष्ण, नरसिंह", correct: true },
            { text: "कृष्ण, राधा, विष्णु", correct: false },
            { text: "विष्णु, शिव, ब्रह्मा", correct: false }
        ]
    },
    {
        question: "भगवान विष्णु की पत्नी का नाम क्या है?",
        answers: [
            { text: "लक्ष्मी", correct: true },
            { text: "दुर्गा", correct: false },
            { text: "सरस्वती", correct: false },
            { text: "राधा", correct: false }
        ]
    },
    {
        question: "भगवान विष्णु का प्रसिद्ध वाहन कौन है?",
        answers: [
            { text: "गजराज", correct: false },
            { text: "गरुड़", correct: true },
            { text: "बैल", correct: false },
            { text: "मोर", correct: false }
        ]
    },
    {
        question: "'श्री कृष्ण' का जन्म कहाँ हुआ था?",
        answers: [
            { text: "काशी", correct: false },
            { text: "मथुरा", correct: true },
            { text: "दिल्ली", correct: false },
            { text: "वृंदावन", correct: false }
        ]
    },
    {
        question: "'श्रीमद्भगवद गीता' में भगवान कृष्ण ने किसे उपदेश दिया था?",
        answers: [
            { text: "अर्जुन", correct: true },
            { text: "युधिष्ठिर", correct: false },
            { text: "भीष्म", correct: false },
            { text: "कर्ण", correct: false }
        ]
    },
    {
        question: "भगवान विष्णु के प्रमुख चार अवतारों में से एक कौन सा है?",
        answers: [
            { text: "कृष्ण", correct: false },
            { text: "राम", correct: false },
            { text: "वामन", correct: false },
            { text: "सभी", correct: true }
        ]
    },
    {
        question: "भगवान राम के पिता का नाम क्या था?",
        answers: [
            { text: "दशरथ", correct: true },
            { text: "जनक", correct: false },
            { text: "कृष्ण", correct: false },
            { text: "ब्रह्मा", correct: false }
        ]
    },
    {
        question: "भगवान विष्णु के किस अवतार को 'कच्छप अवतार' के नाम से जाना जाता है?",
        answers: [
            { text: "राम", correct: false },
            { text: "कृष्ण", correct: false },
            { text: "वामन", correct: false },
            { text: "कूर्म अवतार", correct: true }
        ]
    },
    {
        question: "भगवान कृष्ण ने गीता में किसे कर्मयोग का उपदेश दिया था?",
        answers: [
            { text: "युधिष्ठिर", correct: false },
            { text: "अर्जुन", correct: true },
            { text: "भीष्म", correct: false },
            { text: "रावण", correct: false }
        ]
    },
    {
        question: "भगवान विष्णु का दूसरा अवतार कौन सा है?",
        answers: [
            { text: "वामन", correct: false },
            { text: "नरसिंह", correct: false },
            { text: "मच्छ अवतार", correct: false },
            { text: "राम", correct: true }
        ]
    },
    {
        question: "भगवान कृष्ण ने कितनी गीता के श्लोक दिए थे?",
        answers: [
            { text: "18", correct: false },
            { text: "23", correct: false },
            { text: "700", correct: true },
            { text: "1000", correct: false }
        ]
    },
    {
        question: "भगवान विष्णु के कितने प्रमुख अवतार होते हैं?",
        answers: [
            { text: "10", correct: true },
            { text: "12", correct: false },
            { text: "9", correct: false },
            { text: "5", correct: false }
        ]
    },
    {
        question: "'रामायण' के लेखक कौन थे?",
        answers: [
            { text: "वेदव्यास", correct: false },
            { text: "वाल्मीकि", correct: true },
            { text: "तुलसीदास", correct: false },
            { text: "सूरदास", correct: false }
        ]
    },
    {
        question: "भगवान कृष्ण ने कौन सी मुरली बजाई थी?",
        answers: [
            { text: "माखन मुरली", correct: false },
            { text: "कृष्ण मुरली", correct: false },
            { text: "राधा मुरली", correct: false },
            { text: "बाँसुरी", correct: true }
        ]
    },
    {
        question: "विष्णु के पहले अवतार के रूप में कौन प्रकट हुए थे?",
        answers: [
            { text: "मत्स्य अवतार", correct: true },
            { text: "कूर्म अवतार", correct: false },
            { text: "नरसिंह अवतार", correct: false },
            { text: "वामन अवतार", correct: false }
        ]
    },
    {
        question: "भगवान राम के भाई का नाम क्या था?",
        answers: [
            { text: "लक्ष्मण", correct: false },
            { text: "भरत", correct: false },
            { text: "शत्रुघ्न", correct: false },
            { text: "सभी", correct: true }
        ]
    },
    {
        question: "भगवान राम का जन्म कहाँ हुआ था?",
        answers: [
            { text: "मथुरा", correct: false },
            { text: "अयोध्या", correct: true },
            { text: "काशी", correct: false },
            { text: "दिल्ली", correct: false }
        ]
    },
    {
        question: "'रामलीला' किस धार्मिक पर्व से जुड़ी होती है?",
        answers: [
            { text: "दीपावली", correct: false },
            { text: "होली", correct: false },
            { text: "दशहरा", correct: true },
            { text: "मकर संक्रांति", correct: false }
        ]
    },
    {
        question: "भगवान कृष्ण का सबसे प्रिय भोजन क्या था?",
        answers: [
            { text: "माखन", correct: true },
            { text: "फल", correct: false },
            { text: "मीट", correct: false },
            { text: "भात", correct: false }
        ]
    },
    {
        question: "भगवान कृष्ण की प्रमुख महिला साथी कौन थीं?",
        answers: [
            { text: "राधा", correct: true },
            { text: "सीता", correct: false },
            { text: "गंगा", correct: false },
            { text: "सरस्वती", correct: false }
        ]
    },
    {
        question: "श्री कृष्ण का उपनाम क्या है?",
        answers: [
            { text: "गोविंद", correct: false },
            { text: "हरि", correct: false },
            { text: "माधव", correct: false },
            { text: "सभी", correct: true }
        ]
    },
    {
        question: "भगवान कृष्ण की माता का नाम क्या था?",
        answers: [
            { text: "देवकी", correct: false },
            { text: "यशोदा", correct: true },
            { text: "कौशल्या", correct: false },
            { text: "सुमित्रा", correct: false }
        ]
    },
    {
        question: "भगवान राम के गुरु का नाम क्या था?",
        answers: [
            { text: "वेदव्यास", correct: false },
            { text: "परशुराम", correct: false },
            { text: "आश्र्वर", correct: false },
            { text: "वशिष्ठ", correct: true }
        ]
    },
    {
        question: "भगवान कृष्ण की पराशक्ति का नाम क्या है?",
        answers: [
            { text: "लक्ष्मी", correct: false },
            { text: "राधा", correct: true },
            { text: "सीता", correct: false },
            { text: "दुर्गा", correct: false }
        ]
    },
    {
        question: "भगवान विष्णु के किस अवतार को नरसिंह अवतार के नाम से जाना जाता है?",
        answers: [
            { text: "राम", correct: false },
            { text: "कृष्ण", correct: false },
            { text: "वामन", correct: false },
            { text: "नरसिंह", correct: true }
        ]
    },
    {
        question: "श्री कृष्ण के माता-पिता कौन थे?",
        answers: [
            { text: "देवकी और वसुदेव", correct: true },
            { text: "यशोदा और वसुदेव", correct: false },
            { text: "कंस और देवकी", correct: false },
            { text: "बृंदावन और यशोदा", correct: false }
        ]
    },
    {
        question: "भगवान विष्णु की पत्नी लक्ष्मी का दूसरा नाम क्या है?",
        answers: [
            { text: "राधा", correct: false },
            { text: "शर्वाणी", correct: false },
            { text: "श्री", correct: true },
            { text: "काली", correct: false }
        ]
    },
    {
        question: "भगवान कृष्ण ने कौन से काव्य लिखे थे?",
        answers: [
            { text: "भागवत गीता", correct: true },
            { text: "रामायण", correct: false },
            { text: "महाभारत", correct: false },
            { text: "राधा गीता", correct: false }
        ]
    },
    {
        question: "श्री कृष्ण ने किस युद्ध में अर्जुन को उपदेश दिया था?",
        answers: [
            { text: "कुरुक्षेत्र युद्ध", correct: true },
            { text: "महाभारत", correct: false },
            { text: "रामायण", correct: false },
            { text: "राक्षसों से युद्ध", correct: false }
        ]
    },
    {
        question: "श्री कृष्ण ने राधा को किस रूप में पूजा?",
        answers: [
            { text: "सर्वोत्तम प्रेम", correct: true },
            { text: "भक्तिस्वरूप", correct: false },
            { text: "सबसे बड़ी देवी", correct: false },
            { text: "शांति की देवी", correct: false }
        ]
    },
    {
        question: "भगवान विष्णु का 'शंख' क्या प्रतीक है?",
        answers: [
            { text: "शक्ति का प्रतीक", correct: false },
            { text: "संहार का प्रतीक", correct: false },
            { text: "शांति का प्रतीक", correct: true },
            { text: "समृद्धि का प्रतीक", correct: false }
        ]
    },
    {
        question: "भगवान राम की उपासना किस रूप में होती है?",
        answers: [
            { text: "राम के रूप में", correct: false },
            { text: "राम के रूप में पूजा", correct: false },
            { text: "राम नाम के जप में", correct: false },
            { text: "सभी", correct: true }
        ]
    },
    {
        question: "'रामकथा' किस ग्रंथ में वर्णित है?",
        answers: [
            { text: "रामायण", correct: true },
            { text: "महाभारत", correct: false },
            { text: "भागवत गीता", correct: false },
            { text: "शिव महिमा", correct: false }
        ]
    },
    {
        question: "भगवान विष्णु के कौन से रूप को 'वामन अवतार' के नाम से जाना जाता है?",
        answers: [
            { text: "एक छोटा ब्राह्मण रूप", correct: true },
            { text: "राक्षस रूप", correct: false },
            { text: "महिला रूप", correct: false },
            { text: "शेर रूप", correct: false }
        ]
    },
    {
        question: "भगवान कृष्ण के कितने प्रमुख रूप होते हैं?",
        answers: [
            { text: "तीन", correct: false },
            { text: "चार", correct: false },
            { text: "पांच", correct: false },
            { text: "कई", correct: true }
        ]
    },
    {
        question: "भगवान राम के बारे में सबसे प्रसिद्ध ग्रंथ कौन सा है?",
        answers: [
            { text: "महाभारत", correct: false },
            { text: "रामायण", correct: true },
            { text: "भगवद गीता", correct: false },
            { text: "उपनिषद", correct: false }
        ]
    },
    {
        question: "भगवान कृष्ण के किस रूप को 'गोविंद' कहा जाता है?",
        answers: [
            { text: "गोवर्धन पर्वत", correct: false },
            { text: "कन्हैया", correct: false },
            { text: "भगवान कृष्ण का उपनाम", correct: true },
            { text: "क्रीड़ा रूप", correct: false }
        ]
    },
    {
        question: "भगवान कृष्ण के कितने प्रमुख प्रमुख भक्त थे?",
        answers: [
            { text: "3", correct: false },
            { text: "10", correct: true },
            { text: "12", correct: false },
            { text: "5", correct: false }
        ]
    },
    {
        question: "भगवान विष्णु के किस अवतार को 'मच्छ अवतार' के नाम से जाना जाता है?",
        answers: [
            { text: "मत्स्य अवतार", correct: true },
            { text: "वामन अवतार", correct: false },
            { text: "कृष्ण अवतार", correct: false },
            { text: "राम अवतार", correct: false }
        ]
    },
    {
        question: "भगवान कृष्ण के किस प्रिय कर्म को 'रासलीला' कहा जाता है?",
        answers: [
            { text: "गोवर्धन पूजा", correct: false },
            { text: "माखन चोरी", correct: false },
            { text: "राधा संग रास खेलना", correct: true },
            { text: "यज्ञ पूजा", correct: false }
        ]
    },
    {
        question: "भगवान राम ने किस मंदिर में पूजा की थी?",
        answers: [
            { text: "श्री राम मंदिर, अयोध्या", correct: true },
            { text: "श्री कृष्ण मंदिर, द्वारका", correct: false },
            { text: "शिव मंदिर, काशी", correct: false },
            { text: "लक्ष्मी मंदिर, दिल्ली", correct: false }
        ]
    },
    {
        question: "भगवान कृष्ण ने किस महापुरुष से गीता का उपदेश लिया?",
        answers: [
            { text: "अर्जुन", correct: true },
            { text: "युधिष्ठिर", correct: false },
            { text: "भीष्म", correct: false },
            { text: "कर्ण", correct: false }
        ]
    },
    {
        question: "श्री कृष्ण ने कौन सा प्रसिद्ध यज्ञ किया था?",
        answers: [
            { text: "गोवर्धन पूजा", correct: true },
            { text: "राजसूय यज्ञ", correct: false },
            { text: "व्रत यज्ञ", correct: false },
            { text: "एकादशी यज्ञ", correct: false }
        ]
    },
    {
        question: "भगवान राम के किस रूप में पूजा जाती है?",
        answers: [
            { text: "राघव", correct: false },
            { text: "श्रीराम", correct: false },
            { text: "रामचन्द्र", correct: false },
            { text: "सभी", correct: true }
        ]
    },
    {
        question: "भगवान विष्णु के किन रूपों में से कौन राक्षसों का वध करता है?",
        answers: [
            { text: "नरसिंह अवतार", correct: true },
            { text: "कृष्ण अवतार", correct: false },
            { text: "वामन अवतार", correct: false },
            { text: "राम अवतार", correct: false }
        ]
    },
    {
        question: "भगवान राम की पत्नी का नाम क्या था?",
        answers: [
            { text: "राधा", correct: false },
            { text: "सीता", correct: true },
            { text: "उर्मिला", correct: false },
            { text: "द्रौपदी", correct: false }
        ]
    },
    {
        question: "श्री कृष्ण के कौन से अवतार को 'शरीर रूप' में पूजा जाता है?",
        answers: [
            { text: "श्री कृष्ण", correct: true },
            { text: "श्रीराम", correct: false },
            { text: "बलराम", correct: false },
            { text: "नरसिंह", correct: false }
        ]
    },
    {
        question: "श्री कृष्ण के कौन से भक्त ने 'भगवद गीता' की रचना की थी?",
        answers: [
            { text: "तुलसीदास", correct: false },
            { text: "रामकृष्ण", correct: false },
            { text: "अर्जुन", correct: false },
            { text: "वेदव्यास", correct: true }
        ]
    },
    {
        question: "भगवान राम के किन गुणों का अनुसरण करना चाहिए?",
        answers: [
            { text: "सत्य और धर्म", correct: false },
            { text: "वीरता और शौर्य", correct: false },
            { text: "शांति और प्रेम", correct: false },
            { text: "सभी", correct: true }
        ]
    },
    {
        question: "श्री कृष्ण का प्रमुख मंत्र क्या है?",
        answers: [
            { text: "'ॐ नमः शिवाय'", correct: false },
            { text: "'ॐ विष्णवे नमः'", correct: false },
            { text: "'ॐ श्री कृष्णाय नमः'", correct: true },
            { text: "'राम राम'", correct: false }
        ]
    }
];
