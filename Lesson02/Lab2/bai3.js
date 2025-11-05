const user = {
    firstName: "Nguyen",
    lastName: "Van A",
    product: "Laptop Dell XPS",
    price: 25000000,
    orderDate: "2024-01-15",
  };
  
  // Tạo template string cho email
  const emailTemplate = `
    Xin chào ${user.firstName} ${user.lastName}
    Cảm ơn bạn đã mua hàng tại cửa hàng của chúng tôi!

    Thông tin sản phẩm:
    Tên sản phẩm: ${user.product}
    Giá: ${user.price.toLocaleString()} VNĐ
    Ngày đặt hàng: ${user.orderDate}

    Hàng sẽ được giao đến bạn trong thời gian sớm nhất
    Trân trọng!
  `;
  
  console.log(emailTemplate);