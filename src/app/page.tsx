export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to Portfolio App</h1>
      <div className="space-x-4">
        <a href="/add" className="text-green-500 underline">เพิ่มนักศึกษา</a>
        <a href="/teacher" className="text-green-500 underline">ดูรายชื่อนักศึกษา</a>
      </div>
    </div>
  );
}