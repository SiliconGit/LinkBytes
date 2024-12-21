import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";
export default async function Page({ params }) {
  const shorturl = (await params).shortUrl;
  const client = await clientPromise;
  const db = client.db("LinkBytes");
  const collection = db.collection("url_collection");

  const doc = await collection.findOne({ shortUrl: shorturl });
  if (doc) {
    redirect(doc.Url);
  } else {
    redirect(`${process.env.NEXT_PUBLIC_HOST}`);
  }

  return <div>My Post: {Url}</div>;
}
