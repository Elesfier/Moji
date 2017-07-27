
import * as express from 'express';

//[FIXME]: is there a better solution?
declare module "express"
{
    export interface Response
    {
        handler (params: any): any;
    }
}
