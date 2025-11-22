import Logo from "../image/Logo.png";
export default function Footer() {
  return (
    <footer className="bg-white text-[#1A2C79] py-12 border-t">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo */}
        <div className="space-y-4">
          <img src="{Logo}" alt="" className="h-20" />

          <p className="text-sm leading-relaxed">
            Pepxin là đơn vị cung cấp dịch vụ du lịch lữ hành quốc tế, chuyên thị trường Mỹ,
            Canada, Châu Âu, Úc, Singapore - Malaysia, Thái Lan cùng như chuyên Du lịch MICE -
            Tổ chức Event - TeamBuilding - Gala Dinner.
          </p>

          <div className="text-sm font-semibold">
            CÔNG TY CỔ PHẦN DU LỊCH PEPXIN
          </div>

          <p className="text-sm">
            03 phố Phan Tây Nhạc, phường Xuân Phương, TP Hà Nội <br />
            Liên hệ: info@pepxin.com.vn - 0984.063.104
          </p>

        </div>

        <div className="space-y-4">
          <div className="font-bold text-lg pt-1">MẠNG XÃ HỘI</div>
          <div className="flex space-x-4 text-2xl">
            <i className="fab fa-facebook cursor-pointer"></i>
            <i className="fab fa-instagram cursor-pointer"></i>
            <i className="fab fa-whatsapp cursor-pointer"></i>
            <i className="fab fa-youtube cursor-pointer"></i>
            <i className="fab fa-twitter cursor-pointer"></i>
          </div>

          <h3 className="font-bold text-lg">CHẤP NHẬN THANH TOÁN</h3>

          <div className="flex flex-wrap gap-3">
            <img src="/visa.png" className="h-8" alt="visa" />
            <img src="/mastercard.png" className="h-8" alt="mastercard" />
            <img src="/vnpay.png" className="h-8" alt="vnpay" />
            <img src="/napas.png" className="h-8" alt="napas" />
          </div>
        </div>

        {/* Thông tin */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg">VỀ CHÚNG TÔI</h3>
          <ul className="space-y-2 text-sm">
            <li>Giới thiệu</li>
            <li>Liên hệ</li>
            <li>Tuyển dụng</li>
            <li>CEO Ngô Quang Trường</li>
          </ul>

          <h3 className="font-bold text-lg pt-4">SẢN PHẨM</h3>
          <ul className="space-y-2 text-sm">
            <li>Tour quốc tế</li>
            <li>Tour nội địa</li>
            <li>Tư vấn Visa</li>
            <li>Event - Teambuilding</li>
            <li>Dịch Vụ Tư Vấn Visa</li>
          </ul>
        </div>

        {/* Chính sách */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg">CHÍNH SÁCH</h3>
          <ul className="space-y-2 text-sm">
            <li>Chính Sách Dịch Vụ Trong Chuyến Đi</li>
            <li>Quy Định Thanh Toán</li>
            <li>Đặt Và Xác Nhận Dịch Vụ</li>
            <li>Quy Chế Hoạt Động</li>
            <li>Chính Sách Đổi Trả Và Hoàn Tiền</li>
            <li>Điều Khoản Sử Dụng</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
