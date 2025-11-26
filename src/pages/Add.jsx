import { useEffect, useState } from "react";
import axios from 'axios'
function AddPage() {
  
  return (
    <div className="p-10 w-180">
      <h1 className="text-2xl font-semibold mb-6">Thêm mới</h1>

      <form className="space-y-4">
        {/* Text input */}
        <div>
          <label htmlFor="text" className="block font-medium mb-1">
            Tên Tour
          </label>
          <input
            type="text"
            id="name"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="text" className="block font-medium mb-1">
            Điểm đến
          </label>
          <input
            type="text"
            id="destination"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="text" className="block font-medium mb-1">
            Thời gian Tour
          </label>
          <input
            type="text"
            id="duration"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="text" className="block font-medium mb-1">
            Giá Tour
          </label>
          <input
            type="text"
            id="price"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="text" className="block font-medium mb-1">
            Ảnh
          </label>
          <input
            type="text"
            id="image"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="text" className="block font-medium mb-1">
            Mô tả
          </label>
          <input
            type="text"
            id="description"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="text" className="block font-medium mb-1">
            Số lượng
          </label>
          <input
            type="number"
            id="available"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Checkbox list */}
        <div>
          <label className="block font-medium mb-1">Trạng thái</label>
          <div className="flex space-x-2">
            <div className="flex items-center space-x-1 mb-2">
              <input
                type="checkbox"
                id="active"
                className="h-4 w-4 text-blue-600 rounded border-gray-300"
              />
              <label htmlFor="flexCheck1" className="text-gray-700">
                True
              </label>
            </div>
            <div className="flex items-center space-x-1 mb-2">
              <input
                type="checkbox"
                id="active"
                className="h-4 w-4 text-blue-600 rounded border-gray-300"
              />
              <label htmlFor="flexCheck1" className="text-gray-700">
                False
              </label>
            </div>
          </div>
        </div>

        {/* Select */}
        <div>
          <label htmlFor="selectOption" className="block font-medium mb-1">
            Danh mục
          </label>
          <select
            id="category"
            className="w-full border rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="1">Tour nội địa</option>
            <option value="2">Tour quốc tế</option>
          </select>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddPage;
