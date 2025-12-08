import { Toaster } from "react-hot-toast";
import { Link, Route, Routes, useNavigate} from "react-router-dom";
import ListPage from "./pages/List";
import AddPage from "./pages/Add";
import EditPage from "./pages/Edit";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import AdminLayout from "./layout/AdminLayout";

function App() {
  const navigate = useNavigate();

  const handleLogout = ()=>{
    localStorage.removeItem('token');
    navigate('/login')
  };

  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB501 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/list" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/login" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="/register" className="hover:text-gray-200">
              Đăng ký
            </Link>
            <button
            onClick={handleLogout}
            className="px-3 py-1 text-white rounded hover:text-gray-200"
            >
              Đăng xuất
            </button>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <Routes element={<AdminLayout />}>
        <Route path="/list" element={<ListPage/>}/>
        <Route path="/add" element={<AddPage/>}/>
        <Route path="/edit/:id" element={<EditPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>

      <Toaster />
    </>
  );
}

export default App;
