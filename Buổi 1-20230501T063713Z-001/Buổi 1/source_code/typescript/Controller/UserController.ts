import { ServerResponse } from "http";
import { FormattedRequest, HTTP_STATUS } from "../Config/Config";
import { fakeUserData } from "../fakeData/user";

export const handleUser = (
    request: FormattedRequest,
    response: ServerResponse
) => {
    const { method } = request;
    if (method === "GET") {
        response.writeHead(HTTP_STATUS.SUCCESS, {
            "Content-Type": "application/json",
        });
        return response.end(JSON.stringify(fakeUserData));
    } else if (method === "POST") {
        const { body } = request;
        response.writeHead(HTTP_STATUS.SUCCESS, {
            "Content-Type": "application/json",
        });
        return response.end(body);
    } else if (method === "PUT") {
        const { body } = request;
        response.writeHead(HTTP_STATUS.SUCCESS, {
            "Content-Type": "application/json",
        });
        return response.end(body);
    }

    response.writeHead(HTTP_STATUS.BAD_REQUEST, {
        "Content-Type": "application/json",
    });
    return response.end("Method not support");
};
