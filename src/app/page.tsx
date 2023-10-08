import { useEffect, useState } from "react"

export default async function Home() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://3.26.24.106/test')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
  return (
    <main>
      <div>
        {data}
      </div>
    </main>
  )
}
