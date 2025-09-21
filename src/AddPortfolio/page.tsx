'use client';

import { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { useRouter } from 'next/navigation';

export default function AddPortfolio() {
  const { addPortfolio } = usePortfolio();
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: '', lastName: '', address: '', phone: '',
    school: '', gpa: '', skills: '', reason: '',
    major: '', university: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name as keyof typeof form;
    setForm({ ...form, [name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addPortfolio({ id: Date.now(), ...form });
    setForm({
      firstName: '', lastName: '', address: '', phone: '',
      school: '', gpa: '', skills: '', reason: '',
      major: '', university: ''
    });
    router.push('/teacher'); // redirect ไปหน้าอาจารย์
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">เพิ่ม Portfolio นักศึกษา</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded shadow flex flex-col gap-4">
        {(Object.keys(form) as (keyof typeof form)[]).map((key) => (
          <input
            key={key}
            name={key}
            placeholder={key}
            value={form[key]}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        ))}
        <button type="submit" className="bg-green-500 text-white p-2 rounded mt-2">
          บันทึก
        </button>
      </form>
    </div>
  );
}
