let dataList = [
    { id: 1, name: 'Shishir', number: '01710000000', email: 'shishir0019@gmail.com', isAdmin: true },
    { id: 2, name: 'Shahed', number: '01710000000', email: 'shishir0019@gmail.com' },
    { id: 3, name: 'Faysal', number: '01710000000', email: 'shishir0019@gmail.com' },
]

export const GET_STUFF = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(dataList.filter(item => !item.isAdmin))
        }, 1000)
    })
}

export const CREATE_STUFF = (payloads) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            dataList.push({ id: dataList.length + Date.now(), ...payloads })
            return resolve({ message: 'Stuff created successfully.' })
        }, 1000)
    })
}

export const UPDATE_STUFF = (payloads) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let index = dataList.findIndex(stuff => stuff.id === payloads.id)
            dataList[index] = { ...dataList[index], ...payloads }
            return resolve({ message: 'Stuff update successfully.' })
        }, 1000)
    })
}

export const DELETE_STUFF = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            dataList = dataList.filter(stuff => stuff.id !== id)
            return resolve({ message: 'Stuff Delete successfully.' })
        })
    })
}


export const GET_ADMIN = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(dataList.filter(item => item.isAdmin))
        }, 1000)
    })
}