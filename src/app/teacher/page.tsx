"use client";

import { usePortfolio } from "../../context/PortfolioContext";
import Link from "next/link";

export default function Teacher() {
  const { portfolios } = usePortfolio();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">รายชื่อนักศึกษา</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-green-500 text-white">
            <th className="p-2 text-left">ชื่อ-นามสกุล</th>
            <th className="p-2 text-left">GPA</th>
            <th className="p-2 text-left">ดูรายละเอียด</th>
          </tr>
        </thead>
        <tbody>
          {portfolios.map((s) => (
            <tr key={s.id} className="border-b hover:bg-gray-50">
              <td className="p-2">{s.firstName} {s.lastName}</td>
              <td className="p-2">{s.gpa}</td>
              <td className="p-2">
                <Link href={`/detail/${s.id}`} className="text-blue-500 underline">
                  ดูรายละเอียด
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
