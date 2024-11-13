import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api', 
    params:{
        key:'bb91501200f94112b47e33903ffeb22a'
    }
})
