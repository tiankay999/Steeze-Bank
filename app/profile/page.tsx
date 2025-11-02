"use client";

import React, { useState } from "react";

export default function User_Profile() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [profession, setProfession] = useState("");
  const [education, setEducation] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [language, setLanguage] = useState("");
  const [accountType, setAccountType] = useState("");

  // handle save
  async function handleSave(e: React.FormEvent) {
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      gender,
      birthdate,
      profession,
      education,
      email,
      confirmEmail,
      location,
      phoneNumber,
      language,
      accountType,
    };

    console.log("saving profile data:", formData);

    // later you can send it to backend here with fetch("/api/profile", {...})
  }

  return (
    <div className="min-h-screen bg-black text-white flex">
      <form
        onSubmit={handleSave}
        className="bg-black border border-white/10 rounded-xl shadow-sm p-6 w-full max-w-[1300px] mx-auto"
      >
        <p className="text-base font-semibold mb-1">Basic Information</p>
        <p className="text-sm text-gray-400 mb-8">
          Update your profile information below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First Name */}
          <div className="space-y-1">
            <label
              htmlFor="first-name"
              className="block mb-1 text-sm font-semibold text-white"
            >
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              placeholder="Emma"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 text-white placeholder:text-gray-500 text-sm py-2 px-2.5 rounded-lg outline-none ring-0 focus:border-gray-400 focus:ring-0 transition"
            />
          </div>

          {/* Last Name */}
          <div className="space-y-1">
            <label
              htmlFor="last-name"
              className="block mb-1 text-sm font-semibold text-white"
            >
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              placeholder="Roberts"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 text-white placeholder:text-gray-500 text-sm py-2 px-2.5 rounded-lg outline-none ring-0 focus:border-gray-400 focus:ring-0 transition"
            />
          </div>

          {/* Gender */}
          <div className="space-y-1">
            <label
              htmlFor="gender"
              className="block mb-1 text-sm font-semibold text-white"
            >
              Gender
            </label>

            <input
              id="gender"
              placeholder="Select Gender"
              type="text"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 text-white placeholder:text-gray-500 text-sm py-2 px-2.5 rounded-lg outline-none ring-0 focus:border-gray-400 focus:ring-0 transition cursor-pointer"
            />
          </div>

          {/* Birth Date */}
          <div className="space-y-1">
            <label
              htmlFor="birth-date"
              className="block mb-1 text-sm font-semibold text-white"
            >
              Birth Date
            </label>
            <input
              id="birth-date"
              type="date"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 text-white text-sm py-2 px-2.5 rounded-lg outline-none ring-0 focus:border-gray-400 focus:ring-0 transition"
            />
          </div>

          {/* Profession */}
          <div className="space-y-1">
            <label
              htmlFor="profession"
              className="block mb-1 text-sm font-semibold text-white"
            >
              Profession
            </label>

            <input
              id="profession"
              placeholder="Profession"
              type="text"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 text-white placeholder:text-gray-500 text-sm py-2 px-2.5 rounded-lg outline-none ring-0 focus:border-gray-400 focus:ring-0 transition"
            />
          </div>

          {/* Education */}
          <div className="space-y-1">
            <label
              htmlFor="education"
              className="block mb-1 text-sm font-semibold text-white"
            >
              Education
            </label>

            <input
              id="education"
              placeholder="Bachelor's"
              type="text"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 text-white placeholder:text-gray-500 text-sm py-2 px-2.5 rounded-lg outline-none ring-0 focus:border-gray-400 focus:ring-0 transition"
            />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-semibold text-white"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="emma@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 text-white placeholder:text-gray-500 text-sm py-2 px-2.5 rounded-lg outline-none ring-0 focus:border-gray-400 focus:ring-0 transition"
            />
          </div>

          {/* Confirm Email */}
          <div className="space-y-1">
            <label
              htmlFor="confirm-email"
              className="block mb-1 text-sm font-semibold text-white"
            >
              Confirm Email
            </label>
            <input
              id="confirm-email"
              type="email"
              placeholder="emma@mail.com"
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 text-white placeholder:text-gray-500 text-sm py-2 px-2.5 rounded-lg outline-none ring-0 focus:border-gray-400 focus:ring-0 transition"
            />
          </div>

          {/* Location */}
          <div className="space-y-1">
            <label
              htmlFor="location"
              className="block mb-1 text-sm font-semibold text-white"
            >
              Location
            </label>
            <input
              id="location"
              type="text"
              placeholder="Florida, USA"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 text-white placeholder:text-gray-500 text-sm py-2 px-2.5 rounded-lg outline-none ring-0 focus:border-gray-400 focus:ring-0 transition"
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-1">
            <label
              htmlFor="phone-number"
              className="block mb-1 text-sm font-semibold text-white"
            >
              Phone Number
            </label>
            <input
              id="phone-number"
              type="text"
              placeholder="+123 0123 456 789"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 text-white placeholder:text-gray-500 text-sm py-2 px-2.5 rounded-lg outline-none ring-0 focus:border-gray-400 focus:ring-0 transition"
            />
          </div>

          {/* Language */}
          <div className="space-y-1">
            <label
              htmlFor="language"
              className="block mb-1 text-sm font-semibold text-white"
            >
              Language
            </label>
            <input
              id="language"
              type="text"
              placeholder="English"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 text-white placeholder:text-gray-500 text-sm py-2 px-2.5 rounded-lg outline-none ring-0 focus:border-gray-400 focus:ring-0 transition"
            />
          </div>

          {/* Account Type */}
          <div className="space-y-1">
            <label
              htmlFor="account-type"
              className="block mb-1 text-sm font-semibold text-white"
            >
              Account Type
            </label>
            <input
              id="account-type"
              type="text"
              placeholder="Savings / Investment"
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 text-white placeholder:text-gray-500 text-sm py-2 px-2.5 rounded-lg outline-none ring-0 focus:border-gray-400 focus:ring-0 transition"
            />
          </div>
        </div>

        {/* Save button */}
        <button
          type="submit"
          className="text-white bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-10 focus:outline-none"
        >
          Save
        </button>
      </form>
    </div>
  );
}
