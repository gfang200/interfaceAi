import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import {
    DocumentBuilder,
    SwaggerDocumentOptions,
    SwaggerModule,
} from "@nestjs/swagger";
import { Logger } from "@nestjs/common";
import path from "path";
import * as fs from "fs";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle("Interface AI API")
        .setDescription("API for the Interface AI project")
        .build();

    // Set our api spec to generate with only methodKey names, instead of Controller_methodKey
    const options: SwaggerDocumentOptions = {
        operationIdFactory: (controllerKey: string, methodKey: string) =>
            methodKey,
    };
    const document = SwaggerModule.createDocument(app, config, options);

    SwaggerModule.setup("api", app, document);

    await app.listen(3001);
}
bootstrap();
