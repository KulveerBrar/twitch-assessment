import axios from "axios"

const apiClientId = process.env.REACT_APP_TWITCH_API_CLIENT_ID
const apiAccessToken = process.env.REACT_APP_TWITCH_API_ACCESS_TOKEN

export async function getChannel(name) {
    try {
        const result = await axios.get(`https://api.twitch.tv/helix/search/channels?query=${name}`,
            {
                headers: {
                    "client-id": apiClientId,
                    "Authorization": apiAccessToken
                }
            })
        return result.data.data
    } catch (error) {
        console.log(error)
        alert(error.message)
    }
}

export async function getChannelInfo(id) {
    try {
        const result = await axios.get(`https://api.twitch.tv/helix/users?id=${id}`,
            {
                headers: {
                    "client-id": apiClientId,
                    "Authorization": apiAccessToken
                }
            })
        return result.data.data
    } catch (error) {
        console.log(error)
        alert(error.message)
    }
}

export async function getChannelVideos(id) {
    try {
        const result = await axios.get(`https://api.twitch.tv/helix/videos?user_id=${id}`,
            {
                headers: {
                    "client-id": apiClientId,
                    "Authorization": apiAccessToken
                }
            })
        return result.data.data
    } catch (error) {
        console.log(error)
        alert(error.message)
    }
}

export async function getFollowers(id) {
    try {
        const result = await axios.get(`https://api.twitch.tv/helix/users/follows?to_id=${id}`,
            {
                headers: {
                    "client-id": apiClientId,
                    "Authorization": apiAccessToken
                }
            })
        return result.data
    } catch (error) {
        console.log(error)
        alert(error.message)
    }
}

