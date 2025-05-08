import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Watchlist from "./components/Watchlist";
import AppStack from "./components/AppStack";
import Home from "./components/Home";
import AddCamera from "./components/AddCamera";
import LiveWall from "./components/LiveWall";
import LoginModal from "./components/loginModal/loginmodal";
import RegisterModal from "./components/loginModal/registermodal";
import ProtectedRoute from "./components/ProtectedRoute";
import Alert from "./components/Alert";
import License from "./components/License";
import Events from "./components/Events";
import EventsLive from "./components/EventsLive";
// import EventsPermissions from "./components/EventsPermissions";
// import EventsRemoteconf from "./components/EventsRemoteconf";
// import EventsPTZ from "./components/EventsPTZ";
// import EventsLayout from "./components/EventsLayout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  // Check if the user is already logged in on component mount
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"; // or check for token in localStorage/sessionStorage
    setIsLoggedIn(isLoggedIn); // Set initial login state based on localStorage
    setLoading(false); // Stop loading after checking the login status
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="flex ">
        <div className="flex-1 ">
          {isLoggedIn && <Navbar />}
          <Routes>
            <Route
              path="/"
              element={
                isLoggedIn ? (
                  <Navigate to="/home" replace />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route
              path="/login"
              element={<LoginModal setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route
              path="/register"
              element={<RegisterModal setIsLoggedIn={setIsLoggedIn} />}
            />{" "}
            {/* Register route */}
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/livewall"
              element={
                <ProtectedRoute>
                  <LiveWall />
                </ProtectedRoute>
              }
            />
            <Route
              path="/add-camera"
              element={
                <ProtectedRoute>
                  <AddCamera />
                </ProtectedRoute>
              }
            />
            <Route
              path="/watchlist"
              element={
                <ProtectedRoute>
                  <Watchlist />
                </ProtectedRoute>
              }
            />
            <Route
              path="/appstack"
              element={
                <ProtectedRoute>
                  <AppStack />
                </ProtectedRoute>
              }
            />
            <Route
              path="/alert"
              element={
                <ProtectedRoute>
                  <Alert />
                </ProtectedRoute>
              }
            />
            <Route
              path="/license"
              element={
                <ProtectedRoute>
                  <License />
                </ProtectedRoute>
              }
            />
            <Route
              path="/events"
              element={
                <ProtectedRoute>
                  <Events />
                </ProtectedRoute>
              }
            />
            <Route
              path="/events-live"
              element={
                <ProtectedRoute>
                  <EventsLive />
                </ProtectedRoute>
              }
            />

            {/* <Route
              path="/eventsPermissions"
              element={
                <ProtectedRoute>
                  <EventsPermissions />
                </ProtectedRoute>
              }
            />
            <Route
              path="/events-remoteconf"
              element={
                <ProtectedRoute>
                  <EventsRemoteconf />
                </ProtectedRoute>
              }
            />
            <Route
              path="/events-ptz"
              element={
                <ProtectedRoute>
                  <EventsPTZ />
                </ProtectedRoute>
              }
            /> */}

            {/* <Route
              path="/events"
              element={
                <ProtectedRoute>
                  <EventsLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Events />} />
              <Route path="eventsPermissions" element={<EventsPermissions />} />
              <Route path="events-remoteconf" element={<EventsRemoteconf />} />
              <Route path="events-ptz" element={<EventsPTZ />} />
            </Route> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
