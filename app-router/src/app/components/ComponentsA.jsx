import ComponentB from "./ComponentsB";

export default function ComponentA({ foo }) {
  return (
    <>
      <h1>ComponentA</h1>
      <ComponentB />
    </>
  );
}
