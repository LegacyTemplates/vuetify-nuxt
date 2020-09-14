/* Options:
Date: 2020-09-14 17:43:31
Version: 5.93
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
var HelloResponse = /** @class */ (function () {
    function HelloResponse(init) {
        Object.assign(this, init);
    }
    return HelloResponse;
}());
export { HelloResponse };
var GetLinksResponse = /** @class */ (function () {
    function GetLinksResponse(init) {
        Object.assign(this, init);
    }
    return GetLinksResponse;
}());
export { GetLinksResponse };
var GetPostResponse = /** @class */ (function () {
    function GetPostResponse(init) {
        Object.assign(this, init);
    }
    return GetPostResponse;
}());
export { GetPostResponse };
// @Route("/hello")
// @Route("/hello/{Name}")
var Hello = /** @class */ (function () {
    function Hello(init) {
        Object.assign(this, init);
    }
    Hello.prototype.createResponse = function () { return new HelloResponse(); };
    Hello.prototype.getTypeName = function () { return 'Hello'; };
    return Hello;
}());
export { Hello };
// @Route("/links")
var GetLinks = /** @class */ (function () {
    function GetLinks(init) {
        Object.assign(this, init);
    }
    GetLinks.prototype.createResponse = function () { return new GetLinksResponse(); };
    GetLinks.prototype.getTypeName = function () { return 'GetLinks'; };
    return GetLinks;
}());
export { GetLinks };
// @Route("/posts")
var GetPost = /** @class */ (function () {
    function GetPost(init) {
        Object.assign(this, init);
    }
    GetPost.prototype.createResponse = function () { return new GetPostResponse(); };
    GetPost.prototype.getTypeName = function () { return 'GetPost'; };
    return GetPost;
}());
export { GetPost };
