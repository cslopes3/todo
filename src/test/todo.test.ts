// import handler from "@api/todos";
// import { createMocks, RequestMethod } from "node-mocks-http";
// import { NextApiRequest, NextApiResponse } from "next";

// describe("/api/todos API Endpoint", () => {
// function mockRequestResponse(method: RequestMethod = "GET") {
//   const { req, res }: { req: NextApiRequest; res: NextApiResponse } =
//     createMocks({ method });
//   req.headers = {
//     "Content-Type": "application/json",
//   };
//   return { req, res };
// }

// it("GET: should return a successful response", async () => {
//   const { req, res } = mockRequestResponse();

//   req.query = { page: "2" };
//   await handler(req, res);

//   expect(res.statusCode).toBe(200);
// });

// it("create a new todo", async () => {
//   const { req, res } = mockRequestResponse("POST");

//   req.body = { content: "Test todo" };

//   await handler(req, res);

//   expect(res.statusCode).toBe(201);
// });
// });
