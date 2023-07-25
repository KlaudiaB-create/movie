import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const YOUTUBE_API_KEY = "AIzaSyCqgXQBPpF9hfVctSO7P9tq14bnNlzeeUw";

type Props = {
    Title: string,
}

const YoutubeList = (props: Props) => {
    const { Title } = props;
    const [res, setRes] = useState<any>([]);
    const [vtag, setVtag] = useState<any>("");

    const selectVideo = (etag: string) => {
        setVtag("https://www.youtube.com/embed/" + etag);
    };

    const submit = (word: string) => {
        const url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${word}&maxResults=20&key=${YOUTUBE_API_KEY}`;
        axios
            .get(url)
            .then((response) => {
                setRes(response.data.items);  // 注意: response.data.itemsを使用してください。
            })
            .catch(() => {
                console.log("通信に失敗しました");
            });
    };

    useEffect(() => {
        submit(Title);
    }, [Title]);

    return (
        <SContainer>
            {res.map((item: any, index: any) => {
                return (
                    <SItem
                        key={index}
                        onClick={() => selectVideo(item.id.videoId)}
                    >
                        <img
                            src={item.snippet.thumbnails.high.url}
                            alt=""
                        />
                        <p>{item.snippet.title}</p>
                    </SItem>
                );
            })}
        </SContainer>
    );
}

export default YoutubeList;
const SContainer=styled.div`
    margin-top:20px;
`
const SItem=styled.div`
    margin-bottom:30px;
`
