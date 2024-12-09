"use client";
import React, { createContext, useState } from "react";

export const ShayariData = createContext();

export const ShayariProvider = ({ children }) => {
  const data = [
    {
      id: 1,
      link: "latest",
      heading: "Latest Shayari",
      imgsrc: "latest.jpeg",
    },
    {
      id: 2,
      link: "signature",
      heading: "Signature Shayari",
      imgsrc: "IMG-20241109-WA0036.jpg",
    },
    {
      id: 3,
      link: "sad",
      heading: "Sad Shayari",
      imgsrc: "sad.jpeg",
    },
    {
      id: 4,
      link: "romantic",
      heading: "Romantic Shayari",
      imgsrc: "mohabbat.jpeg",
    },
    {
      id: 5,
      link: "breakup",
      heading: "Breakup Shayari",
      imgsrc: "breakup.jpeg",
    },
    {
      id: 6,
      link: "motivational",
      heading: "Motivational Shayari",
      imgsrc: "motivational.jpeg",
    },
    {
      id: 7,
      link: "social",
      heading: "Social Shayari",
      imgsrc: "social.jpeg",
    },
    {
      id: 8,
      link: "politic",
      heading: "Politic Shayari",
      imgsrc: "politic.jpeg",
    },
  ];

  const shayaris = [
    {
      id: 1,
      shayariname: "zakhmon ke talabagaar namak ke ",
      keywords: ["latest", "sad", "signature"],
      shayari: ` मरहम के नहीं ये हैं तरफ़-दार नमक के 
निकले हैं मिरे ज़ख़्म तलबगार नमक के 

आया कोई सैलाब कहानी में अचानक 
और घुल गए पानी में वो किरदार नमक के 

दोनों ही किनारों पे थी बीमारों की मज्लिस 
इस पार थे मीठे के तो उस पार नमक के 

उस ने ही दिए ज़ख़्म ये गर्दन पे हमारी 
फिर उस ने ही पहनाए हमें हार नमक के 

कहती थी ग़ज़ल मुझ को है मरहम की ज़रूरत 
और देते रहे सब उसे अशआ'र नमक के 

जिस सम्त मिला करती थीं ज़ख़्मों की दवाएँ 
सुनते हैं कि अब हैं वहाँ बाज़ार नमक के
 `,
      urdushayari: `
مرہم کے نہیں یہ ہیں  طرف دار نمک کے 
نکلے ہیں مرے زخم طلب گار نمک کے

آیا کوئی سیلاب کہانی میں اچانک 
اور گھل گئے پانی میں وہ کردار نمک کے

دونوں ہی کناروں پہ تھی بیماروں کی مجلس 
اس پار تھے میٹھے کے تو اس پار نمک کے

 اس نے ہی دیے زخم یہ گردن پہ ہماری 
پھر اس نے ہی پہنائے ہمیں ہار نمک کے

 کہتی تھی غزل مجھ کو ہے مرہم کی ضرورت 
اور دیتے رہے سب اسے اشعار نمک کے

 جس سمت ملا کرتی تھیں زخموں کی دوائیں 
`,
    },
    {
      id: 2,
      shayariname: "usaka chehara ek taraph, saaree duniya ek taraph",
      keywords: ["signature", "latest", "romantic"],
      shayari: `चाँद, सितारे, फूल, परिंदे ,शाम ,सवेरा एक तरफ़
सारी दुनिया उसका चर्बा उसका चेहरा एक तरफ़

वो लड कर भी सो जाए तो उसका माथा चूमूँ मैं
उससे मुहब्बत एक तरफ़ है उससे झगड़ा एक तरफ़

जिस शय पर वो उँगली रख दे उसको वो दिलवानी है
उसकी ख़ुशियाँ सबसे अव्वल सस्ता महंगा एक तरफ़

सारी दुनिया जो भी बोले सब कुछ शोर-शराबा है
सबका कहना एक तरफ़ है उसका कहना एक तरफ़

ज़ख़्मों पर मरहम लगवाओ लेकिन उसके हाथों से
चारा-साज़ी एक तरफ़ है उसका छूना एक तरफ़

उसने सारी दुनिया माँगी मैने उसको माँगा है
उसके सपने एक तरफ़ है मेरा  सपना एक तरफ़
`,
      urdushayari: `
چاند ،ستارے ،پھول ،پرندے، شام سویرا ایک طرف
ساری دنیا اس کا چربہ اس کا چہرا ایک طرف

وہ لڑ کر بھی سو جائے تو اس کا ماتھا چوموں میں
اس سے محبت ایک طرف ہے اس سے جھگڑا ایک طرف

جس شے پر وہ انگلی رکھ دے اس کو وہ دلوانی ہے
اس کی خوشیاں سب سے اول سستا مہنگا ایک طرف

زخموں پر مرہم لگواؤ لیکن اس کے ہاتھوں سے
چارہ سازی ایک طرف ہے اس کا چھونا ایک طرف

ساری دنیا جو بھی بولے سب کچھ شور شرابا ہے
سب کا کہنا ایک طرف ہے اس کا کہنا ایک طرف 

 اس نے ساری دنیا مانگی  میں نے اس کو مانگ لیا
اس کے سپنے ایک طرف ہیں میرا سپنا ایک طرف`,
    },
    {
      id: 3,
      shayariname: "misaal teree, khyaal tera",
      keywords: ["latest", "sad"],
      shayari: ` कोई मिसाल नहीं है तिरी मिसाल के बाद
मै बे-ख़याल हुआ हूँ तिरे ख़याल के बाद

बस इक मलाल पे तू ज़िन्दगी तमाम न कर
बड़े मलाल मिलेगें मिरे मलाल के बाद

हर एक ज़ख़्म को अश्कों से धो के चूम लिया
मै ऐसे ठीक हुआ उसकी देख-भाल के बाद

उलझ के रह गया वो जाल में तबीबों के
मरीज़ घर नहीं लौटा है अस्पताल के बाद

दुआ सलाम से आगे मै बढ नहीं पाता
उसे भी सोचना पड़ता है हाल-चाल के बाद

हमारे बीच में जो है सही नहीं है वो
उसे ये याद भी  आया तो चार साल के बाद

हज़ारों ख़्वाब जो आँखों के आसरे थे कभी
यतीम हो गए आँखों के इन्तिकाल के बाद
`,
      urdushayari: `
کوئی مثال نہیں ہے تری مثال کے بعد
میں بے خیال ہوا ہوں ترے خیال کے بعد

بس اک ملال پہ تو زندگی تمام نہ کر
بڑے ملال ملیں گے مرے ملال کے بعد


ہر ایک زخم کو اشکوں سے دھو کے چوم لیا
میں ایسے ٹھیک ہوا اس کی دیکھ بھال کے بعد

الجھ کے رہ گیا وہ جال میں طبیبوں کے
مریض گھر نہیں لوٹا ہے اسپتال کے بعد

دعا سلام سے آگے میں بڈھ نہیں پاتا
اسے بھی سوچنا پڑتا ہے حال چال کے بعد

ہمارے بیچ میں جو ہے سہی نہیں ہے وہ
اسے یہ یاد بھی آیا تو چار سال کے بعد

ہزاروں خواب جو آنکھوں کے آسرے تھے کبھی
یتیم ہو گئے آنکھوں کے انتقال کے بعد`,
    },
    {
      id: 4,
      shayariname: "duniya mein kuchh paane ko, bana paagal",
      keywords: ["latest", "motivational"],
      shayari: ` तेरे पीछे होगी दुनिया पागल बन
क्या बोला मैने कुछ समझा,?पागल बन

सहरा में तू ढूंड ले दरिया पागल बन
वर्ना मर जाएगा प्यासा पागल बन

आधा दाना आधा पागल नइं नइं नइं
उसको पाना है तो पूरा पागल बन

देखें तुझ को लोग तो पागल हो जाएँ
इतना उम्दा इतना आ'ला पागल बन

दानाई दिखलाने से कुछ हासिल नइं
पागल-ख़ाना है ये दुनिया पागल बन

लोगों से डर लगता है? तो घर में बैठ
जिगरा है तो मेरे जैसा पागल बन
`,
      urdushayari: `
 تیرے پیچھے ہوگی دنیا پاگل بن
کیا بولا میں نے کچھ سمجھا؟پاگل بن 

صحرا میں تو ڈھونڈ لے دریا پاگل بن
ورنہ مر جائےگا پیاسا پاگل بن 

آدھا دانا آدھا پاگل نئں نئں نئں
اسکو پانا ہے تو پورا پاگل بن

 دیکھیں تجھ کو  لوگ تو پاگل ہو جائیں
اتنا عمدہ اتنا  اعلیٰ پاگل بن

 دانائی دکھلانے سے کچھ حاصل نئں
پاگل خانہ ہے یہ دنیا پاگل بن


لوگوں سے ڈر لگتا ہے؟ تو گھر میں بیٹھ
جگرا ہے تو میرے جیسا پاگل بن`,
    },
    {
      id: 5,
      shayariname: "ham bure log hain",
      keywords: ["latest", "social"],
      shayari: `नेकियाँ मत सिखा,हम बुरे लोग हैं
क्यूँ नहीं मानता हम,बुरे लोग हैं

सच्ची बातें वफ़ा और अच्छे अमल
ये न हम को सुझा,हम बुरे लोग हैं

ज़िन्दगी काट दी अच्छे बनने में और
जब मरे तो लगा,हम बुरे लोग हैं

अच्छे घर से है तू हम से रिश्ता न रख
अपने घर लौट जा,हम बुरे लोग हैं

हम पे अपनी दुआएं न कर यूँ फ़ुज़ूल
हम को दे बद्द-दुआ,हम बुरे लोग हैं

इससे पहले कोई लिखता हमको बुरा
हम ने ख़ुद लिख दिया,हम बुरे लोग हैं
`,
      urdushayari: `نیکیاں مت سکھا،ہم برے لوگ ہیں
کیوں نہیں مانتا، ہم برے لوگ ہیں

سچی باتیں وفا اور اچھے عمل 
یہ نہ ہم کو سجھا، ہم برے لوگ ہیں

زندگی کاٹ دی اچھا بننے میں اور
جب مرے تو لگا،ہم برے لوگ ہیں

اچھے گھر سے ہے تو ہم سے رشتا نہ رکھ
اپنے گھر لوٹ جا، ہم برے لوگ ہیں

ہم پہ اپنی دعائیں نہ کر یوں فضول
ہم کو دے بد دعا، ہم برے لوگ ہیں

اس سے پہلے کوئی لکھتا ہم کو برا
ہم نے خود لکھ دیا، ہم برے لوگ ہیں`,
    },
    {
      id: 6,
      shayariname: "laanat hai!",
      keywords: ["politic", "latest", "signature"],
      shayari: `अपनों को बेगाना समझा, ला'नत है
वाह रे तेरा गोरख धंदा, ला'नत है

हाकिम को इक चिट्ठी लिक्खो, सब के सब
और उसमे बस इतना लिखना, ला'नत है

इस से बढकर उस पर ला'नत क्या होगी
बोल रहा है बच्चा-बच्चा  ला'नत है

जिस दीवार प उसके वादे लिक्खे थे
हमने उसके नीचे लिक्खा, ला'नत है

मत रक्खो ऐसे माली को गुलशन में
जिसको हो बस गेंदा  प्यारा,  ला'नत है
`,
      urdushayari: `اپنو کو بیگانا سمجھا لعنت ہے
واہ رے تیرا گورکھ دھندا لعنت ہے

حاکم کو اک چٹھی لکھو سب کے سب
اور اس میں بس اتنا لکھنا لعنت ہے

اس سے بڑھ کر اس پر لعنت کیا ہوگی
بول رہا ہے بچہ بچہ لعنت ہے

جس دیوار پہ اس کے وعدے لکھے تھے
ہم نے اس کے نیچے لکھا لعنت ہے

مت رکھو ایسے مالی کو گلشن میں
جس کو ہو بس گیندا پیارا لعنت ہے`,
    },
    {
      id: 7,
      shayariname: "khayaal ke baad",
      keywords: ["breakup", "latest"],
      shayari: `कोई मिसाल नहीं है तिरी मिसाल के बाद
मै बे-ख़याल हुआ हूँ तिरे ख़याल के बाद

बस इक मलाल पे तू ज़िन्दगी तमाम न कर
बड़े मलाल मिलेगें मिरे मलाल के बाद

हर एक ज़ख़्म को अश्कों से धो के चूम लिया
मै ऐसे ठीक हुआ उसकी देख-भाल के बाद

उलझ के रह गया वो जाल में तबीबों के
मरीज़ घर नहीं लौटा है अस्पताल के बाद

दुआ सलाम से आगे मै बढ नहीं पाता
उसे भी सोचना पड़ता है हाल-चाल के बाद
 
हमारे बीच में जो है सही नहीं है वो
उसे ये याद भी  आया तो चार साल के बाद

हज़ारों ख़्वाब जो आँखों के आसरे थे कभी
यतीम हो गए आँखों के इन्तिकाल के बाद
`,
      urdushayari: `کوئی مثال نہیں ہے تری مثال کے بعد
میں بے خیال ہوا ہوں ترے خیال کے بعد

بس اک ملال پہ تو زندگی تمام نہ کر
بڑے ملال ملیں گے مرے ملال کے بعد


ہر ایک زخم کو اشکوں سے دھو کے چوم لیا
میں ایسے ٹھیک ہوا اس کی دیکھ بھال کے بعد

الجھ کے رہ گیا وہ جال میں طبیبوں کے
مریض گھر نہیں لوٹا ہے اسپتال کے بعد

دعا سلام سے آگے میں بڈھ نہیں پاتا
اسے بھی سوچنا پڑتا ہے حال چال کے بعد

ہمارے بیچ میں جو ہے سہی نہیں ہے وہ
اسے یہ یاد بھی آیا تو چار سال کے بعد

ہزاروں خواب جو آنکھوں کے آسرے تھے کبھی
یتیم ہو گئے آنکھوں کے انتقال کے بعد`,
    },
    {
      id: 8,
      shayariname: "khayaal ke baad 2",
      keywords: ["breakup", "latest"],
      shayari: `कोई मिसाल नहीं है तिरी मिसाल के बाद
मै बे-ख़याल हुआ हूँ तिरे ख़याल के बाद

बस इक मलाल पे तू ज़िन्दगी तमाम न कर
बड़े मलाल मिलेगें मिरे मलाल के बाद

हर एक ज़ख़्म को अश्कों से धो के चूम लिया
मै ऐसे ठीक हुआ उसकी देख-भाल के बाद

उलझ के रह गया वो जाल में तबीबों के
मरीज़ घर नहीं लौटा है अस्पताल के बाद

दुआ सलाम से आगे मै बढ नहीं पाता
उसे भी सोचना पड़ता है हाल-चाल के बाद
 
हमारे बीच में जो है सही नहीं है वो
उसे ये याद भी  आया तो चार साल के बाद

हज़ारों ख़्वाब जो आँखों के आसरे थे कभी
यतीम हो गए आँखों के इन्तिकाल के बाद
`,
      urdushayari: `کوئی مثال نہیں ہے تری مثال کے بعد
میں بے خیال ہوا ہوں ترے خیال کے بعد

بس اک ملال پہ تو زندگی تمام نہ کر
بڑے ملال ملیں گے مرے ملال کے بعد


ہر ایک زخم کو اشکوں سے دھو کے چوم لیا
میں ایسے ٹھیک ہوا اس کی دیکھ بھال کے بعد

الجھ کے رہ گیا وہ جال میں طبیبوں کے
مریض گھر نہیں لوٹا ہے اسپتال کے بعد

دعا سلام سے آگے میں بڈھ نہیں پاتا
اسے بھی سوچنا پڑتا ہے حال چال کے بعد

ہمارے بیچ میں جو ہے سہی نہیں ہے وہ
اسے یہ یاد بھی آیا تو چار سال کے بعد

ہزاروں خواب جو آنکھوں کے آسرے تھے کبھی
یتیم ہو گئے آنکھوں کے انتقال کے بعد`,
    },
  ];

  const CHUNK_SIZE = 3;

  const keywordGroups = shayaris.reduce((acc, shayari) => {
    shayari.keywords.forEach((keyword) => {
      if (!acc[keyword]) {
        acc[keyword] = [];
      }
      acc[keyword].push(shayari);
    });
    return acc;
  }, {});

  const [visibleData, setVisibleData] = useState({});
  const [paginationIndexes, setPaginationIndexes] = useState({});

  function getNextChunkByKeyword(keyword) {
    if (!keywordGroups[keyword]) return [];

    const startIndex = paginationIndexes[keyword] || 0; // Initialize if undefined
    const endIndex = startIndex + CHUNK_SIZE;

    // Reverse the data for "latest" keyword
    const data =
      keyword === "latest"
        ? [...keywordGroups[keyword]].reverse()
        : keywordGroups[keyword];

    return data.slice(startIndex, endIndex);
  }

  function loadMoreForKeyword(keyword) {
    const newChunk = getNextChunkByKeyword(keyword);

    // Only update if new data exists
    if (newChunk.length > 0) {
      setVisibleData((prevData) => ({
        ...prevData,
        [keyword]: [...(prevData[keyword] || []), ...newChunk],
      }));

      // Update pagination index for the next load
      setPaginationIndexes((prevIndexes) => ({
        ...prevIndexes,
        [keyword]: (prevIndexes[keyword] || 0) + CHUNK_SIZE,
      }));
    } else {
      console.log(`No more data to load for '${keyword}'`);
      // Optional: set to an initial state if needed
      // For example, reset to the initial state or keep the last state
    }
  }

  const basicData = {
    latest: {
      heading: "Latest shayaris",
      imageSrc: "/Images/latest.jpeg",
    },
    signature: {
      heading: "Signature shayaris",
      imageSrc: "/Images/IMG-20241109-WA0036.jpg",
    },
    sad: {
      heading: "Sad Shayari",
      imageSrc: "/Images/sad.jpeg",
    },
    romantic: {
      heading: "Romantic shayaris",
      imageSrc: "/Images/mohabbat.jpeg",
    },
    breakup: {
      heading: "Break-up Shayari",
      imageSrc: "/Images/breakup.jpeg",
    },
    motivational: {
      heading: "Motivational Shayari",
      imageSrc: "/Images/motivational.jpeg",
    },
    social: {
      heading: "Socila Shayari",
      imageSrc: "/Images/social.jpeg",
    },
    politic: {
      heading: "Political Shayari",
      imageSrc: "/Images/politic.jpeg",
    },
  };

  const formData = {
    shayari: {
      heading: "Shayari",
      headers: [
        { key: "shayariname", label: "Shayari name" },
        { key: "keywords", label: "Keywords" },
        { key: "shayari", label: "Shayari" },
        { key: "urdushayari", label: "Urdu Shayari" },
      ],
      data: [...shayaris],
      links: "/dashboard/shayari/shayari-form",
    },
    booking: {
      heading: "Booking",
      headers: [
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "phone", label: "Phone" },
        { key: "date", label: "Date" },
        { key: "location", label: "Location" },
        { key: "message", label: "Message" },
      ],
      data: [],
      links: "/booking",
    },
    contact: {
      heading: "Contact",
      headers: [
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "message", label: "Message" },
      ],
      data: [],
      links: "/",
    },
  };

  return (
    <ShayariData.Provider
      value={{
        data,
        shayaris,
        basicData,
        loadMoreForKeyword,
        getNextChunkByKeyword,
        visibleData,
        formData,
      }}
    >
      {children}
    </ShayariData.Provider>
  );
};
