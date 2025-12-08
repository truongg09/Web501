import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ListPage() {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Bạn chưa đăng nhập!");
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    const getStudents = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/students");
        console.log(data);
        setStudents(data);
      } catch (error) {
        console.log(error);
      }
    };
    getStudents();
  }, []);

  const deleteStudent = async (id) => {
    try {
      if (!confirm("Bạn có chắc chắn muốn xóa Sinh viên này không?")) return;
      await axios.delete(`http://localhost:3001/students/${id}`);
      setStudents(students.filter((student) => student.id !== id));
      toast.success("Xóa thành công!");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách sinh viên</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left">
                STT
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Tên sinh viên
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Tuổi
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                SĐT
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Email
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Chuyên ngành
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Hành động
              </th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td className="px-4 py-2 border border-gray-300 text-center">
                  {student.id}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {student.name}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {student.age}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {student.phone}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {student.email}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {student.major}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <Link
                    to={`/edit/${student.id}`}
                    className="px-3 py-1 bg-blue-500 text-white rounded inline-block"
                  >
                    Sửa
                  </Link>
                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded"
                    onClick={() => deleteStudent(student.id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListPage;
