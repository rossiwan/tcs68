"use client";

import { useState } from "react";
import { usePortfolio } from "../../context/PortfolioContext";

export default function AddPortfolio() {
  const { addPortfolio } = usePortfolio();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    school: "",
    gpa: "",
    skills: "",
    reason: "",
    major: "",
    university: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName) return alert("กรุณากรอกชื่อและนามสกุล");

    addPortfolio({
      id: Date.now(),
      ...form,
      gpa: Number(form.gpa),
    });
    alert("เพิ่ม Portfolio เรียบร้อย");
    setForm({
      firstName: "",
      lastName: "",
      address: "",
      phone: "",
      school: "",
      gpa: "",
      skills: "",
      reason: "",
      major: "",
      university: "",
    });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow mt-6">
      <h1 className="text-2xl font-bold mb-4">เพิ่ม Portfolio</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {Object.keys(form).map((key) => (
          <input
            key={key}
            name={key}
            placeholder={key}
            value={(form as any)[key]}
            onChange={handleChange}
          />
        ))}
        <button type="submit" className="bg-green-500 text-white p-2 rounded mt-2">
          บันทึก
        </button>
      </form>
    </div>
  );
}
