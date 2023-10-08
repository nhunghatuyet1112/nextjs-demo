export default async function Home() {
  const res = await fetch("/test");
  const data = await res.json();
  return (
    <main>
      <div>
        id: {data.id} - name:   {data.name}
      </div>
    </main>
  )
}
