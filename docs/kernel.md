<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [constructor](#constructor)
-   [queue](#queue)
-   [run](#run)
-   [incrementTicks](#incrementticks)
-   [createMessage](#createmessage)
-   [send](#send)

## constructor

[kernel.js:15-28](https://github.com/primea/js-primea-hypervisor/blob/317d79e49cb56dd81cb9c94072cd24ad6a825757/kernel.js#L15-L28 "Source code on GitHub")

the Kernel manages the varous message passing functions and provides
an interface for the containers to use

**Parameters**

-   `opts` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 
    -   `opts.id` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the UUID of the Kernel
    -   `opts.state` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the state of the container
    -   `opts.hypervisor` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 
    -   `opts.container` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the container constuctor and argments

## queue

[kernel.js:35-48](https://github.com/primea/js-primea-hypervisor/blob/317d79e49cb56dd81cb9c94072cd24ad6a825757/kernel.js#L35-L48 "Source code on GitHub")

adds a message to this containers message queue

**Parameters**

-   `portName` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `message` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## run

[kernel.js:78-98](https://github.com/primea/js-primea-hypervisor/blob/317d79e49cb56dd81cb9c94072cd24ad6a825757/kernel.js#L78-L98 "Source code on GitHub")

run the kernels code with a given enviroment

**Parameters**

-   `message` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the message to run
-   `init` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** whether or not to run the intialization routine (optional, default `false`)

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** 

## incrementTicks

[kernel.js:104-107](https://github.com/primea/js-primea-hypervisor/blob/317d79e49cb56dd81cb9c94072cd24ad6a825757/kernel.js#L104-L107 "Source code on GitHub")

updates the number of ticks that the container has run

**Parameters**

-   `count` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** the number of ticks to add

## createMessage

[kernel.js:113-121](https://github.com/primea/js-primea-hypervisor/blob/317d79e49cb56dd81cb9c94072cd24ad6a825757/kernel.js#L113-L121 "Source code on GitHub")

creates a new message

**Parameters**

-   `opts`  
-   `data` **any** 

## send

[kernel.js:128-145](https://github.com/primea/js-primea-hypervisor/blob/317d79e49cb56dd81cb9c94072cd24ad6a825757/kernel.js#L128-L145 "Source code on GitHub")

sends a message to a given port

**Parameters**

-   `port`  
-   `message` **Message** the message
-   `portRef` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the port