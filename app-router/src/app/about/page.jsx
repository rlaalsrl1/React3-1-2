import Image from "next/image";
import foo from "/kmk_git/React3-1-2/app-router/public/images/flower-9082617_1280.jpg";

export default function About() {
  return (
    <>
      <h1>About</h1>
      <h3>About...</h3>
      <Image
        src="/kmk_git/React3-1-2/app-router/public/images/robin-9094847_1280.jpg"
        alt="robin"
        width={300}
        height={500}
      />
      <Image src={foo} alt="flower" width={600} height={500} />
      {/* <Image src={foo} alt="flower" layout="fill"  /> */}
      {/*외부 서버 이미지 출력 */}
      <Image
        src="https://cdn.pixabay.com/photo/2023/10/30/01/31/duck-8351436_640.jpg"
        alt="bird-640"
        width={300}
        height={600}
      />
      <Image
        src="https://cdn.pixabay.com/photo/2024/04/03/18/07/fish-8673535_1280.jpg"
        alt="fish-1280"
        width={300}
        height={600}
      />
    </>
  );
}
