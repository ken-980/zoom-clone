import {  Grid2, Typography  } from "@mui/material";
// import { FloatingParticipantView } from './FloatingParticipant';
import {StreamVideoClient, StreamVideo, User, StreamCall, useCall, useCallStateHooks, CallingState} from "@stream-io/video-react-sdk"
import "../../styles/styles.css"

const apiKey = import.meta.env.API_KEY;


// type People = {
//   id : number,
//   name : string,
//   profession : string
// }


// const people : People[] = [{
//   id: 0,
//   name: 'Creola Katherine Johnson',
//   profession: 'mathematician',
// }, {
//   id: 1,
//   name: 'Mario José Molina-Pasquel Henríquez',
//   profession: 'chemist',
// }, {
//   id: 2,
//   name: 'Mohammad Abdus Salam',
//   profession: 'physicist',
// }, {
//   id: 3,
//   name: 'Percy Lavon Julian',
//   profession: 'chemist',  
// }, {
//   id: 4,
//   name: 'Subrahmanyan Chandrasekhar',
//   profession: 'astrophysicist',
// }];


//set user object
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL1NobWlfU2t5d2Fsa2VyIiwidXNlcl9pZCI6IlNobWlfU2t5d2Fsa2VyIiwidmFsaWRpdHlfaW5fc2Vjb25kcyI6NjA0ODAwLCJpYXQiOjE3MzczMDI1MzQsImV4cCI6MTczNzkwNzMzNH0.MZdxOVhGSsZ6T0JmUqPr8c2mqCx4m5YjEYl2IlGXtpY";
const userId = "test_Id";
const callId = "NNe0vzmBfzkZ"

const user : User = {
  id : userId,
  name : "Kendrice",
  image : "https://getstream.io/random_svg/?id=oliver&name=Oliver"
}

const client = new StreamVideoClient ({apiKey,user, token });

const call = client.call('default', callId);
call.join({create : true})





export default function VideoApp() {
  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <Video />
      </StreamCall>
    </StreamVideo>
  );
}


export const Video = () => {

    const call = useCall();
    const { useCallCallingState, useParticipantCount } = useCallStateHooks();
    const callingState = useCallCallingState();
    const participantCount = useParticipantCount();

    if(callingState != CallingState.JOINED){
      return  <Grid2
      sx={{
        height: `80%`,
        width: "100%",
        backgroundColor: "#ffff",
        borderRadius: "10px",
        position: "relative",
      }}
    > 
      <Typography> Loading </Typography>

      {/* <Box sx={{
          height : "100%",
          width : "20%",
          position : "absolute", 
          right : "0",
          zIndex : "1", 
          top :"0"
      }}> 
      <ul>
        {p}
      </ul>
    </Box> */}

    </Grid2>
    }

  // const p = people.map(person => 

  //   <li className="list-style" key={person.id} >
  //       <FloatingParticipantView  name={person.name} profession={person.profession} />
  //   </li>
  // )

  return (
    <>
      <Grid2
        sx={{
          height: `80%`,
          width: "100%",
          backgroundColor: "#ffff",
          borderRadius: "10px",
          position: "relative",
        }}
      > 
        <Typography>       Call "{call?.id}" has {participantCount} participants
        </Typography>

        {/* <Box sx={{
            height : "100%",
            width : "20%",
            position : "absolute", 
            right : "0",
            zIndex : "1", 
            top :"0"
			  }}> 
        <ul>
				  {p}
			  </ul>
      </Box> */}

      </Grid2>
    </>
  );
};


