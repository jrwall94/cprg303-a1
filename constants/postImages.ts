// File Location: constants/postImages.ts
// data 里只有 id；用 id 选对应本地图片。require 必须写死文件名。

export function getPostImage(id: string) {
  if (id === "1") {
    return require("../assets/images/2024090701.jpg");
  }
  if (id === "2") {
    return require("../assets/images/2024090702.jpg");
  }
  if (id === "3") {
    return require("../assets/images/2024090704.jpg");
  }
  if (id === "4") {
    return require("../assets/images/2024090705.jpg");
  }
  if (id === "5") {
    return require("../assets/images/2024090706.jpg");
  }
  if (id === "6") {
    return require("../assets/images/2024090707.jpg");
  }
  if (id === "7") {
    return require("../assets/images/2024090708.jpg");
  }
  return require("../assets/images/post.jpg");
}
