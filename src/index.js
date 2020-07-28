import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App =() =>{

return (
<div className="ui container comments">
<ApprovalCard>
<CommentDetail 
 author="Berat" 
 time="Bugün 18:00" 
 comment="Great work!"
 avatar={faker.image.avatar()}/>
</ApprovalCard>

<ApprovalCard>
 <CommentDetail 
 author="Jack" 
 time="Dün 15:32" 
 comment="Nice Job!"
 avatar={faker.image.avatar()}/>
</ApprovalCard>

<ApprovalCard>
 <CommentDetail 
 author="Sarah" 
 time="Salı 01:48" 
 comment="call me"
 avatar={faker.image.avatar()}/>
</ApprovalCard>

</div>

)

};

ReactDOM.render(<App/>,document.querySelector("#root"))