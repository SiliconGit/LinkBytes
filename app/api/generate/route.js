import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  const body = await request.json();
  const client = await clientPromise;
  const db = client.db("LinkBytes");
  const collection = db.collection("url_collection");

  const doc = await collection.findOne({ shortUrl: body.shortUrl });
  if (doc) {
    return Response.json({
      success: false,
      error: true,
      message: "This Link Name Already Exists! Pls try a new name",
    });
  }

  collection.insertOne({
    Url: body.Url,
    shortUrl: body.shortUrl,
  });
  return Response.json({
    success: true,
    error: false,
    message: "Link Created",
  });
}
