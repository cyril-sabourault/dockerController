# **dockerController**
####**Web interface for Docker**

![Dashboard view](http://i.imgur.com/ABEBt6O.png)


#### **How to make it work ?**

    //  Install the modules
        $ npm install
    
    //  Create the log files
        $ touch logs/{node,gulp}/{err,out}.log
    
    //  Install bower components, compile frontend
        $ cd src/public && bower install && gulp
    
    //  Start the backend
        $ npm start

<br/>
#### *Want to make it accessible from the interwebs ? Use [ngrok](https://ngrok.com/) once the server is started !*

    $ ngrok http 8080  //  (or whatever port you used)
