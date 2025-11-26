import { Toaster } from "react-hot-toast";
import { Link, Route, Routes } from "react-router-dom";
import ListPage from "./pages/List";
import AddPage from "./pages/Add";
import EditPage from "./pages/Edit";


function App() {
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB501 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/Edit" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/List" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/Add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="#" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="#" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <Routes>
        <Route path ='/List' element={<ListPage/>}/>
        <Route path ='/Add' element={<AddPage/>}/>
        <Route path ='/Edit' element={<EditPage/>}/>
      </Routes>
      <Toaster/>
    </>
  );
}

export default App;
