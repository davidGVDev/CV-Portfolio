import { Route, Routes, Navigate } from "react-router-dom";
import { CvPage } from "../CV/CvPage";
import { PortfolioRoutes } from "../portfolio/routes/PortfolioRoutes";
export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/portfolio/*" element={<PortfolioRoutes />} />
        <Route path="/cv" element={<CvPage />} />
        <Route path="*" element={<Navigate to="/portfolio/about" />} />
      </Routes>
    </>
  );
};

export default AppRouter;
