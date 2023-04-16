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

        function sendMessage(e) {
            e.preventDefault();

            // get values to be submitted
            const timestamp = Date.now();
            const messageInput = document.getElementById("message-input");
            const message = messageInput.value;

            // clear the input box
            messageInput.value = "";

            //auto scroll to bottom
            document
              .getElementById("messages")
              .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

            // create db collection and send in the data
            db.ref("messages/" + timestamp).set({
              username,
              message,
            });
        }

