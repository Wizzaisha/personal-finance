export default function getBackgroundImage(srcSet = "") {
  const imageSet = srcSet
    .split(", ")
    .map((str) => {
      const [url, dpi] = str.split(" ");
      return `url("${url}") ${dpi}`;
    })
    .join(", ");

  console.log("1", srcSet);

  console.log("2", imageSet);

  return `image-set(${imageSet})`;
}
