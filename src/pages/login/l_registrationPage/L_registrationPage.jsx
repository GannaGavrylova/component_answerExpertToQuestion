import s from "./l_registrationPage.module.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import CustomInput from "../../../components/customInput/CustomInput";
import CustomButton from "../../../components/customButton/CustomButton";
import FileUploader from "../../../components/fileUploader/FileUploader";
import FormHeader from "../../../components/formHeader/FormHeader";
import { useTranslation } from "react-i18next";

const L_registrationPage = () => {
  const { t } = useTranslation();
  const [image, setImage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("phone", data.phone);
      if (image) {
        formData.append("image", image);
      }

      await axios.post("/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      reset();
      setImage(null);
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
    }
  };

  return (
    <form className={s.l_registrationPage} onSubmit={handleSubmit(onSubmit)}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <FormHeader path="/" titleKey={t("registrationPage.header")} />

        <FileUploader maxFiles={1} boxSize={72} borderRadius={15} />
        <p style={{ marginTop: "8px", textAlign: "center" }}>
          {t("registrationPage.addPhoto")}
        </p>

        <label style={{ alignSelf: "start" }}>
          {t("registrationPage.nameLabel")} <span style={{ color: "#2A9D8F" }}>*</span>
        </label>
        <CustomInput
          {...register("name", {
            required: t("registrationPage.nameErrorRequired"),
            minLength: { value: 2, message: t("registrationPage.nameErrorMinLength") },
          })}
          placeholder={t("registrationPage.placeholderName")}
          width={335}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

        <label style={{ alignSelf: "start" }}>
          {t("registrationPage.phoneLabel")} <span style={{ color: "#2A9D8F" }}>*</span>
        </label>
        <CustomInput
          {...register("phone", {
            required: t("registrationPage.phoneErrorRequired"),
            pattern: {
              value: /^\+?[0-9]{10,}$/,
              message: t("registrationPage.phoneErrorPattern"),
            },
          })}
          placeholder="+"
          width={335}
        />
        {errors.phone && <p style={{ color: "red" }}>{errors.phone.message}</p>}
      </div>

      <div className={s.btnPrivacy_box}>
        <CustomButton
          link="/verification"
          type="submit"
          text={t("registrationPage.submitButton")}
          padding="16px 78px"
          disabled={!isValid}
        />
        <p
          className={s.privacyPolicy}
          dangerouslySetInnerHTML={{ __html: t("registrationPage.privacyPolicyText") }}
        />
      </div>
    </form>
  );
};

export default L_registrationPage;
