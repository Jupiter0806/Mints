export default function User() {
    this.userid = ''
    this.name = ''
    this.provider = ''
    this.password = ''
    this.deviceID = ''
    this.deviceType = ''
    this.avator = ''

    this.loginSessionID = ''
    this.accessToken = ''
    this.needVerification = false

    this.friendRequests = []
    this.contacts = []

    // stored in localDB
    // when will be changed
    //  1. has signed up and NeedVerification from server is false, => true
    //  2. has verified, => true
    //  3. sign out, => false
    this.hasLoggedIn = false

    this.parseServerResponse = response => {
        this.loginSessionID = response.LoginSessionID
        this.userid = response.UserID
        this.name = response.Name
        this.accessToken = response.AccessToken
        this.needVerification = response.NeedVerification
        this.avator = response.Avator
        return this
    }

    this.parseLocalData = localData => {
        Object.assign(this, localData)
        return this
    }

    this.verified = () => {
        this.needVerification = false
        this.hasLoggedIn = true
        return this
    }

    this.loggedIn = () => {
        this.hasLoggedIn = true
        return this
    }

    this.setFriendRequests = friendRequests => {
        this.friendRequests = friendRequests
        return this
    }

    this.setContacts = contacts => {
        this.contacts = contacts
        return this
    }

    this.toString = () => {
        let obj = Object.assign({}, this)
        Object.keys(obj).forEach(key => {
            if (typeof obj[key] === 'function') {
                delete obj[key]
            }
        })
        return JSON.stringify(obj)
    }
}