// * React Redux:
// ==============

// ** What Redux **

// Redux is a state management library for front end applications. Developers commonly use it with React through the
// react-redux package, but it can also stand alone - so you can it in any front end framework or library, including
//                                   Vanilla JavaScript.

// 🌟 توضيح لبعض النقاط:
// =======================
// 1. state management library: تبعتي ولكن أوسع data بتخليني أعمل تحكم في ال ContextApi وال useState حاجة أنا بخزنها بتخليني أتحكم فيها، نفس فكرة ال
// 2. stand alone: react معينة، يعني مش بتشتغل بس مع ال framework مفردة، يعني مش معمولة ل
// 3. so you can.. Vanilla JavaScript: ....مع حاجات كثيرة جدا Angular مع Vue مع React يعني ممكن تستخدمها مع ال framework بعيدا عن أي JavaScript يعني ممكن تستخدمها مع كود
// 4. يتم تخصيص بعض الأشياء، سيتم توضيحها لاحقا react مع ال redux عند إستخدام ال

// state management: بديرالبيانات بتاعتي
// الإستفادة بتاعتها: إني بخزن مجموعة من البيانات في مكان موحد وبقدر أوصلها في أي مكان
// [Redux, ContextApi]: يقومو بنفس الوظيفة مع بعض الإختلافات

// تاعتنا ولكن في مكان واحد بس state بتمكنا من التحكم في ال
// ولكن طبعا هي مش داتا بيز ،database زي نفس فكرة ال
// قاعدة بيانات بحط فيها قاعدة البيانات بتاعتي وأقدر أوصلها من أي مكان وبقدر أعدل البيانات دي بمنتهى السهولة
// نمط معين بمشي عليه بوصل للحاجة يلي أنا عاوزها في الأخر pattern ولكن عن طريق

// Redux ولكن أشهرهم وأكثرهم إستخداما هي ال management state طبعا في مكتبات تانية كثير بتخليني أتحكم في ال

// react-redux: ....وتكون تسهيلا على المبرمجين وده هنعرفه أكثر لما ندخل بالموضوع، يتبع react ولكن فيها أشياء إضافية على شان تتماشى مع ال redux يلي أنا بستخدمها، طبعا نفس ال package ال

// مكتبة بدير بيها البيانات بتاعتي في مكان واحد

// ** Why Redux **

// **
//        Props ➡➡➡➡➡➡ App.js (DataState) ⬅⬅⬅⬅ Props
//         ⬇                                             ⬇
//         ⬇                                             ⬇
//         ⬇                                             ⬇
//    MoviesList.js                                   User.js ➡➡➡ Props
//         ⬇                                                         ⬇
//         ⬇ ➡ ➡                                                   ⬇
//              ⬇                                                    ⬇
//          Props                                                  Fav.js
//            ⬇
//      ⬅ ⬅ ⬇
//      ⬇
//      ⬇ ➡ MoviesCard.js ➡ ➡
//                            ⬇
//                          Props
//                            ⬇
//                            ⬇
//                            ⬇
//                      MoviesDetails.js
// **

