const env = "production";
const version = "v2";
const features = ["auth", "payment", "notification"];

// Tạo object config
const config = {
  // key động cho API
  [`api_${env}_${version}`]: `https://api.example.com/${env}/${version}`,

  // key cho từng feature
  ...features.reduce((obj, feature) => {
    obj[`feature_${feature}`] = true;
    return obj;
  }, {}),

  // method
  [`get${env}Config`]() {
    return `Đang chạy cấu hình ${env} - phiên bản ${version}`;
  },
};

console.log(config);
console.log(config[`get${env}Config`]());
