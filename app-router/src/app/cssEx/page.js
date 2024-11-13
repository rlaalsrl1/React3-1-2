"use client";
import CssEx1 from "@/app/components/cssEx1";
import CssEx2 from "@/app/components/cssEx2";

export default function CssEx() {
  return (
    <>
      <h1>CssEx Page</h1>
      <bbutton className="button">버튼 1</bbutton>
      <style jsx>
        {`
          .button {
            background: green;
            color: white;
          }
        `}
      </style>
      <CssEx1></CssEx1>
      <CssEx2></CssEx2>
    </>
  );
}
