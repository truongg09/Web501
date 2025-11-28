import {useState, useEffect} from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {useNavigate, useParams} from "react-router-dom";

function EditPage() {
  const navigate = useNavigate();
  const {id} = useParams();

  const [form, setForm] = useState({
    name: "",
    destination: "",
    duration: "",
    price: "",
    image: "",
    description: "",
    available: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/tours/${id}`);
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
      await axios.put(`http://localhost:3001/tours/${id}`, {
        ...form,
        price: Number(form.price),
        available: Number(form.available),
      });

      toast.success("Cập nhật Tour thành công!");
      navigate("/list");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="p-10 w-180">
      <h1 className="text-2xl font-semibold mb-6">Chỉnh sửa</h1>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block font-medium mb-1">Tên Tour</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Điểm đến</label>
          <input
            type="text"
            name="destination"
            value={form.destination}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Thời gian Tour</label>
          <input
            type="text"
            name="duration"
            value={form.duration}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Giá Tour</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Ảnh</label>
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Mô tả</label>
          <input
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Số lượng</label>
          <input
            type="number"
            name="available"
            value={form.available}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Cập nhật
        </button>
      </form>
    </div>
  );
}

export default EditPage;
