        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
        import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";


        const firebaseConfig = {
            apiKey: "AIzaSyByrZHtWHyaMUAxSHt5IUq897zXHPWdVys",
            authDomain: "fir-realtime-trial2.firebaseapp.com",
            databaseURL: "https://fir-realtime-trial2-default-rtdb.firebaseio.com",
            projectId: "fir-realtime-trial2",
            storageBucket: "fir-realtime-trial2.appspot.com",
            messagingSenderId: "766643859179",
            appId: "1:766643859179:web:0435595dd4b47308e3d8ae",
            measurementId: "G-V76PKJ5X2V"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const db = getDatabase(app);


        // custom code

        const numLikesDOM = document.querySelector('#numLikes');
        onValue(ref(db, "/likes/numLikes"), (snapshot) => {
            let data = snapshot.val();
            numLikesDOM.innerHTML = data
        });

        document.querySelector('button').addEventListener('click',function(){
            // const numberLikes = parseInt(numLikes[i].innerHTML) + 1

            const numberLikes = parseInt(numLikesDOM.innerHTML) + 1;
            set(ref(db, "likes"), {
                numLikes: numberLikes,
            });

        });

        const allMessages = document.querySelector("#all-messages");
        const usernameElem = document.querySelector("#username");
        const messageElem = document.querySelector("#message");
        const sendBtn = document.querySelector("#send-btn");

        function updateDB(event){
            //prevent default behavior fo form refreshing
            // create an object to store values of input element

            let data = {
                USERNAME: usernameElem.value,
                MESSAGE: messageElem.value

           }

           //print for good measure
           console.log(data);

           //write to the database
           dataBase.push(data);

           messageElem.value = "";
        }

        updateDB()
        dataBase.on("child_added", addMessageToBoard);

        function addMessageToBoard(rowData){
            //print the data snapshot recieved
            console.log(rowData);

            // get the actual data as a JSON object
            let data = rowData.val();

            //print the JSON data
            console.log("RECIEVED FROM DATABASE", data);

            //make a single message element
            let singleMessage = makeSingleMessageHTML(data.USERNAME, data.MESSAGE)

            //append this to #all-message;
            allMessages.append(singleMessage);

        }
        addMessageToBoard()
        function makeSingleMessageHTML(usernameTxt, messageTxt){
            //create a parent div
            let parentDiv = document.createElement("div");
            // add .single-messgae class
            parentDiv.setAttribute("class", "single-message");

            //create a p tag
            let usernameP = document.createElement("p");
            // add .single-messgae-username class
            usernameP.classList.add("single-message-username");

            //upadte innerHTML of this p
            usernameP.innerHTML = usernameTxt + ":";
            //append p tag to parentDiv
            parentDiv.append(usernameP);

            //create a p tag
            let messageP = document.createElement("p");
            //upate the innerHTHML to the appropriate data;
            messageP.innerHTML = messageTxt;
            //append this messgae to the parentDiv
            parentDiv.append(messageP);

            return parentDiv;
        }

        makeSingleMessageHTML()