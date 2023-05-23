        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
        import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

       
        const firebaseConfig = {
            apiKey: "AIzaSyApfS1-JmaNAvzd5tG6KFPqKctCz0P22wU",
            authDomain: "realtimedatav2.firebaseapp.com",
            databaseURL: "https://realtimedatav2-default-rtdb.firebaseio.com",
            projectId: "realtimedatav2",
            storageBucket: "realtimedatav2.appspot.com",
            messagingSenderId: "531730238603",
            appId: "1:531730238603:web:47671a6b0c3bda28c1d88e",
            measurementId: "G-F5450TTLQS"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const db = getDatabase(app);

        // const allMessages = document.querySelector("#all-messages");
        const usernameElem = document.querySelector("#username");
        const messageElem = document.querySelector("#message");
        const sendBtn = document.querySelector("#send-btn");
        sendBtn.onclick = updateDB;


        function updateDB(event){

            event.preventDefault();
            const timestamp = Date.now();

            let data = {
                USERNAME: usernameElem.value,
                MESSAGE: messageElem.value
            }

            console.log(data, timestamp);
            messageElem.value = "";

            //auto scroll to bottom
            document
            .getElementById("all-messages")
            .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

            // create db collection and send in the data
            set(ref(db, "messages/"), {
                messageinfo: data,
            });

        }

        onValue(ref(db, "messages/messageinfo"), function (snapshot) {
            const messages = snapshot.val();
            console.log(messages)

            for (const [key, value] of Object.entries(messages)) {
                // console.log(`${key}: ${value}`);
                console.log(value.messageinfo)
            }


            const txt = document.createElement("p")
            txt.innerHTML = messages.USERNAME  + ": " +  messages.MESSAGE;
            let div = document.getElementById("all-messages")
            // console.log(messages.MESSAGE, messages.USERNAME)
            div.appendChild(txt)
        });