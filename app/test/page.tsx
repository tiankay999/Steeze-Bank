import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"

export default async function Page() {
  const data = await fetch('http://localhost:5005/user')
  const posts = await data.json()
  return (
    <ul>
      {posts.map((post: { id: Key | null | undefined; Name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined }) => (
        <li key={post.id}>{post.Name}</li>
      ))}
    </ul>
  )
}