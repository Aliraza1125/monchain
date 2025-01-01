"use client";
import React, { useState, useRef } from "react";
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

  const [profileImage, setProfileImage] = useState("/images/profile-avatar.png");
  const fileInputRef = useRef<HTMLInputElement>(null);
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

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check if file is an image
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file');
        return;
      }
      
      // Check file size (e.g., max 5MB)
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
      if (file.size > maxSize) {
        alert('File is too large. Please upload an image smaller than 5MB');
        return;
      }

      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleImageDelete = () => {
    setProfileImage("/images/profile-avatar.png");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

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

  const inputClasses = "w-full px-4 py-2.5 rounded-lg border border-gray-200 text-gray-900 focus:outline-none focus:border-primary";
  const inputWithIconClasses = "w-full pl-12 pr-4 py-2.5 rounded-lg border border-gray-200 text-gray-900 focus:outline-none focus:border-primary";

  return (
    <div className="relative min-h-screen">
      <div 
        className="fixed top-0 left-0 w-full h-full bg-no-repeat"
        style={{
          backgroundImage: `url('/bg-4.png')`,
          backgroundSize: '100% 100%',
          zIndex: -1,
        }}
      />
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex items-center gap-2 text-xs sm:text-xl mb-4 sm:mb-8 overflow-x-auto whitespace-nowrap pb-2">
          <Link href="/" className="text-gray-600 hover:text-primary">
            Home
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-gray-600">Profile</span>
        </div>

        <div className="space-y-4 sm:space-y-8">
          <div className="bg-white rounded-xl p-4 flex flex-col sm:flex-row items-center gap-4 sm:justify-between">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                <Image
                  src={profileImage}
                  alt="Profile"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-medium text-gray-900">Alex Mohamed</h2>
                <p className="text-sm text-gray-600">Lorem ipsum</p>
                <p className="text-xs text-gray-600">Last sync: 01 Nov 2024, 3:12 AM UTC</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />
              <button 
                onClick={handleUploadClick}
                className="px-4 py-2.5 text-sm text-white bg-primary hover:bg-primary-hover rounded-full transition-colors w-full sm:w-auto"
              >
                Upload New Photo
              </button>
              <button 
                onClick={handleImageDelete}
                className="px-6 py-2 text-sm text-primary hover:bg-red-50 rounded-full border border-primary transition-colors w-full sm:w-auto"
              >
                Delete
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2 ml-4">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="eg. John"
                  className={inputClasses}
                  value={profileData.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2 ml-4">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="eg. Doe"
                  className={inputClasses}
                  value={profileData.lastName}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm text-gray-600 mb-2 ml-4">User Name</label>
              <input
                type="text"
                name="userName"
                placeholder="eg. John Doe"
                className={inputClasses}
                value={profileData.userName}
                onChange={handleInputChange}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2 ml-4">Email Address</label>
                <div className="relative">
                  <Image
                    src="/images/email-icon.png"
                    width={20}
                    height={20}
                    alt="Email"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-50 w-4 h-4 sm:w-5 sm:h-5"
                  />
                  <input
                    type="email"
                    name="email"
                    className={inputWithIconClasses}
                    value={profileData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2 ml-4">Phone Number</label>
                <div className="relative">
                  <Image
                    src="/images/phone-icon.png"
                    width={20}
                    height={20}
                    alt="Phone"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-50 w-4 h-4 sm:w-5 sm:h-5"
                  />
                  <input
                    type="tel"
                    name="phoneNumber"
                    className={inputWithIconClasses}
                    value={profileData.phoneNumber}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-base text-gray-900 mb-4">Social Accounts</label>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-wrap gap-2 sm:gap-8">
                  {socialAccounts.map((account) => (
                    <div
                      key={account.platform}
                      className="flex items-center gap-2 px-3 sm:px-8 py-2 rounded-xl border bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
                    >
                      <Image
                        src={account.icon}
                        width={20}
                        height={20}
                        alt={account.platform}
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      />
                      <span className="text-sm sm:text-base text-gray-600">{account.username}</span>
                    </div>
                  ))}
                </div>

                <button className="inline-flex items-center px-4 py-2.5 text-sm text-white bg-primary hover:bg-primary-hover rounded-xl transition-colors">
                  <span className="mr-2">+</span>
                  Connect Account
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl px-4 sm:px-8 py-1">
            <div
              className="p-4 flex items-center justify-between cursor-pointer"
              onClick={() => setIsPasswordChangeOpen(!isPasswordChangeOpen)}
            >
              <div>
                <h3 className="text-base sm:text-lg font-medium text-gray-900">Change Password</h3>
              </div>
              <Image
                src="/images/downarrow.svg"
                width={16}
                height={16}
                alt="Toggle"
                className={`transition-transform duration-200 w-3 h-3 sm:w-4 sm:h-4 ${
                  isPasswordChangeOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {isPasswordChangeOpen && (
              <div className="px-4 py-6 space-y-4 sm:space-y-6 border-t border-gray-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm sm:text-base font-medium text-gray-900 mb-2 ml-4">
                      Current Password
                    </label>
                    <div className="relative">
                      <Image
                        src="/images/key-icon.png"
                        width={20}
                        height={20}
                        alt="Password"
                        className="absolute left-4 top-1/2 -translate-y-1/2 opacity-50 w-4 h-4 sm:w-5 sm:h-5"
                      />
                      <input
                        type="password"
                        name="currentPassword"
                        className={inputWithIconClasses}
                        value={passwordData.currentPassword}
                        onChange={handlePasswordChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm sm:text-base font-medium text-gray-900 mb-2 ml-4">
                      New Password
                    </label>
                    <div className="relative">
                      <Image
                        src="/images/key-icon.png"
                        width={20}
                        height={20}
                        alt="Password"
                        className="absolute left-4 top-1/2 -translate-y-1/2 opacity-50 w-4 h-4 sm:w-5 sm:h-5"
                      />
                      <input
                        type="password"
                        name="newPassword"
                        className={inputWithIconClasses}
                        value={passwordData.newPassword}
                        onChange={handlePasswordChange}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-900 mb-2 ml-4">
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <Image
                      src="/images/key-icon.png"
                      width={20}
                      height={20}
                      alt="Password"
                      className="absolute left-4 top-1/2 -translate-y-1/2 opacity-50 w-4 h-4 sm:w-5 sm:h-5"
                    />
                    <input
                      type="password"
                      name="confirmPassword"
                      className={inputWithIconClasses}
                      value={passwordData.confirmPassword}
                      onChange={handlePasswordChange}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-end gap-3 sm:gap-8">
            <button className="px-6 py-2.5 text-primary hover:bg-gray-50 rounded-full border border-primary transition-colors w-full sm:w-auto order-2 sm:order-1">
              Cancel
            </button>
            <button
              onClick={handleSaveChanges}
              className="px-8 py-2.5 bg-primary text-white rounded-full hover:bg-primary-hover transition-colors w-full sm:w-auto order-1 sm:order-2"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}