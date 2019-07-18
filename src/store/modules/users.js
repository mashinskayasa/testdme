export default {
    actions: {
        async fetchUsers(ctx, results = '15') {
            const result = await fetch('https://randomuser.me/api/?results=' + results)
            const users = await result.json()
            ctx.commit('updateUsers', users)
        }
    },
    mutations: {
        updateUsers(state, users) {
            state.users = users.results
        },
        filterUsersByLastName(state, query) {
            const users = state.users

            state.users = users.filter(user => user.name.last.indexOf(query) !== -1)
        },
        filterUsersByDob(state, query) {
            const users = state.users

            state.users = users.filter(user => user.dob.date.indexOf(query) !== -1)
        },
        sortUsersByLastName(state) {
            const users = state.users

            users.sort((a, b) => {
                let compare = 0
                if (a.name.last > b.name.last) {
                    compare = 1
                } else if (b.name.last > a.name.last) {
                    compare = -1
                }
                return compare
            })
            state.users = users
        },
        sortUsersByDob(state) {
            const users = state.users

            users.sort((a, b) => {
                let compare = 0
                if (a.dob.date > b.dob.date) {
                    compare = 1
                } else if (b.dob.date > a.dob.date) {
                    compare = -1
                }
                return compare
            })
            state.users = users
        }
    },
    state: {
        users: [],
        nameSearch: '',
        dobSearch: '',
        sortBy: 'last',
        sortAsc: true
    },
    getters: {
        getUsers(state) {
            return state.users
        },
        getUserById: state => id => {
            return state.users.find(user => user.login.uuid === id)
        }
    }
}
