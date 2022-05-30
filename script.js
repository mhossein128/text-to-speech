let input = document.querySelector('input')
let button = document.querySelector('button')
let audio = document.querySelector('audio')



button.addEventListener('click', ()=> {
	speech()
})

async function speech() {
	let response = await fetch(`https://microsoft-edge-text-to-speech.p.rapidapi.com/TTS/EdgeTTS?text=${input.value}&voice_name=en-US-AriaNeural`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "microsoft-edge-text-to-speech.p.rapidapi.com",
			"x-rapidapi-key": "42a55ba46emsh760cbe7218380c2p1c4896jsn477a7aa2763f"
		}
	})
	let data = await response.json()
	audio.src = data.downloadUrl
}