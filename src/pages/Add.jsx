import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function AddPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    destination: "",
    duration: "",
    price: "",
    image: "",
    description: "",
    available: "",
    active: true,
    category: "1"
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;

    if (type === "checkbox") {
      setForm({ ...form, active: checked });
    } else {
      setForm({ ...form, [id]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/tours", {
        ...form,
        price: Number(form.price),
        available: Number(form.available),
      });

      toast.success("Thêm Tour thành công!");
      navigate("/list");
    } catch (error) {
      toast.error("Lỗi khi thêm dữ liệu!");
      console.log(error);
    }
  };

  return (
    <div className="p-10 w-180">
      <h1 className="text-2xl font-semibold mb-6">Thêm mới</h1>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block font-medium mb-1">Tên Tour</label>
          <input
            type="text"
            id="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Điểm đến</label>
          <input
            type="text"
            id="destination"
            value={form.destination}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Thời gian Tour</label>
          <input
            type="text"
            id="duration"
            value={form.duration}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Giá Tour</label>
          <input
            type="number"
            id="price"
            value={form.price}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Ảnh</label>
          <input
            type="text"
            id="image"
            value={form.image}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Mô tả</label>
          <input
            type="text"
            id="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Số lượng</label>
          <input
            type="number"
            id="available"
            value={form.available}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Trạng thái</label>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="active"
              checked={form.active}
              onChange={handleChange}
              className="h-4 w-4"
            />
            <span>{form.active ? "Hoạt động" : "Không hoạt động"}</span>
          </div>
        </div>
        <div>
          <label className="block font-medium mb-1">Danh mục</label>
          <select
            id="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="1">Tour nội địa</option>
            <option value="2">Tour quốc tế</option>
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
export default AddPage;
