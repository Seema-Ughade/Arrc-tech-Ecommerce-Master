import React, { useState } from "react";

const WebsiteContents = () => {
  const [debugMode, setDebugMode] = useState(true);
  const [cookie, setCookie] = useState(true);
  const [captcha, setCaptcha] = useState(true);
  const [signUpVerification, setSignUpVerification] = useState(false);
  const [tawkTo, setTawkTo] = useState(false);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-6xl  bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-semibold mb-6">Website Contents</h1>
        <form className="space-y-4">
          <div>
            <label className="block font-medium mb-2">Website Title *</label>
            <input
              type="text"
              defaultValue="Genius-Shop"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Copyright Text *</label>
            <input
              type="text"
              defaultValue="COPYRIGHT © 2024. All Rights Reserved By GeniusOcean"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Debug Mode</label>
            <select
              value={debugMode ? "Activated" : "Deactivated"}
              onChange={(e) => setDebugMode(e.target.value === "Activated")}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                debugMode ? "focus:ring-green-500" : "focus:ring-red-500"
              }`}
            >
              <option value="Activated">Activated</option>
              <option value="Deactivated">Deactivated</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-2">Cookie</label>
            <select
              value={cookie ? "Activated" : "Deactivated"}
              onChange={(e) => setCookie(e.target.value === "Activated")}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                cookie ? "focus:ring-green-500" : "focus:ring-red-500"
              }`}
            >
              <option value="Activated">Activated</option>
              <option value="Deactivated">Deactivated</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-2">Captcha</label>
            <select
              value={captcha ? "Activated" : "Deactivated"}
              onChange={(e) => setCaptcha(e.target.value === "Activated")}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                captcha ? "focus:ring-green-500" : "focus:ring-red-500"
              }`}
            >
              <option value="Activated">Activated</option>
              <option value="Deactivated">Deactivated</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-2">Google ReCaptcha Site Key *</label>
            <input
              type="text"
              defaultValue="6LcnPoEaAAAAF6QhKPZ8V4744yiEnr41li3SYDn"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Google ReCaptcha Secret Key *</label>
            <input
              type="text"
              defaultValue="6LcnPoEaAAAAACV_xC4JdPqumaYKbnxz95j6y0zk"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Sign Up Verification</label>
            <select
              value={signUpVerification ? "Activated" : "Deactivated"}
              onChange={(e) =>
                setSignUpVerification(e.target.value === "Activated")
              }
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                signUpVerification ? "focus:ring-green-500" : "focus:ring-red-500"
              }`}
            >
              <option value="Activated">Activated</option>
              <option value="Deactivated">Deactivated</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-2">Tawk.to</label>
            <select
              value={tawkTo ? "Activated" : "Deactivated"}
              onChange={(e) => setTawkTo(e.target.value === "Activated")}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                tawkTo ? "focus:ring-green-500" : "focus:ring-red-500"
              }`}
            >
              <option value="Activated">Activated</option>
              <option value="Deactivated">Deactivated</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WebsiteContents;
