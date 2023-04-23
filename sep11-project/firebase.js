        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
        import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

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
            const txt = document.createElement("p")
            txt.innerHTML = messages.USERNAME  + ": " +  messages.MESSAGE;
            let div = document.getElementById("all-messages")
            console.log(messages.MESSAGE, messages.USERNAME)
            div.appendChild(txt)
        });