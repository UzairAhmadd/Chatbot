const chatBody= document.querySelector(".chat-body");
const txtinput= document.querySelector("#txtinput");
const send= document.querySelector(".send");
const loadingEle = document.querySelector(".loading")

send.addEventListener("click", () => renderUserMessage());
 
// to display text by hitting enter
txtinput.addEventListener("keyup",(event) => {
    if(event.keyCode===13){
        renderUserMessage();
    }
});
const renderUserMessage = () =>{
    const userinput = txtinput.value;
    renderMessageEle(userinput,"user");
    txtinput.value="";
    toggleloading(false);
    setTimeout(() => {
        renderChatbotResponse(userinput);
        setScrollPosition();
        toggleloading(true);
    },1200);
};
const renderChatbotResponse=(userinput) =>{
    const res = getChabotResponse(userinput);
    renderMessageEle(res);

}
const renderMessageEle = (txt, type) => {
    let className= "user-message";
    if (type!== 'user'){
        className="chatbot-message";
    }
    const messageEle =document.createElement("div");
    const txtNode = document.createTextNode(txt);
    messageEle.classList.add(className);
    messageEle.append(txtNode);
    chatBody.append(messageEle);
};
const toggleloading=(show) =>loadingEle.classList.toggle("hide",show)



// 
const getChabotResponse = (userinput) => {
return responseObj[userinput] == undefined?"please try something else":responseObj[userinput];

};
const setScrollPosition = () => {
if (chatBody.scrollHeight >0){
    chatBody.scrollTop = chatBody.scrollHeight;
}

};

// 

// for chatbot response
const responseObj ={
    "hello" :"He,how are you doing?",
    hy: "Hy!, what's Up",
   " Are you robot":"Yes, I am a robot ",
    "today":new Date().toDateString(),
    date:new Date().toDateString(),
    time:new Date().toLocaleTimeString()

};
