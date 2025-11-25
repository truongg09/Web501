import { useEffect, useState } from "react";

function List() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tours")
      .then((res) => res.json())
      .then((data) => setTours(data))
      .catch((err) => console.log("Lỗi API:", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách Tour</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border text-center">id</th>
              <th className="px-4 py-2 border text-center">Tên Tour</th>
              <th className="px-4 py-2 border text-center">Địa điểm</th>
              <th className="px-4 py-2 border text-center">Thời gian Tour</th>
              <th className="px-4 py-2 border text-center">Giá</th>
              <th className="px-4 py-2 border text-center">Thumbnail</th>
              <th className="px-4 py-2 border text-center">Mô tả</th>
              <th className="px-4 py-2 border text-center">Số lượng Tour</th>
              <th className="px-4 py-2 border text-center">Hành động</th>
            </tr>
          </thead>

          <tbody>
            {tours.map((tour) => (
              <tr key={tour.id}>
                <td className="px-4 py-2 border text-center">{tour.id}</td>
                <td className="px-4 py-2 border">{tour.name}</td>
                <td className="px-4 py-2 border">{tour.destination}</td>
                <td className="px-4 py-2 border">{tour.duration}</td>
                <td className="px-4 py-2 border font-bold text-red-600">
                  {tour.price.toLocaleString()} đ
                </td>
                <td className="px-4 py-2 border">
                  <img
                    src={tour.image}
                    className="w-20 h-14"
                  />
                </td>
                <td className="px-4 py-2 border">{tour.description}</td>
                <td className="px-4 py-2 border">{tour.available}</td>
                <td className="px-4 py-2 border text-center">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded ">Sửa</button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded">Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default List;
