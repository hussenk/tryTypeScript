import { Request, Response } from "express";
import logger from "../utils/logger";

export function createUserHandler(req: Request, res: Response) {
    try {
        // const user = await // service
    } catch (e: any) {
        logger.error(e);
        return res.sendStatus(409).send(e.message)
    }

}