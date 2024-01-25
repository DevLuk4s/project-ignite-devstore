export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return (
    <div>
      <p>Hello World</p>
    </div>
  )
}
