# **dockerController**
####**Web interface for Docker**

![Dashboard view](http://i.imgur.com/ABEBt6O.png)


#### **How to make it work ?**

    //  Install the modules
        $ npm install
    
    //  Install bower components
        $ cd src/public && bower install; cd -
    
    //  Create the log files
        $ touch logs/{node,gulp}/{err,out}.log
    
    //  Compile frontend
        $ gulp

    //  Start the backend
        $ npm start

<br/>
#### *Want to make it accessible from the interwebs ? Use [ngrok](https://ngrok.com/) once the server is started !*

    $ ngrok http 8080  //  (or whatever port you used)
