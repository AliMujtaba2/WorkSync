"use client";

import React, { useState } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const styles = `
  .page-center {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card {
    width: 100%;
    max-width: 400px;
    padding: 48px 32px;
    display: flex;
    flex-direction: column;
    min-height: 850px;
  }

  .card-header {
    margin-bottom: 40px;
    margin-top: 48px;
  }

  .card-title {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
    color: #ffffff;
    margin-bottom: 24px;
    border-bottom: 1px solid #334155;
    display: inline-block;
    padding-bottom: 8px;
  }

  .card-subtitle {
    color: #cbd5e1;
    font-size: 0.875rem;
    margin: 0;
  }

  .card-subtitle a {
    font-weight: 700;
    color: #ffffff;
    text-decoration: underline;
    transition: color 0.2s;
  }

  .card-subtitle a:hover {
    color: #facc15;
  }

  .account-form {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .form-field {
    position: relative;
    margin-top: 24px;
    width: 100%;
  }

  .form-field label {
    position: absolute;
    top: -12px;
    left: 16px;
    background-color: #0a0f1c;
    padding: 0 8px;
    font-size: 0.875rem;
    font-weight: 700;
    color: #ffffff;
    z-index: 10;
  }

  .form-field input[type="text"],
  .form-field input[type="email"],
  .form-field input[type="password"] {
    width: 100%;
    border-radius: 1.25rem;
    border: 1px solid #475569;
    background: transparent;
    padding: 16px;
    color: #ffffff;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.2s;
    box-sizing: border-box;
  }

  .form-field input::placeholder {
    color: #475569;
  }

  .form-field input:focus {
    border-color: #eab308;
  }

  .password-toggle {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    color: #64748b;
    display: flex;
    align-items: center;
    transition: color 0.2s;
    padding: 0;
  }

  .password-toggle:hover {
    color: #cbd5e1;
  }

  .form-bottom {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: auto;
    padding-top: 48px;
    padding-bottom: 16px;
  }

  .terms-wrapper {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    max-width: 75%;
  }

  .checkbox-container {
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 4px;
    flex-shrink: 0;
  }

  .checkbox-container input[type="checkbox"] {
    height: 20px;
    width: 20px;
    appearance: none;
    -webkit-appearance: none;
    border-radius: 4px;
    border: 1px solid #94a3b8;
    background: transparent;
    cursor: pointer;
  }

  .custom-check {
    position: absolute;
    left: 0;
    top: 0;
    height: 20px;
    width: 20px;
    display: none;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    border: 1px solid #cbd5e1;
  }

  .checkbox-container input[type="checkbox"]:checked ~ .custom-check {
    display: flex;
  }

  .custom-check svg {
    height: 12px;
    width: 12px;
    color: #ffffff;
  }

  .terms-label {
    font-size: 0.75rem;
    color: #cbd5e1;
    cursor: pointer;
    line-height: 1.6;
  }

  .terms-label a {
    text-decoration: underline;
    color: inherit;
    transition: color 0.2s;
  }

  .terms-label a:hover {
    color: #ffffff;
  }

  .submit-btn {
    height: 64px;
    width: 64px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: linear-gradient(135deg, #fde047, #a16207);
    color: #000000;
    border: none;
    cursor: pointer;
    box-shadow: 0 10px 25px rgba(234, 179, 8, 0.2);
    transition: transform 0.2s;
  }

  .submit-btn:hover {
    transform: scale(1.05);
  }

  .submit-btn:active {
    transform: scale(0.95);
  }
`;

const FormInput = ({
  label,
  type,
  placeholder,
  isPassword = false,
}: {
  label: string;
  type: string;
  placeholder: string;
  isPassword?: boolean;
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="form-field">
      <label>{label}</label>
      <input type={inputType} placeholder={placeholder} />
      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="password-toggle"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      )}
    </div>
  );
};

export default function CreateAccount() {
  const router = useRouter();
  return (
    <>
      <style>{styles}</style>

      <div className="page-center">
        <div className="card">
          {/* Header */}
          <div className="card-header">
            <h1 className="card-title">
              Create An<br />Account
            </h1>
            <p className="card-subtitle">
              Already have an account?{" "}
              <Link href="/auth/Login">Log In</Link>
            </p>
          </div>

          {/* Form */}
          <form className="account-form">
            <FormInput label="Name" type="text" placeholder="Enter Your Name" />
            <FormInput label="E-Mail" type="email" placeholder="Enter Your E-mail" />
            <FormInput label="Password" type="password" placeholder="Enter Your Password" isPassword={true} />
            <FormInput label="Confirm Password" type="password" placeholder="Enter Confirm Password" isPassword={true} />

            {/* Bottom Row */}
            <div className="form-bottom">
              <div className="terms-wrapper">
                <div className="checkbox-container">
                  <input type="checkbox" id="terms" />
                  <div className="custom-check">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <label htmlFor="terms" className="terms-label">
                  I have read and agree to{" "}
                  <Link href="/terms">Terms &amp; Conditions</Link>{" "}
                  of the Company.
                </label>
              </div>

              <button
                type="button"
                className="submit-btn"
                onClick={() => router.push("/auth/Login")}
              >
                <ArrowRight size={28} strokeWidth={2.5} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}