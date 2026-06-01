import { Lesson } from "@/types/learning";

export const lessons: Lesson[] = [
  // ─── SPANISH ─────────────────────────────────────────────
  // Unit 1 – Basics
  {
    id: "es-1-1",
    unitId: "es-unit-1",
    title: "Greetings",
    description: "Learn how to say hello and goodbye in Spanish",
    xpReward: 10,
    order: 1,
    goals: [
      "Say hello and goodbye",
      "Introduce yourself",
      "Ask how someone is doing",
    ],
    vocabulary: [
      {
        word: "hola",
        translation: "hello",
        pronunciation: "OH-lah",
        example: "¡Hola! ¿Cómo estás?",
      },
      {
        word: "adiós",
        translation: "goodbye",
        pronunciation: "ah-DYOHS",
        example: "¡Adiós! Hasta mañana.",
      },
      {
        word: "gracias",
        translation: "thank you",
        pronunciation: "GRAH-syahs",
        example: "Gracias por tu ayuda.",
      },
      {
        word: "por favor",
        translation: "please",
        pronunciation: "por fah-BOR",
        example: "Un café, por favor.",
      },
    ],
    phrases: [
      {
        phrase: "¿Cómo te llamas?",
        translation: "What is your name?",
        pronunciation: "KOH-moh teh YAH-mahs",
      },
      {
        phrase: "Me llamo María.",
        translation: "My name is María.",
        pronunciation: "meh YAH-moh mah-REE-ah",
      },
      {
        phrase: "Mucho gusto.",
        translation: "Nice to meet you.",
        pronunciation: "MOO-choh GOOS-toh",
      },
    ],
    activities: [
      {
        id: "es-1-1-a1",
        type: "multiple_choice",
        question: "How do you say 'hello' in Spanish?",
        options: ["adiós", "hola", "gracias", "por favor"],
        answer: "hola",
      },
      {
        id: "es-1-1-a2",
        type: "translation",
        question: "Translate: 'thank you'",
        answer: "gracias",
        hint: "You use this word to express gratitude.",
      },
      {
        id: "es-1-1-a3",
        type: "multiple_choice",
        question: "What does 'Mucho gusto' mean?",
        options: [
          "Good morning",
          "Nice to meet you",
          "See you later",
          "How are you?",
        ],
        answer: "Nice to meet you",
      },
    ],
    aiTeacherPrompt:
      "You are a friendly Spanish teacher named Sofia. This is a beginner lesson on greetings. Teach the student how to say hello, goodbye, and introduce themselves. Use simple sentences, praise their effort, and correct mistakes kindly. Speak slowly and clearly. Start by greeting the student warmly in Spanish and English.",
  },
  {
    id: "es-1-2",
    unitId: "es-unit-1",
    title: "Numbers 1–10",
    description: "Count from one to ten in Spanish",
    xpReward: 10,
    order: 2,
    goals: [
      "Count from 1 to 10",
      "Use numbers in simple sentences",
      "Answer 'how many?' questions",
    ],
    vocabulary: [
      {
        word: "uno",
        translation: "one",
        pronunciation: "OO-noh",
        example: "Tengo un perro.",
      },
      {
        word: "dos",
        translation: "two",
        pronunciation: "dohs",
        example: "Hay dos gatos.",
      },
      {
        word: "tres",
        translation: "three",
        pronunciation: "trehs",
        example: "Tres manzanas, por favor.",
      },
      {
        word: "cuatro",
        translation: "four",
        pronunciation: "KWAH-troh",
        example: "Cuatro niños juegan.",
      },
      {
        word: "cinco",
        translation: "five",
        pronunciation: "SEEN-koh",
        example: "Son las cinco.",
      },
    ],
    phrases: [
      {
        phrase: "¿Cuántos hay?",
        translation: "How many are there?",
        pronunciation: "KWAN-tohs eye",
      },
      {
        phrase: "Hay tres.",
        translation: "There are three.",
        pronunciation: "eye trehs",
      },
    ],
    activities: [
      {
        id: "es-1-2-a1",
        type: "multiple_choice",
        question: "How do you say 'five' in Spanish?",
        options: ["cuatro", "seis", "cinco", "tres"],
        answer: "cinco",
      },
      {
        id: "es-1-2-a2",
        type: "translation",
        question: "Translate: 'two'",
        answer: "dos",
      },
      {
        id: "es-1-2-a3",
        type: "multiple_choice",
        question: "What does 'cuatro' mean?",
        options: ["three", "five", "four", "six"],
        answer: "four",
      },
    ],
    aiTeacherPrompt:
      "You are Sofia, an encouraging Spanish teacher. This lesson covers numbers 1 to 10. Drill the student with counting exercises, ask them to translate numbers, and use numbers in short sentences like '¿Cuántos tienes?' Keep the pace fun and reward correct answers with praise. Speak clearly and repeat numbers so the student can hear the pronunciation.",
  },

  // Unit 2 – People & Family
  {
    id: "es-2-1",
    unitId: "es-unit-2",
    title: "Family Members",
    description: "Learn words for family members in Spanish",
    xpReward: 15,
    order: 1,
    goals: [
      "Name family members",
      "Describe your family",
      "Ask about someone's family",
    ],
    vocabulary: [
      {
        word: "mamá",
        translation: "mom",
        pronunciation: "mah-MAH",
        example: "Mi mamá es profesora.",
      },
      {
        word: "papá",
        translation: "dad",
        pronunciation: "pah-PAH",
        example: "Mi papá trabaja mucho.",
      },
      {
        word: "hermano",
        translation: "brother",
        pronunciation: "er-MAH-noh",
        example: "Tengo un hermano mayor.",
      },
      {
        word: "hermana",
        translation: "sister",
        pronunciation: "er-MAH-nah",
        example: "Mi hermana tiene diez años.",
      },
    ],
    phrases: [
      {
        phrase: "¿Tienes hermanos?",
        translation: "Do you have siblings?",
        pronunciation: "TYEH-nehs er-MAH-nohs",
      },
      {
        phrase: "Sí, tengo una hermana.",
        translation: "Yes, I have a sister.",
        pronunciation: "see, TENG-oh OO-nah er-MAH-nah",
      },
    ],
    activities: [
      {
        id: "es-2-1-a1",
        type: "multiple_choice",
        question: "How do you say 'sister' in Spanish?",
        options: ["hermano", "mamá", "hermana", "papá"],
        answer: "hermana",
      },
      {
        id: "es-2-1-a2",
        type: "translation",
        question: "Translate: 'dad'",
        answer: "papá",
      },
    ],
    aiTeacherPrompt:
      "You are Sofia, a warm Spanish teacher. This lesson is about family vocabulary. Ask the student about their family, correct mistakes gently, and introduce words like mamá, papá, hermano, and hermana. Use simple questions like '¿Tienes hermanos?' to make the lesson conversational and fun.",
  },
  {
    id: "es-2-2",
    unitId: "es-unit-2",
    title: "Describing People",
    description: "Use adjectives to describe people",
    xpReward: 15,
    order: 2,
    goals: [
      "Use basic adjectives",
      "Describe a person's appearance",
      "Say how someone is feeling",
    ],
    vocabulary: [
      {
        word: "alto",
        translation: "tall",
        pronunciation: "AHL-toh",
        example: "Mi papá es muy alto.",
      },
      {
        word: "bajo",
        translation: "short",
        pronunciation: "BAH-hoh",
        example: "El niño es bajo.",
      },
      {
        word: "feliz",
        translation: "happy",
        pronunciation: "feh-LEES",
        example: "Estoy muy feliz hoy.",
      },
      {
        word: "triste",
        translation: "sad",
        pronunciation: "TREES-teh",
        example: "Ella está triste.",
      },
    ],
    phrases: [
      {
        phrase: "Él es muy alto.",
        translation: "He is very tall.",
        pronunciation: "el es mwee AHL-toh",
      },
      {
        phrase: "¿Cómo está ella?",
        translation: "How is she?",
        pronunciation: "KOH-moh ehs-TAH EH-yah",
      },
    ],
    activities: [
      {
        id: "es-2-2-a1",
        type: "multiple_choice",
        question: "What does 'feliz' mean?",
        options: ["sad", "tall", "happy", "short"],
        answer: "happy",
      },
      {
        id: "es-2-2-a2",
        type: "translation",
        question: "Translate: 'sad'",
        answer: "triste",
      },
    ],
    aiTeacherPrompt:
      "You are Sofia, an enthusiastic Spanish teacher. This lesson is about adjectives for describing people. Ask the student to describe family members using words like alto, bajo, feliz, and triste. Encourage full sentences and correct them gently. Make the lesson playful by asking the student to describe a celebrity or fictional character.",
  },

  // ─── FRENCH ──────────────────────────────────────────────
  // Unit 1 – Basics
  {
    id: "fr-1-1",
    unitId: "fr-unit-1",
    title: "Greetings",
    description: "Learn how to say hello and goodbye in French",
    xpReward: 10,
    order: 1,
    goals: [
      "Say hello and goodbye",
      "Introduce yourself",
      "Ask how someone is doing",
    ],
    vocabulary: [
      {
        word: "bonjour",
        translation: "hello / good day",
        pronunciation: "bohn-ZHOOR",
        example: "Bonjour, comment vous appelez-vous ?",
      },
      {
        word: "merci",
        translation: "thank you",
        pronunciation: "mair-SEE",
        example: "Merci beaucoup !",
      },
      {
        word: "s'il vous plaît",
        translation: "please",
        pronunciation: "seel voo PLEH",
        example: "Un café, s'il vous plaît.",
      },
      {
        word: "au revoir",
        translation: "goodbye",
        pronunciation: "oh ruh-VWAHR",
        example: "Au revoir ! À demain.",
      },
    ],
    phrases: [
      {
        phrase: "Comment vous appelez-vous ?",
        translation: "What is your name?",
        pronunciation: "koh-MAHN voo zah-play-VOO",
      },
      {
        phrase: "Je m'appelle Lucas.",
        translation: "My name is Lucas.",
        pronunciation: "zhuh mah-PEL loo-KAH",
      },
      {
        phrase: "Enchanté(e).",
        translation: "Nice to meet you.",
        pronunciation: "ahn-shahn-TAY",
      },
    ],
    activities: [
      {
        id: "fr-1-1-a1",
        type: "multiple_choice",
        question: "How do you say 'hello' in French?",
        options: ["merci", "au revoir", "bonjour", "s'il vous plaît"],
        answer: "bonjour",
      },
      {
        id: "fr-1-1-a2",
        type: "translation",
        question: "Translate: 'thank you'",
        answer: "merci",
      },
      {
        id: "fr-1-1-a3",
        type: "multiple_choice",
        question: "What does 'Enchanté' mean?",
        options: [
          "Good morning",
          "Goodbye",
          "Nice to meet you",
          "See you later",
        ],
        answer: "Nice to meet you",
      },
    ],
    aiTeacherPrompt:
      "You are Claire, a friendly French teacher from Paris. This is a beginner lesson on greetings. Teach the student how to say hello, goodbye, and introduce themselves in French. Speak with enthusiasm, correct mistakes gently, and use both English and French explanations. Start by greeting the student with 'Bonjour !' and asking their name.",
  },
  {
    id: "fr-1-2",
    unitId: "fr-unit-1",
    title: "Numbers 1–10",
    description: "Count from one to ten in French",
    xpReward: 10,
    order: 2,
    goals: [
      "Count from 1 to 10 in French",
      "Use numbers in simple sentences",
      "Answer 'how many?' questions",
    ],
    vocabulary: [
      {
        word: "un",
        translation: "one",
        pronunciation: "uhn",
        example: "J'ai un chat.",
      },
      {
        word: "deux",
        translation: "two",
        pronunciation: "duh",
        example: "Il y a deux livres.",
      },
      {
        word: "trois",
        translation: "three",
        pronunciation: "twah",
        example: "Trois pommes, s'il vous plaît.",
      },
      {
        word: "quatre",
        translation: "four",
        pronunciation: "KAH-truh",
        example: "Quatre enfants jouent.",
      },
      {
        word: "cinq",
        translation: "five",
        pronunciation: "sank",
        example: "Il est cinq heures.",
      },
    ],
    phrases: [
      {
        phrase: "Combien y en a-t-il ?",
        translation: "How many are there?",
        pronunciation: "kohm-BYAHN ee ahn ah teel",
      },
      {
        phrase: "Il y en a trois.",
        translation: "There are three.",
        pronunciation: "eel ee ahn ah twah",
      },
    ],
    activities: [
      {
        id: "fr-1-2-a1",
        type: "multiple_choice",
        question: "How do you say 'five' in French?",
        options: ["quatre", "six", "cinq", "trois"],
        answer: "cinq",
      },
      {
        id: "fr-1-2-a2",
        type: "translation",
        question: "Translate: 'two'",
        answer: "deux",
      },
    ],
    aiTeacherPrompt:
      "You are Claire, an enthusiastic French teacher. This lesson covers numbers 1 to 10. Count together with the student, ask them to translate numbers, and use numbers in short sentences. Keep the energy high and correct mistakes encouragingly. Speak numbers slowly so the student hears the French pronunciation clearly.",
  },

  // Unit 2 – Food & Drink
  {
    id: "fr-2-1",
    unitId: "fr-unit-2",
    title: "At the Café",
    description: "Order food and drinks in French",
    xpReward: 15,
    order: 1,
    goals: [
      "Order food and drinks",
      "Ask for the menu",
      "Say what you like to eat",
    ],
    vocabulary: [
      {
        word: "café",
        translation: "coffee",
        pronunciation: "kah-FAY",
        example: "Un café, s'il vous plaît.",
      },
      {
        word: "eau",
        translation: "water",
        pronunciation: "oh",
        example: "Une eau minérale, s'il vous plaît.",
      },
      {
        word: "pain",
        translation: "bread",
        pronunciation: "pan",
        example: "J'adore le pain français.",
      },
      {
        word: "fromage",
        translation: "cheese",
        pronunciation: "froh-MAHZH",
        example: "Je voudrais du fromage.",
      },
    ],
    phrases: [
      {
        phrase: "La carte, s'il vous plaît.",
        translation: "The menu, please.",
        pronunciation: "lah kart, seel voo PLEH",
      },
      {
        phrase: "Je voudrais un café.",
        translation: "I would like a coffee.",
        pronunciation: "zhuh voo-DREH uhn kah-FAY",
      },
      {
        phrase: "C'est délicieux !",
        translation: "It's delicious!",
        pronunciation: "say day-lee-SYUH",
      },
    ],
    activities: [
      {
        id: "fr-2-1-a1",
        type: "multiple_choice",
        question: "How do you say 'cheese' in French?",
        options: ["pain", "café", "eau", "fromage"],
        answer: "fromage",
      },
      {
        id: "fr-2-1-a2",
        type: "translation",
        question: "Translate: 'water'",
        answer: "eau",
      },
    ],
    aiTeacherPrompt:
      "You are Claire, a French teacher role-playing as a café waiter. This lesson is about ordering food and drinks. Take the student's order, correct their French politely, and teach key café phrases. Keep it immersive — act like you are really in a Parisian café. Encourage the student to use full sentences when ordering.",
  },
  {
    id: "fr-2-2",
    unitId: "fr-unit-2",
    title: "Food Preferences",
    description: "Talk about what you like and dislike eating",
    xpReward: 15,
    order: 2,
    goals: [
      "Express food likes and dislikes",
      "Use j'aime and je n'aime pas",
      "Ask about someone's preferences",
    ],
    vocabulary: [
      {
        word: "j'aime",
        translation: "I like",
        pronunciation: "zhehm",
        example: "J'aime le chocolat.",
      },
      {
        word: "je n'aime pas",
        translation: "I don't like",
        pronunciation: "zhuh nem PAH",
        example: "Je n'aime pas les épinards.",
      },
      {
        word: "délicieux",
        translation: "delicious",
        pronunciation: "day-lee-SYUH",
        example: "Ce gâteau est délicieux.",
      },
      {
        word: "mauvais",
        translation: "bad / yucky",
        pronunciation: "moh-VEH",
        example: "Ce plat est mauvais.",
      },
    ],
    phrases: [
      {
        phrase: "Tu aimes le chocolat ?",
        translation: "Do you like chocolate?",
        pronunciation: "tü ehm luh shoh-koh-LAH",
      },
      {
        phrase: "Oui, j'adore ça !",
        translation: "Yes, I love it!",
        pronunciation: "wee, zhah-DOR sah",
      },
    ],
    activities: [
      {
        id: "fr-2-2-a1",
        type: "multiple_choice",
        question: "How do you say 'I like' in French?",
        options: ["je n'aime pas", "j'aime", "je voudrais", "c'est bon"],
        answer: "j'aime",
      },
      {
        id: "fr-2-2-a2",
        type: "translation",
        question: "Translate: 'delicious'",
        answer: "délicieux",
      },
    ],
    aiTeacherPrompt:
      "You are Claire, a cheerful French teacher. This lesson covers expressing food preferences. Ask the student what foods they like and dislike, teach them to use 'j'aime' and 'je n'aime pas', and get them to build simple preference sentences. React warmly to their answers and correct grammar mistakes gently.",
  },

  // ─── JAPANESE ────────────────────────────────────────────
  // Unit 1 – Basics
  {
    id: "ja-1-1",
    unitId: "ja-unit-1",
    title: "Greetings",
    description: "Learn essential Japanese greetings",
    xpReward: 10,
    order: 1,
    goals: [
      "Greet someone in Japanese",
      "Introduce yourself",
      "Say thank you and you're welcome",
    ],
    vocabulary: [
      {
        word: "こんにちは",
        translation: "hello / good afternoon",
        pronunciation: "kon-ni-chi-wa",
        example: "こんにちは、田中さん。",
      },
      {
        word: "おはようございます",
        translation: "good morning",
        pronunciation: "o-ha-yō go-zai-ma-su",
        example: "おはようございます！",
      },
      {
        word: "ありがとう",
        translation: "thank you",
        pronunciation: "a-ri-ga-tō",
        example: "ありがとうございます。",
      },
      {
        word: "さようなら",
        translation: "goodbye",
        pronunciation: "sa-yō-na-ra",
        example: "さようなら！またね。",
      },
    ],
    phrases: [
      {
        phrase: "はじめまして。",
        translation: "Nice to meet you.",
        pronunciation: "ha-ji-me-ma-shi-te",
      },
      {
        phrase: "わたしは Lucasです。",
        translation: "I am Lucas.",
        pronunciation: "wa-ta-shi wa Lucas de-su",
      },
      {
        phrase: "どうぞよろしく。",
        translation: "Please be kind to me. / Pleased to meet you.",
        pronunciation: "dō-zo yo-ro-shi-ku",
      },
    ],
    activities: [
      {
        id: "ja-1-1-a1",
        type: "multiple_choice",
        question: "How do you say 'hello' in Japanese?",
        options: [
          "さようなら",
          "ありがとう",
          "こんにちは",
          "おはようございます",
        ],
        answer: "こんにちは",
      },
      {
        id: "ja-1-1-a2",
        type: "translation",
        question: "Translate: 'thank you'",
        answer: "ありがとう",
      },
      {
        id: "ja-1-1-a3",
        type: "multiple_choice",
        question: "What does 'はじめまして' mean?",
        options: [
          "Good morning",
          "Nice to meet you",
          "Goodbye",
          "Thank you",
        ],
        answer: "Nice to meet you",
      },
    ],
    aiTeacherPrompt:
      "You are Yuki, a friendly Japanese teacher from Tokyo. This is a beginner lesson on greetings. Teach the student how to say hello, goodbye, and introduce themselves. Explain the different levels of politeness simply. Use romanization alongside Japanese characters so the student can follow along. Start by greeting the student warmly.",
  },
  {
    id: "ja-1-2",
    unitId: "ja-unit-1",
    title: "Introductions",
    description: "Tell people who you are and where you are from",
    xpReward: 10,
    order: 2,
    goals: [
      "State your name",
      "Say where you are from",
      "Ask someone's nationality",
    ],
    vocabulary: [
      {
        word: "なまえ",
        translation: "name",
        pronunciation: "na-ma-e",
        example: "わたしのなまえはLucasです。",
      },
      {
        word: "くに",
        translation: "country",
        pronunciation: "ku-ni",
        example: "あなたのくには？",
      },
      {
        word: "がくせい",
        translation: "student",
        pronunciation: "ga-ku-sei",
        example: "わたしはがくせいです。",
      },
      {
        word: "せんせい",
        translation: "teacher",
        pronunciation: "sen-sei",
        example: "かのじょはせんせいです。",
      },
    ],
    phrases: [
      {
        phrase: "わたしはアメリカじんです。",
        translation: "I am American.",
        pronunciation: "wa-ta-shi wa a-me-ri-ka-jin de-su",
      },
      {
        phrase: "あなたはどちらから？",
        translation: "Where are you from?",
        pronunciation: "a-na-ta wa do-chi-ra ka-ra",
      },
    ],
    activities: [
      {
        id: "ja-1-2-a1",
        type: "multiple_choice",
        question: "How do you say 'teacher' in Japanese?",
        options: ["がくせい", "なまえ", "せんせい", "くに"],
        answer: "せんせい",
      },
      {
        id: "ja-1-2-a2",
        type: "translation",
        question: "Translate: 'student'",
        answer: "がくせい",
      },
    ],
    aiTeacherPrompt:
      "You are Yuki, a patient Japanese teacher. This lesson is about self-introductions. Prompt the student to introduce themselves using 'わたしは〜です' sentences. Teach words like がくせい and せんせい. Role-play a first meeting scenario — you introduce yourself and ask the student questions about their name, country, and job. Correct mistakes with encouragement.",
  },

  // Unit 2 – Numbers & Time
  {
    id: "ja-2-1",
    unitId: "ja-unit-2",
    title: "Numbers 1–10",
    description: "Learn to count from one to ten in Japanese",
    xpReward: 15,
    order: 1,
    goals: [
      "Count from 1 to 10",
      "Use numbers in basic sentences",
      "Understand both reading systems (hiragana + kanji concepts)",
    ],
    vocabulary: [
      {
        word: "いち",
        translation: "one",
        pronunciation: "i-chi",
        example: "いちまい",
      },
      {
        word: "に",
        translation: "two",
        pronunciation: "ni",
        example: "ふたつ",
      },
      {
        word: "さん",
        translation: "three",
        pronunciation: "san",
        example: "さんにん",
      },
      {
        word: "し / よん",
        translation: "four",
        pronunciation: "shi / yon",
        example: "よんほん",
      },
      {
        word: "ご",
        translation: "five",
        pronunciation: "go",
        example: "ごふん",
      },
    ],
    phrases: [
      {
        phrase: "なんこですか？",
        translation: "How many pieces?",
        pronunciation: "nan-ko de-su ka",
      },
      {
        phrase: "みっつです。",
        translation: "There are three.",
        pronunciation: "mit-tsu de-su",
      },
    ],
    activities: [
      {
        id: "ja-2-1-a1",
        type: "multiple_choice",
        question: "How do you say 'three' in Japanese?",
        options: ["に", "ご", "さん", "いち"],
        answer: "さん",
      },
      {
        id: "ja-2-1-a2",
        type: "translation",
        question: "Translate: 'five'",
        answer: "ご",
      },
    ],
    aiTeacherPrompt:
      "You are Yuki, a fun Japanese teacher. This lesson is about numbers 1 to 10. Drill counting with the student, explain that Japanese has multiple number systems, and use simple examples with counters. Keep it light — use fun comparisons like 'いち is like saying one for everything!' Correct the student warmly and count together.",
  },
  {
    id: "ja-2-2",
    unitId: "ja-unit-2",
    title: "Telling the Time",
    description: "Say what time it is in Japanese",
    xpReward: 15,
    order: 2,
    goals: [
      "Tell the time in Japanese",
      "Use じ (ji) for hours",
      "Say AM and PM",
    ],
    vocabulary: [
      {
        word: "じ",
        translation: "o'clock",
        pronunciation: "ji",
        example: "さんじです。",
      },
      {
        word: "ふん / ぷん",
        translation: "minutes",
        pronunciation: "fun / pun",
        example: "じゅうごふんです。",
      },
      {
        word: "ごぜん",
        translation: "AM",
        pronunciation: "go-zen",
        example: "ごぜんじゅうじ",
      },
      {
        word: "ごご",
        translation: "PM",
        pronunciation: "go-go",
        example: "ごごさんじ",
      },
    ],
    phrases: [
      {
        phrase: "いまなんじですか？",
        translation: "What time is it now?",
        pronunciation: "i-ma nan-ji de-su ka",
      },
      {
        phrase: "ごぜんくじです。",
        translation: "It is 9 AM.",
        pronunciation: "go-zen ku-ji de-su",
      },
    ],
    activities: [
      {
        id: "ja-2-2-a1",
        type: "multiple_choice",
        question: "What does 'ごぜん' mean?",
        options: ["PM", "minutes", "AM", "o'clock"],
        answer: "AM",
      },
      {
        id: "ja-2-2-a2",
        type: "translation",
        question: "Translate: 'o'clock'",
        answer: "じ",
      },
    ],
    aiTeacherPrompt:
      "You are Yuki, a patient Japanese teacher. This lesson is about telling the time. Ask the student what time it is using 'いまなんじですか？' and teach them to answer with hours and minutes. Role-play a scenario where you are scheduling a meeting and need to agree on a time. Use encouragement and correct time-telling patterns clearly.",
  },
];
