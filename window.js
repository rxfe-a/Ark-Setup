const body = document.body;
body.innerHTML = '';
body.style.backgroundColor = '#171717ff';
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';
body.style.height = '100vh';
body.style.margin = '0';
const button = document.createElement('button');
body.appendChild(button);
button.style.backgroundColor = '#6aa84fff';
button.style.color = '#fff';
button.style.fontSize = '24px';
button.style.padding = '20px 40px';
button.style.border = 'none';
button.style.borderRadius = '10px';
button.style.cursor = 'pointer';
button.textContent = 'Click to Launch';
button.addEventListener("click", function() {
  var viewFrame;
        try {
          viewFrame = window !== top
        } catch (f) {
          viewFrame = !0
        }
        if (!viewFrame && !navigator.userAgent.includes("Firefox")) {
          let c = open("about:blank", "_blank");
          if (!c || c.closed) alert("Allow popups and redirects to hide this from showing up in your history.\nThanks!\JMW");
          else {
            let b = c.document,
              d = b.createElement("iframe")
              d.src = 'https://ark-lobby.pages.dev/login.html',
              a = d.style,
              e = b.createElement("link");
            b.title = "Google Drive", e.rel = "icon", e.href = "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png", d.src = 'https://ark-lobby.pages.dev/login.html', a.position = "fixed", a.top = a.bottom = a.left = a.right = 0, a.border = a.outline = "none", a.width = a.height = "100%", b.body.appendChild(d), location.replace("https://classroom.google.com")
          }
        }
        document.addEventListener("keypress", function(d) {
          if ("Enter" === d.key) {
            let e = document.getElementById("exploit").value,
              f = window.open("about:blank", "_blank"),
              b = f.document,
              c = b.createElement("iframe")
              c.src = 'https://ark-lobby-pages.dev/login.html'
              a = c.style;
            b.createElement("link"), b.title = "_blank", c.src = e, a.position = "fixed", a.border = a.outline = "none", a.top = a.bottom = a.left = a.right = 0, a.width = a.height = "100%", b.body.appendChild(c)
          }
        })
        console.log("Launched in about:blank");
})