// * بالتحديد؟؟ redux ليش أستخدم ال
//*
// يلي عملنا في قسم المشاريع، مشروع عرض قائمة الأفلام Movies DB مشروع
// movie بتاعتنا يلي هي القائمة بتاعت ال data يلي فيه ال component ال App.js إسمه component نفترض إنو عنا
// MoviesList.js ونفضل بقى نوزعها على ال App.js بتاعتنا قائمة الأفلام وبنخزنها بداخل ال API كنا بنجيب من ال
// بتاع الفيلم Card يلي هو ال MoviesCard.js بداخلها ال MoviesList.js وال
// يلي هي تفاصيل الفيلم MoviesDetails.js بداخلها MoviesCard.js وال
//*
// MoviesDetails.js ف أنا عايز أوصلها لل [App.js (DataState)] أنا عندي البيانات هنا
// MoviesDetails.js لهنا MoviesCard.js ثم من MoviesCard.js لل MoviesList.js ف بضطر إني أنا أوصلها من ال
// data من ال (Three levels) ف عندي
//*
// على طول MoviesDetails.js لهنا مباشرة App.js (DataState) أنا عاوز طريق مباشر يخليني أوصل من
// Reducer وكمان درس ال ContextAPI وإنشرح في ال prop drilling طبعا معنديش، ف بضطر إني أعمل ال
//*
// MoviesDetails ⬅ MoviesCard ⬅ MoviesList ⬅ App :ف بضطر على شان مثلا أمرر أي معلومة لازم من MoviesDetails.js ف بالتالي لو أنا مثلا عندي حاجة تاني في داخل ال
// إمتى؟ Props طبعا بينعمل مفيش أي مشكلة، ولكن إحنا بنستخدم ال
// بس ومش هستخدمها في مكان تاني، ف بمررها بينهم MoviesCard ودي MoviesList دي component سريعا، حاجة غير مستخدمة غير في ال MoviesCard لهنا MoviesList لما أكون عاوز أمرر حاجة من
// Redux أو Context يفضل دائما إما أعملها في ،component ⬅ (عشرة، عشرين، 30) لكن لما يكون عندي حاجة، الحاجة دي هستخدمها في
// ؟ ده هنعرفه بعدين Redux وإمتى أشتغل ب ال Context طيب إمتى أشتغل ب
//*
// User.js إسمه component بس نفترض إنو عندي ،User.js إسمه component في المشروع فش عندي
// ده User.js يلي هي الأفلام المفضلة بالنسبة للمستخدم Favorite ⬅ Fav.js تاني إسمه component بتاع المستخدم بداخله profile يلي هو ال User يلي إسمه component وال
// للمستخدم وبداخله الأفلام المفضلة profile ف أنا عندي
// Two levels العملية دي (Fav.js ⬅ User.js ⬅ App.js) ف طبعا لازم أمرر قائمة الأفلام على شان منها أقدر أطلع الأفلام المفضلة وأمررها من
// Three levels <= (MoviesDetails ⬅ MoviesCard ⬅ MoviesList ⬅ App) :أما العملية في السابقة من
// Fav وهينا User وفي ال MoviesDetails وهينا MoviesCard وهينا MoviesList يلي إنت باعتها هينا props ف طبعا بعد كدا لما تيجي تعدل في أي تعديل لازم بقى تعدل في ال
// أكيد في المشاريع الصغيرة مش هتشعر في التعديلات زي المشاريع الكبيرة لأنو هيكون فيه مستويات كثيرة
// لو هتعمل هيك في المشروع الكبير هتلاقي إنو الكود يتضخم ولما تشوف الكود بعد فترة مش هتتذكر كيف كان شغال الكود
// او في شركة بنفعش تشتغل هيك، إحنا بنعمله بس في الحاجات البسيطة freelancing او team وطبعا لما تكون شغال مع
// props تاعه قايم على ال structure كبير مينفعش أخلي ال project لكن لما يكون ال
// بتحللنا المشكلة دي ،redux ف طبعا ال
// في أي مكان يكون عندي مكان في قائمة الأفلام أقدر أوصله مباشرة component ف أنا عاوز من أي
// بتاعك application كأنو بالزبط جدول في الداتا بيز، بقدر أوصلو من أي مكان في ال
//*

// ** When Redux **

//*
//                                 App.js
//                                    ⬆
//                                    ⬆
//    MoviesList.js ⬅⬅⬅⬅⬅⬅       ⬆    ➡➡➡➡➡➡ User.js
//                            ⬆       ⬆    ⬆
//                            ⬆       ⬆    ⬆
//                      ⬅⬅⬅ Central Store
//                      ⬇      ⬇           ⬇
//    MoviesCard.js ⬅⬅⬅     ⬇            ⬇
//                             ⬇            ➡➡➡➡➡ Fav.js
//                             ⬇
//                             ⬇
//    MoviesDetails.js ⬅⬅⬅⬅⬅
//*

