# Entry 4
##### 3/19/23

### Context/EDP
I'm in the **EDP of plan and create**. My first step of working on the year long project is by creating a [MVP](https://docs.google.com/document/d/1RX5Jm-mMifLN67XyywR_qx98yzZfNcYB55YWVhljAPg/edit) plan, it will help me later on by spreading out my work. The MVP plan consist of my timeline of which part/section of work I need to work on a certain time period. For this year-long project I have to create a front and back end. Front end means that the front page of a website is where everything looks good and the back end means that behind the front page there will be all the hard coding that makes the front page of a website to be working. After completing my plan I started creating a WireFrame, which helps design how your front-end should look because you don't want to make a website that doesn't look good. In Addition you may change it later in the future. Click me for [WireFrame](https://wireframe.cc/umRyWM)

### Create
 After everything was done with planning I started the creating process by creating the folder, and having the right coding language file such as index.html, style.css and sketch.js. Having multiple different files of js can be hard, but the pro is that it can help you organize more. With everything complete I start creating my front end of the page just the picture down below. In the blog entry I have said a lot, but there weren't many challenges I faced because I was just creating the front end which made it look good, so after having my MVP for the front end I will start the back end. Which I will face a lot more harder challenge later on, but for this blog the minor challenge were remember how to connect **<ins>bootstrap, style.css element, and format</ins>**.
  
![project](https://user-images.githubusercontent.com/91745086/226497517-7b99c903-b1e2-4068-842a-0d9cb4feee4d.png)
[link to preview code folder](https://github.com/jimingz9380/sep11-freedom-project/tree/main/sep11-project)

In my firebase I started with making a chatbox by using the same format as the like button for connecting firebase. The conflict I had with this was when using the same format, when I tried to recieve the data from firebase I get the reponse with **null** or **[object, object]**. I had another problem thinking that seen it only recieve firebase data from one set of ref, it alway gonna be the one and only same text when you refresh the page, so I had to find naother way to solve this solution.

```js
 onValue(ref(db, "messages/messageinfo"), function (snapshot) {
     const messages = snapshot.val();
     const txt = document.createElement("p")
     txt.innerHTML = messages.USERNAME  + ": " +  messages.MESSAGE;
     let div = document.getElementById("all-messages")
     console.log(messages.MESSAGE, messages.USERNAME)
     div.appendChild(txt)
 });
```
### Next Step
My next step is to continuing working on the my MVP because even though I have finished a part of the MVP I didn't fully complete it. Another part I need to work on is the function of the realtime database for a real time chat box due to the last blog entry I have only learned how to really connect to firebase and some part of the function of realtime database. The chatbox function allow people to talk to each in live chat.  

### Takeaway
This blog entry have help me develop the skills of **time management and organization**. When I created the use it was very beneficial because it will help me reduce stress from working all in one go. For example, if I have never created my plan I might shove all my work in the last month before the MVP project is actually due. This would put a lot of pressure which would affect me mentally and physically. On the other hand, while planning and creating, I have to organize how I should create the website, such as making a wireframe for it.

[Previous](entry01.md) | [Next](entry03.md)

[Home](../README.md)
