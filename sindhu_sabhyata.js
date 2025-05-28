const questions = [
    {
        question: "सिंधु घाटी सभ्यता किसके द्वारा खोजी गई थी?",
        answers: [
            { text: "डॉ. राम मनोहर लोहीया", correct: false },
            { text: "हेम चंद्र शर्मा", correct: false },
            { text: "डॉ. दयाराम साहनी", correct: false },
            { text: "सर जॉन मार्शल", correct: true }
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता का प्रमुख स्थल कौन सा था?",
        answers: [
            { text: "लोथल", correct: false },
            { text: "हड़प्पा", correct: false },
            { text: "मोहनजोदड़ो", correct: false },
            { text: "इनमें से सभी", correct: true }
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता का समयकाल लगभग किस वर्ष के आसपास था?",
        answers: [
            { text: "5000-3000 ईसा पूर्व", correct: false },
            { text: "3300-1300 ईसा पूर्व", correct: true },
            { text: "2000-1000 ईसा पूर्व", correct: false },
            { text: "1500-500 ईसा पूर्व", correct: false }
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता के लोग किस प्रकार के लेखन प्रणाली का प्रयोग करते थे?",
        answers: [
            { text: "संस्कृत", correct: false },
            { text: "चित्रलिपि", correct: true },
            { text: "शिलालेख", correct: false },
            { text: "कूथन लिपि", correct: false }
        ]
    },
    {
        question: "मोहनजोदड़ो के बारे में क्या सही है?",
        answers: [
            { text: "यह एक प्रमुख व्यापारिक केंद्र था", correct: true },
            { text: "यह एक धार्मिक स्थल था", correct: false },
            { text: "यह एक कृषि केंद्र था", correct: false },
            { text: "यह एक सैन्य केंद्र था", correct: false }
        ]
    },
    {
        question: "हड़प्पा सभ्यता में सबसे पहले किसने खुदाई की थी?",
        answers: [
            { text: "डॉ. दयाराम साहनी", correct: true },
            { text: "सैमुअल मार्शल", correct: false },
            { text: "मेगस्थनीज", correct: false },
            { text: "ह्यूबर्ट गोल्डमैन", correct: false }
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता के लोग किस धातु का उपयोग करते थे?",
        answers: [
            { text: "तांबा", correct: true },
            { text: "लोहा", correct: false },
            { text: "कांसा", correct: false },
            { text: "चांदी", correct: false }
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता में सबसे पुरानी शहर की खुदाई कहाँ हुई थी?",
        answers: [
            { text: "हड़प्पा", correct: true },
            { text: "मोहनजोदड़ो", correct: false },
            { text: "राखीगढ़ी", correct: false },
            { text: "लोथल", correct: false }
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता का प्रमुख कृषि उत्पाद क्या था?",
        answers: [
            { text: "गेहूं", correct: true },
            { text: "चावल", correct: false },
            { text: "जौ", correct: false },
            { text: "रागी", correct: false }
        ]
    },
    {
        question: "मोहनजोदड़ो से किस प्रकार के बर्तन प्राप्त हुए हैं?",
        answers: [
            { text: "कांस्य के", correct: false },
            { text: "लकड़ी के", correct: false },
            { text: "मिट्टी के", correct: true },
            { text: "तांबे के", correct: false }
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता के लोग किस प्रकार के भवनों का निर्माण करते थे?",
        answers: [
            { text: "लकड़ी के", correct: false },
            { text: "पत्थर के", correct: false },
            { text: "ईंट के", correct: true },
            { text: "बांस के", correct: false }
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता के लोग किस प्रकार का धर्म मानते थे?",
        answers: [
            { text: "बहुदेववादी", correct: true },
            { text: "एकेश्वरवादी", correct: false },
            { text: "आस्तिक", correct: false },
            { text: "नास्तिक", correct: false }
        ]
    },
    {
        question: "हड़प्पा के किस स्थल से शिलालेख प्राप्त हुए हैं?",
        answers: [
            { text: "लोथल", correct: false },
            { text: "मोहनजोदड़ो", correct: false },
            { text: "हड़प्पा", correct: true },
            { text: "राखीगढ़ी", correct: false }
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता के लोग किस प्रकार की लेखन शैली का उपयोग करते थे?",
        answers: [
            { text: "हस्तोलेखन", correct: false },
            { text: "चित्रलिपि", correct: true },
            { text: "संस्कृत लिपि", correct: false },
            { text: "ब्राह्मी लिपि", correct: false }
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता के लोगों द्वारा प्रयोग किए गए प्रमुख किलेबंदी स्थल कौन से थे?",
        answers: [
            { text: "मोहनजोदड़ो", correct: false },
            { text: "हड़प्पा", correct: false },
            { text: "कालीबंगन", correct: false },
            { text: "सभी", correct: true }
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता का प्रमुख नगर किस नदी के किनारे स्थित था?",
        answers: [
            { text: "गंगा", correct: false },
            { text: "यमुना", correct: false },
            { text: "सिंधु", correct: true },
            { text: "सरस्वती", correct: false }
        ]
    },
    {
        question: "मोहनजोदड़ो में किस प्रकार का सार्वजनिक स्नानागार पाया गया था?",
        answers: [
            { text: "जलाशय", correct: false },
            { text: "गढ़वाली स्नानागार", correct: false },
            { text: "ग्रेट बाथ", correct: true },
            { text: "शाही स्नानागार", correct: false }
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता में किसी भी नगर के बीच में क्या था?",
        answers: [
            { text: "किला", correct: false },
            { text: "जलाशय", correct: false },
            { text: "खुले मैदान", correct: true },
            { text: "मंदिर", correct: false }
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता के लोग किस प्रकार के वाणिज्य करते थे?",
        answers: [
            { text: "मौद्रिक वाणिज्य", correct: false },
            { text: "बार्टर प्रणाली", correct: true },
            { text: "डिजिटल वाणिज्य", correct: false },
            { text: "स्वर्ण वाणिज्य", correct: false }
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता के लोग किस प्रकार के साधन का उपयोग करते थे?",
        answers: [
            { text: "कृषि उपकरण", correct: false },
            { text: "तांबे के औजार", correct: false },
            { text: "कांस्य के औजार", correct: false },
            { text: "सभी", correct: true }
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता में प्रचलित सामाजिक व्यवस्था का स्वरूप क्या था?",
        answers: [
            { text: "वर्गीय", correct: true },
            { text: "लोकतांत्रिक", correct: false },
            { text: "सामंती", correct: false },
            { text: "अस्पृश्य", correct: false }
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता में मनुष्यों की कौन सी कला विशेष रूप से प्रचलित थी?",
        answers: [
            { text: "चित्रकला", correct: false },
            { text: "मूर्तिकला", correct: true },
            { text: "स्थापत्य कला", correct: false },
            { text: "संगीत कला", correct: false }
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता में किस प्रकार की धार्मिक प्रथाएँ पाई गईं?",
        answers: [
            { text: "मानव बलि", correct: false },
            { text: "पशु बलि", correct: false },
            { text: "उपासना और पूजा", correct: true },
            { text: "ध्यान और योग", correct: false }
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता में किस स्थल से व्यापारिक सामग्री प्राप्त हुई है?",
        answers: [
            { text: "हड़प्पा", correct: false },
            { text: "मोहनजोदड़ो", correct: false },
            { text: "लोथल", correct: true },
            { text: "राखीगढ़ी", correct: false }
        ]
    },
    {
        question: "हड़प्पा सभ्यता के समय के लोग किस प्रकार की कृषि करते थे?",
        answers: [
            { text: "सिंचित कृषि", correct: true },
            { text: "वर्षा आधारित कृषि", correct: false },
            { text: "द्विवार्षिक कृषि", correct: false },
            { text: "शुष्क कृषि", correct: false }
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता का प्रमुख औजार क्या था?",
        answers: [
            { text: "कांस्य का औजार", correct: true },
            { text: "तांबा", correct: false },
            { text: "लकड़ी", correct: false },
            { text: "चाकू", correct: false },
        ]
    },
    {
        question: "मोहनजोदड़ो से कौन सी प्रसिद्ध वस्तु मिली है?",
        answers: [
            { text: "सोने की मूर्तियाँ", correct: false },
            { text: "मोती के हार", correct: true },
            { text: "कांस्य के बर्तन", correct: false },
            { text: "कांस्य के बने जानवर", correct: false },
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता के लोग किन जानवरों को पालते थे?",
        answers: [
            { text: "गाय, बकरियाँ, बैल", correct: true },
            { text: "हाथी, घोड़ा", correct: false },
            { text: "बकरी, शेर", correct: false },
            { text: "सभी", correct: false },
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता के लोग किस प्रकार की वाणिज्य प्रणाली का पालन करते थे?",
        answers: [
            { text: "स्थानीय व्यापार", correct: false },
            { text: "अंतर्राष्ट्रीय व्यापार", correct: true },
            { text: "कृषक उत्पाद वाणिज्य", correct: false },
            { text: "समुद्री व्यापार", correct: false },
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता का प्रमुख केंद्र किस स्थल से था?",
        answers: [
            { text: "हड़प्पा", correct: true },
            { text: "मोहनजोदड़ो", correct: false },
            { text: "लोथल", correct: false },
            { text: "राखीगढ़ी", correct: false },
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता का पतन मुख्य रूप से किस कारण हुआ?",
        answers: [
            { text: "प्राकृतिक आपदाएँ", correct: true },
            { text: "विदेशी आक्रमण", correct: false },
            { text: "सामाजिक असंतुलन", correct: false },
            { text: "राजनीतिक पतन", correct: false },
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता के किस स्थल पर समुद्री व्यापार के प्रमाण मिले हैं?",
        answers: [
            { text: "मोहनजोदड़ो", correct: false },
            { text: "लोथल", correct: true },
            { text: "हड़प्पा", correct: false },
            { text: "राखीगढ़ी", correct: false },
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता के लोग किस प्रकार की कृषि करते थे?",
        answers: [
            { text: "ऊँचाई पर खेती", correct: false },
            { text: "बाढ़ नियंत्रण द्वारा खेती", correct: false },
            { text: "सिंचित कृषि", correct: true },
            { text: "वर्षा पर आधारित", correct: false },
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता में सबसे प्रमुख निर्माण क्या था?",
        answers: [
            { text: "इमारतें", correct: false },
            { text: "स्नानागार", correct: true },
            { text: "मंदिर", correct: false },
            { text: "कुएं", correct: false },
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता के किस स्थल पर नृत्य की मूर्तियाँ प्राप्त हुई हैं?",
        answers: [
            { text: "मोहनजोदड़ो", correct: true },
            { text: "हड़प्पा", correct: false },
            { text: "लोथल", correct: false },
            { text: "कालीबंगन", correct: false },
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता में मिल चुकी पुरानी मुद्राओं का क्या था?",
        answers: [
            { text: "धातु", correct: false },
            { text: "लकड़ी", correct: false },
            { text: "मिट्टी", correct: true },
            { text: "कागज", correct: false },
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता के लोग किस धर्म का पालन करते थे?",
        answers: [
            { text: "हिंदू धर्म", correct: false },
            { text: "बौद्ध धर्म", correct: false },
            { text: "जैन धर्म", correct: false },
            { text: "बहुदेववाद", correct: true },
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता में किस प्रकार के जल निकासी व्यवस्था के प्रमाण मिले हैं?",
        answers: [
            { text: "कुएं", correct: false },
            { text: "नदियाँ", correct: false },
            { text: "नालियाँ", correct: true },
            { text: "जलाशय", correct: false },
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता के लोग किस प्रकार के खेलों का आयोजन करते थे?",
        answers: [
            { text: "बालीबॉल", correct: false },
            { text: "क्रिकेट", correct: false },
            { text: "कुश्ती", correct: true },
            { text: "फुटबॉल", correct: false },
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता के लोग किस प्रकार की तकनीकों में माहिर थे?",
        answers: [
            { text: "धातु विज्ञान", correct: false },
            { text: "शिल्प कला", correct: false },
            { text: "कृषि तकनीक", correct: false },
            { text: "सभी", correct: true },
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता में किस प्रकार के बर्तन बनाए जाते थे?",
        answers: [
            { text: "मिट्टी के", correct: true },
            { text: "कांस्य के", correct: false },
            { text: "सोने के", correct: false },
            { text: "चांदी के", correct: false },
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता के लोग किस प्रकार का माप और वजन प्रणाली का उपयोग करते थे?",
        answers: [
            { text: "डिजिटल", correct: false },
            { text: "विद्युत", correct: false },
            { text: "मानक माप और वजन", correct: true },
            { text: "भार प्रणाली", correct: false },
        ]
    },
    {
        question: "हड़प्पा सभ्यता के लोग किस प्रकार की मुद्रा का प्रयोग करते थे?",
        answers: [
            { text: "कागज़ की मुद्रा", correct: false },
            { text: "धातु की मुद्रा", correct: false },
            { text: "सिक्के", correct: false },
            { text: "बार्टर प्रणाली", correct: true },
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता में धर्म के कौन से आयाम थे?",
        answers: [
            { text: "पूजा पद्धतियाँ", correct: false },
            { text: "यज्ञ", correct: false },
            { text: "मंदिर निर्माण", correct: false },
            { text: "सभी", correct: true },
        ]
    },
    {
        question: "मोहनजोदड़ो में कौन सी विशेष प्रकार की मूर्तियाँ मिलीं?",
        answers: [
            { text: "पशु मूर्तियाँ", correct: false },
            { text: "धार्मिक मूर्तियाँ", correct: false },
            { text: "दैवीय मूर्तियाँ", correct: false },
            { text: "नृत्य मूर्तियाँ", correct: true },
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता के लोगों का मुख्य उद्योग क्या था?",
        answers: [
            { text: "खनिज उद्योग", correct: false },
            { text: "वस्त्र उद्योग", correct: false },
            { text: "कृषि उद्योग", correct: true },
            { text: "धातु उद्योग", correct: false },
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता में किस प्रकार के शिलालेख पाए गए?",
        answers: [
            { text: "संस्कृत शिलालेख", correct: false },
            { text: "चित्रलिपि शिलालेख", correct: true },
            { text: "ब्राह्मी लिपि शिलालेख", correct: false },
            { text: "पाली लिपि शिलालेख", correct: false },
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता के लोग किस प्रकार की नावों का प्रयोग करते थे?",
        answers: [
            { text: "बड़े व्यापारिक जहाज", correct: false },
            { text: "कश्ती", correct: true },
            { text: "छोटे नावें", correct: false },
            { text: "नावें केवल जल परिवहन के लिए", correct: false },
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता के किस स्थल से सबसे बड़ी उत्खनन सामग्री मिली है?",
        answers: [
            { text: "हड़प्पा", correct: true },
            { text: "मोहनजोदड़ो", correct: false },
            { text: "राखीगढ़ी", correct: false },
            { text: "लोथल", correct: false },
        ]
    },
    {
        question: "सिंधु घाटी सभ्यता का प्रमुख व्यापार मार्ग किस स्थल से था?",
        answers: [
            { text: "लोथल", correct: true },
            { text: "मोहनजोदड़ो", correct: false },
            { text: "हड़प्पा", correct: false },
            { text: "हरियाणा", correct: false },
        ]
    },
    {
        question:"सिंधु घाटी सभ्यता के लोग कितने वर्षों तक जीवित रहे?",
        answers:[
            {text:"1000 वर्ष", correct:false},
            {text:"2000 वर्ष", correct:false},
            {text:"3000 वर्ष", correct:true},
            {text:"5000 वर्ष", correct:false},
        ]
    },
    {
        question:"सिंधु घाटी सभ्यता में प्रयुक्त होने वाली प्रमुख धातु क्या थी?",
        answers:[
            {text:"सोना", correct:false},
            {text:"तांबा", correct:true},
            {text:"चांदी", correct:false},
            {text:"लोहा", correct:false},
        ]
    },
    {
        question:"सिंधु घाटी सभ्यता में किन प्रकार की वस्तुएं प्राप्त हुई थीं?",
        answers:[
            {text:"धातु की वस्तुएं", correct:false},
            {text:"शिल्पकला के सामान", correct:false},
            {text:"कृषि उपकरण", correct:false},
            {text:"सभी", correct:true},
        ]
    },
    {
        question:"सिंधु घाटी सभ्यता के लोग किस प्रकार का वस्त्र पहनते थे?",
        answers:[
            {text:"खादी", correct:false},
            {text:"शॉल", correct:false},
            {text:"सूती और ऊनी वस्त्र", correct:true},
            {text:"चमड़े के वस्त्र", correct:false},
        ]
    },
    {
        question:"सिंधु घाटी सभ्यता का प्रमुख धर्म क्या था?",
        answers:[
            {text:"हिंदू धर्म", correct:false},
            {text:"बौद्ध धर्म", correct:false},
            {text:"जैन धर्म", correct:false},
            {text:"बहुदेववादी धर्म", correct:true},
        ]
    },
    {
        question:"सिंधु घाटी सभ्यता के लोग किस प्रकार की व्यवस्था में रहते थे?",
        answers:[
            {text:"एकल परिवार", correct:false},
            {text:"संयुक्त परिवार", correct:true},
            {text:"सामूहिक समुदाय", correct:false},
            {text:"सामंती व्यवस्था", correct:false},
        ]
    },
    {
        question:"मोहनजोदड़ो में किस प्रकार का कड़ा मिलता है?",
        answers:[
            {text:"धातु का कड़ा", correct:false},
            {text:"तांबे का कड़ा", correct:true},
            {text:"पत्थर का कड़ा", correct:false},
            {text:"मिट्टी का कड़ा", correct:false},
        ]
    },
    {
        question:"सिंधु घाटी सभ्यता के लोग किस प्रकार का शिकार करते थे?",
        answers:[
            {text:"बंदर", correct:false},
            {text:"मांसाहारी पशु", correct:false},
            {text:"मछली और पक्षी", correct:true},
            {text:"इन सभी का", correct:false},
        ]
    },
    {
        question:"सिंधु घाटी सभ्यता के लोग किस प्रकार के व्यापार करते थे?",
        answers:[
            {text:"जल मार्ग द्वारा", correct:false},
            {text:"भूमि मार्ग द्वारा", correct:false},
            {text:"समुद्र मार्ग द्वारा", correct:false},
            {text:"इन सभी के द्वारा", correct:true},
        ]
    },
    {
        question:"सिंधु घाटी सभ्यता के कौन से स्थल समुद्र के किनारे स्थित थे?",
        answers:[
            {text:"मोहनजोदड़ो", correct:false},
            {text:"हड़प्पा", correct:false},
            {text:"लोथल", correct:true},
            {text:"राखीगढ़ी", correct:false},
        ]
    },
    {
        question:"सिंधु घाटी सभ्यता में महिलाओं का प्रमुख स्थान क्या था?",
        answers:[
            {text:"घर संभालना", correct:true},
            {text:"खेतों में काम करना", correct:false},
            {text:"व्यापार करना", correct:false},
            {text:"प्रशासन में काम करना", correct:false},
        ]
    },
    {
        question:"सिंधु घाटी सभ्यता का प्रमुख धर्मीय स्थल कौन सा था?",
        answers:[
            {text:"मंदिर", correct:false},
            {text:"स्नानागार", correct:true},
            {text:"गुफाएँ", correct:false},
            {text:"मठ", correct:false},
        ]
    },
    {
        question:"सिंधु घाटी सभ्यता में कृषि की प्रमुख पद्धति क्या थी?",
        answers:[
            {text:"बरसात आधारित", correct:false},
            {text:"सिंचाई आधारित", correct:true},
            {text:"केवल बुवाई", correct:false},
            {text:"केवल खेती", correct:false},
        ]
    },
    {
        question:"सिंधु घाटी सभ्यता में माप की किस एकाई का प्रयोग होता था?",
        answers:[
            {text:"क्यूबिक मीटर", correct:false},
            {text:"यार्ड", correct:false},
            {text:"फुट", correct:true},
            {text:"बीज", correct:false},
        ]
    },
    {
        question:"सिंधु घाटी सभ्यता के किस स्थल पर वाणिज्य संबंधी सामग्री अधिक पाई गई?",
        answers:[
            {text:"हड़प्पा", correct:false},
            {text:"मोहनजोदड़ो", correct:false},
            {text:"लोथल", correct:true},
            {text:"कालीबंगन", correct:false},
        ]
    },
    {
        question:"सिंधु घाटी सभ्यता के लोग किस प्रकार के खेलों में रुचि रखते थे?",
        answers:[
            {text:"क्रिकेट", correct:false},
            {text:"बैडमिंटन", correct:false},
            {text:"कुश्ती", correct:true},
            {text:"हॉकी", correct:false},
        ]
    },
    {
        question:"सिंधु घाटी सभ्यता के लोग धार्मिक अनुष्ठान किस स्थल पर करते थे?",
        answers:[
            {text:"घर", correct:false},
            {text:"मंदिर", correct:true},
            {text:"स्नानागार", correct:false},
            {text:"खुले मैदान", correct:false},
        ]
    },
    {
        question:"सिंधु घाटी सभ्यता के किस स्थल पर पहली बार रानी और राजा की मूर्तियाँ पाई गईं?",
        answers:[
            {text:"हड़प्पा", correct:true},
            {text:"मोहनजोदड़ो", correct:false},
            {text:"राखीगढ़ी", correct:false},
            {text:"लोथल", correct:false},
        ]
    },
    {
        question:"सिंधु घाटी सभ्यता का सबसे पुराना शहर कौन सा था?",
        answers:[
            {text:"हड़प्पा", correct:true},
            {text:"मोहनजोदड़ो", correct:false},
            {text:"लोथल", correct:false},
            {text:"कालीबंगन", correct:false},
        ]
    },
    {
        question:"सिंधु घाटी सभ्यता में समुद्री मार्ग से व्यापार किससे संबंधित था?",
        answers:[
            {text:"अफगानिस्तान", correct:false},
            {text:"फारस", correct:false},
            {text:"सुमेर", correct:false},
            {text:"इन सभी से", correct:true},
        ]
    }
];