import Post from "./post"
import "./styles/styles.css"
import "./babel"
import json from "./assets/json"
import WebpackImgLogo from "./assets/webpack-logo.png"
import xml from "./assets/data.xml"
import csv from "./assets/data.csv"

console.log(WebpackImgLogo)
const post = new Post("webpack", "AWDAWD")
console.log(post.toString())
console.log("JSON" ,json)
console.log("XML", xml)
console.log("CSV", csv)    
