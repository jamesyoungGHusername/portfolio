import { Link } from "react-router-dom";
import { CommitDetail } from "./CommitDetail";

export const Push=({item})=>{
    return(
        <div className="eventCard">
            <p>{item.type.split("Event")[0]}: <a href={`https://github.com/${item.repo.name}`}>{item.repo.name}</a></p>
            
            {item.payload.commits?item.payload.commits.map((commit,index)=>{
                return <CommitDetail key={index}  commit={commit}></CommitDetail>
            }):null}
        </div>
    )
  }