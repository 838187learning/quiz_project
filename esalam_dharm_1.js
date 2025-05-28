const questions = [
    {
        question: "इस्लाम धर्म के संस्थापक कौन थे?",
        answers: [
            { text: "मोहम्मद साहब", correct: true },
            { text: "ईसा मसीह", correct: false },
            { text: "भगवान राम", correct: false },
            { text: "गौतम बुद्ध", correct: false }
        ]
    },
    {
        question: "इस्लाम धर्म का पवित्र ग्रंथ क्या है?",
        answers: [
            { text: "बाइबिल", correct: false },
            { text: "गीता", correct: false },
            { text: "कुरआन", correct: true },
            { text: "तौरा", correct: false }
        ]
    },
    {
        question: "इस्लाम धर्म के अनुयायी किसे कहा जाता है?",
        answers: [
            { text: "मुसलमान", correct: true },
            { text: "हिंदू", correct: false },
            { text: "सिख", correct: false },
            { text: "ईसाई", correct: false }
        ]
    },
    {
        question: "इस्लाम धर्म में भगवान को क्या कहा जाता है?",
        answers: [
            { text: "शिव", correct: false },
            { text: "खुदा", correct: true },
            { text: "बगवान", correct: false },
            { text: "ईश्वर", correct: false }
        ]
    },
    {
        question: "इस्लाम धर्म में नमाज कितनी बार अदा की जाती है?",
        answers: [
            { text: "3 बार", correct: false },
            { text: "4 बार", correct: false },
            { text: "5 बार", correct: true },
            { text: "6 बार", correct: false }
        ]
    },
    {
        question: "इस्लाम धर्म के पांच स्तंभों में से एक कौन सा है?",
        answers: [
            { text: "जकात", correct: true },
            { text: "यज्ञ", correct: false },
            { text: "उपवास", correct: false },
            { text: "ध्यान", correct: false }
        ]
    },
    {
        question: "जकात क्या है?",
        answers: [
            { text: "एक प्रकार का उपवास", correct: false },
            { text: "गरीबों को दिया जाने वाला दान", correct: true },
            { text: "एक प्रकार की पूजा", correct: false },
            { text: "एक त्योहार", correct: false }
        ]
    },
    {
        question: "रमजान के महीने में मुसलमान किसे करते हैं?",
        answers: [
            { text: "उपवास", correct: true },
            { text: "ध्यान", correct: false },
            { text: "पूजा", correct: false },
            { text: "यज्ञ", correct: false }
        ]
    },
    {
        question: "इस्लाम धर्म में हज यात्रा कहाँ की जाती है?",
        answers: [
            { text: "मक्का", correct: true },
            { text: "मदीना", correct: false },
            { text: "काबा", correct: false },
            { text: "कश्मीर", correct: false }
        ]
    },
    {
        question: "इस्लाम धर्म के अनुसार, मोहम्मद साहब को किस देवता का संदेश प्राप्त हुआ था?",
        answers: [
            { text: "भगवान शिव", correct: false },
            { text: "खुदा", correct: true },
            { text: "बगवान विष्णु", correct: false },
            { text: "ब्रह्मा", correct: false }
        ]
    },
    {
        question: "इस्लाम धर्म में ईश्वर के बाद सर्वोच्च स्थान किसका है?",
        answers: [
            { text: "पैगंबर मोहम्मद साहब", correct: true },
            { text: "अली", correct: false },
            { text: "अबू बक्र", correct: false },
            { text: "उमर", correct: false }
        ]
    },
    {
        question: "इस्लाम धर्म में कौन सा त्योहार प्रमुख है?",
        answers: [
            { text: "दीवाली", correct: false },
            { text: "ईद-उल-फितर", correct: true },
            { text: "होली", correct: false },
            { text: "गुरु पर्व", correct: false }
        ]
    },
    {
        question: "इस्लाम में सबसे बड़ा पवित्र स्थान क्या है?",
        answers: [
            { text: "काबा", correct: true },
            { text: "मक्का", correct: false },
            { text: "मदीना", correct: false },
            { text: "बैतुल मुजम्मिल", correct: false }
        ]
    },
    {
        question: "इस्लाम धर्म के अनुयायी हर साल कितनी बार हज यात्रा करते हैं?",
        answers: [
            { text: "एक बार", correct: true },
            { text: "दो बार", correct: false },
            { text: "तीन बार", correct: false },
            { text: "चार बार", correct: false }
        ]
    },
    {
        question: "इस्लाम धर्म का पवित्र स्थान मदीना किस देश में स्थित है?",
        answers: [
            { text: "भारत", correct: false },
            { text: "पाकिस्तान", correct: false },
            { text: "सऊदी अरब", correct: true },
            { text: "इराक", correct: false }
        ]
    },
    {
        question: "इस्लाम धर्म के पवित्र स्थल मक्का में कौन सा घर स्थित है?",
        answers: [
            { text: "काबा", correct: true },
            { text: "दरगाह", correct: false },
            { text: "मस्जिद", correct: false },
            { text: "गुरुद्वारा", correct: false }
        ]
    },
    {
        question: "इस्लाम में उपवास (रोज़ा) किस महीने में रखा जाता है?",
        answers: [
            { text: "रमजान", correct: true },
            { text: "शाव्वाल", correct: false },
            { text: "मोहर्रम", correct: false },
            { text: "रबी अल-अव्वल", correct: false }
        ]
    },
    {
        question: "इस्लाम में नमाज के दौरान कितनी रकअत (प्रार्थना) अदा की जाती है?",
        answers: [
            { text: "5", correct: true },
            { text: "3", correct: false },
            { text: "7", correct: false },
            { text: "4", correct: false }
        ]
    },
    {
        question: "मुसलमानों का पवित्र दिन कौन सा होता है?",
        answers: [
            { text: "शुक्रवार", correct: true },
            { text: "शनिवार", correct: false },
            { text: "सोमवार", correct: false },
            { text: "रविवार", correct: false }
        ]
    },
    {
        question: "इस्लाम धर्म के पवित्र ग्रंथ कुरआन का कितने अध्याय होते हैं?",
        answers: [
            { text: "100", correct: false },
            { text: "50", correct: false },
            { text: "114", correct: true },
            { text: "90", correct: false }
        ]
    },
    {
        question: "इस्लाम में विशेष रूप से कौन सा जानवर हलाल माना जाता है?",
        answers: [
            { text: "गाय", correct: false },
            { text: "बकरी", correct: true },
            { text: "सुअर", correct: false },
            { text: "मुर्गा", correct: false }
        ]
    },
    {
        question: "पैगंबर मोहम्मद साहब का जन्म कहाँ हुआ था?",
        answers: [
            { text: "मक्का", correct: true },
            { text: "मदीना", correct: false },
            { text: "बैतुल्लाह", correct: false },
            { text: "काबा", correct: false }
        ]
    },
    {
        question: "कुरआन का पहला सूरा क्या है?",
        answers: [
            { text: "सूरा यासीन", correct: false },
            { text: "सूरा फातिहा", correct: true },
            { text: "सूरा इखलास", correct: false },
            { text: "सूरा अल-बकरा", correct: false }
        ]
    },
    {
        question: "इस्लाम धर्म में ‘नमाज’ का क्या महत्व है?",
        answers: [
            { text: "भिक्षाटन", correct: false },
            { text: "एक प्रकार की पूजा", correct: false },
            { text: "दिनचर्या का हिस्सा", correct: false },
            { text: "आध्यात्मिक उन्नति", correct: true }
        ]
    },
    {
        question: "इस्लाम धर्म में कौन सा फरज (आवश्यक) कार्य है?",
        answers: [
            { text: "पवित्र ग्रंथ का अध्ययन", correct: false },
            { text: "हज यात्रा", correct: true },
            { text: "भूखा रहना", correct: false },
            { text: "गरीबों को दान देना", correct: false }
        ]
    },
    {
        question: "इस्लाम में सिखाए गए शिष्टाचार को क्या कहा जाता है?",
        answers: [
            { text: "तौहीद", correct: false },
            { text: "सुन्नत", correct: true },
            { text: "तफ्सीर", correct: false },
            { text: "नमाज", correct: false }
        ]
    },
    {
        question: "कुरआन में इस्लाम के मुख्य सिद्धांत क्या हैं?",
        answers: [
            { text: "दुआ", correct: false },
            { text: "इमाम", correct: false },
            { text: "हदीस", correct: false },
            { text: "तौहीद", correct: true }
        ]
    },
    {
        question: "इस्लाम धर्म में शरिया का क्या मतलब है?",
        answers: [
            { text: "धार्मिक शिक्षा", correct: false },
            { text: "सामाजिक क़ानून", correct: true },
            { text: "राजा का आदेश", correct: false },
            { text: "तंत्र विद्या", correct: false }
        ]
    },
    {
        question: "किस दिन इस्लाम में ‘ईद’ मनाई जाती है?",
        answers: [
            { text: "शाव्वाल", correct: true },
            { text: "रमजान", correct: false },
            { text: "मोहर्रम", correct: false },
            { text: "रबी अल-अव्वल", correct: false }
        ]
    },
    {
        question: "किसे इस्लाम में ‘खलीफा’ कहा जाता है?",
        answers: [
            { text: "मक्का के प्रमुख", correct: false },
            { text: "पैगंबर का उत्तराधिकारी", correct: true },
            { text: "मदरसा का प्रमुख", correct: false },
            { text: "मस्जिद का इमाम", correct: false }
        ]
    },
    {
        question: "इस्लाम धर्म में कितने प्रमुख दीन (धर्म) होते हैं?",
        answers: [
            { text: "4", correct: false },
            { text: "5", correct: true },
            { text: "3", correct: false },
            { text: "2", correct: false }
        ]
    },
    {
        question: "हदीस का क्या महत्व है?",
        answers: [
            { text: "हदीस इस्लाम धर्म का ग्रंथ है", correct: false },
            { text: "हदीस पैगंबर मोहम्मद साहब की कथाएँ हैं", correct: true },
            { text: "हदीस मुस्लिमों का इतिहास है", correct: false },
            { text: "हदीस कुरआन का दूसरा रूप है", correct: false }
        ]
    },
    {
        question: "इस्लाम धर्म में किसे 'आला' कहा जाता है?",
        answers: [
            { text: "शहीद", correct: false },
            { text: "पैगंबर", correct: true },
            { text: "इमाम", correct: false },
            { text: "वली", correct: false }
        ]
    },
    {
        question: "इस्लाम में सूरा का क्या मतलब है?",
        answers: [
            { text: "अंग", correct: false },
            { text: "अध्याय", correct: true },
            { text: "उपदेश", correct: false },
            { text: "प्रवचन", correct: false }
        ]
    },
    {
        question: "इस्लाम धर्म के अनुसार जन्नत का क्या मतलब है?",
        answers: [
            { text: "पूजा स्थल", correct: false },
            { text: "स्वर्ग", correct: true },
            { text: "मस्जिद", correct: false },
            { text: "ईश्वर का घर", correct: false }
        ]
    },
    {
        question: "इस्लाम में ‘धन्यवाद’ या ‘धन्य है’ का क्या शब्द है?",
        answers: [
            { text: "अल्लाहु अकबर", correct: false },
            { text: "अलहम्दुलिल्लाह", correct: true },
            { text: "फातिहा", correct: false },
            { text: "बismillah", correct: false }
        ]
    },
    {
        question: "इस्लाम में ‘हिजरा’ का क्या महत्व है?",
        answers: [
            { text: "पैगंबर का मक्का से मदीना की ओर प्रवास", correct: true },
            { text: "मदीना की यात्रा", correct: false },
            { text: "कुरआन की रचना", correct: false },
            { text: "मस्जिद का निर्माण", correct: false }
        ]
    },
    {
        question: "कौन सा पर्व इस्लाम में ‘ईद-उल-अज़हा’ के नाम से जाना जाता है?",
        answers: [
            { text: "बकरीद", correct: true },
            { text: "रमजान", correct: false },
            { text: "शाव्वाल", correct: false },
            { text: "मोहम्मद जयंती", correct: false }
        ]
    },
    {
        question: "कुरआन के किस सूरा में जन्नत का वर्णन किया गया है?",
        answers: [
            { text: "सूरा फातिहा", correct: false },
            { text: "सूरा यासीन", correct: false },
            { text: "सूरा अल-बकरा", correct: false },
            { text: "सूरा अल-इन्फितार", correct: true }
        ]
    },
    {
        question: "इस्लाम धर्म में काबा किस स्थान पर स्थित है?",
        answers: [
            { text: "मदीना", correct: false },
            { text: "मक्का", correct: true },
            { text: "कश्मीर", correct: false },
            { text: "काबुल", correct: false }
        ]
    },
    {
        question: "‘रमजान’ का क्या महत्व है?",
        answers: [
            { text: "यह पूजा का महीना है", correct: false },
            { text: "यह उपवास का महीना है", correct: true },
            { text: "यह हज यात्रा का महीना है", correct: false },
            { text: "यह नमाज का महीना है", correct: false }
        ]
    },
    {
        question: "पैगंबर मोहम्मद साहब की माता का नाम क्या था?",
        answers: [
            { text: "आमिना", correct: true },
            { text: "हलीमा", correct: false },
            { text: "फातिमा", correct: false },
            { text: "रुमा", correct: false }
        ]
    },
    {
        question: "इस्लाम में नमाज अदा करने के बाद किस शब्द का उच्चारण किया जाता है?",
        answers: [
            { text: "अल्लाहु अकबर", correct: false },
            { text: "अलहम्दुलिल्लाह", correct: false },
            { text: "बismillah", correct: false },
            { text: "सलाम", correct: true }
        ]
    },
    {
        question: "इस्लाम में किसी व्यक्ति के मरने के बाद क्या प्रक्रिया होती है?",
        answers: [
            { text: "तंत्र मंत्र", correct: false },
            { text: "अंतिम संस्कार", correct: false },
            { text: "शव का दफनाना", correct: true },
            { text: "शव को जलाना", correct: false }
        ]
    },
    {
        question: "इस्लाम धर्म में कौन सा जीव हलाल मांस माना जाता है?",
        answers: [
            { text: "गाय", correct: false },
            { text: "सुअर", correct: false },
            { text: "बकरी", correct: true },
            { text: "मुर्गा", correct: false }
        ]
    },
    {
        question: "पैगंबर मोहम्मद साहब का पहला धर्म संबंधी उपदेश क्या था?",
        answers: [
            { text: "नमाज पढ़ो", correct: false },
            { text: "अल्लाह की एकता मानो", correct: true },
            { text: "जकात दो", correct: false },
            { text: "रमजान उपवासी हो", correct: false }
        ]
    },
    {
        question: "इस्लाम धर्म में आखिरी पैगंबर कौन थे?",
        answers: [
            { text: "इसा मसीह", correct: false },
            { text: "मोहम्मद साहब", correct: true },
            { text: "आदम", correct: false },
            { text: "इब्राहीम", correct: false }
        ]
    },
    {
        question: "इस्लाम धर्म में हज यात्रा कब आयोजित होती है?",
        answers: [
            { text: "रमजान के महीने में", correct: false },
            { text: "शाव्वाल के महीने में", correct: false },
            { text: "जुल हिज्जा के महीने में", correct: true },
            { text: "रबी अल-अव्वल के महीने में", correct: false }
        ]
    },
    {
        question: "इस्लाम धर्म में प्रमुख स्तंभों में से एक स्तंभ क्या है?",
        answers: [
            { text: "हज", correct: true },
            { text: "योग", correct: false },
            { text: "ध्यान", correct: false },
            { text: "दान", correct: false }
        ]
    },
    {
        question: "इस्लाम में ‘तौहीद’ का क्या अर्थ है?",
        answers: [
            { text: "अल्लाह की एकता का विश्वास", correct: true },
            { text: "उपासना", correct: false },
            { text: "पूजा", correct: false },
            { text: "ध्यान", correct: false }
        ]
    }
];
