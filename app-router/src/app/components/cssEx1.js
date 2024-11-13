"use client";
export default function CssEx() {
  return (
    <>
      <h1>CssEx1 Component</h1>
      <bbutton className="button">버튼 1</bbutton>
      <style jsx>
        {`
          .button {
            background: green;
            color: white;
          }
        `}
      </style>
    </>
  );
}
