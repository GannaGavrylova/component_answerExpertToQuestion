import { Question } from "../../../components/shared/question/Question";
import CustomTextarea from "../../../components/customTextarea/CustomTextarea";
import { Link } from "react-router-dom";
import s from "./answerExpertToQuestion.module.css";
import back from "../../../assets/back.svg";
import close from "../../../assets/close.svg";
import { useTranslation } from "react-i18next";
import CustomButton from "../../../components/customButton/CustomButton";
import FileUploader from "../../../components/fileUploader/FileUploader";

function AnswerExpertToQuestion() {
  return (
    <div className={s.mainContainer}>
      <div className={s.answer_header}>
        <Link to="/profile">
          <img src={back} alt="back" />
        </Link>
        <h1>Ответ</h1>

        <img src={close} alt="close" className={s.closeIcons} />
      </div>

      <Question />
      <div className={s.textPromt}>
        <p>Пожалуйста, напишите Ваш ответ</p>
        <p>Напишите сообщение*</p>
      </div>

      <CustomTextarea
        style={{
          width: "100%",
          border: "1px solid var(--color-main)",
          backgroundColor: "rgba(42, 157, 143, 0.09)",
        }}
      />
      <div className={s.textPromt}>
        <p>Добавьте фото и (или) видео при необходимости</p>
      </div>
      <FileUploader />
      <CustomButton text="Отправить ответ" link="/profile" />
    </div>
  );
}

export default AnswerExpertToQuestion;
