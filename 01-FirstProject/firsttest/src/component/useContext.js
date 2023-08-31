import React, { createContext, useState } from "react";

// 1- Create Context [إنشاء مخزن جديد]
const ColorContext = createContext();

//* context ممكن أعمل أكثر من:
// - context عاملو بيانات login لما يعمل user يعني ال user لبيانات ال context ممكن نعمل
// - [const { Data, changeData } = useContext(ColorContext);] عن طريق application لأي حاجة تانية انا عاوزها أخزن الداتا وأقدر أوصلها من أي مكان في ال context و

// 2- Create Provider(مزود) [بتاعي application على شان يظهر في أي مكان في ال]
/* Component */
const UseContextProvider = ({ children }) => {
  // { children }:
  // إنشرحت Props في فيديو ال
  // موجود كلو جوا application لأنو ال index.js حطيتو جوا ال ،<UseContextProvider></UseContextProvider> <= appliation في الخطوة رقم 4 عملت ال
  // <UseContextProvider></UseContextProvider> تاني انا عامله يلي هو component جوا  render بدي اعمل الهم component ف بالتالي انا عندي مجموعة
  // <ColorContext.Provider value="white">{children}</ColorContext.Provider> <= render {children} ف انا بقله children ف لازم أستخدم طريقة ال
  // value="white" وخليها توصل ل render إعمللها Provider (<ColorContext.Provider value="white">) يعني أي حاجة هتجيلك جوا ال
  // بالزبط props يعني انا كده زي لكني عملت
  // ColorContext عن طريق value="white" هتوصل ل {children} في أي حاجة جوا value="white" عملت قيمة
  // Context API العملية دي كلها إسمها ،API لل created for the context كدا أنا عملت

  // 6- Update Data in Context

  /* const [Data, setState] = useState("white");
  const changeData = (color) => {
    setState(color);
  }; */
  const [Data, setState] = useState({ id: "1", name: "mahmoud" });
  const changeData = (id, name) => {
    // setState({ id: id, name: name }); // id:id => id = id from input user // name:name => name = name from input user
    setState({ id, name }); // In Modern JavaScript
  };

  return (
    <div>
      {/* Provider Method built-in */}
      {/* value="white": Prop can be take any value Ex: object{}, array[], ... */}
      {/* value="": application بخزن فيها الداتا، الداتا هادي يلي خزنتها بقدر أوصلها من أي مكان في ال */}
      {/* <ColorContext.Provider value="red"> */}
      <ColorContext.Provider value={{ Data, changeData }}>
        {children}
        {/* render ييجي جوا هين ينعمل إلو component ف عملت هيك على شان أي children تاني يسمى ال component وعلى شان أحط جواه component يعني بعمل ،render ييجي ينعمل إلو component على شان أي */}
        {/*
          Ex.:
            <UseContextProvider>
              <App />
            </UseContextProvider>
        */}
      </ColorContext.Provider>
    </div>
  );
};

// 3- Export Context To Use, Provider To Wrap All Component
export { UseContextProvider, ColorContext };
// * export UseContextProvider: جواه Application على شان أحط كل ال
// * export ColorContext: value="white" على شان أقدر من خلاله أوصل للداتا دي

// in: 01-FirstProject\firsttest\src\index.js
// ==========================================
// 4- Wrap All App With Provider
// ReactDOM.render(
//   <UseContextProvider>
//     <App />
//   </UseContextProvider>,
//   document.getElementById("root")
// );

// 5- Use Context => App.js ..... [01-FirstProject\firsttest\src\App.js]

// * --------------------------------------------------------------------------------------------

/* import React from 'react';
const UseContextExample = () => {
  return <div>use context</div>;
};
export default UseContextExample; */