// Central Store يلي إحنا عاوزين نعملو إنو عاوز يكون عندي مكان واحد في النصف أو في مكان منفصل هنسميه
// Central Store: يعني قسم البيانات المركزية، البيانات دي هحط فيها الأفلام بتاعتي أو هحط فيها بيانات المستخدم أو أحط فيها يلي أنا عاوزه
// props drilling أوصللها مباشرة بدون ما أعمل component وبقدر من أي
// مباشرة (MoviesList, MoviesCard, MoviesDetails, User, Fav) هيتعدل في ال Central Store ف بالتالي لو أجيت عدلت حاجة هنا
// Props: (MoviesList, MoviesCard, MoviesDetails, User, Fav) ف لازم أعدل ال [App.js (DataState)] أما في السابق لو عدلت حاجة في ال
// واحد فقط level لأني هين متصل مباشرة، يعني component بتتغير بكل ال automatic لما بعدل حاجة هي Central Store ولكن لما هينا في
// MoviesList وفي داخل دي MoviesCard موجودة في داخل دي MoviesDetails بالرغم من إنو
// MoviesDetails على شان أصل لل MoviesCard ثم على MoviesList مباشرة بدون ما أضطر أعدي على Central Store ولكن أنا لما أكون عاوز أوصل للداتا بممرها من
// ContextAPI نفس الكلام يلي قلناه في ال ،props drilling زي ما كان يحصل في حته ال

// ** 🪗 الخلاصة: **
// =================
//*
// بس react تتحكم في البيانات بتاعتي وهي مش معمولة لل state management library عبارة عن redux إذا ال
// بس بدون أي حاجة JavaScript أو بستخدمها مع (Framework => Front-End) أقدر أستخدمها مع أي library هي عبارة عن
// Movies DB يلي كان يحصل معي في مشروع props drilling بستخدمها على شان أوفر حته ال react-redux بتاعتها إسمها package ال
// ....للتاني للثالث للرابع وهكذا component إنو أنا أمرر من
// MoviesDetails.js ويلي بعد MoviesList.js لو في حاجة تغيرت، ف هتضربلي يلي قبل MoviesCard.js وفي النص مثلا عند
// كبير application ف الموضوع مرهق جدا، خصوصا لو تشتغل في
//*
// إنو بكون عندي الداتا دي Central Store بتوصلني للشكل ده في الأخر redux ف ال
// يعني نمط معين بمشي عليه pattern ولكن طبعا في
// ،في شوية خطوات معينة MoviesDetails.js ل Central Store يعني أنا مثلا عاوز أوصل للداتا بتاعتي ف أكيد على شان أصل من
// يعني في إجراءات معينة، كأني بالزبط بخلص ورق من شركة، ولكنها طبعا بتكون إجراءات منفصلة
// إلو إجراءات منفصلة component مع كل Central Store يعني ال
// Fav عن دي User عن دي MoviesList عن دي MoviesCard بتكون منفصلة عن إجراءات ال Central Store مع ال MoviesDetails.js بمعنى إجراءات ال
//
//*

// * React Redux:
// ==============

//* Redux vs ContextApi
//* When Redux??
//* Central Store

// أو في مخزن مركزي أقدر أستخدم البيانات بتاعتي من أي مكان Central Store بتاعتي في state لل manage الإثنين بعملولي (Redux) وال (useContext, ContextApi) ال
// طبعا طريقة التخزين مختلفة ولكن إحنا بنتكلم كمفهوم ،Redux أو في ال ContextApi يعني بخزن بيانات في ال
// ولكن طبعا مع إختلاف الطريقة ContextApi و ال Redux في ال Concept وبقدر إني أوصلها بنفس ال ،[سابقا Central Store زي ما قلنا في رسمة ال] application فيه ال component وباجي من أي

