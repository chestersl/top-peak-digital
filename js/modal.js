
    window.onload = () => {
        modalWindow = document.createElement("div");
        modalWindow.classList.add("new-modal");
        document.body.appendChild(modalWindow);

        modalWindow.insertAdjacentHTML("afterbegin", `
            <div>
                <h2>send message information</h2>
                <p>Your message has been sent!</p>
                <input type="button" value="ok">
            </div>
        `);
    
        window.$ = {
            
            open: function(){
                return document.querySelector(".new-modal").getElementsByClassName.visibility = "visible";
            },
            close: function() {
                return document.querySelector(".new-modal").getElementsByClassName.visibility = "hidden";
            }
    
        };
    
    
        // $.open("hello from vsCode");
    };