        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
        import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";


        const firebaseConfig = {
            apiKey: "AIzaSyAmKEFgm7mc0L4LRTU_slN4r2gprjnSQ18",
            authDomain: "fir-learning-54799.firebaseapp.com",
            databaseURL: "https://practice-firebase-ccc3e-default-rtdb.firebaseio.com/",
            projectId: "fir-learning-54799",
            storageBucket: "fir-learning-54799.appspot.com",
            messagingSenderId: "884794095306",
            appId: "1:884794095306:web:742b322afb1e3228d7a633"
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

