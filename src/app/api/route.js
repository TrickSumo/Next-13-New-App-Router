// curl http://localhost:3000/api?name=Rishi
export async function GET(req) {
  console.log("get request");
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");
  return new Response(JSON.stringify({ message: `Hello ${name}!` }), {
    status: 200,
  });
}

//  curl -X POST -H "Content-Type: application/json" -d '{"name": "John", "age": 30}'  http://localhost:3000/api
export async function POST(req) {
  const body = await req.json(); // we can't use req.body here. Dirextly access body using await req.json()
  console.log("post request payload is ", body);
  return new Response(
    JSON.stringify({ message: `User ${body.name} created successfully` }),
    {
      status: 201,
    }
  );
}
