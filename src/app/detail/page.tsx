"use client";

import { useParams } from "next/navigation";
import { usePortfolio } from "../../context/PortfolioContext";

export default function Detail() {
  const { portfolios } = usePortfolio();
  const params = useParams();
  const id = Number(params.id);
  const student = portfolios.find((p) => p.id === id);

  if (!student) return <div className="p-6">ไม่พบข้อมูลนักศึกษา</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow mt-6">
      <h1 className="text-2xl font-bold mb-4">{student.firstName} {student.lastName}</h1>
      <ul className="space-y-2">
        <li><strong>ที่อยู่:</strong> {student.address}</li>
        <li><strong>โทรศัพท์:</strong> {student.phone}</li>
        <li><strong>โรงเรียน:</strong> {student.school}</li>
        <li><strong>GPA:</strong> {student.gpa}</li>
        <li><strong>ความสามารถพิเศษ:</strong> {student.skills}</li>
        <li><strong>เหตุผลในการสมัคร:</strong> {student.reason}</li>
        <li><strong>สาขาที่เลือก:</strong> {student.major}</li>
        <li><strong>มหาวิทยาลัย:</strong> {student.university}</li>
      </ul>
    </div>
  );
}