// -------------------------------------------------------
// * (Redux & ContextApi) طيب شو الفرق ما بين الإثنين ال:
// -------------------------------------------------------
//* [1]
// react طبعا معمولة حاجة منفصلة بعيدا عن ال redux أولا، ال
// زي ما قلنا JavaScript أو مع framework هي مكتبة بقدر أستخدمها مع أي ،react يعني مش معمولة لل
// ----
// وده أول فرق بينهم react حاجة معمولة مخصوصة لل ContextApi ال
//* [2]
// ما يفضلش أستخدمها غير مع المشاريع الكبيرة، يلي فعلا مستاهلة يلي فيها عمليات وشغل redux ثاني فرق بينهم، ال
// ----
// بستخدمها مع المشاريع الصغيرة أو المتوسطة، طيب ليه !!! ؟ ContextApi ال
// مع المشاريع المتوسطة ليه؟ ContextApi هم بنفسهم قالو إنهم هم بوصو إستخدام ال react يلي هم من داخل فريق ال ContextApi ج/ الناس تبعون مطورين ال
// سعتها،وقتها راح يحصل فيها مشاكل، ما بتستحملش الكلام ده ContextApi أو كل 2 ملي ثانية ال one millisecond في عمليات بتم كل application لأنها ما بتستحملش لو أنا عندي
// ،ولا لأ login عاوز أعرف المستخدم ده إذا كان عامل component متوسط عندي فيه مثلا بيانات المستخدم ف أنا كل ما أدخل في application طيب أنا أستخدمها إمتى؟
// أعرضلو بقى البيانات والتفاصيل والكلام ده كله login على شان لو كان عامل
// .أطلعلو رسالة أقله من فضلك إعمل تسجيل دخول بالأول login لو مش عامل
// Redux طبعا ممكن أعملها بال ،ContextApi ف دي حاجة بسيطة وما بتستهلكش مني عمليات كثيرة، ف يفضل إنو أنا أستخدمها في
// ----
// في أي حاجة وخلاص ليه؟ لأنو في البداية هتحس إنو معقد شوية، هو مش معقد ولكن في البداية هتحس في كدا Redux ولكن أنا ما بستخدمش ال
// يلي عملنا في أول قسم المشاريع بتاعنا [Dates Reminder] <= list في مشروع بسيط جدا زي مثلا مواعيد ال redux ف لما إنت تكون بتستخدم
// المثال ده بالزبط كأنك جايب مدفع 💥 وتضرب فيه نملة 🐜 يعني إنت جايب مدفع ضخم على شان تضرب فيه نملة 🤦‍♂️ هي دي نفس الفكرة
// Redux على شان إنت فاهم أنا محتاج ال ،💅 redux مش على شان تقول أنا بستخدم ال Redux ف إنت إستخدم ال
// ----
// السؤال الثاني يلي هييجي في دماغك أنا إمتى أعرف إنو المشروع ده كبير ولا صغير؟ :
// بتاعك، وبتكون عارف الأقسام يلي هتتعرض فيه project لل planing طبعا إنت المفروض قبل ما بتنفذ أي مشروع، المفروض طبعا يحصل تخطيط و
// قبل ما تبدأ تنفذه Back-End قبل ما تبدأ تنفذه، وبتكون شايف ال design طبعاإنت بتكون شايف المشروع بالكامل قدامك ك
// تقريبا كذا ،component ف بالتالي تبدأ تحدد هيكون عندك تقريبا كم
// فيه كمية عمليات كثيرة وفيه كمية داتا كثيرة محتاجة أخزنها وأوصلها من أماكن كثيرة ولا لأ application ف بناء عليه بتشوف ال
// - .redux لو كانت الإجابة اه: يبقى إستخدم
// - .ContextApi أستخدم redux لو كانت الإجابة لأ: يبقى ما أستخدمش
// بتم على قائمة أفلام فيها مثلا عشر مليون فيلم filtration ولكن لما يكون عندي حاجة زي عملية
// يعني كل ما يتغير حرف أو كل ما بعمل حاجة ،onChange بيتم مع عملية filtration وطبعا ال
// يتميز بالسرعة redux هتبقى بطيئة شوية، ولكن في  حاجة زي كدا ال ContextApi ف سعتها ال
// * ------------------------------------------------------------------------------------------- *
// react حاجة لوحدها بعيدة عن ال stand alone حاجة redux ف أول فرق إحنا قلناه إنو ال
// react مبنية مخصوص لل ContextApi أما ال
// ----
// أسرع ولكن إنت طبعا مش هتحس في فرق السرعة إلا إذا كان مشروع ضخم أوي redux ثاني فرق قلناه ناحية السرعة في ال
// ContextApi لكن لو بتعمل مشروع متوسط او مشروع صغير مش هتحس بأي فرق خالص لو إستخدمت ال
// ----
// الحاجة الثالة: حته إني أستخدمه في المشاريع الكبيرة، لما يكون الموضوع فعلا يستاهل، لو الموضوع ما يستاهلش حاجة بسيطة يبقى ما أستخدموش
// ----
// ؟ أه عادي redux وينفع أستخدم ContextApi <= project طبعا بنفع أستخدم في نفس ال
// للحاجات يلي فيها شغل كثير وفيها حركة كثير وفيها حاجات كبيرة redux للحاجات البسيطة، تمام!، و ContextApi ممكن أعمل
// لكن أغلب الناس يفضل:
// - redux يبقى يكملو كله redux عملو ب project هو ال
// - ContextApi يكملو كله ContextApi عملو
// وكدا coding وطبعا هنفهم الكلام ده لما نيجي نشتغل
// ----
// ContextApi, Redux:
// Central Store ف إحنا عرفنا بإختصار شديد إنو وجه التشابه بينهم الإثنين: بوفرولنا ال
// يعني مكتبة فيها التحكم
// Redux: state management library
// react بداخل ال Built-in أو Hook مش مكتبة هي عبارة عن ContextApi
// ----
// ،بتاع المستخدم component مثلا يلي هو ال profile بس، على مستوى ال component مثلا لو أنا عندي حاجة، الحاجة دي بستخدمها على مستوى ال
// ،بتاعي برضو state بداخل ال reducer بتاعتي دي، أو إني راح جاي مخزنها في component بداخل ال state الحاجة دي أنا مش هستخدمها في أي مكان تاني، ف طبيعي إني هحطها في
// مخصوص على شان الحاجة دي، لأ ،redux لأني أنا مش هستخدمها برا، حاجة أنا عارف إنها مش هتطلع برا، ف أنا ما أعقدش نفسي مثلا وأروح جاي عامل
// أنا عاوز أسهل على نفسي وعلى يلي بشتغل معاي في المشروع وعلى يلي هيطور في المشروع من بعدي ،component ف بحطها بداخل
// الموضوع مش إنو أنا أبني مشروع وأسيبه خلص، الموضوع إنو أنا أبني مشروع يكون:
// - قابل للصيانة
// - وقابل للتطوير
// ،redux وبعد ال redux ف لازم أحط النقط دي كلها في حسابي، وهنفهم طبعا لما نقارن الكود بتاعنا قبل ال
// Easy بيساعدنا في إحنا نخلي المشاريع يلي فيها شغل كثير وفيها حاجات ضخمة إنو هو يخلي مشاريعنا redux إزاي ال
// يخلي الأمور بالنسبة إلنا سهلة
// ----
// ولكن الفروقات بتاعتنا إحنا قلنا عليها Redux هو وظيفة ده ContextApi طبعا نفس وظيفة ده
// بيعطيني الوظيفة بسرعة عالية جدا redux بستخدمو لما بكون بخزن حاجة فيها كمية عمليات ضخمة جدا، ف ال :redux ال
// نفسهم قالو إنو ما تستخدمهاش غير في الحاجات البسيطة والمتوسطة وليس الحاجات الضخمة react فريق عمل ال :ContextApi أما ال
// ----
//    🥰 Redux وإمتى تستخدم دي ContextApi أتمنى تكون فهمت الفرق بين الإثنين وإمتى تستخدم دي
// * ------------------------------------------------------------------------------------------- *

