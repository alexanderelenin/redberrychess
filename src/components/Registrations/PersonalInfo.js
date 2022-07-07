// import React, { useState, useRef } from "react";
// import classes from "./PersonalInfo.module.css";

// const PersonalInfo = () => {
//   // const [enteredName, setEnteredName] = useState();
//   // const [enteredMail, setEnteredMail] = useState();
//   // const [enteredPhone, setEnteredPhone] = useState();
//   // const [enteredDate, setEneteredDate] = useState();
//   const [nameIsValid, setNameIsValid] = useState(null);

//   const [formIsValid, setFormIsValid] = useState(null);

//   // const [nameIsValid, setNameIsValid]

//   // const nameRef = useRef();

//   const nameChangeHandler = (event) => {};
//   const emailChangeHandler = () => {};
//   const phoneChangeHandler = () => {};

//   //FOCUSING FUNCTIONS////////////////////////////////////////////////////////////////
//   //////////////////////////////////////////////////////////
//   const unfocus = (e) => {
//     e.preventDefault();
//     e.target.style.display = "none";
//     e.target.nextElementSibling.focus();
//     console.log("clicked");
//   };

//   const labelUnfocus = (e) => {
//     e.target.previousElementSibling.style.display = "none";
//   };

//   const focusReset = (e) => {
//     if (e.target.value === "") {
//       e.target.previousElementSibling.style.display = "block";
//     }
//   };
//   ///////////////////////////////////////////////////////////////////////
//   ///////////////////////////////////////////////////////////////////////
//   return (
//     <form className={classes.personal}>
//       <div className={classes.title}>
//         <h1>Personal information</h1>
//         <p>This is Basic information Fields</p>
//       </div>

//       <div className={classes["form-control"]}>
//         <div className={classes.input}>
//           <label onClick={unfocus} htmlFor="name">
//             Name <span className={classes.required}>*</span>
//           </label>
//           <input
//             // ref={nameRef}
//             type="text"
//             id="name"
//             onChange={nameChangeHandler}
//             className={classes.inputItem}
//             // value={enteredName}
//             onFocus={labelUnfocus}
//             onBlur={focusReset}
//           />
//         </div>

//         <div className={classes.input}>
//           <label onClick={unfocus} htmlFor="email">
//             Email address<span className={classes.required}>*</span>
//           </label>
//           <input
//             type="email"
//             id="email"
//             // value={enteredMail}
//             onChange={emailChangeHandler}
//             onFocus={labelUnfocus}
//             onBlur={focusReset}
//           />
//         </div>

//         <div className={classes.input}>
//           <label onClick={unfocus} htmlFor="phone">
//             Phone number<span className={classes.required}>*</span>
//           </label>
//           <input
//             type="text"
//             id="phone"
//             // value={enteredPhone}
//             onChange={phoneChangeHandler}
//             onFocus={labelUnfocus}
//             onBlur={focusReset}
//           />
//         </div>

//         <div className={classes.input}>
//           <label onClick={unfocus} htmlFor="date">
//             Date Of Birth<span className={classes.required}>*</span>
//           </label>
//           <input
//             type="date"
//             id="date"
//             // value={enteredDate}
//             onFocus={labelUnfocus}
//             onBlur={focusReset}
//           />
//         </div>
//       </div>
//     </form>
//   );
// };

// export default PersonalInfo;
