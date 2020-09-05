(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{144:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var a=r(2),n=r(6),o=(r(0),r(199)),i={title:"Introduction",description:"A set of utilities to build your JavaScript GraphQL schema in a concise and powerful way."},c={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"A set of utilities to build your JavaScript GraphQL schema in a concise and powerful way.",source:"@site/docs/introduction.md",slug:"/introduction",permalink:"/docs/introduction",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/introduction.md",version:"current",sidebar:"someSidebar",next:{title:"Generating an executable schema",permalink:"/docs/generate-schema"}},s=[{value:"Using GraphQL with HTTP",id:"using-graphql-with-http",children:[]},{value:"The GraphQL-first philosophy",id:"the-graphql-first-philosophy",children:[]}],p={rightToc:s};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"GraphQL Tools is an npm package and an opinionated structure for how to build a GraphQL schema and resolvers in JavaScript, following the GraphQL-first development workflow."),Object(o.b)("p",null,"Functions in the ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-tools")," packages are not just useful for building servers. They can also be used in the browser, for example to mock a backend during development or testing."),Object(o.b)("p",null,"Even though we recommend a specific way of building GraphQL servers, you can use these tools even if you don't follow our structure; they work with any GraphQL-JS schema, and each tool can be useful on its own."),Object(o.b)("h2",{id:"using-graphql-with-http"},"Using GraphQL with HTTP"),Object(o.b)("p",null,"If you want to bind your JavaScript GraphQL schema to an HTTP server, you can use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/graphql/express-graphql"}),Object(o.b)("inlineCode",{parentName:"a"},"express-graphql")),"."),Object(o.b)("p",null,"You can develop your Javascript based GraphQL API with ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-tools")," and ",Object(o.b)("inlineCode",{parentName:"p"},"express-graphql")," together: One to write the schema and resolver code, and the other to connect it to a web server."),Object(o.b)("h2",{id:"the-graphql-first-philosophy"},"The GraphQL-first philosophy"),Object(o.b)("p",null,"This package enables a specific workflow for developing a GraphQL server, where the GraphQL schema is the first thing you design, and acts as the contract between your frontend and backend. It's not necessarily for everyone, but it can be a great way to get a server up and running with a very clear separation of concerns. These concerns are aligned with Facebook's direction about the best way to use GraphQL, and our own findings after thinking about the best way to architect a JavaScript GraphQL API codebase."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Use the GraphQL schema language.")," The ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"http://graphql.org/learn/schema/"}),"official GraphQL documentation")," explains schema concepts using a concise and easy to read language. The ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"http://graphql.org/graphql-js/"}),"getting started guide")," for GraphQL.js now uses the schema to introduce new developers to GraphQL. ",Object(o.b)("inlineCode",{parentName:"li"},"graphql-tools")," enables you to use this language alongside with all of the features of GraphQL including resolvers, interfaces, custom scalars, and more, so that you can have a seamless flow from design to mocking to implementation. For a more complete overview of the benefits, check out Nick Nance's talk, ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=XOM8J4LaYFg"}),"Managing GraphQL Development at Scale"),"."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Separate business logic from the schema.")," As Dan Schafer covered in his talk, ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://medium.com/apollo-stack/graphql-at-facebook-by-dan-schafer-38d65ef075af#.jduhdwudr"}),"GraphQL at Facebook"),", it's a good idea to treat GraphQL as a thin API and routing layer. This means that your actual business logic, permissions, and other concerns should not be part of your GraphQL schema. For large apps, we suggest splitting your GraphQL server code into 4 components: Schema, Resolvers, Models, and Connectors, which each handle a specific part of the work."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Use standard libraries for auth and other special concerns.")," There's no need to reinvent the login process in GraphQL. Every server framework already has a wealth of technologies for auth, file uploads, and more. It's prudent to use those standard solutions even if your data is being served through a GraphQL endpoint, and it is okay to have non-GraphQL endpoints on your server when it's the most practical solution.")))}l.isMDXComponent=!0},199:function(e,t,r){"use strict";r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return b}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},h=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(r),d=a,b=h["".concat(i,".").concat(d)]||h[d]||u[d]||o;return r?n.a.createElement(b,c({ref:t},p,{components:r})):n.a.createElement(b,c({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);