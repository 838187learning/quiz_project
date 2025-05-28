const  questions = [
{
    question: "वेदिक सभ्यता में 'ब्रह्मा' का क्या स्थान था?",
    answers: [
        { text: "प्रमुख देवता", correct: false },
        { text: "सबसे शक्तिशाली देवता", correct: false },
        { text: "सृजन के देवता", correct: true },
        { text: "किसी भी वेद में उल्लेखित नहीं है", correct: false },
    ]
},
{
    question: "वेदों के अनुसार 'आत्मा' का क्या महत्व है?",
    answers: [
        { text: "यह केवल शरीर का हिस्सा है", correct: false },
        { text: "यह जीवन का उद्देश्य है", correct: false },
        { text: "यह ब्रह्म के समान है", correct: false },
        { text: "यह जीवन और मृत्यु से परे है", correct: true },
    ]
},
{
    question: "वेदिक सभ्यता के दौरान किस प्रकार के धर्मिक अनुष्ठान अधिक प्रचलित थे?",
    answers: [
        { text: "पूजा", correct: false },
        { text: "यज्ञ", correct: true },
        { text: "तपस्विता", correct: false },
        { text: "सभी", correct: false },
    ]
},
{
    question: "वेदों में 'आकाश' और 'पृथ्वी' को किस रूप में पूजा जाता था?",
    answers: [
        { text: "देवता के रूप में", correct: false },
        { text: "प्राकृतिक शक्ति के रूप में", correct: false },
        { text: "ब्रह्म के रूप में", correct: false },
        { text: "दोनों ही A और B", correct: true },
    ]
},
{
    question: "वेदिक समाज में 'वैश्य' वर्ग का प्रमुख कार्य क्या था?",
    answers: [
        { text: "सैनिक सेवा", correct: false },
        { text: "व्यापार और कृषि", correct: true },
        { text: "शिक्षा और कर्मकांड", correct: false },
        { text: "समाज सुधार", correct: false },
    ]
},
{
    question: "वेदों के अनुसार 'प्रकृति' के तत्वों का क्या स्थान था?",
    answers: [
        { text: "देवता", correct: false },
        { text: "प्राकृतिक शक्तियाँ", correct: true },
        { text: "ईश्वर का रूप", correct: false },
        { text: "सभी", correct: false },
    ]
},
{
    question: "वेदिक सभ्यता में परिवार के प्रमुख सदस्य कौन होते थे?",
    answers: [
        { text: "माता-पिता", correct: false },
        { text: "बच्चे", correct: false },
        { text: "पुरोहित", correct: false },
        { text: "पिता", correct: true },
    ]
},
{
    question: "वेदों में 'इन्द्र' देवता का मुख्य कार्य क्या था?",
    answers: [
        { text: "जल और वर्षा का नियंत्रण", correct: false },
        { text: "सूर्य की पूजा", correct: false },
        { text: "युद्ध और विजय की देवता", correct: true },
        { text: "ब्रह्मा का सहायक", correct: false },
    ]
},
{
    question: "वेदों में कितने प्रकार के 'धर्म' का उल्लेख किया गया है?",
    answers: [
        { text: "एक", correct: false },
        { text: "दो", correct: true },
        { text: "तीन", correct: false },
        { text: "चार", correct: false },
    ]
},
{
    question: "वेदिक सभ्यता में शिक्षा का मुख्य केंद्र क्या था?",
    answers: [
        { text: "गुरुकुल", correct: true },
        { text: "मठ", correct: false },
        { text: "विद्यालय", correct: false },
        { text: "आश्रम", correct: false },
    ]
},
{
    question: "वेदों में 'मंत्र' का मुख्य उद्देश्य क्या था?",
    answers: [
        { text: "शक्ति को नियंत्रित करना", correct: false },
        { text: "देवताओं की पूजा करना", correct: true },
        { text: "धार्मिक शिक्षा देना", correct: false },
        { text: "शांति प्राप्ति के लिए", correct: false },
    ]
},
{
    question: "वेदिक काल में 'अश्वमेध यज्ञ' का आयोजन किस उद्देश्य से किया जाता था?",
    answers: [
        { text: "कृषि वृद्धि", correct: false },
        { text: "राज्य विस्तार", correct: true },
        { text: "प्राकृतिक आपदाओं से मुक्ति", correct: false },
        { text: "आत्म-संस्कार", correct: false },
    ]
},
{
    question: "वेदिक काल में धर्म का पालन किसके द्वारा किया जाता था?",
    answers: [
        { text: "ब्राह्मणों द्वारा", correct: false },
        { text: "राजा द्वारा", correct: false },
        { text: "नागरिकों द्वारा", correct: false },
        { text: "सभी", correct: true },
    ]
},
{
    question: "वेदों में 'प्रकृति पूजा' का महत्व किस रूप में था?",
    answers: [
        { text: "देवता के रूप में", correct: false },
        { text: "आत्मा के रूप में", correct: false },
        { text: "प्रकृति के तत्वों के रूप में", correct: true },
        { text: "धर्म के रूप में", correct: false },
    ]
},
{
    question: "वेदों में 'सोम' का क्या महत्व था?",
    answers: [
        { text: "सूर्य का प्रतीक", correct: false },
        { text: "एक वृक्ष और उबटन", correct: false },
        { text: "एक पौधा जिसे यज्ञ में चढ़ाया जाता था", correct: true },
        { text: "देवता का नाम", correct: false },
    ]
},
{
    question: "वेदिक काल में 'वैदिक समाज' में कौन सा वर्ग सबसे अधिक सम्मानित था?",
    answers: [
        { text: "शूद्र", correct: false },
        { text: "ब्राह्मण", correct: true },
        { text: "क्षत्रिय", correct: false },
        { text: "वैश्य", correct: false },
    ]
},
{
    question: "वेदों में 'यज्ञ' का आयोजन किस देवता की पूजा हेतु किया जाता था?",
    answers: [
        { text: "इन्द्र", correct: false },
        { text: "अग्नि", correct: false },
        { text: "सूर्य", correct: false },
        { text: "सभी देवताओं की पूजा हेतु", correct: true },
    ]
},
{
    question: "वेदों में किसे 'देवताओं का राजा' कहा गया है?",
    answers: [
        { text: "अग्नि", correct: false },
        { text: "इन्द्र", correct: true },
        { text: "सूर्य", correct: false },
        { text: "वरुण", correct: false },
    ]
},
{
    question: "वेदों में 'सत्य' और 'धर्म' को किस प्रकार प्रस्तुत किया गया है?",
    answers: [
        { text: "अनन्त और अविनाशी", correct: true },
        { text: "केवल कर्तव्य", correct: false },
        { text: "सामाजिक संबंध", correct: false },
        { text: "केवल व्यक्तिगत", correct: false },
    ]
},
{
    question: "वेदों में 'आत्मज्ञान' का प्रमुख उद्देश्य क्या था?",
    answers: [
        { text: "ब्रह्म के प्रति आस्था", correct: false },
        { text: "केवल शारीरिक शक्ति", correct: false },
        { text: "समाज में स्थिति बनाए रखना", correct: false },
        { text: "जीवन के गहरे अर्थ को समझना", correct: true },
    ]
},
{
    question: "वेदों के अनुसार 'धर्म' का पालन किससे होता है?",
    answers: [
        { text: "कर्म और सही कार्य से", correct: false },
        { text: "पूजा और अर्चना से", correct: false },
        { text: "ज्ञान और भक्ति से", correct: false },
        { text: "सभी", correct: true },
    ]
},
{
    question: "वेदों में 'सोमरस' का क्या महत्व था?",
    answers: [
        { text: "एक नशे का पदार्थ", correct: false },
        { text: "एक देवता की उपासना", correct: false },
        { text: "यज्ञ में प्रयुक्त पदार्थ", correct: true },
        { text: "उपवास का रूप", correct: false },
    ]
},
{
    question: "वेदों में सबसे महत्वपूर्ण 'धर्मशास्त्र' क्या था?",
    answers: [
        { text: "उपनिषद", correct: false },
        { text: "ब्राह्मण", correct: true },
        { text: "यज्ञ", correct: false },
        { text: "संहिता", correct: false },
    ]
},
{
    question: "वेदों में शिक्षा की पद्धति किस प्रकार की थी?",
    answers: [
        { text: "केवल गुरु द्वारा", correct: false },
        { text: "शास्त्रों और मंत्रों के माध्यम से", correct: true },
        { text: "अनुभव और प्रयोग", correct: false },
        { text: "शारीरिक शिक्षा", correct: false },
    ]
},
{
    question: "वेदों में 'आत्म' की परिभाषा किस रूप में दी गई है?",
    answers: [
        { text: "आत्मा और शरीर का संबंध", correct: false },
        { text: "आत्मा ब्रह्म के रूप में", correct: true },
        { text: "आत्मा केवल देह का तत्व", correct: false },
        { text: "आत्मा केवल माया है", correct: false },
    ]
},
{
    question:"वेदिक काल में 'ध्यान' की पद्धति किस रूप में थी?",
    answers:[
        {text:"मौन और ध्यान", correct:true},
        {text:"केवल मानसिक विचार", correct:false},
        {text:"शारीरिक ध्यान", correct:false},
        {text:"मंत्रों का जाप", correct:false},
    ]
},
{
    question:"वेदों में 'योग' के बारे में क्या उल्लेख है?",
    answers:[
        {text:"केवल ध्यान", correct:false},
        {text:"शारीरिक व्यायाम", correct:false},
        {text:"शरीर, मन और आत्मा का एकीकरण", correct:true},
        {text:"केवल प्राणायाम", correct:false},
    ]
},
{
    question:"वेदों में किस देवता को 'मृत्यु के देवता' के रूप में पूजा जाता था?",
    answers:[
        {text:"यम", correct:true},
        {text:"इन्द्र", correct:false},
        {text:"अग्नि", correct:false},
        {text:"वरुण", correct:false},
    ]
},
{
    question:"वेदों में 'कर्म' का क्या महत्व था?",
    answers:[
        {text:"कर्म ही जीवन का आधार है", correct:true},
        {text:"कर्म केवल शारीरिक कार्य है", correct:false},
        {text:"कर्म केवल पूजा और अर्चना है", correct:false},
        {text:"कर्म जीवन की सफलता से जुड़ा है", correct:false},
    ]
},
{
    question:"वेदों में 'समाज' की संरचना किस आधार पर थी?",
    answers:[
        {text:"धर्म", correct:false},
        {text:"जाति", correct:false},
        {text:"कर्म", correct:false},
        {text:"सभी", correct:true},
    ]
},
{
    question:"वेदों में किसकी प्रमुख पूजा की जाती थी?",
    answers:[
        {text:"सूर्य", correct:false},
        {text:"अग्नि", correct:false},
        {text:"इन्द्र", correct:false},
        {text:"सभी देवताओं की पूजा होती थी", correct:true},
    ]
},
{
    question:"वेदों में किसे 'प्रकृति देवी' कहा गया है?",
    answers:[
        {text:"पृथ्वी", correct:true},
        {text:"गंगा", correct:false},
        {text:"आकाश", correct:false},
        {text:"सूर्य", correct:false},
    ]
},
{
    question:"वेदों में 'प्रकृति' का एक अभिन्न हिस्सा कौन था?",
    answers:[
        {text:"पृथ्वी", correct:false},
        {text:"जल", correct:false},
        {text:"आकाश", correct:false},
        {text:"सभी", correct:true},
    ]
},
{
    question:"वेदों में 'प्रसाद' का क्या महत्व था?",
    answers:[
        {text:"ईश्वर का आशीर्वाद", correct:false},
        {text:"यज्ञ का परिणाम", correct:true},
        {text:"धार्मिक अनुष्ठान", correct:false},
        {text:"यज्ञ सामग्री", correct:false},
    ]
},
{
    question:"वेदों के अनुसार 'सत्य' क्या है?",
    answers:[
        {text:"धार्मिक कार्य", correct:false},
        {text:"आत्मा और ब्रह्म का मिलन", correct:false},
        {text:"कर्म और भक्ति", correct:false},
        {text:"ब्रह्म का सत्य रूप", correct:true},
    ]
},
{
    question:"वेदों में 'अग्नि' के प्रति श्रद्धा का क्या कारण था?",
    answers:[
        {text:"ऊर्जा और प्रकाश का स्रोत", correct:true},
        {text:"युद्ध में सहायक", correct:false},
        {text:"खेती में सहायक", correct:false},
        {text:"सभी", correct:false},
    ]
},
{
    question:"वेदों में 'गाय' का क्या महत्व था?",
    answers:[
        {text:"यज्ञ में उपयोगी", correct:false},
        {text:"धन की देवी", correct:false},
        {text:"प्रमुख आहार स्रोत", correct:false},
        {text:"सभी", correct:true},
    ]
},
{
    question:"वेदों में 'सोम' के पौधे का क्या उपयोग था?",
    answers:[
        {text:"यज्ञ में", correct:true},
        {text:"चिकित्सा में", correct:false},
        {text:"स्वाद बढ़ाने के लिए", correct:false},
        {text:"सभी", correct:false},
    ]
},
{
    question:"वेदों में किसे 'माता' के रूप में पूजा गया था?",
    answers:[
        {text:"पृथ्वी", correct:true},
        {text:"गंगा", correct:false},
        {text:"सूर्या", correct:false},
        {text:"सभी", correct:false},
    ]
},
{
    question:"वेदों में 'मनुष्य' के जीवन के उद्देश्य का क्या वर्णन है?",
    answers:[
        {text:"समाज सेवा", correct:false},
        {text:"आत्मा का मिलन ब्रह्म से", correct:true},
        {text:"भोग की प्राप्ति", correct:false},
        {text:"सभी", correct:false},
    ]
},
{
    question:"वेदों में किसे 'यज्ञ देवता' कहा गया है?",
    answers:[
        {text:"अग्नि", correct:true},
        {text:"इन्द्र", correct:false},
        {text:"सूर्य", correct:false},
        {text:"वरुण", correct:false},
    ]
},
{
    question:"वेदों में किस देवता को 'शक्ति' का प्रतीक माना गया है?",
    answers:[
        {text:"इन्द्र", correct:false},
        {text:"काली", correct:false},
        {text:"दुर्गा", correct:false},
        {text:"रुद्र", correct:true},
    ]
},
{
    question:"वेदों में 'वेदांग' का क्या महत्व था?",
    answers:[
        {text:"वेदों का भाग", correct:false},
        {text:"कर्मकांड का भाग", correct:false},
        {text:"वेदों के सहायक शास्त्र", correct:true},
        {text:"धार्मिक शिक्षाएँ", correct:false},
    ]
},
{
    question:"वेदों में 'उपनिषद' का क्या कार्य था?",
    answers:[
        {text:"जीवन के उद्देश्य को समझाना", correct:true},
        {text:"यज्ञ की प्रक्रिया को बताना", correct:false},
        {text:"देवताओं का वर्णन", correct:false},
        {text:"प्रकृति के सिद्धांत बताना", correct:false},
    ]
},
{
    question:"वेदों में 'मृत्यु' को किस रूप में दर्शाया गया है?",
    answers:[
        {text:"शांति", correct:false},
        {text:"पुनर्जन्म", correct:false},
        {text:"एक अनिवार्य सत्य", correct:true},
        {text:"दुख", correct:false},
    ]
},
{
    question:"वेदों में 'शांति' की क्या परिभाषा दी गई है?",
    answers:[
        {text:"जीवन में संतुलन", correct:false},
        {text:"शारीरिक आराम", correct:false},
        {text:"मानसिक शांति", correct:true},
        {text:"धार्मिक शांति", correct:false},
    ]
},
{
    question:"वेदों में 'गाय' के दूध का क्या महत्व था?",
    answers:[
        {text:"आहार", correct:false},
        {text:"यज्ञ में सामग्री", correct:false},
        {text:"चिकित्सा", correct:false},
        {text:"सभी", correct:true},
    ]
},
{
    question:"वेदों में 'सूर्य' की पूजा क्यों की जाती थी?",
    answers:[
        {text:"प्रकाश का स्रोत", correct:false},
        {text:"शक्ति का प्रतीक", correct:false},
        {text:"जीवन का स्रोत", correct:false},
        {text:"सभी", correct:true},
    ]
},
{
    question:"वेदों में किसे 'धरती माता' के रूप में पूजा जाता था?",
    answers:[
        {text:"पृथ्वी", correct:true},
        {text:"गंगा", correct:false},
        {text:"सूर्य", correct:false},
        {text:"वायु", correct:false},
    ]
},
{
    question:"वेदों में 'मंत्र' का प्रमुख उद्देश्य क्या था?",
    answers:[
        {text:"ज्ञान प्राप्ति", correct:false},
        {text:"ईश्वर से संचार", correct:false},
        {text:"यज्ञ में शक्ति बढ़ाना", correct:false},
        {text:"सभी", correct:true},
    ]
}
];