'use client';

import Link from 'next/link';
import { usePortfolio } from '../../context/PortfolioContext';

export default function Teacher() {
  const { portfolios } = usePortfolio();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">รายชื่อนักศึกษาและ GPA</h1>
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-green-500 text-white">
              <th className="p-3 text-left">ชื่อ-นามสกุล</th>
              <th className="p-3 text-left">GPA</th>
              <th className="p-3 text-left">ดูรายละเอียด</th>
            </tr>
          </thead>
          <tbody>
            {portfolios.map((student) => (
              <tr key={student.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{`${student.firstName} ${student.lastName}`}</td>
                <td className="p-3">{student.gpa}</td>
                <td className="p-3">
                  <Link href={`/detail/${student.id}`} className="text-green-500 hover:underline">
                    ดูรายละเอียด
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
