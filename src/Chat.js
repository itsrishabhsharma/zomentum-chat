import React, { useState, useEffect } from 'react'
import { Avatar, IconButton } from "@material-ui/core";
import "./Chat.css"
import { AttachFile, SearchOutlined, MoreVert } from '@material-ui/icons';

function Chat() {

    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    return (
        <div className="chat">

            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />


                <div className="chat__headerInfo">
                    <h3>
                        Room name</h3>
                        <p> Last Seen at ...</p>                </div>
                        
                        <div className="chat__headerRight">

                            <IconButton>
                                <SearchOutlined />
                                </IconButton>

                                <IconButton>
                                    <AttachFile />
                                </IconButton>
                                <IconButton>
                                    <MoreVert />
                                    </IconButton>
                        </div>
                        
                        
                        
                        
                        </div>
                <div className="chat__body">

<p className="chat__message">Hey man!</p>

                </div>


                <div className="chat__footer">

                </div>

            </div>
    )
}

export default Chat