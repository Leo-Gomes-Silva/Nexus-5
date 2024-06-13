import { useState } from "react";
import styles from "./styles.module.css";

export default function Questions(props) {
  const [btnSend, setBtnSend] = useState(false);
  const [componentExist, setComponentExist] = useState(true);

  function showBtnSend() {
    setBtnSend(true);
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(e.target.options.value);

    switch (e.target.options.value) {
      case "A":
        props.result.answerA += 1;
        break;

      case "B":
        props.result.answerB += 1;
        break;

      case "C":
        props.result.answerC += 1;
        break;

      case "D":
        props.result.answerD += 1;
        break;

      case "E":
        props.result.answerE += 1;
        break;

      default:
        break;
    }
    console.log(props.result);
    setComponentExist(false);
  }

  console.log();

  return (
    <>
      {componentExist && (
        <div className={styles.containerQuestion}>
          <form
            className={styles.containerForm}
            onChange={showBtnSend}
            onSubmit={handleSubmit}
          >
            <p className={styles.question}>{props.question}</p>
            <div className={styles.option}>
              <input
                className={styles.radioOption}
                type="radio"
                id={props.responseA}
                name="options"
                value="A"
              />
              <label
                className={styles.labelOption}
                htmlFor={props.responseA}
              >{props.optionA}</label>
            </div>
            <div className={styles.option}>
              <input
                className={styles.radioOption}
                type="radio"
                id={props.responseB}
                name="options"
                value="B"
              />
              <label
                className={styles.labelOption}
                htmlFor={props.responseB}
              >{props.optionB}</label>
            </div>
            <div className={styles.option}>
              <input
                className={styles.radioOption}
                type="radio"
                id={props.responseC}
                name="options"
                value="C"
              />
              <label
                className={styles.labelOption}
                htmlFor={props.responseC}
              >{props.optionC}</label>
            </div>
            <div className={styles.option}>
              <input
                className={styles.radioOption}
                type="radio"
                id={props.responseD}
                name="options"
                value="D"
              />
              <label
                className={styles.labelOption}
                htmlFor={props.responseD}
              >{props.optionD}</label>
            </div>
            <div className={styles.option}>
              <input
                className={styles.radioOption}
                type="radio"
                id={props.responseE}
                name="options"
                value="E"
              />
              <label
                className={styles.labelOption}
                htmlFor={props.responseE}
              >{props.optionE}</label>
            </div>
            <div className={styles.btn}>
              {btnSend && (
                <input
                  className={styles.btnSend}
                  type="submit"
                  value="Enviar"
                />
              )}
            </div>
          </form>
        </div>
      )}
    </>
  );
}
