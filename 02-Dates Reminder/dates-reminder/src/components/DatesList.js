import React from "react";
import { Row, Col } from "react-bootstrap";

const DatesList = ({ person }) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8">
        <div className="rectangle p-2">
          {/* <div className="d-flex border-bottom mx-3 my-2">
          <img className="img-avatar" src="p1.jpg" alt="" />
          <div className="px-3">
            <p className="d-inline fs-5">
              <bdi>محمد علي</bdi>
            </p>
            <p className="fs-6">
              <bdi>الخامسة مساء</bdi>
            </p>
          </div>
        </div>
        <div className="d-flex border-bottom mx-3 my-2">
          <img className="img-avatar" src="p1.jpg" alt="" />
          <div className="px-3">
            <p className="d-inline fs-5">
              <bdi>محمد علي</bdi>
            </p>
            <p className="fs-6">
              <bdi>الخامسة مساء</bdi>
            </p>
          </div>
        </div>
        <div className="d-flex border-bottom mx-3 my-2">
          <img className="img-avatar" src="p1.jpg" alt="" />
          <div className="px-3">
            <p className="d-inline fs-5">
              <bdi>محمد علي</bdi>
            </p>
            <p className="fs-6">
              <bdi>الخامسة مساء</bdi>
            </p>
          </div>
        </div>
        <div className="d-flex border-bottom mx-3 my-2">
          <img className="img-avatar" src="p1.jpg" alt="" />
          <div className="px-3">
            <p className="d-inline fs-5">
              <bdi>محمد علي</bdi>
            </p>
            <p className="fs-6">
              <bdi>الخامسة مساء</bdi>
            </p>
          </div>
        </div> */}

          {/* <div className="d-flex border-bottom mx-3 my-2">
          <img className="img-avatar" src={person[0].img} alt="" />
          <div className="px-3">
            <p className="d-inline fs-5">
              <bdi> {person[0].name} </bdi>
            </p>
            <p className="fs-6">
              <bdi> {person[0].date} </bdi>
            </p>
          </div>
        </div> */}

          {person.length > 0 ? (
            person.map((item) => {
              return (
                <div key={item.id} className="d-flex border-bottom mx-3 my-2">
                  <img className="img-avatar" src={item.img} alt="" />
                  <div className="px-3">
                    <p className="d-inline fs-5">
                      <bdi> {item.name} </bdi>
                    </p>
                    <p className="fs-6">
                      <bdi> {item.date} </bdi>
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            // null
            <h2 className="p-5 text-center">
              <bdi>لا يوجد مواعيد اليوم</bdi>
            </h2>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default DatesList;

// * Warning Note:
// ---------------

// [01]:

//* :Warning يعني رقم يكون مختلف وإلا هيطلع نفس هاد ال ،id يلي هو ال key={} لازم أعطيه maping لازم العنصر يلي بعمله
// ===================================================================================================================

// react-jsx-dev-runtime.development.js:198 Warning: Each child in a list should have a unique "key" prop.

// Check the render method of `DatesList`. See https://reactjs.org/link/warning-keys for more information.
//     at div
//     at DatesList (http://localhost:3000/static/js/bundle.js:359:3)
//     at div
//     at http://localhost:3000/static/js/bundle.js:7911:3
//     at div
//     at App (http://localhost:3000/static/js/bundle.js:49:86)
// printWarning @ react-jsx-dev-runtime.development.js:198

// ===================================================================================================================

// [02]:

//* :(متكرر id بقلي يعني في) ،واحد و واحد key لو عندي عنصرين ماخذين نفس ال
// ============================================================================

// react-dom.development.js:86 Warning: Encountered two children with the same key, `1`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.
//     at div
//     at div
//     at http://localhost:3000/static/js/bundle.js:7810:8
//     at div
//     at http://localhost:3000/static/js/bundle.js:7886:3
//     at DatesList (http://localhost:3000/static/js/bundle.js:359:3)
//     at div
//     at http://localhost:3000/static/js/bundle.js:7844:3
//     at div
//     at App (http://localhost:3000/static/js/bundle.js:49:86)
// printWarning @ react-dom.development.js:86
// error @ react-dom.development.js:60
// warnOnInvalidKey @ react-dom.development.js:15293
// reconcileChildrenArray @ react-dom.development.js:15330
// reconcileChildFibers @ react-dom.development.js:15821
// reconcileChildren @ react-dom.development.js:19167
// updateHostComponent @ react-dom.development.js:19924
// beginWork @ react-dom.development.js:21618
// beginWork$1 @ react-dom.development.js:27426
// performUnitOfWork @ react-dom.development.js:26557
// workLoopSync @ react-dom.development.js:26466
// renderRootSync @ react-dom.development.js:26434
// performConcurrentWorkOnRoot @ react-dom.development.js:25738
// workLoop @ scheduler.development.js:266
// flushWork @ scheduler.development.js:239
// performWorkUntilDeadline @ scheduler.development.js:533

// ===================================================================================================================

// [03]:

//* ؟ بستخدمه id طيب لو الداتا يلي راجعالي فيها

//* :id طيب لو الداتا يلي رجعالي فش فيها
// ----------------------------------------
// 1- => الحالي date ممكن أستخدم ال
// 2- => ما بتتكرر وبالتالي مش هتسبب لي نفس المشكلة Math.random() وطبعا key={Math.random()} ممكن أستخدم مثلا

// key={item.id}: map في داخل ال return بتستخدمه للحاجة يلي هتعمللها
//                  .ممكن تسبب مشاكل فيما بعد لو ما حطيته

// ===================================================================================================================
