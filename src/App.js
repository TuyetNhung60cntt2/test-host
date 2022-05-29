import * as React from 'react';
import Header from './components/layout/Header';
import UserPage from './components/users/UserPage';
import TimesheetPage from './components/timesheets/TimesheetPage';
import ProjectPage from './components/projects/ProjectPage';
import NotificationPage from './components/notifications/NotificationPage';
import JobPage from './components/jobs/JobPage';
import IsueeTrackingPage from './components/isueetracking/IsueeTrackingPage';
import EmployeePage from './components/employees/EmployeePage';
import DocumentPage from './components/documents/DocumentPage';
import ChangePasswordPage from './components/changepass/ChangePasswordPage';
import DashboardPage from './components/dashboard/DashboardPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/document" element={<DocumentPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/isueetracking" element={<IsueeTrackingPage />} />
        <Route path="/timesheet" element={<TimesheetPage />} />
        <Route path="/employee" element={<EmployeePage />} />
        <Route path="/job" element={<JobPage />} />
        <Route path="/changepassword" element={<ChangePasswordPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App