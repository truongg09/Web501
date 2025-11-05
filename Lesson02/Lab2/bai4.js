const product = {
    name: "iPhone 15",
    price: 20000000,
    discount: 10,
    inStock: true,
  };
  
  // Tính giá sau giảm
  const finalPrice = product.price * (1 - product.discount / 100);
  
  // Tạo template HTML
  const productCard = `
    Tên sản phẩm: ${product.name}
    Giá khuyến mãi: ${finalPrice.toLocaleString()} VNĐ
    Tình trạng: ${product.inStock? 'Còn hàng':'Hết hàng'}
  `;
  
  console.log(productCard);