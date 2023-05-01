import { IncomingMessage, ServerResponse } from "http";
import { forWardRouter } from "./route";

export default function (request: IncomingMessage, response: ServerResponse) {
    let chunks: Buffer[] = [];
    request
        .on("error", (err) => {
            console.error(err);
        })
        .on("data", (chunk) => {
            chunks.push(chunk);
        })
        .on("end", () => {
            const body = Buffer.concat(chunks).toString();
            return forWardRouter({ ...request, body }, response);
        });
}
