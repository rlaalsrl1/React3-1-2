"use client";
export default function CssEx2() {
  return (
    <>
      <h1>CssEx2 Page</h1>
      <bbutton className="button">버튼 2</bbutton>
      <style jsx>
        {`
          .button {
            background: blue;
            color: yellow;
          }
        `}
      </style>
    </>
  );
}
