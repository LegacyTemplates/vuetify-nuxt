/* Options:
Date: 2021-06-01 15:00:24
Version: 5.111
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://localhost:5001

//GlobalNamespace: 
//MakePropertiesOptional: False
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
//IncludeTypes: 
//ExcludeTypes: 
//DefaultImports: 
*/

// @ts-nocheck

export interface IReturn<T>
{
    createResponse(): T;
}

export interface IReturnVoid
{
    createResponse(): void;
}

export class HelloResponse
{
    public result: string|null;

    public constructor(init?: Partial<HelloResponse>) { (Object as any).assign(this, init); }
}

export class GetLinksResponse
{
    public results: { [index: string]: string; }|null;

    public constructor(init?: Partial<GetLinksResponse>) { (Object as any).assign(this, init); }
}

export class GetPostResponse
{
    public id: number|null;
    public title: string|null;
    public description: string|null;

    public constructor(init?: Partial<GetPostResponse>) { (Object as any).assign(this, init); }
}

// @Route("/hello")
// @Route("/hello/{Name}")
export class Hello implements IReturn<HelloResponse>
{
    public name: string|null;

    public constructor(init?: Partial<Hello>) { (Object as any).assign(this, init); }
    public createResponse() { return new HelloResponse(); }
    public getTypeName() { return 'Hello'; }
}

// @Route("/links")
export class GetLinks implements IReturn<GetLinksResponse>
{

    public constructor(init?: Partial<GetLinks>) { (Object as any).assign(this, init); }
    public createResponse() { return new GetLinksResponse(); }
    public getTypeName() { return 'GetLinks'; }
}

// @Route("/posts")
export class GetPost implements IReturn<GetPostResponse>
{
    public id: number|null;

    public constructor(init?: Partial<GetPost>) { (Object as any).assign(this, init); }
    public createResponse() { return new GetPostResponse(); }
    public getTypeName() { return 'GetPost'; }
}

