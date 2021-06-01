using System;
using System.Collections.Generic;
using ServiceStack;
using MyApp.ServiceModel;

namespace MyApp.ServiceInterface
{
    public class MyServices : Service
    {
        public object Any(Hello request)
        {
            return new HelloResponse { Result = $"Hello, {request.Name}!" };
        }

        public object Any(GetLinks request) => new GetLinksResponse 
        {
            Results = new Dictionary<string, string> 
            {
                {"servicestack.net", "https://servicestack.net"},
                {"Documentation", "https://docs.servicestack.net"},
                {"Customer Forums", "https://forums.servicestack.net"},
                {"Issue Tracker", "https://github.com/ServiceStack/Issues"},
                {"StackOverflow", "http://stackoverflow.com/search?q=servicestack"},
                {"Feature Requests", "http://servicestack.uservoice.com/forums/176786-feature-requests"},
                {".NET 5 Live Demos", "https://github.com/NetCoreApps/LiveDemos"},
                {".NET Framework Demos", "https://github.com/ServiceStackApps/LiveDemos"},
                {"Instant Client Apps", "https://apps.servicestack.net"},
                {"What's New", "https://servicestack.net/whatsnew"},
            }
        };

        public object Any(GetPost request) => new GetPostResponse 
        {
            Id = request.Id,
            Title = $"Title {request.Id}",
            Description = $"Post Description {request.Id}",
        };
    }
}