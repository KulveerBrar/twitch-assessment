import axios from 'axios'

const apiClientId = process.env.REACT_APP_TWITCH_API_CLIENT_ID
const apiAccessToken = process.env.REACT_APP_TWITCH_API_ACCESS_TOKEN

export async function getChannel() {
  try {
    const result = await axios.get(`https://api.twitch.tv/helix/search/channels?query=a_seagull`,
    {
        headers: {
            'client-id': apiClientId,
            'Authorization': apiAccessToken
        }
      })
    console.log(result.data)
    return result.data
  } catch (error) {
    console.log(error)
    alert(error.message)
  }
}