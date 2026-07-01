

import { useEffect } from "react"
import { API } from "../../api/API"

export default function AxiosPage() {


    useEffect(() => {
        API.get(`ads/`)
        .then(res => {
            console.log(res.data);
        })    
        
        
        fetch(`https://front-lalafo-students.prolabagency.com/api/v1/ads/`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    })



  return (
    <div>AxiosPage</div>
  )
}
