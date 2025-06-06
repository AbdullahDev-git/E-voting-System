import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { ElectionProvider } from "./context/ElectionContext";
import { SettingsProvider } from "./context/SettingsContext";
import { ThemeProvider } from "next-themes";
import Login from "./components/Login";
import VotingAuth from "./components/VotingAuth";
import Candidates from "./components/Candidates";
import ConfirmVote from "./components/ConfirmVote";
import ThankYou from "./components/ThankYou";
import ElectionManagerVoterPanel from "./components/ElectionManagerVoterPanel";
import VoteSuccess from "./components/VoteSuccess";
import SettingsPreloader from "./components/SettingsPreloader";
import ServerConnectionMonitor from "./components/ServerConnectionMonitor";

const App: React.FC = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <UserProvider>
        <SettingsProvider>
          <ElectionProvider>
            <ServerConnectionMonitor>
              <SettingsPreloader>
                <div className="flex flex-col min-h-screen">
                  <main className="flex-grow">
                    <Routes>
                      <Route
                        path="/"
                        element={<Navigate to="/voting-auth" replace />}
                      />
                      <Route path="/login" element={<Login />} />
                      <Route path="/voting-auth" element={<VotingAuth />} />
                      <Route path="/candidates" element={<Candidates />} />
                      <Route path="/confirm-vote" element={<ConfirmVote />} />
                      <Route path="/vote-success" element={<VoteSuccess />} />
                      <Route path="/thank-you" element={<ThankYou />} />
                      <Route
                        path="/election-manager/*"
                        element={<ElectionManagerVoterPanel />}
                      />
                      {/* Add this catchall route */}
                      <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                  </main>
                </div>
              </SettingsPreloader>
            </ServerConnectionMonitor>
          </ElectionProvider>
        </SettingsProvider>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
