import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"

export default  async function Page() {
  const data =  await fetch('http://localhost:5000/transactions')
  const posts =  await data.json()
  return (
    <ul>{posts.map((post) => (
      <li key={post.id}>{post.type},{post.amount},{post.uid},</li>
      ))}
    </ul>
  )};
