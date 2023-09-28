import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import WordInfo from "./WordInfo"

test('should play audio element', async () => {
    const data = [
        {
            word: "hello",
            phonetics: [{ text: "həˈloʊ", audio: "https://api.dictionaryapi.dev/media/pronunciations/en/hello-au.mp3" }],
            meanings: []
        }
    ]

    render(<WordInfo data={data} />)

    const audioElement = screen.getByRole('audio')
    userEvent.click(audioElement)
});
