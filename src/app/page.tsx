import { useEffect } from "react";

export default async function Home() {
  const res = await fetch("http://3.26.131.243/test");
  const data = await res.json();
  return (
    <main>
      <div>
        id: {data.id} - name:   {data.name}
      </div>
    </main>
  )
}