// =============================================================================================

// * React Redux:
// ==============

//*
//                          ---------------
//                          | How it Work |
//                          ---------------
//                      ------------------------
//                      | Reducer(Change Data) | ⬅⬅⬅⬅⬅⬅⬅⬅⬅⬅⬅⬅⬅⬅
//                      ------------------------                          ⬆
//                                 ⬇                                      ⬆
//                                 ⬇                            ---------------------
//                                 ⬇                            | Action - Dispatch |
//                                 ⬇                            ---------------------
//         ⬅⬅⬅⬅⬅⬅⬅⬅⬅⬅ Store(state) ➡➡➡➡➡➡➡➡➡➡             ⬆
//         ⬇                 ⬇           ⬇                  ⬇        -------------
//         ⬇                 ⬇           ⬇                  ⬇        | increment |
//         ⬇            ⬅⬅⬅           ➡➡➡              ⬇        |     ++    |
//         ⬇            ⬇                    ⬇              ⬇        -------------
//         ⬇            ⬇                    ⬇              ⬇              ⬆
//         ⬇            ⬇                    ⬇              ⬇              ⬆
//  --------------- ---------------   --------------- ---------------      ⬆
//  | Component-1 | | Component-2 |   | Component-3 | | Component-4 | ➡➡➡
//  --------------- ---------------   --------------- ---------------
//*

