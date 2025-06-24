import React, { useContext, useState } from 'react';
import withAuth from '../utils/withAuth';
import { Link, useNavigate } from 'react-router-dom';
import "../App.css";
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {
    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");
    const { addToUserHistory } = useContext(AuthContext);

    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode);
        navigate(`/${meetingCode}`);
    };

    return (
        <>
            <div className="navBar">
                <div style={{ display: "flex", alignItems: "center"}}>
                    <Link style={{textDecoration:'none', color:"white", fontSize:'1.3rem'}} to="/"><h2>VideoTalk</h2></Link>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <IconButton onClick={() => navigate("/history")}>
                        <RestoreIcon style={{ color: "white" }} />
                    </IconButton>
                    <Link to="/history" style={{textDecoration:'none', color:'white'}}>History</Link>
                    <Button
                        onClick={() => {
                            localStorage.removeItem("token");
                            navigate("/auth");
                        }}
                        variant="outlined"
                        style={{ color: "white", borderColor: "white",textTransform: "none" }}
                    >
                        Logout
                    </Button>
                </div>
            </div>

            <div className="meetContainer">
                <div className="leftPanel">
                    <h2>Providing Quality Video Call Just Like Quality Education</h2>
                    <div style={{ display: 'flex', gap: "10px", flexWrap: 'wrap', justifyContent: 'center' }}>
                        <TextField
                            onChange={e => setMeetingCode(e.target.value)}
                            id="outlined-basic"
                            label="Meeting Code"
                            variant="outlined"
                            sx={{ flex: "1 1 200px", minWidth: "200px" }}
                        />
                        <Button onClick={handleJoinVideoCall} variant='contained'>Join</Button>
                    </div>
                </div>
                <div className='rightPanel'>
                    <img srcSet='/logo3.png' alt="Video Call Banner" />
                </div>
            </div>
        </>
    );
}

export default withAuth(HomeComponent);
