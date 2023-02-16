window.addEventListener('message', event => {
if(event.origin === "https://www.omiai-jp.com/"){
if(event.data =="request_height") {
var h = document.body.scrollHeight;
event.source.postMessage(h, event.origin);
}
} else {
// 許可していないドメインのため、何もしない
return;
}
});