import "./CommitDetail.css";
export const CommitDetail=({commit})=>{
    if(commit.author.name=="jamesyoungGHusername"){
        return(
            <a className="commitCard" href={`https://www.github.com/${commit.url.split(".com/repos/")[1]}`}>
                <div className="eventCard">
                    <p>Message: {commit.message}</p>
                </div>
            </a>
        )
    }else{
        return <p></p>
    }
    
  }