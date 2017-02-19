var webview = document.getElementById('mainWebview');

var checkUnreadCountTimer = setInterval(function() {
    webview.send("retrieveUnreadCount");
}, 1000);

webview.addEventListener('ipc-message', function(event) {
    switch (event.channel) {
        case "retrieveUnreadCount":
            var unreadCount = event.args[0];
            document.getElementById("unread-count").innerText = unreadCount;
            break;
    }
});

webview.executeJavaScript(
    (function() {
        alert("hogehoge");
    }).toString().replace(/function\s*\(\)\{/, "").　replace(/}$/, "").trim()
);