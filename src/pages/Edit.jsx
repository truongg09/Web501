import {useState, useEffect} from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {useNavigate, useParams} from "react-router-dom";

function EditPage() {
  const navigate = useNavigate();
  const {id} = useParams();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    major: "Lập trình Web"
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/students/${id}`);
        setForm(res.data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/students/${id}`, {
        ...form
      });
      toast.success("Thêm Sinh viên thành công!");
      navigate("/list");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="p-10 w-180">
      <h1 className="text-2xl font-semibold mb-6">Cập nhật</h1>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block font-medium mb-1">Tên Sinh viên</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">SĐT</label>
          <input
            type="number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Tuổi</label>
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Chuyên ngành</label>
          <select
            name="major"
            value={form.major}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="Lập trình Web">Lập trình Web</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Thiết kế đồ họa">Thiết kế đồ họa</option>
          </select>
        </div>

        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default EditPage;
