
const link = document.getElementById("fb")

const fbURL = "https://www.facebook.com";
if (link.href === fbURL) {
    console.log("Link leads to FB")
}
else {
    link.href = fbURL
    link.setAttribute("target", "_blank")
    console.log("Link to FB...");
}