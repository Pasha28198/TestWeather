const initState = [
    {
        name: 'Kiev'
    },
    {
        name: 'Paris'
    },
    {
        name: 'Lviv'
    },
    {
        name: 'Malaga'
    },
    {
        name: 'London'
    }
]

export default function (state = initState, { type, payload }) {
    switch (type) {
        default: {
            return state
        }
    }
}