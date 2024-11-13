"use client";
import foo from "@/styles/foo.module.css";
import bar from "@/styles/bar.module.css";

export default function CssModule() {
  return (
    <>
      <h1 className={foo.foo}>CssModule Page</h1>
      <button className={foo.button}>버튼 2</button>
      <h1 className={bar.foo}>bar.woo - base</h1>
      <h1 className={bar.gie}>bar.gie - composes</h1>
    </>
  );
}
