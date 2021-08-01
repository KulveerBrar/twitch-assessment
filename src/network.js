import axios from 'axios'

const apiClientId = process.env.REACT_APP_TWITCH_API_CLIENT_ID
const apiAccessToken = process.env.REACT_APP_TWITCH_API_ACCESS_TOKEN

export async function getChannel(name) {
  try {
    const result = await axios.get(`https://api.twitch.tv/helix/search/channels?query=${name}`,
    {
        headers: {
            'client-id': apiClientId,
            'Authorization': apiAccessToken
        }
      })
    console.log(result.data)
    return result.data.data
  } catch (error) {
    console.log(error)
    alert(error.message)
  }
}