//                   1) Store state
// const store = redux.createStore(anyRedux) ⬅⬅⬅⬅⬅⬅⬅⬅
//                                                        ⬆
//*                                                       ⬆
//                                                        ⬆
//                     2) Reducer                         ⬆
// const anyReducer = (state, action) => { //code } ➡➡➡➡

//*

// 3) Provider, from react-redux, in index.js
//           <Provider store={store}>
//               <APP/>
//           </Provider>

//*

//                       useSelector (access to state)
// 4) In Any Components
//                       useDispatch (change state)

// to access state in store from any components
//   const state = useSelector((state) => state)

// to fire and change state from any components and reRender
//            const dispatch = useDispatch();

//*

// ** Please view the YouTube video titled 'Lecture 65: How Redux Work' by following this official link: https://www.youtube.com/watch?v=Oi90TML6Oz8&t=6s.

// =============================================================================================

// * React Redux:
// ==============

// PS D:\مجلد جديد\React\Redux\redux> npm i redux react-redux

//* redux: JavaScript تانية ومع ال library العادي يلي أنا بستخدمه مع أي redux يلي هو ال Pure redux يل هي
//* react-redux: بمنتهى السهولة redux يتعامل مع ال react يحتوي على تحسينات لتسيهل الأمور، بتخلي ال

//* Redux DevTools => Extensions in Google Chrome:
//  - [https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related].

//* redux-devtools-extension-npm:
//  - [https://www.npmjs.com/package/redux-devtools-extension].
//  - [https://www.npmjs.com/package/@redux-devtools/extension].

/*
PS D:\مجلد جديد\React\Redux\redux> npm i redux-devtools-extension
npm WARN deprecated redux-devtools-extension@2.13.9: Package moved to @redux-devtools/extension.

added 1 package, and audited 1531 packages in 8s

245 packages are looking for funding
  run `npm fund` for details

6 high severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
PS D:\مجلد جديد\React\Redux\redux> 
*/

// PS D:\مجلد جديد\React\Redux\redux> npm i @redux-devtools/extension

// * Next Step: "ProjectFolder\React\Redux\Movies Final" (●'◡'●)
