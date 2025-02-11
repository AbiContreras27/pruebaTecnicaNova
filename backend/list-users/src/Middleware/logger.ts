import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";


@Injectable()

export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log(`Estas ejecutando en la ruta ${req.url} en el método ${req.method}`);
        next()
    }
}

export function LoggerGlobal(req: Request, res: Response, next: NextFunction) {
    const currentDateTime = new Date()

    console.log(`Estas ejecutando en la ruta ${req.url} con el método ${req.method} llamado el: ${currentDateTime.toLocaleString()}`)
    next()
}