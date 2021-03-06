import axios from "axios"

//---------------------------- To get client id and access token fron .env file----------------------------------//
const apiClientId = process.env.REACT_APP_TWITCH_API_CLIENT_ID
const apiAccessToken = process.env.REACT_APP_TWITCH_API_ACCESS_TOKEN

// ------------------------------------- API call to serach channels --------------------------------------------//
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
        alert(error.message)
    }
}

//---------------------------- API call to get profile image, name and description ------------------------------//
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
        alert(error.message)
    }
}

//-------------------------------------- API call to get Channel's Videos ---------------------------------------//
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
        alert(error.message)
    }
}

//--------------------------------------- API call to get total followers ---------------------------------------//
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
        alert(error.message)
    }
}

