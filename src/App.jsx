import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import L_authorizationPage from "./pages/login/l_authorizationPage/L_authorizationPage";
import L_registrationPage from "./pages/login/l_registrationPage/L_registrationPage";
import L_verificationPage from "./pages/login/l_verificationPage/L_verificationPage";
import L_userRolePage from "./pages/login/l_userRolePage/L_userRolePage";
import L_createVetBookPage from "./pages/login/l_createVetBookPage/L_createVetBookPage";
import L_vetVerificationPage from "./pages/login/l_vetVerificationPage/L_vetVerificationPage";
import MainPage from "./pages/mainPage/MainPage";
import L_vetCodePage from "./pages/login/l_vetCodePage/L_vetCodePage";
import Q_choiceAnimalPage from "./pages/addQuestion/q_choiceAnimalPage/Q_choiceAnimalPage";
import Q_closeQuestionPage from "./pages/addQuestion/q_closeQuestionPage/Q_closeQuestionPage";
import VetBookPage from "./pages/vetBookPage/VetBookPage";
import Q_descriptionAnimalPage from "./pages/addQuestion/q_descriptionAnimalPage/Q_descriptionAnimalPage";
import Q_sendQuestionPage from "./pages/addQuestion/q_sendQuestionPage/Q_sendQuestionPage";
import Q_confirmationPage from "./pages/addQuestion/q_confirmationPage/Q_confirmationPage";
import P_userPage from "./pages/profile/p_userPage/P_userPage";
import P_allQuestionsPage from "./pages/profile/p_allQuestionsPage/P_allQuestionsPage";
import P_viewQuestionPage from "./pages/profile/p_viewQuestionPage/P_viewQuestionPage";
import Loader from "./components/loader/Loader";
import L_phoneLoginPage from "./pages/login/l_phoneLoginPage/L_phoneLoginPage";
import DonatePage from "./pages/donatePage/DonatePage";
import AboutServicePage from "./pages/aboutServicePage/AboutServicePage";
import P_settings from "./pages/profile/p_settings/P_settings";
import E_settingsNotificationProfilePage from "./pages/editProfile/e_settingsNotificationProfilePage/E_settingsNotificationProfileSpecialistPage";
import E_settingsNotificationProfileUserPage from "./pages/editProfile/e_settingsNotificationProfileUserPage/E_settingsNotificationProfileUserPage";
import AnswerExpertToQuestion from "./pages/profileExpert/answerExpertToQuestion/AnswerExpertToQuestion";

function App() {
  const [isLoading, setIsLoading] = useState(false); // TODO: replace to true in production

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<L_authorizationPage />} />
        <Route path="/register" element={<L_registrationPage />} />
        <Route path="/verification" element={<L_verificationPage />} />
        <Route path="/verification/role" element={<L_userRolePage />} />
        <Route
          path="/verification/role/user/create-vetbook"
          element={<L_createVetBookPage />}
        />
        <Route
          path="/verification/role/vet/vet-verification"
          element={<L_vetVerificationPage />}
        />
        <Route
          path="/verification/role/vet/vet-verification/code"
          element={<L_vetCodePage />}
        />

        <Route
          path="/verification/role/user/create-vetbook"
          element={<L_createVetBookPage />}
        />
        <Route
          path="/verification/role/vet/vet-verification"
          element={<L_vetVerificationPage />}
        />
        <Route
          path="/verification/role/vet/vet-verification/code"
          element={<L_vetCodePage />}
        />
        <Route path="/login" element={<L_phoneLoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/main/question/choice" element={<Q_choiceAnimalPage />} />
        <Route
          path="/main/question/description-animal"
          element={<Q_descriptionAnimalPage />}
        />
        <Route
          path="/main/question/description-animal/send"
          element={<Q_sendQuestionPage />}
        />
        <Route
          path="/main/question/description-animal"
          element={<Q_descriptionAnimalPage />}
        />
        <Route
          path="/main/question/description-animal/send"
          element={<Q_sendQuestionPage />}
        />
        <Route path="/main/question/confirm" element={<Q_confirmationPage />} />
        <Route path="/main/question/close" element={<Q_closeQuestionPage />} />
        <Route path="/vetbook" element={<VetBookPage />} />
        <Route path="/profile" element={<P_userPage />} />
        <Route path="/profile/questions" element={<P_allQuestionsPage />} />
        <Route path="/profile/view-question" element={<P_viewQuestionPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/service" element={<AboutServicePage />} />
        <Route path="/settings" element={<P_settings />} />
        <Route
          path="/profile/settings/doctor/notification"
          element={<E_settingsNotificationProfilePage />}
        />
        <Route
          path="/profile/settings/user/notification"
          element={<E_settingsNotificationProfileUserPage />}
        />
        <Route
          path="/profile/selected-questions/action/answer"
          element={<AnswerExpertToQuestion />}
        />
      </Routes>
    </Router>
  );
}

export default App;
