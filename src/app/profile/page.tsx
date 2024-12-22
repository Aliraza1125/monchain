// app/profile/page.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface SocialAccount {
  platform: string;
  username: string;
  icon: string;
}

export default function Profile() {
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
  });

  const [isPasswordChangeOpen, setIsPasswordChangeOpen] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const socialAccounts: SocialAccount[] = [
    {
      platform: "Facebook",
      username: "/username",
      icon: "/images/facebook.png",
    },
    { platform: "Twitter", username: "/username", icon: "/images/twitter.png" },
    {
      platform: "Linkdin",
      username: "/username",
      icon: "/images/linkedin.png",
    },
    { platform: "Discord", username: "/username", icon: "/images/discord.png" },
    {
      platform: "Twitch",
      username: "/username",
      icon: "/images/twitch.png",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    console.log("Profile data:", profileData);
  };

  return (
    <div className="relative min-h-screen">
    {/* Background Image */}
    <div 
      className="fixed top-0 left-0 w-full h-full bg-no-repeat"
      style={{
        backgroundImage: `url('/bg-4.png')`,
        backgroundSize: '100% auto',
        backgroundPosition: 'top center',
        zIndex: -1,
      }}
    />
      <div className="max-w-[1200px] mx-auto px-8 py-4">
        <div className="flex items-center gap-2 text-sm mb-8">
          <Link href="/" className="text-[#666666] hover:text-[#0066FF]">
            Home
          </Link>
          <span className="text-[#666666]">/</span>
          <span className="text-[#666666]">Profile</span>
        </div>

        {/* Profile Cards */}
        <div className="space-y-8">
          {/* Profile Header */}
          <div className="bg-white rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative w-24 h-24">
                <Image
                  src="/images/profile-avatar.png"
                  alt="Profile"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-medium text-[#1A1A1A]">Alex Mohamed</h2>
                <p className="text-sm text-[#666666]">Lorem ipsum</p>
                <p className="text-xs text-[#666666]">
                  Last sync: 01 Nov 2024, 3:12 AM UTC
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="px-4 py-2.5 text-sm text-white bg-[#2F7BD3] hover:bg-[#0052CC] rounded-full transition-colors">
                Upload New Photo
              </button>
              <button className="px-6 py-2 text-sm text-[#2F7BD3] hover:bg-red-50 rounded-full border transition-colors">
                Delete
              </button>
            </div>
          </div>

          {/* Profile Form */}
          <div className="bg-white rounded-xl p-6">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm text-[#666666] mb-2 ml-4">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="eg. John"
                  className="w-full px-4 py-2.5 rounded-lg border border-[#E5E5E5] focus:outline-none focus:border-[#0066FF]"
                  value={profileData.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm text-[#666666] mb-2 ml-4">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="eg. Doe"
                  className="w-full px-4 py-2.5 rounded-lg border border-[#E5E5E5] focus:outline-none focus:border-[#0066FF]"
                  value={profileData.lastName}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Username Field */}
            <div className="mb-6">
              <label className="block text-sm text-[#666666] mb-2 ml-4">
                User Name
              </label>
              <input
                type="text"
                name="userName"
                placeholder="eg. John Doe"
                className="w-full px-4 py-2.5 rounded-lg border border-[#E5E5E5] focus:outline-none focus:border-[#0066FF]"
                value={profileData.userName}
                onChange={handleInputChange}
              />
            </div>

            {/* Email and Phone Fields */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm text-[#666666] mb-2 ml-4">
                  Email Address
                </label>
                <div className="relative">
                  <Image
                    src="/images/email-icon.png"
                    width={20}
                    height={20}
                    alt="Email"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-50"
                  />
                  <input
                    type="email"
                    name="email"
                    className="w-full pl-12 pr-4 py-2.5 rounded-lg border border-[#E5E5E5] focus:outline-none focus:border-[#0066FF]"
                    value={profileData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-[#666666] mb-2 ml-4">
                  Phone Number
                </label>
                <div className="relative">
                  <Image
                    src="/images/phone-icon.png"
                    width={20}
                    height={20}
                    alt="Phone"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-50"
                  />
                  <input
                    type="tel"
                    name="phoneNumber"
                    className="w-full pl-12 pr-4 py-2.5 rounded-lg border border-[#E5E5E5] focus:outline-none focus:border-[#0066FF]"
                    value={profileData.phoneNumber}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* Social Accounts */}
            <div className="mb-6">
              <label className="block text-base text-[#2c2020] mb-4">
                Social Accounts
              </label>
              <div className="space-y-6">
                <div className="flex flex-wrap gap-3">
                  {socialAccounts.map((account) => (
                    <div
                      key={account.platform}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl border bg-[#F4F6FB] cursor-pointer hover:bg-[#F8F9FB] transition-colors"
                    >
                      <Image
                        src={account.icon}
                        width={20}
                        height={20}
                        alt={account.platform}
                      />
                      <span className="text-base text-[#666666]">
                        {account.username}
                      </span>
                    </div>
                  ))}
                </div>

                <button className="inline-flex items-center px-4 py-2.5 text-sm text-white bg-[#0066FF] hover:bg-[#0052CC] rounded-xl transition-colors">
                  <span className="mr-2">+</span>
                  Connect Account
                </button>
              </div>
            </div>
          </div>

          {/* Change Password Section */}
          <div className="bg-white rounded-xl px-8 py-1">
            {/* Password Change Header */}
            <div
              className="p-4 flex items-center justify-between cursor-pointer"
              onClick={() => setIsPasswordChangeOpen(!isPasswordChangeOpen)}
            >
              <div>
                <h3 className="text-lg font-medium text-[#1A1A1A]">
                  Change Password
                </h3>
              </div>
              <Image
                src="/images/downarrow.svg"
                width={16}
                height={16}
                alt="Toggle"
                className={`transition-transform duration-200 ${
                  isPasswordChangeOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Password Change Form */}
            {isPasswordChangeOpen && (
              <div className="px-4 py-6 space-y-6 border-t border-[#E5E5E5]">
                <div className="grid grid-cols-2 gap-6">
                  {/* Current Password */}
                  <div>
                    <label className="block text-base font-medium text-[#1A1A1A] mb-2 ml-4">
                      Current Password
                    </label>
                    <div className="relative">
                      <Image
                        src="/images/key-icon.png"
                        width={20}
                        height={20}
                        alt="Password"
                        className="absolute left-4 top-1/2 -translate-y-1/2 opacity-50"
                      />
                      <input
                        type="password"
                        name="currentPassword"
                        className="w-full pl-12 pr-4 py-2.5 rounded-xl border border-[#E5E5E5] focus:outline-none focus:border-[#0066FF]"
                        value={passwordData.currentPassword}
                        onChange={handlePasswordChange}
                      />
                    </div>
                  </div>

                  {/* New Password */}
                  <div>
                    <label className="block text-base font-medium text-[#1A1A1A] mb-2 ml-4">
                      New Password
                    </label>
                    <div className="relative">
                      <Image
                        src="/images/key-icon.png"
                        width={20}
                        height={20}
                        alt="Password"
                        className="absolute left-4 top-1/2 -translate-y-1/2 opacity-50"
                      />
                      <input
                        type="password"
                        name="newPassword"
                        className="w-full pl-12 pr-4 py-2.5 rounded-xl border border-[#E5E5E5] focus:outline-none focus:border-[#0066FF] bg-white"
                        value={passwordData.newPassword}
                        onChange={handlePasswordChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Confirm New Password */}
                <div>
                  <label className="block text-base font-medium text-[#1A1A1A] mb-2 ml-4">
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <Image
                      src="/images/key-icon.png"
                      width={20}
                      height={20}
                      alt="Password"
                      className="absolute left-4 top-1/2 -translate-y-1/2 opacity-50"
                    />
                    <input
                      type="password"
                      name="confirmPassword"
                      className="w-full pl-12 pr-4 py-2.5 rounded-xl border border-[#E5E5E5] focus:outline-none focus:border-[#0066FF] bg-white"
                      value={passwordData.confirmPassword}
                      onChange={handlePasswordChange}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Action Buttons */}
          <div className="flex justify-end gap-8 ">
            <button className="px-6 py-2.5 text-[#0066FF] hover:bg-[#F4F6FB] rounded-full border border-[#0052CC] transition-colors">
              Cancel
            </button>
            <button
              onClick={handleSaveChanges}
              className="px-8 py-2.5 bg-[#0066FF] text-white rounded-full hover:bg-[#0052CC] transition-colors"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  
  );
}
