// Type definitions for QCObjects 2.4
// Project: https://qcobjects.dev
// Definitions by: Jean Machuca <https://github.com/jeanmachuca>
// Definitions: https://qcobjects.dev

import { ClientRequest } from "http";
import { Http2SecureServer, Http2Server, Http2ServerRequest, Http2Stream } from "http2";
import { QCObjectsElement, QCObjectsShadowedElement, InheritClass } from "qcobjects";
import { Stream } from "stream";

/**
 * Types for TypeScript support in QCObjects Microservices
 */

declare namespace api {
    class Route {
        name:string;
        description:string;
        microservice:string;
        redirect_to?:string;
        responseHeaders:any;
        cors:any;
    }

    class BackendMicroservice extends InheritClass{
        domain:string;
        body:QCObjectsElement | QCObjectsShadowedElement | HTMLElement | string | undefined;
        basePath:string;
        route:Route;
        projectPath?:string;
        stream?:Http2Stream | Stream;
        request?:Http2ServerRequest | ClientRequest;
        routeParams?:any;
        server: Http2SecureServer | Http2Server;

        cors():void;
        head(formData?:object|string):void;
        get(formData?:object|string):void;
        post(formData?:object|string):void;
        put(formData?:object|string):void;
        delete(formData?:object|string):void;
        connect(formData?:object|string):void;
        options(formData?:object|string):void;
        trace(formData?:object|string):void;
        patch(formData?:object|string):void;
        finishWithBody(stream?:Http2Stream | Stream):void;
        done():void;

    }

}

export = api;