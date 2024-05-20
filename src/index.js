import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Login from "./pages/login/Login.jsx";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm.js";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword.js";
import App from "./App";
import "./index.css";

import {
  LinearScale,
  CategoryScale,
  PointElement,
  LineController,
  LineElement,
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarController,
  BarElement,
} from "chart.js";
import {
  AMB_RANKING_MONTHLY,
  AMB_RANKING_QUARTER,
  KpiMonthly,
  ContactUs,
  PartnerInstitutes,
  Target,
  StrategyPage,
  Interventions,
  InstitutionalMechanisms,
  KpiQuarterly,
  EligibleBeneficiaries,
  About,
  Resources,
} from "./pages";
import { FixedHeader, Footer } from "./containers";
import { Denominators } from "./pages/reports";
import DashboardState from "./pages/dashboard/DashboardState.jsx";
import DashboardDistrict from "./pages/dashboard/DashboardDistrict.jsx";

ChartJS.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineController,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarController,
  BarElement
);

function AppRouter() {
  return (
    <Router>
      <FixedHeader />
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/about" element={<About />} />
        <Route path="/target" element={<Target />} />
        <Route path="/6x6x6-strategy" element={<StrategyPage />} />
        <Route
          path="/eligible-beneficiaries"
          element={<EligibleBeneficiaries />}
        />
        <Route path="/interventions" element={<Interventions />} />
        <Route
          path="/institutional-mechanisms"
          element={<InstitutionalMechanisms />}
        />

        <Route
          path="/key-performance-indicators-monthly"
          element={<KpiMonthly />}
        />
        <Route
          path="/key-performance-indicators-quarterly"
          element={<KpiQuarterly />}
        />
        <Route path="/denominators" element={<Denominators />} />
        <Route path="/upload-state-district" element={<DashboardDistrict />} />
        <Route path="/upload-district" element={<DashboardState />} />

        <Route path="/amb-ranking-monthly" element={<AMB_RANKING_MONTHLY />} />
        <Route path="/amb-ranking-quarter" element={<AMB_RANKING_QUARTER />} />

        <Route path="/resources" element={<Resources />} />

        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/partner-institutes" element={<PartnerInstitutes />} />

        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/registration-form" element={<RegistrationForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById("root")
);
