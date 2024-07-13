import React from "react"
import { useState } from "react"

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "When you have to do 5 projects but you did only 3",
        bottomText: "ME ",
        randomImage: "https://i.imgflip.com/3po4m7.jpg"
        // topText: "Mummy ne bola, Aag laga de",
        // bottomText: "mene Ghr ko laga di...",
        // randomImage: "https://i.imgflip.com/23ls.jpg"
    })
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
            async function getMemes() {
                const res = await fetch("https://api.imgflip.com/get_memes")
                const data = await res.json()
                setAllMemes(data.data.memes)
            }
            getMemes()
        // fetch("https://api.imgflip.com/get_memes").then(res => res.json()).then(obj => setAllMemes(obj.data.memes)).catch
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url,
            // bottomText : "abcd"p
        }))
    }   

    function handleChange(event) {
        console.log(event.target.value)
        const { name, value } = event.target
        console.log(name)
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
        console.log(event.target)
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}