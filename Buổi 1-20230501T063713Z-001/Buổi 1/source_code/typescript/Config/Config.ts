import { IncomingMessage } from "http";

export const HTTP_STATUS = {
    SUCCESS: 200,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,
};

export interface FormattedRequest extends IncomingMessage {
    body: string;
}
